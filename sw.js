/* ============================================================
   sw.js —— 「聚合英语」的离线缓存（2026-10-20 用户第 2 项）
   ------------------------------------------------------------
   策略：**网络优先、失败回缓存**（network-first）。
     · 在线时永远先问网络，所以 vocal.js?v=4 这种带版本号的新词库**永远不会被旧缓存挡住**；
     · 断网时才退回缓存；导航请求（地址栏打开 / 刷新）回退到缓存的 index.html；
     · 预缓存逐个 cache.add(...).catch()，某一个文件 404 或断网只丢它自己，
       **不会让整个 install 失败**（否则离线能力一块都装不上）；
     · install 里 skipWaiting()，activate 里清掉旧版本缓存 + clients.claim()。
   缓存名带版本号：juhe-v1。改了要上线的文件就把版本 +1，
   index.html 里的 SW_CACHE_NAME 也必须跟着一起改（两处不一致会在设置页显示错版本）。
   ------------------------------------------------------------
   ⚠ 关于 ?v=4：预缓存里存的是不带参数的 vocal.js，而页面请求的是 vocal.js?v=4。
     在线时没差别（网络优先，永远拿新的）。断网时 cache.match(req) 会因为查询串不同而
     落空，所以网络失败之后还会再按 ignoreSearch 找一次 —— 位置在**网络失败之后**，
     不构成缓存优先：在线时一次都不会走到那里。
   ============================================================ */
var CACHE_NAME = 'juhe-v1';

/* 预缓存清单：index.html 本身 + 它一定会去要的那几个文件。 */
var PRECACHE = [
  './',
  'index.html',
  'vocal.js',
  'bank_ext_daily.js',
  'bank_ext_cs.js',
  'bank_ext_paper.js',
  'bank_ext_terms.js',
  'bank_ext_campus.js',
  'manifest.webmanifest',
  /* 图标是可选的：装不上只是「添加到桌面」时少一张图，不影响离线打开 */
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'favicon-32.png'
];

/* 导航请求的回退页（用绝对地址，免得 cache.match 的相对解析出岔子） */
var SCOPE = self.registration ? self.registration.scope : self.location.href.replace(/[^/]*$/, '');
var INDEX_URL = new URL('index.html', SCOPE).href;

self.addEventListener('install', function(e){
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      /* 逐个 add 且各自 catch：任何一个失败都只丢它自己，绝不连坐整个 install */
      return Promise.all(PRECACHE.map(function(url){
        return cache.add(new Request(url, { cache: 'reload' })).catch(function(){ return null; });
      }));
    }).then(function(){
      return self.skipWaiting();
    })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(keys){
      return Promise.all(keys.map(function(k){
        if (k !== CACHE_NAME) return caches.delete(k);
        return null;
      }));
    }).then(function(){
      return self.clients.claim();
    })
  );
});

self.addEventListener('fetch', function(e){
  var req = e.request;
  /* 只接 GET；POST 之类一律放行 */
  if (!req || req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch (err) { return; }
  /* 只接管自己站内的东西：别的域（CDN 上的 OCR wasm 等）一律放行 */
  if (url.origin !== self.location.origin) return;

  e.respondWith(
    /* ① 网络优先：拿得到就用网络的，顺手更新缓存 */
    fetch(req).then(function(res){
      if (res && res.status === 200 && res.type !== 'opaque') {
        try {
          var copy = res.clone();
          /* 带版本参数的请求（vocal.js?v=4）不按参数存：缓存键去掉查询串。
             这样缓存里永远只有**一份** vocal.js，而且就是最新拿到的这一份，
             断网时下面那次 ignoreSearch 一定能命中它。 */
          var putKey = req;
          if (url.search) {
            try { putKey = new Request(url.origin + url.pathname, { method: 'GET' }); }
            catch (err) { putKey = req; }
          }
          caches.open(CACHE_NAME).then(function(cache){
            return cache.put(putKey, copy);
          }).catch(function(){});
        } catch (err) {}
      }
      return res;
    }).catch(function(){
      /* ② 网络失败才回缓存 */
      return caches.match(req).then(function(hit){
        if (hit) return hit;
        /* vocal.js?v=4 这类带版本参数的请求：缓存里只存了不带参数的那一份。
           忽略查询串再找一次 —— 只在网络已经失败之后才这么找。 */
        return caches.match(req, { ignoreSearch: true }).then(function(hit2){
          if (hit2) return hit2;
          if (req.mode === 'navigate') {
            return caches.match(INDEX_URL).then(function(page){
              if (page) return page;
              return new Response('离线，而且这一页还没被缓存过。请联网打开一次再来。', {
                status: 503,
                headers: { 'Content-Type': 'text/plain; charset=utf-8' }
              });
            });
          }
          return new Response('离线，而且这个文件还没被缓存过。', {
            status: 504,
            headers: { 'Content-Type': 'text/plain; charset=utf-8' }
          });
        });
      });
    })
  );
});

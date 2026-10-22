/* 加入群聊弹窗（首次访问弹一次）
 * 群名：HAUT Vibe Coding Group.
 * 群号：1131347924     链接：https://qm.qq.com/q/4OQImGYN9K
 *
 * 设计上的几条硬约定：
 *  - 二维码是本地图片（assets/qq-group.png），不联网也必须能看；
 *  - 只弹一次（localStorage），但随时能通过 window.openGroupInvite() 再打开；
 *  - 深色/浅色都跟系统走，不写死颜色；
 *  - 群号点一下复制，复制不了就选中文本让用户自己按 Ctrl+C（兜底）。
 */
(function () {
  'use strict';

  var GROUP_NAME = 'HAUT Vibe Coding Group.';
  var GROUP_NUMBER = '1131347924';
  var JOIN_URL = 'https://qm.qq.com/q/4OQImGYN9K';
  var SEEN_KEY = 'haut_group_invite_seen_v1';

  function seen() {
    try { return localStorage.getItem(SEEN_KEY) === '1'; } catch (e) { return false; }
  }

  function markSeen() {
    try { localStorage.setItem(SEEN_KEY, '1'); } catch (e) { /* 隐私模式下写不进去，下次再弹 */ }
  }

  function injectStyle() {
    if (document.getElementById('gi-style')) return;
    var css = ''
      + '#gi-mask{position:fixed;inset:0;background:rgba(0,0,0,.55);backdrop-filter:blur(3px);'
      + 'display:flex;align-items:center;justify-content:center;z-index:99999;padding:16px;}'
      + '#gi-card{width:min(92vw,392px);max-height:92vh;overflow:auto;border-radius:16px;'
      + 'background:#fff;color:#16181d;box-shadow:0 18px 60px rgba(0,0,0,.35);padding:22px;'
      + 'font-family:"Microsoft YaHei UI","PingFang SC",system-ui,sans-serif;}'
      + '#gi-card h3{margin:0 0 4px;font-size:20px;font-weight:700;}'
      + '#gi-card .gi-name{font-size:15px;font-weight:600;margin:0 0 4px;}'
      + '#gi-card .gi-tip{font-size:12.5px;color:#5b6270;margin:0;line-height:1.5;}'
      + '#gi-qr{margin:16px auto 8px;background:#fff;border-radius:12px;padding:10px;width:268px;'
      + 'box-shadow:0 2px 10px rgba(0,0,0,.08);}'
      + '#gi-qr img{display:block;width:248px;height:248px;image-rendering:pixelated;}'
      + '#gi-card .gi-center{text-align:center;font-size:12px;color:#5b6270;}'
      + '#gi-num{display:flex;align-items:center;justify-content:space-between;gap:10px;'
      + 'border:1px solid #e3e6ec;border-radius:10px;padding:10px 12px;margin-top:14px;}'
      + '#gi-num .gi-label{font-size:11.5px;color:#5b6270;}'
      + '#gi-num .gi-value{font-size:18px;font-weight:700;letter-spacing:.5px;}'
      + '#gi-copy{border:1px solid #d6dbe4;background:#f6f8fb;border-radius:8px;padding:6px 12px;'
      + 'font-size:13px;cursor:pointer;color:#16181d;}'
      + '#gi-copy:active{transform:scale(.97);}'
      + '#gi-join{display:block;width:100%;margin-top:12px;border:0;border-radius:10px;padding:11px;'
      + 'font-size:14px;font-weight:600;color:#fff;background:#3f7df6;cursor:pointer;}'
      + '#gi-join:hover{background:#356fe0;}'
      + '#gi-dont{margin-top:12px;font-size:12.5px;color:#5b6270;display:flex;gap:6px;align-items:center;}'
      + '#gi-close{display:block;width:100%;margin-top:10px;border:1px solid #e3e6ec;background:#fff;'
      + 'border-radius:10px;padding:9px;font-size:13px;cursor:pointer;color:#16181d;}'
      + '#gi-x{position:absolute;top:10px;right:12px;border:0;background:transparent;font-size:18px;'
      + 'cursor:pointer;color:#8b93a1;line-height:1;}'
      + '@media (prefers-color-scheme: dark){'
      + '#gi-card{background:#1d2026;color:#eef1f6;}'
      + '#gi-card .gi-tip,#gi-card .gi-center,#gi-num .gi-label,#gi-dont{color:#9aa2b1;}'
      + '#gi-num{border-color:#2c313a;}'
      + '#gi-copy{background:#262b33;border-color:#333a45;color:#eef1f6;}'
      + '#gi-close{background:#1d2026;border-color:#2c313a;color:#eef1f6;}'
      + '#gi-x{color:#8b93a1;}}';
    var style = document.createElement('style');
    style.id = 'gi-style';
    style.textContent = css;
    document.head.appendChild(style);
  }

  function build() {
    var mask = document.createElement('div');
    mask.id = 'gi-mask';
    mask.setAttribute('role', 'dialog');
    mask.setAttribute('aria-modal', 'true');
    mask.setAttribute('aria-label', '加入群聊');

    var card = document.createElement('div');
    card.id = 'gi-card';
    card.style.position = 'relative';

    card.innerHTML =
      '<button id="gi-x" aria-label="关闭">✕</button>' +
      '<h3>加入群聊</h3>' +
      '<p class="gi-name">' + GROUP_NAME + '</p>' +
      '<p class="gi-tip">用着别扭、想要新功能，进群直接说。更新也会先在群里发。</p>' +
      '<div id="gi-qr"><img alt="群二维码" src="assets/qq-group.png"></div>' +
      '<p class="gi-center">手机扫码加入</p>' +
      '<div id="gi-num"><div><div class="gi-label">群号</div>' +
      '<div class="gi-value" id="gi-num-text">' + GROUP_NUMBER + '</div></div>' +
      '<button id="gi-copy">复制群号</button></div>' +
      '<button id="gi-join">点击链接加入群聊</button>' +
      '<label id="gi-dont"><input type="checkbox" id="gi-dont-box"> 以后打开不再自动弹出</label>' +
      '<button id="gi-close">关闭</button>';

    mask.appendChild(card);
    return mask;
  }

  function open(force) {
    if (!force && seen()) return;
    injectStyle();
    if (document.getElementById('gi-mask')) return;

    var mask = build();
    document.body.appendChild(mask);

    function close() {
      markSeen();
      mask.remove();
      document.removeEventListener('keydown', onKey);
    }

    function onKey(e) { if (e.key === 'Escape') close(); }

    document.addEventListener('keydown', onKey);
    mask.querySelector('#gi-x').onclick = close;
    mask.querySelector('#gi-close').onclick = close;
    mask.addEventListener('click', function (e) { if (e.target === mask) close(); });

    mask.querySelector('#gi-copy').onclick = function () {
      var btn = mask.querySelector('#gi-copy');
      var done = function () { btn.textContent = '已复制'; setTimeout(function () { btn.textContent = '复制群号'; }, 1600); };
      try {
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(GROUP_NUMBER).then(done, fallback);
        } else { fallback(); }
      } catch (e) { fallback(); }

      // 兜底：选中群号，让用户自己 Ctrl+C（http 页面或老浏览器没有 clipboard API）
      function fallback() {
        try {
          var range = document.createRange();
          range.selectNodeContents(mask.querySelector('#gi-num-text'));
          var sel = window.getSelection();
          sel.removeAllRanges();
          sel.addRange(range);
          done();
        } catch (e2) { /* 实在不行就什么都不做，群号是明文可见的 */ }
      }
    };

    mask.querySelector('#gi-join').onclick = function () {
      window.open(JOIN_URL, '_blank', 'noopener');
    };
  }

  window.openGroupInvite = function () { open(true); };
  window.resetGroupInvite = function () {
    try { localStorage.removeItem(SEEN_KEY); } catch (e) { }
  };

  function boot() {
    // 等页面把自己的首屏渲染完再弹，避免一进页面就被遮罩挡住
    setTimeout(function () { open(false); }, 900);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }
})();
/* ============================================================
   bank_ext_campus.js · 拓展词库：校园与考试（EXT_LIBS['campus']）
   ------------------------------------------------------------
   放在 index.html 同一目录，按需 <script src="bank_ext_campus.js"></script>。
   本文件只声明挂载点 window.EXT_LIBS['campus']，不碰 window.BANK。

   词条格式（与 vocal.js 的 window.BANK 逐字同形，接线时零转换）：
     [单词, 音标, 释义, [[英文例句, 中文翻译, 出处标签]]]

   口径（全部文件一致）：
   · 只收真实在用的英文词与固定短语；短语不给音标，写 ""。
   · 音标统一英式（Oxford 风格：非儿化，词尾 r 写 (r)），不混美式。
   · 释义以词性缩写开头（n. / vt. / vi. / v. / adj. / adv. / prep. /
     conj. / int. / pron. / num.），多义用「；」分隔，最多 3 个义项。
   · 每个词条恰好 1 条例句，英文与中文都按真实场景写，不用占位句。
   · 组内不出现同一个词两次；与 window.BANK 的交集在 BANK_EXT.md 里统计。
   · 拼写与释义为学习用途人工整理，未经母语者逐条核对（见 BANK_EXT.md
     「没验到什么」一节）。
   ============================================================ */

window.EXT_LIBS = window.EXT_LIBS || {};
EXT_LIBS['campus'] = {
  key: 'campus',
  name: '校园与考试',
  desc: '上课、考试、泡图书馆、参加社团会用到的词',
  category: 'campus',
  enabledByDefault: true,
  groups: [
    { key: 'class', name: '课堂', words: [
      ["lecture","/ˈlektʃə(r)/","n. 讲座；课；vi. 讲课",[["The lecture starts at nine sharp.","讲座九点整开始。","校园"]]],
      ["seminar","/ˈsemɪnɑː(r)/","n. 研讨课",[["Each student presents once in the seminar.","研讨课上每个学生都要做一次报告。","校园"]]],
      ["tutorial","/tjuːˈtɔːriəl/","n. 辅导课；adj. 教程的",[["The tutorial has only eight students.","这节辅导课只有八个学生。","校园"]]],
      ["lecturer","/ˈlektʃərə(r)/","n. 讲师",[["The lecturer put the slides online afterwards.","讲师课后把幻灯片传到了网上。","校园"]]],
      ["professor","/prəˈfesə(r)/","n. 教授",[["The professor answers email on Wednesdays.","教授在周三回邮件。","校园"]]],
      ["semester","/sɪˈmestə(r)/","n. 学期",[["The second semester begins in February.","第二学期二月开始。","校园"]]],
      ["credit","/ˈkredɪt/","n. 学分；信用；vt. 记入贷方",[["This course is worth six credits.","这门课值六个学分。","校园"]]],
      ["assignment","/əˈsaɪnmənt/","n. 作业；任务",[["The assignment is due on Thursday.","作业周四截止。","校园"]]],
      ["essay","/ˈeseɪ/","n. 文章；短文",[["Write a short essay on the reading.","就这次的阅读材料写一篇短文。","校园"]]],
      ["handout","/ˈhændaʊt/","n. 讲义；散发物",[["The handout has the whole timetable on one page.","讲义一页就把整张课表印下了。","校园"]]],
      ["attendance","/əˈtendəns/","n. 出勤；出席人数",[["Attendance is checked at every session.","每次课都查考勤。","校园"]]],
      ["absent","/ˈæbsənt/","adj. 缺席的；不在的",[["Three students were absent on Friday.","周五有三名学生缺席。","校园"]]],
      ["syllabus","/ˈsɪləbəs/","n. 教学大纲",[["The syllabus lists every reading.","教学大纲把必读材料都列了出来。","校园"]]],
      ["timetable","/ˈtaɪmteɪbl/","n. 课程表；时刻表",[["My timetable is full on Tuesday.","我周二的课表排满了。","校园"]]],
      ["workshop","/ˈwɜːkʃɒp/","n. 工作坊；车间",[["The writing workshop meets once a month.","写作工作坊每月聚一次。","校园"]]],
      ["presentation","/ˌpreznˈteɪʃn/","n. 报告；展示",[["Your presentation should last ten minutes.","你的报告控制在十分钟内。","校园"]]],
      ["group work","","n. 小组作业；分组活动",[["Half the mark comes from group work.","一半的分数来自小组作业。","校园"]]],
      ["note-taking","","n. 记笔记",[["Good note-taking saves you hours later.","笔记记得好，之后能省下好几个小时。","校园"]]],
      ["transcript","/ˈtrænskrɪpt/","n. 成绩单；文字稿",[["Ask the office for an official transcript.","去办公室要一份正式成绩单。","校园"]]],
      ["coursework","/ˈkɔːswɜːk/","n. 课程作业（英）",[["Coursework counts for forty per cent.","平时作业占总分的四成。","校园"]]],
      ["term paper","","n. 学期论文",[["The term paper is due before the holiday.","学期论文放假前交。","校园"]]],
      ["tutor","/ˈtjuːtə(r)/","n. 导师；vt. 辅导",[["My tutor offered to read the first draft.","我的导师愿意看第一稿。","校园"]]]
    ] },
    { key: 'exam', name: '考试', words: [
      ["exam","/ɪɡˈzæm/","n. 考试",[["The exam is two hours long.","这场考试两小时。","校园"]]],
      ["quiz","/kwɪz/","n. 小测验；vt. 提问",[["We have a short quiz every Monday.","我们每周一都有一次小测验。","校园"]]],
      ["cram","/kræm/","vi. 临时抱佛脚；vt. 塞满",[["Don't cram the night before.","别在考前一晚临时抱佛脚。","校园"]]],
      ["invigilator","/ɪnˈvɪdʒɪleɪtə(r)/","n. 监考人",[["The invigilator reminded us of the start time.","监考人提醒了我们开考时间。","校园"]]],
      ["candidate","/ˈkændɪdət/","n. 考生；候选人",[["Each candidate gets one answer booklet.","每位考生只有一本答题册。","校园"]]],
      ["multiple choice","","n. 选择题",[["Part one is multiple choice.","第一部分是选择题。","校园"]]],
      ["essay question","","n. 论述题",[["Choose one of the two essay questions.","两道论述题里选一道。","校园"]]],
      ["mark","/mɑːk/","n. 分数（英）；vt. 批改",[["He got full marks on the first test.","他第一次测验拿了满分。","校园"]]],
      ["grade","/ɡreɪd/","n. 成绩；年级；vt. 评分",[["Grades come out next Friday.","成绩下周五公布。","校园"]]],
      ["pass","/pɑːs/","vt. 通过；n. 及格",[["You need forty per cent to pass.","及格要拿到四成。","校园"]]],
      ["fail","/feɪl/","v. 失败；不及格",[["Nobody failed the practical test.","没有人实操考试不及格。","校园"]]],
      ["resit","/ˌriːˈsɪt/","vt. 补考；n. 补考（英）",[["She has to resit the written paper in July.","她七月要补考笔试。","校园"]]],
      ["certificate","/səˈtɪfɪkət/","n. 证书",[["The certificate arrives by post in June.","证书六月邮寄到。","校园"]]],
      ["diploma","/dɪˈpləʊmə/","n. 文凭；毕业证书",[["The diploma is signed by the dean.","文凭由院长签字。","校园"]]],
      ["degree","/dɪˈɡriː/","n. 学位；程度",[["He finished his degree in three years.","他三年读完学位。","校园"]]],
      ["undergraduate","/ˌʌndəˈɡrædʒuət/","n. 本科生；adj. 本科的",[["The laboratory is open to undergraduates.","这个实验室对本科生开放。","校园"]]],
      ["postgraduate","/ˌpəʊstˈɡrædʒuət/","n. 研究生；adj. 研究生的",[["Postgraduate students run the evening tutorial.","研究生负责晚上的辅导课。","校园"]]],
      ["scholarship","/ˈskɒləʃɪp/","n. 奖学金；学术研究",[["The scholarship covers fees but not rent.","这份奖学金覆盖学费，但不含房租。","校园"]]],
      ["tuition","/tjuˈɪʃn/","n. 学费；教学",[["Tuition rises by about three per cent a year.","学费每年涨大约百分之三。","校园"]]],
      ["cheat","/tʃiːt/","vi. 作弊；vt. 欺骗",[["Copying a friend's answers is cheating.","抄同学的答案就是作弊。","校园"]]],
      ["oral exam","","n. 口试",[["The oral exam lasts twenty minutes.","口试持续二十分钟。","校园"]]],
      ["mock exam","","n. 模拟考试",[["The mock exam is harder than the real one.","模拟考试比真题还难。","校园"]]]
    ] },
    { key: 'library', name: '图书馆', words: [
      ["librarian","/laɪˈbreəriən/","n. 图书管理员",[["The librarian showed me how to reserve a book.","管理员教我怎么预约图书。","校园"]]],
      ["catalogue","/ˈkætəlɒɡ/","n. 目录；vt. 编目",[["Search the catalogue by subject.","按主题检索目录。","校园"]]],
      ["borrow","/ˈbɒrəʊ/","vt. 借入",[["You can borrow six books at a time.","一次可以借六本书。","校园"]]],
      ["overdue","/ˌəʊvəˈdjuː/","adj. 逾期的；迟到的",[["This book is two days overdue.","这本书逾期两天了。","校园"]]],
      ["renew","/rɪˈnjuː/","vt. 续借；更新",[["You can renew online twice.","在线可以续借两次。","校园"]]],
      ["reserve","/rɪˈzɜːv/","vt. 预约；n. 储备",[["I reserved the last copy for you.","我把最后一本给你留着了。","校园"]]],
      ["shelf","/ʃelf/","n. 书架；架子",[["The dictionary sits on the top shelf.","词典在最上面一层书架上。","校园"]]],
      ["aisle","/aɪl/","n. 过道；通道",[["The history books are in the next aisle.","历史类的书在隔壁那排过道。","校园"]]],
      ["periodical","/ˌpɪəriˈɒdɪkl/","n. 期刊；adj. 定期的",[["Periodicals cannot be taken out of the building.","期刊不能带出楼。","校园"]]],
      ["index card","","n. 索引卡",[["The old catalogue is still on index cards.","旧目录还是索引卡形式。","校园"]]],
      ["stamp","/stæmp/","n. 印章；邮票；vt. 盖章",[["The librarian stamped the return date.","管理员盖上了归还日期。","校园"]]],
      ["silence","/ˈsaɪləns/","n. 安静；沉默",[["A reading room is a place of silence.","阅览室是个安静的地方。","校园"]]],
      ["study room","","n. 自习室",[["All the study rooms are booked until six.","自习室都被订到六点了。","校园"]]],
      ["photocopy","/ˈfəʊtəʊkɒpi/","n. 复印件；vt. 复印",[["Make a photocopy of the first chapter.","把第一章复印一份。","校园"]]],
      ["scanner","/ˈskænə(r)/","n. 扫描仪",[["The scanner on the third floor is faster.","三楼的扫描仪更快。","校园"]]],
      ["reference book","","n. 参考书；工具书",[["Reference books stay in the library.","参考书只能在馆内看。","校园"]]],
      ["borrowing limit","","n. 借书限额",[["Your borrowing limit goes up next year.","你的借书限额明年会提高。","校园"]]],
      ["return","/rɪˈtɜːn/","vt. 归还；vi. 返回",[["Return the book to any branch.","书还到任何一个分馆都行。","校园"]]],
      ["reading list","","n. 阅读书目",[["The reading list has forty items on it.","阅读书目上有四十项。","校园"]]],
      ["archive","/ˈɑːkaɪv/","n. 档案；档案馆",[["The old newspapers are in the archive.","旧报纸存放在档案馆里。","校园"]]],
      ["call number","","n. 索书号",[["Write down the call number before you go up.","上楼之前先把索书号记下来。","校园"]]]
    ] },
    { key: 'club', name: '社团', words: [
      ["club","/klʌb/","n. 社团；俱乐部",[["The photography club meets on Wednesdays.","摄影社每周三活动。","校园"]]],
      ["society","/səˈsaɪəti/","n. 社团；社会",[["The debating society is the oldest one here.","辩论社是这里最老的社团。","校园"]]],
      ["membership","/ˈmembəʃɪp/","n. 会员资格；成员",[["Membership costs ten pounds a year.","会费一年十镑。","校园"]]],
      ["recruit","/rɪˈkruːt/","vt. 招募；n. 新成员",[["They recruit new members every September.","他们每年九月招新。","校园"]]],
      ["volunteer","/ˌvɒlənˈtɪə(r)/","n. 志愿者；vi. 自愿",[["Twelve volunteers turned up on Saturday.","周六来了十二名志愿者。","校园"]]],
      ["charity","/ˈtʃærəti/","n. 慈善；慈善机构",[["The concert raised money for a local charity.","音乐会为当地一家慈善机构筹了款。","校园"]]],
      ["rehearsal","/rɪˈhɜːsl/","n. 排练",[["Rehearsal runs from six to eight.","排练从六点到八点。","校园"]]],
      ["choir","/ˈkwaɪə(r)/","n. 合唱团",[["The choir sings at the winter concert.","合唱团在冬季音乐会上演唱。","校园"]]],
      ["orchestra","/ˈɔːkɪstrə/","n. 管弦乐队",[["The orchestra needs a second violinist.","管弦乐队缺一名第二小提琴手。","校园"]]],
      ["exhibition","/ˌeksɪˈbɪʃn/","n. 展览；展览会",[["The art society holds an exhibition in May.","美术社五月办一场展览。","校园"]]],
      ["fundraising","/ˈfʌndreɪzɪŋ/","n. 筹款；adj. 筹款的",[["The fundraising page went live this morning.","筹款页面今天上午上线了。","校园"]]],
      ["sponsor","/ˈspɒnsə(r)/","n. 赞助商；vt. 赞助",[["A local bookshop sponsors the reading group.","一家本地书店赞助了这个读书会。","校园"]]],
      ["booth","/buːð/","n. 摊位；亭子",[["Our booth is next to the main gate.","我们的摊位在大门旁边。","校园"]]],
      ["poster","/ˈpəʊstə(r)/","n. 海报",[["We put up posters on every notice board.","我们在每个布告栏都贴了海报。","校园"]]],
      ["sign up","","vi. 报名；注册",[["Sign up before Friday if you want a place.","想参加的话周五之前报名。","校园"]]],
      ["fresher","/ˈfreʃə(r)/","n. 大一新生（英）；adj. 更新鲜的",[["Freshers get a tour of the campus in week one.","新生第一周会有一次校园导览。","校园"]]],
      ["committee","/kəˈmɪti/","n. 委员会",[["The committee meets twice a term.","委员会每学期开两次会。","校园"]]],
      ["chairperson","/ˈtʃeəpɜːsn/","n. 主席；会长",[["The chairperson opened the meeting at seven.","会长七点宣布开会。","校园"]]],
      ["minutes","/ˈmɪnɪts/","n. 会议记录",[["Who is taking the minutes tonight?","今晚谁做会议记录？","校园"]]],
      ["agenda","/əˈdʒendə/","n. 议程；待办事项",[["There are four items on the agenda.","议程上有四项。","校园"]]],
      ["venue","/ˈvenjuː/","n. 场地；举办地点",[["The venue changed to the small hall.","场地改到小礼堂了。","校园"]]],
      ["outing","/ˈaʊtɪŋ/","n. 出游；短途旅行",[["The hiking outing is open to everyone.","徒步活动谁都能参加。","校园"]]]
    ] }
  ]
};

/* ============================================================
   bank_ext_paper.js · 拓展词库：论文常用词（EXT_LIBS['paper']）
   ------------------------------------------------------------
   放在 index.html 同一目录，按需 <script src="bank_ext_paper.js"></script>。
   本文件只声明挂载点 window.EXT_LIBS['paper']，不碰 window.BANK。

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
EXT_LIBS['paper'] = {
  key: 'paper',
  name: '论文常用词',
  desc: '读文献、写摘要、回审稿意见时反复出现的通用学术词',
  category: 'paper',
  enabledByDefault: true,
  groups: [
    { key: 'structure', name: '论文结构与写作', words: [
      ["abstract","/ˈæbstrækt/","n. 摘要；adj. 抽象的",[["Keep the abstract under two hundred words.","摘要控制在两百字以内。","论文"]]],
      ["introduction","/ˌɪntrəˈdʌkʃn/","n. 引言；介绍",[["The introduction should say why the problem matters.","引言要说清楚这个问题为什么重要。","论文"]]],
      ["literature","/ˈlɪtrətʃə(r)/","n. 文献；文学",[["The literature on this topic is surprisingly thin.","这个方向的文献意外地少。","论文"]]],
      ["methodology","/ˌmeθəˈdɒlədʒi/","n. 方法；方法论",[["Section three describes the methodology in detail.","第三节详细描述研究方法。","论文"]]],
      ["findings","/ˈfaɪndɪŋz/","n. 研究结果；发现",[["Our findings agree with the earlier survey.","我们的结果与早先的调查一致。","论文"]]],
      ["discussion","/dɪˈskʌʃn/","n. 讨论",[["The discussion links the results back to the theory.","讨论部分把结果和理论联系起来。","论文"]]],
      ["conclusion","/kənˈkluːʒn/","n. 结论；结束",[["The conclusion should not introduce new data.","结论里不该再出现新的数据。","论文"]]],
      ["appendix","/əˈpendɪks/","n. 附录；阑尾",[["The full questionnaire is in the appendix.","完整问卷放在附录里。","论文"]]],
      ["reference","/ˈrefrəns/","n. 参考文献；参考",[["Every claim needs a reference.","每个论断都要有出处。","论文"]]],
      ["citation","/saɪˈteɪʃn/","n. 引文；引用",[["The citation style changed between the two drafts.","两稿之间的引文格式变了。","论文"]]],
      ["bibliography","/ˌbɪbliˈɒɡrəfi/","n. 参考书目",[["The bibliography runs to four pages.","参考书目有四页。","论文"]]],
      ["footnote","/ˈfʊtnəʊt/","n. 脚注",[["Move that aside into a footnote.","把那段旁枝挪进脚注。","论文"]]],
      ["acknowledgement","/əkˈnɒlɪdʒmənt/","n. 致谢；承认",[["The acknowledgement thanks the two anonymous reviewers.","致谢里感谢了两位匿名审稿人。","论文"]]],
      ["keyword","/ˈkiːwɜːd/","n. 关键词",[["Choose five keywords that a reader would search for.","选五个读者会去搜的关键词。","论文"]]],
      ["manuscript","/ˈmænjuskrɪpt/","n. 稿件；手稿",[["The manuscript was returned for major revision.","稿件被退回要求大改。","论文"]]],
      ["journal","/ˈdʒɜːnl/","n. 期刊；日志",[["The journal asks for a data availability statement.","这家期刊要求提供数据可用性声明。","论文"]]],
      ["preprint","/ˈpriːprɪnt/","n. 预印本",[["We posted a preprint before submitting.","投稿之前我们先挂了预印本。","论文"]]],
      ["submission","/səbˈmɪʃn/","n. 投稿；提交",[["The submission deadline is the last day of May.","投稿截止日是五月最后一天。","论文"]]],
      ["revision","/rɪˈvɪʒn/","n. 修改；修订稿",[["The revision took us three weeks.","这次修改花了我们三周。","论文"]]],
      ["reviewer","/rɪˈvjuːə(r)/","n. 审稿人",[["One reviewer asked for a bigger sample.","一位审稿人要求更大的样本。","论文"]]],
      ["editorial","/ˌedɪˈtɔːriəl/","n. 社论；adj. 编辑的",[["The editorial board meets once a month.","编委会每月开一次会。","论文"]]],
      ["publication","/ˌpʌblɪˈkeɪʃn/","n. 发表；出版物",[["Publication usually takes six months after acceptance.","录用之后通常还要半年才见刊。","论文"]]],
      ["proofread","/ˈpruːfriːd/","vt. 校订；校对",[["Have a colleague proofread the final version.","让同事把定稿校对一遍。","论文"]]],
      ["plagiarism","/ˈpleɪdʒərɪzəm/","n. 抄袭；剽窃",[["Reusing your own figures can still count as plagiarism.","重复使用自己的图也可能算抄袭。","论文"]]],
      ["paraphrase","/ˈpærəfreɪz/","vt. 改写；释义",[["Paraphrase the definition instead of quoting it.","这个定义改写一下，不要直接引。","论文"]]],
      ["outline","/ˈaʊtlaɪn/","n. 提纲；轮廓；vt. 概述",[["Write an outline before you write the draft.","写草稿之前先列个提纲。","论文"]]],
      ["draft","/drɑːft/","n. 草稿；vt. 起草",[["The second draft was half the length of the first.","第二稿只有第一稿的一半长。","论文"]]],
      ["thesis","/ˈθiːsɪs/","n. 论文；论点",[["The whole thesis rests on one assumption.","整篇论文建立在一个假设之上。","论文"]]],
      ["dissertation","/ˌdɪsəˈteɪʃn/","n. 学位论文",[["She is writing her dissertation on urban birds.","她正在写关于城市鸟类的学位论文。","论文"]]],
      ["heading","/ˈhedɪŋ/","n. 标题；小标题",[["Use a clear heading for every subsection.","每个小节都用一个清楚的小标题。","论文"]]],
      ["peer review","","n. 同行评审",[["Peer review found two errors in the table.","同行评审在表格里查出两处错误。","论文"]]],
      ["word count","","n. 字数（统计）",[["The word count excludes the bibliography.","字数统计不含参考书目。","论文"]]]
    ] },
    { key: 'method', name: '研究方法', words: [
      ["hypothesis","/haɪˈpɒθəsɪs/","n. 假设",[["The data do not support the second hypothesis.","数据不支持第二个假设。","论文"]]],
      ["experiment","/ɪkˈsperɪmənt/","n. 实验；vi. 做实验",[["We repeated the experiment in a quieter room.","我们在更安静的房间重做了一次实验。","论文"]]],
      ["sample","/ˈsɑːmpl/","n. 样本；vt. 取样",[["The sample includes forty first-year students.","样本包括四十名一年级学生。","论文"]]],
      ["survey","/ˈsɜːveɪ/","n. 调查；vt. 调查",[["The survey ran for two weeks in March.","调查在三月进行了两周。","论文"]]],
      ["questionnaire","/ˌkwestʃəˈneə(r)/","n. 问卷",[["Half the questionnaire was about sleep habits.","问卷有一半是关于睡眠习惯的。","论文"]]],
      ["interview","/ˈɪntəvjuː/","n. 访谈；面试；vt. 访谈",[["Each interview lasted about forty minutes.","每次访谈大约四十分钟。","论文"]]],
      ["observation","/ˌɒbzəˈveɪʃn/","n. 观察；观测",[["Classroom observation gave us the missing detail.","课堂观察补上了我们缺的那一块。","论文"]]],
      ["independent variable","","n. 自变量",[["The independent variable was the amount of feedback.","自变量是反馈的量。","论文"]]],
      ["control group","","n. 对照组",[["The control group received no feedback at all.","对照组完全没有得到反馈。","论文"]]],
      ["sampling","/ˈsɑːmplɪŋ/","n. 抽样",[["Random sampling keeps the bias low.","随机抽样能把偏差压得很低。","论文"]]],
      ["replicate","/ˈreplɪkeɪt/","vt. 重复（实验）；复制",[["Another lab failed to replicate the result.","另一个实验室没能重复出这个结果。","论文"]]],
      ["validity","/vəˈlɪdəti/","n. 效度；有效性",[["The pilot study supports the validity of the scale.","预试验支持这个量表的效度。","论文"]]],
      ["reliability","/rɪˌlaɪəˈbɪləti/","n. 信度；可靠性",[["Two coders checked the reliability of the ratings.","两位编码员检验了评分的信度。","论文"]]],
      ["bias","/ˈbaɪəs/","n. 偏差；偏见",[["Online polls carry a strong self-selection bias.","网络投票有很强的自选偏差。","论文"]]],
      ["correlation","/ˌkɒrəˈleɪʃn/","n. 相关性",[["The correlation is strong but not causal.","相关性很强，但不是因果。","论文"]]],
      ["causation","/kɔːˈzeɪʃn/","n. 因果关系",[["The study shows correlation, not causation.","这项研究显示的是相关，不是因果。","论文"]]],
      ["quantitative","/ˈkwɒntɪtətɪv/","adj. 定量的",[["The quantitative part relies on test scores.","定量部分依赖考试成绩。","论文"]]],
      ["qualitative","/ˈkwɒlɪtətɪv/","adj. 定性的",[["The qualitative interviews lasted all spring.","定性访谈持续了整个春天。","论文"]]],
      ["empirical","/ɪmˈpɪrɪkl/","adj. 实证的；经验的",[["There is little empirical evidence for the claim.","这个说法缺少实证证据。","论文"]]],
      ["analytical","/ˌænəˈlɪtɪkl/","adj. 分析的",[["The analytical framework has three layers.","分析框架有三层。","论文"]]],
      ["simulate","/ˈsɪmjuleɪt/","vt. 模拟",[["We simulate the traffic flow for one full day.","我们模拟一整天的交通流量。","论文"]]],
      ["calibration","/ˌkælɪˈbreɪʃn/","n. 校准；标定",[["Poor calibration explains the strange readings.","校准不准解释了这些奇怪的读数。","论文"]]],
      ["procedure","/prəˈsiːdʒə(r)/","n. 程序；步骤",[["The procedure is simple enough to describe in one paragraph.","这套步骤简单到一段话就能说清。","论文"]]],
      ["criteria","/kraɪˈtɪəriə/","n. 标准；准则（复数）",[["Two papers met the inclusion criteria.","有两篇论文符合纳入标准。","论文"]]],
      ["limitation","/ˌlɪmɪˈteɪʃn/","n. 局限；限制",[["State the limitations honestly and early.","局限要如实地、尽早地说明。","论文"]]],
      ["constraint","/kənˈstreɪnt/","n. 约束；限制",[["Time was the main constraint on the fieldwork.","时间是对野外工作的主要限制。","论文"]]],
      ["assumption","/əˈsʌmpʃn/","n. 假设；假定",[["The model rests on a strong assumption of honesty.","这个模型建立在很强的诚信假设之上。","论文"]]],
      ["evidence","/ˈevɪdəns/","n. 证据",[["The evidence comes from three schools.","证据来自三所学校。","论文"]]],
      ["participant","/pɑːˈtɪsɪpənt/","n. 参与者",[["Each participant signed a consent form.","每位参与者都签了同意书。","论文"]]],
      ["consent","/kənˈsent/","n. 同意；vi. 同意",[["Informed consent was collected before the test.","测试前收集了知情同意。","论文"]]],
      ["ethics","/ˈeθɪks/","n. 伦理；道德",[["The ethics committee approved the design in April.","伦理委员会四月批准了这个设计。","论文"]]],
      ["pilot study","","n. 预试验",[["The pilot study ran with eight volunteers.","预试验用了八名志愿者。","论文"]]]
    ] },
    { key: 'data', name: '数据与图表', words: [
      ["dataset","/ˈdeɪtəset/","n. 数据集",[["The dataset is public and free to download.","这个数据集是公开的，可以免费下载。","论文"]]],
      ["figure","/ˈfiɡə(r)/","n. 图；数字；人物",[["Figure two shows the same trend on a smaller scale.","图二在更小的尺度上显示了同样的趋势。","论文"]]],
      ["chart","/tʃɑːt/","n. 图表",[["The bar chart hides the size of the sample.","柱状图把样本量藏在后面了。","论文"]]],
      ["diagram","/ˈdaɪəɡræm/","n. 示意图；图解",[["The diagram shows where each sensor sits.","示意图标出了每个传感器的位置。","论文"]]],
      ["axis","/ˈæksɪs/","n. 坐标轴；轴",[["Label both axes with units.","两个坐标轴都要标单位。","论文"]]],
      ["plot","/plɒt/","n. 图；情节；vt. 绘制",[["Plot the residuals before you trust the fit.","相信这个拟合之前先把残差画出来。","论文"]]],
      ["legend","/ˈledʒənd/","n. 图例；传说",[["The legend is too small to read in print.","图例太小，印出来看不清。","论文"]]],
      ["caption","/ˈkæpʃn/","n. 图注；字幕",[["The caption repeats the whole paragraph.","图注把整段话又抄了一遍。","论文"]]],
      ["annotation","/ˌænəˈteɪʃn/","n. 标注；注释",[["Manual annotation took two people a month.","人工标注花了两个人一个月。","论文"]]],
      ["outlier","/ˈaʊtlaɪə(r)/","n. 离群值；异常值",[["One outlier pulls the mean far to the right.","一个离群值把均值拉得很靠右。","论文"]]],
      ["median","/ˈmiːdiən/","n. 中位数；adj. 中间的",[["The median is a fairer summary than the mean here.","这里中位数比均值更能代表整体。","论文"]]],
      ["standard deviation","","n. 标准差",[["The standard deviation is larger than we expected.","标准差比我们预想的大。","论文"]]],
      ["variance","/ˈveəriəns/","n. 方差；差异",[["Most of the variance comes from one school.","大部分方差来自一所学校。","论文"]]],
      ["distribution","/ˌdɪstrɪˈbjuːʃn/","n. 分布；分配",[["The distribution is clearly not normal.","这个分布明显不是正态的。","论文"]]],
      ["frequency","/ˈfriːkwənsi/","n. 频率；频数",[["Table one lists the frequency of each answer.","表一列出了每个答案的频数。","论文"]]],
      ["percentage","/pəˈsentɪdʒ/","n. 百分比",[["Report the counts, not just the percentages.","要报绝对数，不能只报百分比。","论文"]]],
      ["proportion","/prəˈpɔːʃn/","n. 比例；部分",[["A large proportion of the sample was left-handed.","样本中有很大比例是左撇子。","论文"]]],
      ["trend","/trend/","n. 趋势；vi. 趋向",[["The trend is upward but far from steady.","趋势向上，但远远不稳。","论文"]]],
      ["fluctuation","/ˌflʌktʃuˈeɪʃn/","n. 波动",[["The daily fluctuation is larger than the yearly change.","日波动比年变化还大。","论文"]]],
      ["curve","/kɜːv/","n. 曲线；vt. 弯曲",[["The curve flattens after the tenth day.","曲线在第十天之后变平。","论文"]]],
      ["histogram","/ˈhɪstəɡræm/","n. 直方图",[["A histogram shows the shape better than a table.","直方图比表格更能看出形状。","论文"]]],
      ["interval","/ˈɪntəvl/","n. 区间；间隔",[["The confidence interval is wide at both ends.","置信区间两端都很宽。","论文"]]],
      ["significant","/sɪɡˈnɪfɪkənt/","adj. 显著的；重要的",[["The difference is statistically significant.","这个差异在统计上显著。","论文"]]],
      ["normalize","/ˈnɔːməlaɪz/","vt. 归一化；使正常化",[["Normalize the values before you compare the groups.","比较各组之前先把数值归一化。","论文"]]],
      ["aggregate","/ˈæɡrɪɡeɪt/","vt. 汇总；n. 总量",[["We aggregate the results by class.","我们按班级汇总结果。","论文"]]],
      ["estimate","/ˈestɪmeɪt/","vt. 估计；n. 估计",[["The estimate is rough but useful.","这个估计虽然粗，但有用。","论文"]]],
      ["accuracy","/ˈækjərəsi/","n. 准确率；准确性",[["Accuracy rose from eighty to ninety per cent.","准确率从八成升到九成。","论文"]]],
      ["precision","/prɪˈsɪʒn/","n. 精确率；精度",[["High precision here means many real cases are missed.","这里的精确率高，意味着漏掉了很多真实案例。","论文"]]],
      ["recall","/rɪˈkɔːl/","vt. 召回；回忆起；n. 召回率",[["Recall matters more than precision in this screening task.","这个筛查任务里召回率比精确率更重要。","论文"]]],
      ["metric","/ˈmetrɪk/","n. 指标；度量",[["Speed is the wrong metric for this problem.","对这个问题来说，速度是个错误的指标。","论文"]]],
      ["error bar","","n. 误差线",[["Add error bars so the reader can judge the spread.","加上误差线，读者才能判断离散程度。","论文"]]],
      ["sample size","","n. 样本量",[["The sample size was too small for three groups.","分三组的话样本量太小了。","论文"]]]
    ] },
    { key: 'logic', name: '学术表达与逻辑连接', words: [
      ["furthermore","/ˌfɜːðəˈmɔː(r)/","adv. 此外；而且",[["Furthermore, the effect persists after six months.","此外，这个效果六个月后仍在。","论文"]]],
      ["moreover","/mɔːrˈəʊvə(r)/","adv. 而且；此外",[["Moreover, the cost falls as the scale grows.","而且规模越大成本越低。","论文"]]],
      ["nevertheless","/ˌnevəðəˈles/","adv. 然而；不过",[["The sample is small; nevertheless, the pattern is clear.","样本虽小，但规律很明显。","论文"]]],
      ["nonetheless","/ˌnʌnðəˈles/","adv. 尽管如此",[["The result is noisy but nonetheless encouraging.","结果有噪声，尽管如此仍令人鼓舞。","论文"]]],
      ["therefore","/ˈðeəfɔː(r)/","adv. 因此",[["The two groups differ in age and therefore in experience.","两组年龄不同，因此经验也不同。","论文"]]],
      ["thus","/ðʌs/","adv. 因此；这样",[["The model is thus only valid for short texts.","因此这个模型只对短文本有效。","论文"]]],
      ["hence","/hens/","adv. 因此；今后",[["Hence the need for a second experiment.","因此还需要第二次实验。","论文"]]],
      ["whereas","/ˌweərˈæz/","conj. 而；鉴于",[["Boys preferred the game, whereas girls preferred the story.","男孩更喜欢游戏，而女孩更喜欢故事。","论文"]]],
      ["albeit","/ˌɔːlˈbiːɪt/","conj. 虽然；尽管",[["The gain is real, albeit small.","这个提升是真的，虽然很小。","论文"]]],
      ["notwithstanding","/ˌnɒtwɪθˈstændɪŋ/","prep. 尽管；adv. 不过",[["Notwithstanding these limits, the method travels well.","尽管有这些局限，这个方法适应性很强。","论文"]]],
      ["accordingly","/əˈkɔːdɪŋli/","adv. 相应地；因此",[["The threshold was lowered accordingly.","阈值也相应调低了。","论文"]]],
      ["consequently","/ˈkɒnsɪkwəntli/","adv. 因此；结果",[["Consequently, half the responses had to be dropped.","结果有一半的回答只能丢掉。","论文"]]],
      ["conversely","/ˈkɒnvɜːsli/","adv. 相反地",[["Conversely, longer texts need no extra prompts.","相反，长文本不需要额外提示。","论文"]]],
      ["similarly","/ˈsɪmələli/","adv. 同样地",[["Similarly, the second model fails on rare words.","同样地，第二个模型在生僻词上也失败。","论文"]]],
      ["alternatively","/ɔːlˈtɜːnətɪvli/","adv. 或者；作为另一选择",[["Alternatively, you can weight the two parts equally.","另一种做法是把两部分等权。","论文"]]],
      ["notably","/ˈnəʊtəbli/","adv. 尤其；显著地",[["Two schools, notably the rural ones, opted out.","有两所学校退出了，尤其是农村的那几所。","论文"]]],
      ["arguably","/ˈɑːɡjuəbli/","adv. 可以说；可论证地",[["This is arguably the strongest evidence in the paper.","这可以说是全文最有力的证据。","论文"]]],
      ["presumably","/prɪˈzjuːməbli/","adv. 大概；据推测",[["The gap is presumably due to the different instructions.","这个差距大概源于指导语不同。","论文"]]],
      ["respectively","/rɪˈspektɪvli/","adv. 分别地",[["The two groups scored 71 and 84 respectively.","两组分别得 71 分和 84 分。","论文"]]],
      ["substantially","/səbˈstænʃəli/","adv. 大幅地；实质上",[["Adding one feature improved accuracy substantially.","加一个特征就让准确率大幅提升。","论文"]]],
      ["marginally","/ˈmɑːdʒɪnəli/","adv. 略微；边缘地",[["The second version is marginally faster.","第二版只稍微快一点。","论文"]]],
      ["predominantly","/prɪˈdɒmɪnəntli/","adv. 主要地",[["The errors were predominantly spelling mistakes.","错误主要是拼写错误。","论文"]]],
      ["consistently","/kənˈsɪstəntli/","adv. 一致地；持续地",[["The effect appeared consistently across all four sites.","这个效应在四个点上一致出现。","论文"]]],
      ["indicate","/ˈɪndɪkeɪt/","vt. 表明；指出",[["The results indicate a small but stable gain.","结果表明有一个小而稳定的提升。","论文"]]],
      ["suggest","/səˈdʒest/","vt. 表明；建议",[["These numbers suggest a different explanation.","这些数字暗示了另一种解释。","论文"]]],
      ["demonstrate","/ˈdemənstreɪt/","vt. 证明；演示",[["The pilot data demonstrate that the task is feasible.","预试验数据证明这个任务是可行的。","论文"]]],
      ["imply","/ɪmˈplaɪ/","vt. 意味着；暗示",[["This does not imply that the method is universal.","这并不意味着这个方法普适。","论文"]]],
      ["infer","/ɪnˈfɜː(r)/","vt. 推断",[["We cannot infer causality from a single case.","单个案例推断不出因果。","论文"]]],
      ["attribute","/əˈtrɪbjuːt/","vt. 归因于；n. 属性",[["We attribute the drop to the shorter test.","我们把这个下降归因于测试更短。","论文"]]],
      ["owing to","","prep. 由于",[["Two sessions were cancelled owing to the storm.","因暴风雨取消了两次测试。","论文"]]],
      ["in contrast","","adv. 相比之下",[["In contrast, the older group improved very little.","相比之下，年长那组几乎没有进步。","论文"]]],
      ["to sum up","","adv. 总之；概括起来",[["To sum up, the evidence points one way.","总之，证据指向同一个方向。","论文"]]]
    ] }
  ]
};

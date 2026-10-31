(function (root) {
  const bank = {
  "appVersion": "1.0.0",
  "questionBankVersion": "180-v1",
  "title": "优势坐标",
  "subtitle": "个人优势探索测评",
  "pageSize": 10,
  "scale": [
    {
      "value": 1,
      "label": "很不像我",
      "short": "不像"
    },
    {
      "value": 2,
      "label": "不太像我",
      "short": "偏不像"
    },
    {
      "value": 3,
      "label": "说不准",
      "short": "一般"
    },
    {
      "value": 4,
      "label": "比较像我",
      "short": "偏像"
    },
    {
      "value": 5,
      "label": "非常像我",
      "short": "很像"
    }
  ],
  "domains": {
    "thinking": {
      "label": "思考洞察",
      "short": "思考",
      "description": "你更容易被问题、信息、规律和新可能性吸引。",
      "environment": "需要学习、分析、创造和解决复杂问题的环境"
    },
    "action": {
      "label": "行动推进",
      "short": "行动",
      "description": "你更容易在目标、节奏和推进过程中进入状态。",
      "environment": "目标清晰、节奏较快、允许推进和试错的环境"
    },
    "people": {
      "label": "连接影响",
      "short": "连接",
      "description": "你更容易在人与人的互动、表达和协作中发挥力量。",
      "environment": "互动频繁、需要沟通协作和影响他人的环境"
    },
    "stability": {
      "label": "稳定秩序",
      "short": "稳定",
      "description": "你更容易通过责任、规则和长期投入建立可靠感。",
      "environment": "规则清晰、职责明确、重视质量与长期交付的环境"
    }
  },
  "themes": {
    "curiosity": {
      "domain": "thinking",
      "name": "好奇探索",
      "oneLiner": "你天然会被未知吸引，愿意为了弄明白一件事继续追问。",
      "summary": "比起快速得到一个答案，你更享受打开新领域、发现新问题的过程。新的信息会激活你，让你愿意主动学习、比较和验证。",
      "looksLike": [
        "遇到陌生领域，会主动查资料、问问题",
        "常从一个话题延伸到更多相关知识",
        "容易在新信息中发现值得继续探索的方向"
      ],
      "watchout": "兴趣点多时容易同时打开太多入口，最后停留在浅层了解。",
      "action": "给每次探索设一个可交付的小结果，例如一页笔记、一个分享或一个实际尝试。"
    },
    "insight": {
      "domain": "thinking",
      "name": "深度思考",
      "oneLiner": "你习惯穿过表面答案，去找事情背后的原因和逻辑。",
      "summary": "你不满足于“大家都这么做”，更想知道为什么成立、在什么条件下成立。独立判断和深度理解会给你安全感。",
      "looksLike": [
        "做决定前会多问几个为什么",
        "能从现象中看到背后的动机或结构",
        "更愿意形成自己的判断，而不是照单全收"
      ],
      "watchout": "想得太深时，可能迟迟不表达或迟迟不行动。",
      "action": "先用一句话说出你的结论，再补充推理过程，让别人更容易跟上你。"
    },
    "structure": {
      "domain": "thinking",
      "name": "结构梳理",
      "oneLiner": "你擅长把混乱的信息整理成清楚的框架和先后顺序。",
      "summary": "面对复杂任务，你会自然寻找分类、主次和关系。一个清楚的框架能让你和周围人更快理解问题。",
      "looksLike": [
        "能把大问题拆成几个可处理的小问题",
        "喜欢用清单、框架或流程说明事情",
        "在信息很多时，仍能抓住主线"
      ],
      "watchout": "框架一旦建立，可能不容易接受计划外的变化。",
      "action": "搭框架前先确认目标，并给关键节点保留调整空间。"
    },
    "creativity": {
      "domain": "thinking",
      "name": "创意联想",
      "oneLiner": "你容易把看似无关的经验连接起来，生成新的角度。",
      "summary": "你不一定按常规路径解决问题。类比、联想和跨领域迁移常常帮你找到别人没有注意到的可能。",
      "looksLike": [
        "常用不同领域的例子解释问题",
        "在常规方法失效时，容易提出新思路",
        "喜欢尝试新的组合，而不是重复旧方案"
      ],
      "watchout": "点子多但落地少，容易被下一个新想法带走。",
      "action": "每三个想法里选一个做小实验，用真实反馈判断它是否值得继续。"
    },
    "foresight": {
      "domain": "thinking",
      "name": "趋势预见",
      "oneLiner": "你会自然去想事情接下来可能怎么发展。",
      "summary": "你对变化和方向比较敏感，容易提前看到机会、风险或需要准备的事情。预判让你更从容，也能帮助别人看清下一步。",
      "looksLike": [
        "会提前考虑几种可能的结果",
        "对环境和趋势的变化比较敏感",
        "经常为未来做准备，而不是只处理眼前"
      ],
      "watchout": "看得太远时，可能被尚未发生的风险消耗注意力。",
      "action": "把预判写成三个月内可以观察的信号，只关注下一步能验证的部分。"
    },
    "drive": {
      "domain": "action",
      "name": "目标驱动",
      "oneLiner": "目标一旦清楚，你会自然推动事情向前。",
      "summary": "你喜欢把想法变成结果，也愿意为目标持续投入。清楚的进度和成果会给你能量。",
      "looksLike": [
        "有目标时行动力明显提升",
        "会主动推进卡住的事情",
        "习惯把想法落到具体结果上"
      ],
      "watchout": "太盯结果时，可能忽略过程中的感受和他人的节奏。",
      "action": "把目标拆成里程碑，并定期同步进展，让推进不再只依赖你一个人。"
    },
    "decisiveness": {
      "domain": "action",
      "name": "果断执行",
      "oneLiner": "信息差不多齐了，你就能做出选择并开始行动。",
      "summary": "你不喜欢长期停在犹豫里。即使结果不确定，你也愿意先做一个可调整的决定，再根据反馈修正。",
      "looksLike": [
        "面对选择时能较快拍板",
        "愿意为决定承担结果",
        "在僵局中容易成为推动前进的人"
      ],
      "watchout": "速度太快时，可能没有充分听见不同意见。",
      "action": "为重要决定设一个最晚决策点，在此之前主动收集一条反对意见。"
    },
    "focus": {
      "domain": "action",
      "name": "专注沉浸",
      "oneLiner": "你能把注意力收拢，在一件事上持续深入。",
      "summary": "进入状态后，你不太容易被外界打断。复杂任务、长时间思考和连续产出会让你感到投入。",
      "looksLike": [
        "能较长时间专注在重要任务上",
        "容易进入心流状态",
        "愿意为了做好一件事减少干扰"
      ],
      "watchout": "过度沉浸时，可能错过周围人的需要或重要变化。",
      "action": "每天固定一段免打扰深度时间，同时在结束后留出同步和调整的窗口。"
    },
    "adaptability": {
      "domain": "action",
      "name": "灵活应变",
      "oneLiner": "环境变化时，你能较快找到新的走法。",
      "summary": "你不容易被原计划绑住。面对突发情况，你会重新组合资源、调整路径，让事情继续向前。",
      "looksLike": [
        "计划被打乱时能快速调整",
        "面对新情况不会长时间卡住",
        "擅长临场找替代方案"
      ],
      "watchout": "不断调整时，可能失去长期方向或让团队跟不上。",
      "action": "每次改变路径时，保留一条不轻易改变的核心原则。"
    },
    "persistence": {
      "domain": "action",
      "name": "持续复利",
      "oneLiner": "你愿意通过稳定重复，把小事积累成长期结果。",
      "summary": "即使短期没有明显反馈，你也能坚持做重要的事。你相信节奏和积累，而不是只依赖一时热情。",
      "looksLike": [
        "能坚持长期习惯或项目",
        "不因短期波动轻易放弃",
        "擅长把重复动作变成稳定成果"
      ],
      "watchout": "坚持变成死磕时，可能忽略方向已经需要调整。",
      "action": "定期复盘“继续、调整还是停止”，让坚持服务于目标，而不是变成惯性。"
    },
    "empathy": {
      "domain": "people",
      "name": "情绪感知",
      "oneLiner": "你能较快察觉别人情绪、需要和气氛的变化。",
      "summary": "你对他人的状态比较敏感，常能听懂话外之音，也能让人感到被理解。这让你在关系建立和团队协作中有天然优势。",
      "looksLike": [
        "能注意到别人微妙的情绪变化",
        "别人愿意向你倾诉",
        "会主动调整表达方式，让对方更舒服"
      ],
      "watchout": "容易把别人的情绪当成自己的责任，忽略自己的边界。",
      "action": "提醒自己：理解对方，不等于必须替对方承担所有感受。"
    },
    "expression": {
      "domain": "people",
      "name": "表达感染",
      "oneLiner": "你擅长把想法讲清楚，也容易带动别人的注意力。",
      "summary": "你能把复杂内容转化成别人愿意听、听得懂的表达。语言、故事和现场感是你连接他人的方式。",
      "looksLike": [
        "表达时容易让人理解重点",
        "会根据听众调整说法",
        "能通过语言或故事带动情绪"
      ],
      "watchout": "表达欲强时，可能说得比听得多。",
      "action": "每次重要表达后留出三分之一时间提问和听取反馈。"
    },
    "collaboration": {
      "domain": "people",
      "name": "协作连接",
      "oneLiner": "你容易与不同的人建立信任，并让大家愿意一起做事。",
      "summary": "你重视关系中的连接感，擅长让不同角色找到共同目标。团队里有你，合作往往更顺畅。",
      "looksLike": [
        "能和不同背景的人建立合作关系",
        "会照顾团队成员的参与感",
        "愿意主动协调资源和分工"
      ],
      "watchout": "为了维持和谐，可能回避必要的冲突。",
      "action": "把分歧当成需要解决的问题，而不是关系好坏的评价。"
    },
    "influence": {
      "domain": "people",
      "name": "影响带动",
      "oneLiner": "在关键时刻，你能表达立场并推动别人行动。",
      "summary": "你不仅能看见方向，也愿意站出来影响结果。你的判断、表达和行动容易让其他人产生跟随感。",
      "looksLike": [
        "意见不一时，能推动形成共识",
        "关键时刻愿意表态",
        "能带动气氛或推动集体行动"
      ],
      "watchout": "影响欲过强时，可能让别人感到没有空间。",
      "action": "表达主张前，先复述对方立场，确认你理解的是对方真正的意思。"
    },
    "development": {
      "domain": "people",
      "name": "培养他人",
      "oneLiner": "你容易发现别人的潜力，并愿意给出具体支持。",
      "summary": "看到别人成长会让你有成就感。你通常愿意分享经验、给出反馈，也愿意为他人创造练习机会。",
      "looksLike": [
        "能看见别人尚未发挥的潜力",
        "愿意耐心解释和示范",
        "会为他人的进步感到高兴"
      ],
      "watchout": "可能替别人承担太多，或期待对方按你的方式成长。",
      "action": "用“目标—反馈—下一步”的方式支持对方，把成长责任还给本人。"
    },
    "responsibility": {
      "domain": "stability",
      "name": "责任担当",
      "oneLiner": "答应的事情，你会认真负责到底。",
      "summary": "可靠是你很重要的底色。你愿意把承诺放在心上，也愿意在出现问题的时候承担自己的部分。",
      "looksLike": [
        "承诺后能持续跟进到完成",
        "遇到问题不急着推责",
        "别人容易把重要事情交给你"
      ],
      "watchout": "容易把过多责任揽到自己身上，不擅长授权。",
      "action": "接任务前明确完成标准、边界和可以求助的人。"
    },
    "order": {
      "domain": "stability",
      "name": "秩序规划",
      "oneLiner": "你喜欢提前安排，让事情有条理地推进。",
      "summary": "计划、流程和清单能让你更安心，也能提高执行效率。你擅长把混乱变成可操作的步骤。",
      "looksLike": [
        "习惯提前规划时间和资源",
        "喜欢清晰的流程和完成标准",
        "在杂事多时仍能保持秩序"
      ],
      "watchout": "过度依赖计划时，可能对变化产生不必要的焦虑。",
      "action": "区分哪些环节必须标准化，哪些环节可以保留弹性。"
    },
    "prudence": {
      "domain": "stability",
      "name": "审慎判断",
      "oneLiner": "做重要决定前，你会先看清风险和后果。",
      "summary": "你不容易被短期情绪带着走。评估条件、风险和可承受范围，会让你做出更稳妥的判断。",
      "looksLike": [
        "重要选择前会评估最坏情况",
        "能提前发现潜在问题",
        "做决定时重视长期后果"
      ],
      "watchout": "过度谨慎时，可能错过需要快速尝试的窗口。",
      "action": "把大决定拆成可逆的小步试验，用小成本换真实信息。"
    },
    "resilience": {
      "domain": "stability",
      "name": "复原韧性",
      "oneLiner": "遇到挫折后，你能逐步调整，并重新找到前进的支点。",
      "summary": "你并非不会受影响，而是有把情绪和行动重新组织起来的能力。压力之后，你通常能找到继续走的方式。",
      "looksLike": [
        "受挫后能逐渐恢复状态",
        "压力下仍能找到可做的事",
        "愿意从失败中提取经验"
      ],
      "watchout": "太习惯自己扛时，可能忽略及时求助。",
      "action": "准备一份个人恢复清单，写清楚哪些人、哪些行动能真正帮你回血。"
    },
    "fairness": {
      "domain": "stability",
      "name": "公平原则",
      "oneLiner": "你在意规则和机会是否对每个人公平。",
      "summary": "你重视一致性和原则感。即使面对压力，你也愿意为公平的做法发声，并希望规则能够被认真对待。",
      "looksLike": [
        "会注意规则是否一视同仁",
        "不喜欢靠关系破坏公平",
        "在必要时愿意为原则表达立场"
      ],
      "watchout": "坚持原则时，可能忽略情境差异和沟通方式。",
      "action": "先理解背景和约束，再清楚表达你的原则与底线。"
    }
  },
  "questions": [
    {
      "id": "Q001",
      "text": "遇到新话题时，我会主动追问更多细节。",
      "themeKey": "curiosity",
      "themeName": "好奇探索",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q002",
      "text": "做判断前，我会先想清背后的原因。",
      "themeKey": "insight",
      "themeName": "深度思考",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q003",
      "text": "面对复杂信息，我会先分类整理。",
      "themeKey": "structure",
      "themeName": "结构梳理",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q004",
      "text": "我常把看似无关的事物联系起来。",
      "themeKey": "creativity",
      "themeName": "创意联想",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q005",
      "text": "我会自然推演事情接下来可能怎么发展。",
      "themeKey": "foresight",
      "themeName": "趋势预见",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q006",
      "text": "目标明确时，我会主动推动进度。",
      "themeKey": "drive",
      "themeName": "目标驱动",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q007",
      "text": "信息差不多齐了，我就能做出决定。",
      "themeKey": "decisiveness",
      "themeName": "果断执行",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q008",
      "text": "我能长时间专注在一件重要的事上。",
      "themeKey": "focus",
      "themeName": "专注沉浸",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q009",
      "text": "计划改变时，我能较快调整行动。",
      "themeKey": "adaptability",
      "themeName": "灵活应变",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q010",
      "text": "即使短期没有反馈，我也能继续做重要的事。",
      "themeKey": "persistence",
      "themeName": "持续复利",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q011",
      "text": "我能较快察觉别人情绪的变化。",
      "themeKey": "empathy",
      "themeName": "情绪感知",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q012",
      "text": "我擅长把复杂想法讲得清楚。",
      "themeKey": "expression",
      "themeName": "表达感染",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q013",
      "text": "我容易和不同背景的人建立信任。",
      "themeKey": "collaboration",
      "themeName": "协作连接",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q014",
      "text": "关键时刻我愿意表达自己的立场。",
      "themeKey": "influence",
      "themeName": "影响带动",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q015",
      "text": "我容易发现别人尚未发挥的潜力。",
      "themeKey": "development",
      "themeName": "培养他人",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q016",
      "text": "答应别人的事情，我会负责到底。",
      "themeKey": "responsibility",
      "themeName": "责任担当",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q017",
      "text": "我喜欢提前安排时间和资源。",
      "themeKey": "order",
      "themeName": "秩序规划",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q018",
      "text": "做重要决定前，我会评估风险。",
      "themeKey": "prudence",
      "themeName": "审慎判断",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q019",
      "text": "遇到挫折后，我能逐渐恢复状态。",
      "themeKey": "resilience",
      "themeName": "复原韧性",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q020",
      "text": "我会注意规则是否对每个人一致。",
      "themeKey": "fairness",
      "themeName": "公平原则",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q021",
      "text": "我常常从一个问题延伸到另一个问题。",
      "themeKey": "curiosity",
      "themeName": "好奇探索",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q022",
      "text": "我习惯区分表面现象和真实原因。",
      "themeKey": "insight",
      "themeName": "深度思考",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q023",
      "text": "我喜欢找出事情的主次关系。",
      "themeKey": "structure",
      "themeName": "结构梳理",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q024",
      "text": "遇到常规方法失效时，我会尝试新角度。",
      "themeKey": "creativity",
      "themeName": "创意联想",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q025",
      "text": "做计划时，我会考虑未来几种可能。",
      "themeKey": "foresight",
      "themeName": "趋势预见",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q026",
      "text": "我喜欢把想法转化成可交付的结果。",
      "themeKey": "drive",
      "themeName": "目标驱动",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q027",
      "text": "面对选择，我不容易长期犹豫。",
      "themeKey": "decisiveness",
      "themeName": "果断执行",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q028",
      "text": "进入状态后，我不容易被外界打断。",
      "themeKey": "focus",
      "themeName": "专注沉浸",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q029",
      "text": "面对突发情况，我会先找可行方案。",
      "themeKey": "adaptability",
      "themeName": "灵活应变",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q030",
      "text": "我擅长通过稳定重复积累结果。",
      "themeKey": "persistence",
      "themeName": "持续复利",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q031",
      "text": "别人还没说明时，我常能感到他的真实状态。",
      "themeKey": "empathy",
      "themeName": "情绪感知",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q032",
      "text": "我能根据听众调整表达方式。",
      "themeKey": "expression",
      "themeName": "表达感染",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q033",
      "text": "我会主动照顾团队成员的参与感。",
      "themeKey": "collaboration",
      "themeName": "协作连接",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q034",
      "text": "我能推动一群人形成共同方向。",
      "themeKey": "influence",
      "themeName": "影响带动",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q035",
      "text": "我愿意花时间解释和示范。",
      "themeKey": "development",
      "themeName": "培养他人",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q036",
      "text": "我会持续跟进，直到任务真正完成。",
      "themeKey": "responsibility",
      "themeName": "责任担当",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q037",
      "text": "有清楚的清单会让我更安心。",
      "themeKey": "order",
      "themeName": "秩序规划",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q038",
      "text": "我会先考虑最坏的可能结果。",
      "themeKey": "prudence",
      "themeName": "审慎判断",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q039",
      "text": "压力大的时候，我仍会寻找可做的事。",
      "themeKey": "resilience",
      "themeName": "复原韧性",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q040",
      "text": "我不喜欢用关系破坏公平。",
      "themeKey": "fairness",
      "themeName": "公平原则",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q041",
      "text": "看到不熟悉的事物，我会想弄清楚它如何运作。",
      "themeKey": "curiosity",
      "themeName": "好奇探索",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q042",
      "text": "我喜欢独立思考，不急着跟随多数意见。",
      "themeKey": "insight",
      "themeName": "深度思考",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q043",
      "text": "我能把零散想法组织成清楚的框架。",
      "themeKey": "structure",
      "themeName": "结构梳理",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q044",
      "text": "我喜欢提出不同寻常的解决方案。",
      "themeKey": "creativity",
      "themeName": "创意联想",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q045",
      "text": "我能较早察觉环境中的变化信号。",
      "themeKey": "foresight",
      "themeName": "趋势预见",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q046",
      "text": "遇到阻力时，我会寻找办法继续向前。",
      "themeKey": "drive",
      "themeName": "目标驱动",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q047",
      "text": "在时间有限时，我能抓住关键做出判断。",
      "themeKey": "decisiveness",
      "themeName": "果断执行",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q048",
      "text": "我喜欢把注意力集中在当前任务。",
      "themeKey": "focus",
      "themeName": "专注沉浸",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q049",
      "text": "我不容易被原定安排完全困住。",
      "themeKey": "adaptability",
      "themeName": "灵活应变",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q050",
      "text": "我设定的长期习惯通常能坚持下来。",
      "themeKey": "persistence",
      "themeName": "持续复利",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q051",
      "text": "我会注意自己的表达是否让别人不舒服。",
      "themeKey": "empathy",
      "themeName": "情绪感知",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q052",
      "text": "我喜欢用故事或例子说明观点。",
      "themeKey": "expression",
      "themeName": "表达感染",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q053",
      "text": "合作时，我愿意协调不同意见。",
      "themeKey": "collaboration",
      "themeName": "协作连接",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q054",
      "text": "我善于让一个想法获得更多支持。",
      "themeKey": "influence",
      "themeName": "影响带动",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q055",
      "text": "我会给出具体反馈帮助别人进步。",
      "themeKey": "development",
      "themeName": "培养他人",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q056",
      "text": "出现问题的时候，我不急着推责。",
      "themeKey": "responsibility",
      "themeName": "责任担当",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q057",
      "text": "我会为复杂任务建立步骤和流程。",
      "themeKey": "order",
      "themeName": "秩序规划",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q058",
      "text": "我通常会看清条件再承诺。",
      "themeKey": "prudence",
      "themeName": "审慎判断",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q059",
      "text": "我能从失败中提取有用的经验。",
      "themeKey": "resilience",
      "themeName": "复原韧性",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q060",
      "text": "我会为受到不公对待的人发声。",
      "themeKey": "fairness",
      "themeName": "公平原则",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q061",
      "text": "我愿意花时间比较不同观点。",
      "themeKey": "curiosity",
      "themeName": "好奇探索",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q062",
      "text": "遇到复杂问题，我会寻找更深层的逻辑。",
      "themeKey": "insight",
      "themeName": "深度思考",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q063",
      "text": "做项目时，我会先搭结构再填内容。",
      "themeKey": "structure",
      "themeName": "结构梳理",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q064",
      "text": "我能从别的领域借来灵感。",
      "themeKey": "creativity",
      "themeName": "创意联想",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q065",
      "text": "我会为尚未发生的问题提前准备。",
      "themeKey": "foresight",
      "themeName": "趋势预见",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q066",
      "text": "我会为自己设定清晰的完成标准。",
      "themeKey": "drive",
      "themeName": "目标驱动",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q067",
      "text": "我愿意为团队打破僵局。",
      "themeKey": "decisiveness",
      "themeName": "果断执行",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q068",
      "text": "复杂任务反而更容易让我投入。",
      "themeKey": "focus",
      "themeName": "专注沉浸",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q069",
      "text": "我能根据新信息快速修改判断。",
      "themeKey": "adaptability",
      "themeName": "灵活应变",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q070",
      "text": "遇到重复性任务，我仍会保持质量。",
      "themeKey": "persistence",
      "themeName": "持续复利",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q071",
      "text": "我愿意先理解对方的处境再回应。",
      "themeKey": "empathy",
      "themeName": "情绪感知",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q072",
      "text": "在众人面前表达时，我通常能找到节奏。",
      "themeKey": "expression",
      "themeName": "表达感染",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q073",
      "text": "我擅长把合适的人连接起来。",
      "themeKey": "collaboration",
      "themeName": "协作连接",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q074",
      "text": "别人犹豫时，我能带动他们行动。",
      "themeKey": "influence",
      "themeName": "影响带动",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q075",
      "text": "看到别人成长会让我有成就感。",
      "themeKey": "development",
      "themeName": "培养他人",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q076",
      "text": "我重视自己说过的话是否兑现。",
      "themeKey": "responsibility",
      "themeName": "责任担当",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q077",
      "text": "我习惯把东西放在固定位置。",
      "themeKey": "order",
      "themeName": "秩序规划",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q078",
      "text": "我能提前发现计划中的漏洞。",
      "themeKey": "prudence",
      "themeName": "审慎判断",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q079",
      "text": "即使情绪低落，我也知道如何慢慢调整。",
      "themeKey": "resilience",
      "themeName": "复原韧性",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q080",
      "text": "做分配时，我会尽量依据明确标准。",
      "themeKey": "fairness",
      "themeName": "公平原则",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q081",
      "text": "接触到新知识会让我感到兴奋。",
      "themeKey": "curiosity",
      "themeName": "好奇探索",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q082",
      "text": "我会留意别人话里的动机和前提。",
      "themeKey": "insight",
      "themeName": "深度思考",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q083",
      "text": "我习惯把大问题拆成小步骤。",
      "themeKey": "structure",
      "themeName": "结构梳理",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q084",
      "text": "我喜欢组合已有元素，创造新做法。",
      "themeKey": "creativity",
      "themeName": "创意联想",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q085",
      "text": "我常思考一个决定在几个月后的影响。",
      "themeKey": "foresight",
      "themeName": "趋势预见",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q086",
      "text": "我常主动承担推动事情的角色。",
      "themeKey": "drive",
      "themeName": "目标驱动",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q087",
      "text": "即使结果不确定，我也敢先迈出一步。",
      "themeKey": "decisiveness",
      "themeName": "果断执行",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q088",
      "text": "我会主动减少干扰来完成深度工作。",
      "themeKey": "focus",
      "themeName": "专注沉浸",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q089",
      "text": "资源不足时，我会重新组合现有条件。",
      "themeKey": "adaptability",
      "themeName": "灵活应变",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q090",
      "text": "我愿意为一个长期目标持续投入。",
      "themeKey": "persistence",
      "themeName": "持续复利",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q091",
      "text": "我容易听出话语背后的情绪。",
      "themeKey": "empathy",
      "themeName": "情绪感知",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q092",
      "text": "我能用语言调动别人的注意力。",
      "themeKey": "expression",
      "themeName": "表达感染",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q093",
      "text": "我会关注团队气氛是否健康。",
      "themeKey": "collaboration",
      "themeName": "协作连接",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q094",
      "text": "我会在讨论中提出明确主张。",
      "themeKey": "influence",
      "themeName": "影响带动",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q095",
      "text": "我乐于为他人创造练习机会。",
      "themeKey": "development",
      "themeName": "培养他人",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q096",
      "text": "别人通常愿意把重要任务交给我。",
      "themeKey": "responsibility",
      "themeName": "责任担当",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q097",
      "text": "我喜欢让计划保持可追踪。",
      "themeKey": "order",
      "themeName": "秩序规划",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q098",
      "text": "面对诱惑时，我会考虑长期后果。",
      "themeKey": "prudence",
      "themeName": "审慎判断",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q099",
      "text": "我不会因为一次否定就放弃自己。",
      "themeKey": "resilience",
      "themeName": "复原韧性",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q100",
      "text": "即使对自己不利，我也愿意守原则。",
      "themeKey": "fairness",
      "themeName": "公平原则",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q101",
      "text": "我喜欢主动寻找新的信息来源。",
      "themeKey": "curiosity",
      "themeName": "好奇探索",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q102",
      "text": "我愿意花时间把一个问题想透。",
      "themeKey": "insight",
      "themeName": "深度思考",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q103",
      "text": "我常用清单或流程图帮助自己理清思路。",
      "themeKey": "structure",
      "themeName": "结构梳理",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q104",
      "text": "我会主动想象事情还能怎样不同。",
      "themeKey": "creativity",
      "themeName": "创意联想",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q105",
      "text": "我喜欢观察趋势，而不只看眼前。",
      "themeKey": "foresight",
      "themeName": "趋势预见",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q106",
      "text": "看到目标接近完成，我会更有动力。",
      "themeKey": "drive",
      "themeName": "目标驱动",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q107",
      "text": "我能在多个选项中快速排出优先级。",
      "themeKey": "decisiveness",
      "themeName": "果断执行",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q108",
      "text": "我愿意反复打磨一个重要细节。",
      "themeKey": "focus",
      "themeName": "专注沉浸",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q109",
      "text": "我能在不同角色和任务之间切换。",
      "themeKey": "adaptability",
      "themeName": "灵活应变",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q110",
      "text": "我不会因为一次挫折就放弃方向。",
      "themeKey": "persistence",
      "themeName": "持续复利",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q111",
      "text": "别人遇到困难时，我会主动关心。",
      "themeKey": "empathy",
      "themeName": "情绪感知",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q112",
      "text": "我会主动澄清容易误解的地方。",
      "themeKey": "expression",
      "themeName": "表达感染",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q113",
      "text": "我愿意分享信息和资源。",
      "themeKey": "collaboration",
      "themeName": "协作连接",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q114",
      "text": "我能用事实和愿景说服他人。",
      "themeKey": "influence",
      "themeName": "影响带动",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q115",
      "text": "我愿意分享自己的经验和方法。",
      "themeKey": "development",
      "themeName": "培养他人",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q116",
      "text": "我会主动补位，避免事情掉在地上。",
      "themeKey": "responsibility",
      "themeName": "责任担当",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q117",
      "text": "我会提前发现流程中的遗漏。",
      "themeKey": "order",
      "themeName": "秩序规划",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q118",
      "text": "我重视稳妥，而不是只追求速度。",
      "themeKey": "prudence",
      "themeName": "审慎判断",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q119",
      "text": "我能在困难中保持基本行动。",
      "themeKey": "resilience",
      "themeName": "复原韧性",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q120",
      "text": "我会检查机会是否被少数人垄断。",
      "themeKey": "fairness",
      "themeName": "公平原则",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q121",
      "text": "我会为了满足好奇而尝试新工具或新方法。",
      "themeKey": "curiosity",
      "themeName": "好奇探索",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q122",
      "text": "我常从一件小事联想到更普遍的规律。",
      "themeKey": "insight",
      "themeName": "深度思考",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q123",
      "text": "我能快速发现信息中的重复和缺口。",
      "themeKey": "structure",
      "themeName": "结构梳理",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q124",
      "text": "我常有很多点子同时出现。",
      "themeKey": "creativity",
      "themeName": "创意联想",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q125",
      "text": "我能想象未来场景并据此调整方向。",
      "themeKey": "foresight",
      "themeName": "趋势预见",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q126",
      "text": "我不喜欢事情长期停留在讨论阶段。",
      "themeKey": "drive",
      "themeName": "目标驱动",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q127",
      "text": "我会为做出的决定承担后果。",
      "themeKey": "decisiveness",
      "themeName": "果断执行",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q128",
      "text": "我能持续追踪一条思路直到有结果。",
      "themeKey": "focus",
      "themeName": "专注沉浸",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q129",
      "text": "变化来临时，我通常能保持行动力。",
      "themeKey": "adaptability",
      "themeName": "灵活应变",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q130",
      "text": "我能把大目标拆成每天可完成的小行动。",
      "themeKey": "persistence",
      "themeName": "持续复利",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q131",
      "text": "我能在群体中感知气氛的变化。",
      "themeKey": "empathy",
      "themeName": "情绪感知",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q132",
      "text": "我善于总结并传达讨论重点。",
      "themeKey": "expression",
      "themeName": "表达感染",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q133",
      "text": "我能让合作对象感到被尊重。",
      "themeKey": "collaboration",
      "themeName": "协作连接",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q134",
      "text": "我愿意代表团队对外发声。",
      "themeKey": "influence",
      "themeName": "影响带动",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q135",
      "text": "我能根据对方水平调整指导方式。",
      "themeKey": "development",
      "themeName": "培养他人",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q136",
      "text": "我做事时会考虑对他人和团队的影响。",
      "themeKey": "responsibility",
      "themeName": "责任担当",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q137",
      "text": "我通常按优先级安排任务。",
      "themeKey": "order",
      "themeName": "秩序规划",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q138",
      "text": "我愿意多花时间确认关键信息。",
      "themeKey": "prudence",
      "themeName": "审慎判断",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q139",
      "text": "我愿意向信任的人寻求帮助。",
      "themeKey": "resilience",
      "themeName": "复原韧性",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q140",
      "text": "我重视让每个人都有表达机会。",
      "themeKey": "fairness",
      "themeName": "公平原则",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q141",
      "text": "我愿意进入陌生领域从头学习。",
      "themeKey": "curiosity",
      "themeName": "好奇探索",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q142",
      "text": "我会质疑看起来理所当然的结论。",
      "themeKey": "insight",
      "themeName": "深度思考",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q143",
      "text": "我喜欢建立可重复使用的方法。",
      "themeKey": "structure",
      "themeName": "结构梳理",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q144",
      "text": "我不排斥试验尚未被验证的方法。",
      "themeKey": "creativity",
      "themeName": "创意联想",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q145",
      "text": "我会提醒别人注意潜在的机会或风险。",
      "themeKey": "foresight",
      "themeName": "趋势预见",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q146",
      "text": "我会跟踪任务进展，直到它真正落地。",
      "themeKey": "drive",
      "themeName": "目标驱动",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q147",
      "text": "别人犹豫时，我常能给出明确方向。",
      "themeKey": "decisiveness",
      "themeName": "果断执行",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q148",
      "text": "我在安静、连续的时间里效率最高。",
      "themeKey": "focus",
      "themeName": "专注沉浸",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q149",
      "text": "我愿意尝试与原来不同的路径。",
      "themeKey": "adaptability",
      "themeName": "灵活应变",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q150",
      "text": "我相信积累比一时冲刺更可靠。",
      "themeKey": "persistence",
      "themeName": "持续复利",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q151",
      "text": "我重视让人感到被看见和被理解。",
      "themeKey": "empathy",
      "themeName": "情绪感知",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q152",
      "text": "我表达观点时通常有条理。",
      "themeKey": "expression",
      "themeName": "表达感染",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q153",
      "text": "我常主动承担沟通和协调工作。",
      "themeKey": "collaboration",
      "themeName": "协作连接",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q154",
      "text": "我能影响决策而不只是提供建议。",
      "themeKey": "influence",
      "themeName": "影响带动",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q155",
      "text": "我会鼓励别人尝试更大的挑战。",
      "themeKey": "development",
      "themeName": "培养他人",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q156",
      "text": "我愿意为结果承担应有责任。",
      "themeKey": "responsibility",
      "themeName": "责任担当",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q157",
      "text": "我擅长把混乱局面整理出秩序。",
      "themeKey": "order",
      "themeName": "秩序规划",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q158",
      "text": "我会为可能出现的风险准备备选方案。",
      "themeKey": "prudence",
      "themeName": "审慎判断",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q159",
      "text": "我常能给自己找到继续前进的理由。",
      "themeKey": "resilience",
      "themeName": "复原韧性",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q160",
      "text": "我愿意解释决定背后的公平依据。",
      "themeKey": "fairness",
      "themeName": "公平原则",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q161",
      "text": "我经常提出“为什么会这样”的问题。",
      "themeKey": "curiosity",
      "themeName": "好奇探索",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q162",
      "text": "我重视判断的深度，而不只是速度。",
      "themeKey": "insight",
      "themeName": "深度思考",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q163",
      "text": "别人常能借助我的整理更快理解问题。",
      "themeKey": "structure",
      "themeName": "结构梳理",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q164",
      "text": "我能用比喻或联想解释复杂概念。",
      "themeKey": "creativity",
      "themeName": "创意联想",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q165",
      "text": "我愿意为长期目标放弃一些短期满足。",
      "themeKey": "foresight",
      "themeName": "趋势预见",
      "domainKey": "thinking",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q166",
      "text": "我愿意为重要结果投入额外精力。",
      "themeKey": "drive",
      "themeName": "目标驱动",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q167",
      "text": "我不需要所有条件完美才开始行动。",
      "themeKey": "decisiveness",
      "themeName": "果断执行",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q168",
      "text": "我会为了完成关键任务推迟即时回应。",
      "themeKey": "focus",
      "themeName": "专注沉浸",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q169",
      "text": "我能从意外中发现新的可能。",
      "themeKey": "adaptability",
      "themeName": "灵活应变",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q170",
      "text": "我会定期回到尚未完成的重要事情上。",
      "themeKey": "persistence",
      "themeName": "持续复利",
      "domainKey": "action",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q171",
      "text": "我会根据对方的反应调整沟通方式。",
      "themeKey": "empathy",
      "themeName": "情绪感知",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q172",
      "text": "我能让抽象内容变得更容易理解。",
      "themeKey": "expression",
      "themeName": "表达感染",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q173",
      "text": "我重视共同目标胜过个人表现。",
      "themeKey": "collaboration",
      "themeName": "协作连接",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q174",
      "text": "我常主动承担带头的角色。",
      "themeKey": "influence",
      "themeName": "影响带动",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q175",
      "text": "我重视培养长期能力，而不只解决眼前问题。",
      "themeKey": "development",
      "themeName": "培养他人",
      "domainKey": "people",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q176",
      "text": "即使没人监督，我也会按标准完成。",
      "themeKey": "responsibility",
      "themeName": "责任担当",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q177",
      "text": "我愿意维护长期有效的规则和标准。",
      "themeKey": "order",
      "themeName": "秩序规划",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q178",
      "text": "我一般不轻易做出高风险承诺。",
      "themeKey": "prudence",
      "themeName": "审慎判断",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q179",
      "text": "经历变化后，我通常能重新建立节奏。",
      "themeKey": "resilience",
      "themeName": "复原韧性",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    },
    {
      "id": "Q180",
      "text": "我看到不一致的做法时，会主动指出。",
      "themeKey": "fairness",
      "themeName": "公平原则",
      "domainKey": "stability",
      "coefficient": 1,
      "reverse": false
    }
  ]
};
  if (typeof module !== "undefined" && module.exports) module.exports = bank;
  root.STRENGTHS_BANK = bank;
})(typeof window !== "undefined" ? window : globalThis);

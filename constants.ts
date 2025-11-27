import { ContentData, Language } from './types';

// ==================================================================================
// 资源链接 / ASSETS
// ==================================================================================
export const PROFILE_IMAGE = "https://i.postimg.cc/D0cZ73YY/5705dabafa41867aae67508a3257bce8.jpg"; 
export const WECHAT_QR = "https://i.postimg.cc/2jvb6PZr/Screen-Shot-2025-11-21-174929-506.png";

// Lifestyle Images
const LIFESTYLE_IMGS = {
  cycling: "https://i.postimg.cc/Gt99zTS4/a2e6531bfd5ab3d768f73c7af6a0406c.jpg",
  travel: "https://i.postimg.cc/T1hhQ5H2/18ba752bc1aadd28b223716c05903d3d.jpg",
  sports: "https://i.postimg.cc/Zn00jvDS/08b7f5a3e05ee05a6552be5bec42a28c.jpg",
  life: "https://i.postimg.cc/Y9dh1z8B/6d52bafd84f33d89b8cc2a9e318cf75e.jpg"
};

export const CONTENT: Record<Language, ContentData> = {
  zh: {
    nav: {
      design: "设计作品",
      marketing: "营销案例",
      lifestyle: "热爱生活",
      about: "关于我",
      contact: "联系方式"
    },
    hero: {
      nameZh: "刘嘉欣",
      nameEn: "Cola Liu",
      role: "品牌运营负责人",
      prefix: "将利他融入", 
      typewriterPhrases: [
        "营销策划",
        "品牌体验",
        "创意生产"
      ],
      ctaText: "联系我 Call Me",
      wechatLabel: "扫码加微信",
      educationTitle: "教育背景",
      education: [
        { school: "英迪国际大学", degree: "工商管理硕士 (MBA)", year: "2025应届" },
        { school: "北京外国语大学", degree: "工商管理本科" }
      ],
      certificationTitle: "核心能力",
      certifications: [
        { name: "PMP / CSPM-2", detail: "项目管理双认证" },
        { name: "品牌全案", detail: "0-1 品牌体系构建" },
        { name: "AIPL增长", detail: "全链路营销策略" },
        { name: "跨职能领导", detail: "甲乙方双重视角" }
      ],
      personalDescription: "拥有10年+品牌全案与营销战略经验，深耕新消费+科技赛道。"
    },
    lifestyle: {
      title: "生活与热爱",
      subtitle: "不止于工作，更在于探索世界。",
      items: [
        { title: "骑行", description: "在风中感受城市的脉搏", image: LIFESTYLE_IMGS.cycling, size: "large" },
        { title: "旅行", description: "探索未知的风景", image: LIFESTYLE_IMGS.travel, size: "small" },
        { title: "运动", description: "保持向上的生命力", image: LIFESTYLE_IMGS.sports, size: "small" },
        { title: "生活", description: "在伦敦大本钟晨跑", image: LIFESTYLE_IMGS.life, size: "tall" }
      ]
    },
    stats: {
      title: "关键增长指标 (ROI驱动)",
      items: [
        { project: "友宝UBOX", label: "战略项目覆盖规模", value: "100K+", subLabel: "智能设备投放量" },
        { project: "中国移动", label: "核心用户资产增值", value: "1550W+", subLabel: "“网龄活动”用户数" },
        { project: "稳健医疗", label: "品牌升级商业价值", value: "+200%", subLabel: "品牌升级首季销量" }
      ]
    },
    experience: {
      title: "工作经验",
      items: [
        {
          company: "全球视野与职业发展项目",
          role: "“自我”项目管理者",
          period: "2024.09 – 至今",
          highlights: [
            "主导职业战略升级：基于10年工作经验，为突破职业瓶颈，主动赴海外攻读硕士并深度游历欧洲（5国20城）。",
            "价值转化：远程兼任留学及品牌顾问，将一手跨文化洞察应用于商业实践，保持工作连续性。",
            "能力升级：极大提升了全球化视野、市场洞察和复杂问题解决能力，为下一阶段的职业挑战储备了独特的复合型优势。"
          ]
        },
        {
          company: "亚信科技 (中国) 有限公司",
          role: "项目经理 | Project Manager",
          period: "2022.06 - 2024.08",
          highlights: [
            "主导核心省级APP向全国统一APP数字化转型项目，实现300W+用户规模化迁移，转化率长期位列全国前五。",
            "策划“移动2024网龄活动”年度增长策略，达成参与人数1550W+，有效APP激活200W+，显著提升核心用户资产价值。",
            "精益管理20人运营团队，建立高标准交付流程，确保客户满意度指标连续保持98%（全国运营第一梯队）。"
          ]
        },
        {
          company: "友宝科斯科技 (上市公司)",
          role: "策划经理 (品牌部)",
          period: "2018.03 - 2022.06",
          highlights: [
            "策划部署与支付宝的全国级战略合作“刷脸支付”，在300+城市部署10W+智能设备，迅速建立市场领导地位。",
            "推动集团多品牌（友宝、友咖、友唱等）从0-1到1-N的完整品牌体系构建。",
            "整合营销策划执行多项异业合作，其中与华为联合推广活动荣获“年度最佳移动整合营销奖”。"
          ]
        },
        {
          company: "与行品牌管理有限公司",
          role: "视觉设计主管",
          period: "2014.11 - 2018.03",
          highlights: [
            "制定并交付母婴、医疗、金融等多行业客户品牌0-10全案策略，搭建双微一抖快等主流内容阵地。",
            "推动稳健医疗全线产品品牌视觉升级（完成6个系列近50+产品包装），产品销量在上线首季同比实现+200%增长。",
            "策划农业银行网捷贷H5营销活动，在低预算下实现100W+曝光和70W+点击。"
          ]
        }
      ]
    },
    portfolio: {
      title: "精选作品",
      designTab: "视觉设计",
      marketingTab: "营销策划",
      items: [
        // MARKETING CASES (ZH)
        { 
          id: 1, 
          title: "中国移动：网龄成长计划", 
          category: "忠诚度营销", 
          year: "2024",
          stats: "1550W+ 参与用户",
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/China_Mobile_logo_%282019%29.svg/1599px-China_Mobile_logo_%282019%29.svg.png?20241018090546",
          description: "2024年“网龄成长计划”，将用户时间资产化，通过情感维系与低成本福利实现高留存。",
          details: {
            context: "2024年，中国移动深化“网龄成长计划”（或称网龄回馈计划），核心是根据用户使用移动号码的时长（网龄）提供差异化的专属福利。活动覆盖全国，但具体细则和礼品内容在各省市有所不同。",
            strategy: "1. 客户生命周期管理：该活动旨在维护老客户忠诚度、降低用户离网率，并提升APP使用率。通过回馈“网龄”这一指标，强化用户对品牌的归属感。\n2. 分级福利与多样化礼品：用户网龄越长，权益等级越高（如免费领取10GB流量、话费券等）。\n3. 线上主导：主要的查询和领取渠道是中国移动APP，用户可以在APP内自助办理。",
            result: "在市场竞争激烈的背景下，维系老客户的成本通常低于获取新客户的成本。通过这类活动，移动公司精准地向高价值用户提供了个性化服务，提高客户满意度，达成参与人数1550W+。"
          }
        },
        { 
          id: 2, 
          title: "友宝 x 支付宝：刷脸支付推广", 
          category: "智慧零售战略", 
          year: "2018",
          stats: "10W+ 智能设备",
          image: "https://i.postimg.cc/zGD8KLvC/c40ac9eb63699cce091459aec714a917.png",
          description: "联合推出刷脸支付售货机，技术驱动体验升级，共同抢占无人零售新风口。",
          details: {
            context: "2018年左右，自助售货机运营商友宝（Ubox）积极响应新技术趋势，在其智能售货机上引入了刷脸支付（人脸识别支付）功能，并结合具体的营销活动进行推广，这是当时零售科技领域的前沿探索。",
            strategy: "1. 技术创新：友宝是国内首批大规模应用人脸识别支付技术的自助零售终端之一。这一举措紧跟支付宝和微信支付等巨头推广“蜻蜓”、“青蛙”等刷脸支付设备的浪潮。\n2. 体验营销：初期推广活动通常以“首次使用刷脸支付立减”、“免费领取饮料”或“刷脸支付专属折扣”为卖点，吸引用户体验新技术。\n3. 数据沉淀：通过刷脸绑定用户身份和支付账户，有助于友宝获取更精准的用户消费数据，为后续的精准营销打下基础。",
            result: "提升效率：缩短了交易时间，提升了售货机的周转效率。品牌形象升级：应用前沿科技有助于树立友宝科技感、现代化的品牌形象。"
          }
        },
        { 
          id: 3, 
          title: "天猫U先 x 友宝：MVP试用闭环", 
          category: "O2O场景营销", 
          year: "2019",
          stats: "精准获客渠道",
          image: "https://i.postimg.cc/y6ZpdpNg/e8fb80fe3550878e3e87c62b4753bfb6.png",
          description: "打造“线下扫码，1分购得”的轻量化试用模式，高效搜集用户信息和消费数据。",
          details: {
            context: "2018-2019年左右，天猫U先与友宝（Ubox）智能售货机/派样机进行深度合作，在人流密集场景（商场、校园等）放置装有多种试用装的机器，用户可现场扫码支付1分钱获得样品。",
            strategy: "1. 线下即时体验模式：用户在友宝机器前可直观选择心仪的试用装，现场扫码支付（如1分钱）即刻获取。核心在于简化流程、即时满足。\n2. 数据搜集与用户洞察：通过1分购方式，平台能精准搜集用户的购买记录、偏好信息和联系方式。利用这些数据分析用户的试用品类偏好，为后续天猫U先平台推荐正装购买提供数据支持。\n3. 品牌与场景融合：天猫U先利用友宝的线下广泛铺设点位，将电商触角延伸至用户日常生活场景。友宝机器成为品牌商品高效触达消费者的终端，解决传统派样效率低、数据无法追踪的痛点。",
            result: "MVP（最小可行产品）试水：该模式可以看作是品牌在特定场景下测试新品或试用品类的“最小可行产品”实验，快速验证市场反应。"
          }
        },
        { 
          id: 4, 
          title: "稳健医疗：品牌战略升级", 
          category: "品牌升级", 
          year: "2016",
          stats: "+200% 销量增长",
          image: "https://www.winnermedical.cn/Uploads/Temp/image/20211026/61778604016b1.jpg",
          description: "从B2B制造向B2C消费品牌转型，打造“全棉时代”新增长极。",
          details: {
            context: "2016年，稳健医疗进行了一次重要的品牌战略升级和产品线拓展策划。核心是从传统的B2B医用敷料制造企业，向B2C（面向消费者）的“大健康”领域转型，并通过其核心技术“全棉水刺非织造布”打造明星消费品牌“全棉时代”（PurCotton）。",
            strategy: "1. 技术驱动转型：将医用级的高标准和核心专利技术（全棉水刺非织造布）应用到消费品领域，生产出无荧光剂、无刺激、更安全的全棉产品。\n2. “医转民”的品牌定位：强调“医疗级标准，民用级体验”。营销策划重点突出产品的安全、健康、舒适属性。\n3. 渠道拓展：积极发展电商渠道（天猫、京东旗舰店）和线下直营店，增加消费者触点。",
            result: "全棉时代品牌迅速崛起，成为稳健医疗业绩增长的主要驱动力，成功开辟了广阔的消费品市场。成功在消费者心中建立了“棉柔巾”这一新品类认知。"
          }
        },
        // DESIGN CASES (ZH)
        { 
          id: 5, 
          title: "友宝全品牌营销视觉", 
          category: "品牌视觉VI", 
          year: "2018",
          image: "https://i.postimg.cc/288Kxnd3/20251124she-ji-03.jpg",
          gallery: [
            "https://i.postimg.cc/288Kxnd3/20251124she-ji-03.jpg",
            "https://i.postimg.cc/kXXpyWNB/20251124she-ji-04.jpg",
            "https://i.postimg.cc/xTT4PLG8/20251124she-ji-05.jpg",
            "https://i.postimg.cc/CLLQ4bC1/20251124she-ji-06.jpg",
            "https://i.postimg.cc/c495k6TH/20251124she-ji-07.jpg",
            "https://i.postimg.cc/NfJPCLbr/20251124she-ji-08.jpg",
            "https://i.postimg.cc/3JSbfW94/20251124she-ji-09.jpg",
            "https://i.postimg.cc/FsWnC1Gc/20251124she-ji-10.jpg",
            "https://i.postimg.cc/MKPr3Xty/20251124she-ji-11.jpg",
            "https://i.postimg.cc/15CY74Mr/20251124she-ji-12.jpg",
            "https://i.postimg.cc/3JSbfW9S/20251124she-ji-13.jpg",
            "https://i.postimg.cc/FHYCMmnj/20251124she-ji-14.jpg",
            "https://i.postimg.cc/T3KNzG4x/20251124she-ji-15.jpg",
            "https://i.postimg.cc/dVgNvXbv/20251124she-ji-16.jpg",
            "https://i.postimg.cc/JzSYmgfL/20251124she-ji-17.jpg",
            "https://i.postimg.cc/6pFbwSkq/20251124she-ji-18.jpg",
            "https://i.postimg.cc/HkFvHKqJ/20251124she-ji-19.jpg"
          ],
          description: "VOL.01 | 友宝全品牌体系构建：包括Logo优化、售货机机身贴纸、展会空间及子品牌（友唱/友咖）的视觉统一。",
          details: { 
            context: "随着友宝业务的快速扩张，涵盖了智能货柜、KTV、咖啡机等多个领域，品牌形象亟需统一以建立强大的市场认知。", 
            strategy: "建立以橙色为主色调的视觉识别系统(VI)。\n1. 品牌标准化：规范了“友宝”、“友唱”、“友咖”的Logo与中英文字体。\n2. 终端形象：设计了统一的售货机机身贴纸与人脸识别模块海报。\n3. 空间体验：打造了包含形象墙、机器展示区、洽谈区的专业展厅。", 
            result: "实现了从单一售货机到多元化智能零售平台的品牌形象升级，助力其在全国300+城市的市场推广与招商。" 
          }
        },
        { 
          id: 6, 
          title: "稳健医疗 | 整合营销视觉及展厅设计", 
          category: "空间与包装", 
          year: "2016",
          image: "https://i.postimg.cc/bv8bQ9b9/20251124she-ji-26.jpg",
          gallery: [
            "https://i.postimg.cc/bv8bQ9b9/20251124she-ji-26.jpg",
            "https://i.postimg.cc/HLH5Q950/20251124she-ji-27.jpg",
            "https://i.postimg.cc/jjKNz4NH/20251124she-ji-28.jpg",
            "https://i.postimg.cc/CKYDjsDB/20251124she-ji-29.jpg",
            "https://i.postimg.cc/25mv47vK/20251124she-ji-30.jpg",
            "https://i.postimg.cc/5t3zpQqh/20251124she-ji-31.jpg",
            "https://i.postimg.cc/tg56DnN7/20251124she-ji-32.jpg",
            "https://i.postimg.cc/wvjmrxw9/20251124she-ji-33.jpg"
          ], 
          description: "VOL.02 | 医疗级产品包装规范、企业展厅（D1-D3区域）空间规划及文化墙设计。",
           details: { 
             context: "稳健医疗作为中国医用敷料行业的标杆，需要对外展示其“医疗+消费”双轮驱动的品牌实力。", 
             strategy: "1. 包装规范：统一了口罩、棉球等医疗级产品的包装视觉，强调专业与洁净。\n2. 展厅规划：设计了D1-D3展厅区域，还原了医院手术室、病房等真实场景。\n3. 文化植入：在展厅中融入企业使命（Vision/Mission/Values），传递“Enjoy Healthy Life”的理念。", 
             result: "成功塑造了专业、值得信赖的国际化医疗品牌形象，展厅成为接待全球客户与合作伙伴的重要窗口。" 
           }
        },
        { 
          id: 7, 
          title: "中国农业银行 | 线上线下活动视觉策划", 
          category: "活动视觉策划", 
          year: "2017",
          image: "https://i.postimg.cc/FFfZFGxj/20251124she-ji-20.jpg", 
          gallery: [
            "https://i.postimg.cc/FFfZFGxj/20251124she-ji-20.jpg",
            "https://i.postimg.cc/HWftr5SM/20251124she-ji-21.jpg",
            "https://i.postimg.cc/2jPx1vHF/20251124she-ji-22.jpg",
            "https://i.postimg.cc/y6wTD9fc/20251124she-ji-23.jpg",
            "https://i.postimg.cc/WpQ7dr9w/20251124she-ji-24.jpg",
            "https://i.postimg.cc/2jPx1vHH/20251124she-ji-25.jpg"
          ],
          description: "VOL.03 | “网捷贷”H5营销活动主视觉、线下发布会物料、ETC信用卡及节日热点海报设计。",
           details: { 
             context: "农业银行深圳分行需要推广其金融产品（如网捷贷、信用卡），并希望通过年轻化的视觉语言吸引用户。", 
             strategy: "1. 扁平化插画：采用清新的扁平化风格设计“网捷贷”H5和海报，降低金融产品的距离感。\n2. 情感营销：结合春节、教师节等热点设计海报，建立情感连接。\n3. 线下发布：设计“登峰造极”发布会主视觉，营造高端大气的活动氛围。", 
             result: "在低预算下实现了高曝光，H5活动点击量突破70W+，有效促进了网捷贷等金融产品的线上申请与转化。" 
           }
        },
        { 
          id: 8, 
          title: "其他设计合集", 
          category: "多领域设计", 
          year: "2014-2022",
          image: "https://i.postimg.cc/jSh631sr/20251124she-ji-40.jpg",
          gallery: [
            "https://i.postimg.cc/jSh631sr/20251124she-ji-40.jpg",
            "https://i.postimg.cc/QdqgYzj2/20251124she-ji-41.jpg",
            "https://i.postimg.cc/rw9GZH86/20251124she-ji-42.jpg",
            "https://i.postimg.cc/L8VkQWHK/20251124she-ji-43.jpg",
            "https://i.postimg.cc/sgJPHLVz/20251124she-ji-44.jpg",
            "https://i.postimg.cc/6Q5rkhQD/20251124she-ji-45.jpg",
            "https://i.postimg.cc/8CPR2b5V/20251124she-ji-46.jpg",
            "https://i.postimg.cc/FKsyMxRs/20251124she-ji-47.jpg",
            "https://i.postimg.cc/PqrWgMxP/20251124she-ji-48.jpg",
            "https://i.postimg.cc/GphFWj2G/20251124she-ji-49.jpg",
            "https://i.postimg.cc/QMxQ2qt5/20251124she-ji-50.jpg"
          ],
          description: "VOL.04 | 包含农业、餐饮、科技等多行业的Logo设计、VI系统、包装插画及IP形象设计精选。",
           details: { 
             context: "在多年的设计生涯中，为不同行业的客户（如赛纳三维、芒果青年、悦什等）提供了品牌视觉服务。", 
             strategy: "1. 行业差异化：针对科技公司强调专业与创新，针对餐饮品牌强调亲和力与食欲感。\n2. 多元化表现：运用插画、字体设计、三维渲染等多种视觉表现手法，量身定制品牌形象。\n3. 完整性：从Logo到包装再到周边延展，提供完整的视觉解决方案。", 
             result: "帮助多个中小企业及新消费品牌建立了高识别度的视觉形象，有效助力了品牌在各自领域的落地与传播。" 
           }
        },
      ]
    },
    contact: {
      title: "联系方式",
      email: "liujiaxi0597@vip.qq.com",
      phone: "187-7027-0511"
    }
  },
  en: {
    nav: {
      design: "Design",
      marketing: "Marketing",
      lifestyle: "Love Life", 
      about: "About",
      contact: "Contact"
    },
    hero: {
      nameZh: "刘嘉欣",
      nameEn: "Cola Liu",
      role: "Brand Operation Manager",
      prefix: "Integrating Altruism into",
      typewriterPhrases: [
        "Marketing Strategy",
        "Brand Experience",
        "Creative Production"
      ],
      ctaText: "Call Me",
      wechatLabel: "Scan WeChat",
      educationTitle: "Education",
      education: [
        { school: "INTI International University", degree: "MBA", year: "2025" },
        { school: "Beijing Foreign Studies University", degree: "BA in Business Admin" }
      ],
      certificationTitle: "Core Skills",
      certifications: [
        { name: "PMP / CSPM-2", detail: "Project Management" },
        { name: "Brand Strategy", detail: "0-1 Brand Building" },
        { name: "AIPL Growth", detail: "Full-Funnel Marketing" },
        { name: "Leadership", detail: "Cross-Functional" }
      ],
      personalDescription: "10+ years of experience in brand strategy & marketing, focusing on New Consumption + Tech."
    },
    lifestyle: {
      title: "Life & Passion",
      subtitle: "Exploring the world beyond work.",
      items: [
        { title: "Cycling", description: "Feeling the pulse of the city", image: LIFESTYLE_IMGS.cycling, size: "large" },
        { title: "Travel", description: "Exploring unknown sceneries", image: LIFESTYLE_IMGS.travel, size: "small" },
        { title: "Sports", description: "Keeping the vitality up", image: LIFESTYLE_IMGS.sports, size: "small" },
        { title: "Life", description: "Morning run at Big Ben, London", image: LIFESTYLE_IMGS.life, size: "tall" }
      ]
    },
    stats: {
      title: "Growth Data (ROI Driven)",
      items: [
        { project: "Ubox Tech", label: "Strategy Coverage", value: "100K+", subLabel: "Smart Devices" },
        { project: "China Mobile", label: "User Asset Growth", value: "1550W+", subLabel: "Participants" },
        { project: "Winner Medical", label: "Brand Value", value: "+200%", subLabel: "Sales Growth" }
      ]
    },
    experience: {
      title: "Professional Impact",
      items: [
        {
          company: "Global Vision & Career Development Project",
          role: "Self-Project Manager",
          period: "2024.09 – Present",
          highlights: [
            "Led Career Strategy Upgrade: Studied abroad for a Master's and traveled Europe (5 countries, 20 cities) to break career bottlenecks based on 10 years of experience.",
            "Value Conversion: Remotely served as a study abroad & brand consultant, applying cross-cultural insights to business practice.",
            "Capability Upgrade: Significantly enhanced global vision, market insights, and complex problem-solving skills."
          ]
        },
        {
          company: "AsiaInfo Tech (China)",
          role: "Project Manager",
          period: "2022.06 - 2024.08",
          highlights: [
            "Led digital transformation of provincial APP to national APP, migrating 3M+ users; conversion rates ranked top 5 nationally.",
            "Planned 'Mobile 2024 Tenure Campaign' achieving 15.5M+ participants and reactivating 2M+ users, significantly boosting user asset value.",
            "Managed a 20-person team with lean management, maintaining 98% customer satisfaction (top tier nationally)."
          ]
        },
        {
          company: "Ubox Tech (Public Company)",
          role: "Planning Manager",
          period: "2018.03 - 2022.06",
          highlights: [
            "Strategized 'Face Payment' cooperation with Alipay, deploying 100K+ devices across 300+ cities.",
            "Built comprehensive brand systems for multiple sub-brands (Ubox, U-Coffee, U-Sing) from 0-1 to 1-N.",
            "Executed cross-industry marketing; won 'Best Mobile Integrated Marketing Award' for Huawei joint campaign."
          ]
        },
        {
          company: "Yuxing Brand Management",
          role: "Visual Design Supervisor",
          period: "2014.11 - 2018.03",
          highlights: [
            "Delivered 0-10 brand strategies for healthcare/finance clients; built content matrix across major social platforms.",
            "Led visual upgrade for Winner Medical (50+ SKUs), resulting in 200% YoY sales growth in the first quarter.",
            "Planned ABC 'Net Loan' H5 campaign, achieving 1M+ exposure and 700K+ clicks on a low budget."
          ]
        }
      ]
    },
    portfolio: {
      title: "Selected Works",
      designTab: "Visual Design",
      marketingTab: "Marketing Strategy",
      items: [
        // Marketing Cases (EN Mirror)
        { 
          id: 1, 
          title: "China Mobile: Tenure Growth Plan", 
          category: "Loyalty Marketing", 
          year: "2024",
          stats: "15.5M+ Participants",
          image: "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/China_Mobile_logo_%282019%29.svg/1599px-China_Mobile_logo_%282019%29.svg.png?20241018090546",
          description: "2024 Tenure Plan: Gamifying user time to boost retention via emotional bonding and benefits.",
          details: {
            context: "China Mobile deepened its 'Tenure Growth Plan' in 2024, providing differentiated benefits based on user tenure to secure loyalty across the nation.",
            strategy: "1. CLM Strategy: Managing customer lifecycle to reduce churn and boost APP usage by rewarding tenure.\n2. Graded Benefits: Higher value rewards (data/coupons) for longer-term users.\n3. Online-First: Centralizing claims within the China Mobile APP to drive digital engagement.",
            result: "In a competitive market, maintaining old users is cheaper than acquiring new ones. This precise targeting achieved 15.5M+ participants."
          }
        },
        { 
          id: 2, 
          title: "Ubox x Alipay: Face Payment", 
          category: "Smart Retail", 
          year: "2018",
          stats: "100K+ Devices",
          image: "https://i.postimg.cc/zGD8KLvC/c40ac9eb63699cce091459aec714a917.png",
          description: "Leading the unmanned retail revolution with strategic facial recognition deployment.",
          details: {
            context: "Ubox partnered with Alipay in 2018 to pioneer 'Face Payment' in vending machines, embracing the unmanned retail trend.",
            strategy: "1. Tech Innovation: Enabling 'Grab & Go' via biometric payment.\n2. Experience Marketing: 'First Scan Free' campaigns to drive adoption.\n3. Data Accumulation: Precision user profiling via biometric account binding.",
            result: "Improved machine efficiency and reduced transaction time. Established Ubox as a tech-forward brand leader with deployment in 300+ cities."
          }
        },
        { 
          id: 3, 
          title: "Tmall U-Select x Ubox: MVP Sampling Loop", 
          category: "O2O Marketing", 
          year: "2019",
          stats: "MVP Validated",
          image: "https://i.postimg.cc/y6ZpdpNg/e8fb80fe3550878e3e87c62b4753bfb6.png",
          description: "Creating a 'Scan & Get for 0.01 RMB' lightweight sampling model to efficiently collect user data.",
          details: {
            context: "Around 2018-2019, Tmall U-Select partnered deeply with Ubox vending machines in high-traffic areas (malls, campuses). Users could scan and pay 0.01 RMB to get samples instantly.",
            strategy: "1. Instant Offline Experience: Users select samples at the machine and scan to pay (e.g., 0.01 RMB). Focus on simplified flow and instant gratification.\n2. Data Collection & Insight: The '1-cent purchase' model allows precise collection of purchase history and preferences, supporting future full-size product recommendations on Tmall.\n3. Brand & Scenario Fusion: Extending e-commerce reach to daily life scenarios via Ubox's network. Solving traditional sampling inefficiency and lack of tracking.",
            result: "MVP Experiment: Served as a minimum viable product to test new products, validating market response while achieving efficient user acquisition and data accumulation."
          }
        },
        { 
          id: 4, 
          title: "Winner Medical (Purcotton)", 
          category: "Brand Upgrade", 
          year: "2016",
          stats: "+200% Growth",
          image: "https://www.winnermedical.cn/Uploads/Temp/image/20211026/61778604016b1.jpg",
          description: "Leveraging 'Medical-Grade' standards to redefine consumer cotton goods.",
          details: {
            context: "Winner Medical transformed from B2B to B2C to capture consumer upgrade opportunities.",
            strategy: "1. Tech-Driven: Applying medical cotton tech to consumer goods.\n2. Positioning: 'Medical Quality, Consumer Comfort'.\n3. Channel Expansion: Aggressive e-commerce and offline store growth.",
            result: "Purcotton became a major growth driver. Established 'Cotton Tissue' as a new category, significantly boosting brand value."
          }
        },
         // DESIGN CASES (EN)
         { 
          id: 5, 
          title: "Ubox Full Brand Visuals", 
          category: "Visual Identity", 
          year: "2018",
          image: "https://i.postimg.cc/288Kxnd3/20251124she-ji-03.jpg",
          description: "VOL.01 | VI system upgrade, exhibition booth design, and visual identity for sub-brands (U-Sing, U-Coffee).",
          details: { context: "Unifying visual identity for rapidly expanding business lines.", strategy: "Established an orange-themed VI system, standardized vending machine stickers, and extended to offline showrooms.", result: "Enhanced brand recognition across 300+ cities." }
        },
        { 
          id: 6, 
          title: "Winner Medical | Showroom Design", 
          category: "Space & Packaging", 
          year: "2016",
          image: "https://i.postimg.cc/bv8bQ9b9/20251124she-ji-26.jpg",
          description: "VOL.02 | Medical-grade packaging standards, corporate culture visualization, and professional showroom (Zones D1-D3) planning.",
           details: { context: "Showcasing professional image as a medical industry leader.", strategy: "Unified medical packaging standards; planned showroom with hospital scenarios (OR, Ward).", result: "Built a professional, trustworthy brand image." }
        },
        { 
          id: 7, 
          title: "ABC Bank | Event Visual Strategy", 
          category: "Event Visuals", 
          year: "2017",
          image: "https://i.postimg.cc/FFfZFGxj/20251124she-ji-20.jpg",
          description: "VOL.03 | Key visuals for 'Net Loan' H5 campaigns, offline press conferences, and festival social media posters.",
           details: { context: "Promoting financial products to younger demographics.", strategy: "Used flat illustrations for H5/Posters; emotional marketing tied to festivals.", result: "Achieved 700K+ clicks and 1M+ exposure on a low budget." }
        },
        { 
          id: 8, 
          title: "Other Design Collection", 
          category: "Multidisciplinary Design", 
          year: "2014-2022",
          image: "https://i.postimg.cc/jSh631sr/20251124she-ji-40.jpg",
          description: "VOL.04 | A curated collection of logos, VI systems, packaging, and IP designs across various industries.",
           details: { context: "Design exploration and practice across diverse sectors such as technology, F&B, and retail.", strategy: "Utilizing various visual techniques including illustration, typography, and 3D rendering tailored to brand attributes.", result: "Delivered high-impact visual solutions for multiple SMEs and new consumer brands." }
        },
      ]
    },
    contact: {
      title: "Contact",
      email: "liujiaxi0597@vip.qq.com",
      phone: "+86 187-7027-0511"
    }
  }
};
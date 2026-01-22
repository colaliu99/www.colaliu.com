
import { ContentData, Language } from './types';

export const PROFILE_IMAGE = "assets/profile.jpg"; 
export const WECHAT_QR = "assets/wechat-qr.png";

const LIFESTYLE_IMGS = {
  cycling: "assets/lifestyle-cycling.jpg",
  travel: "assets/lifestyle-travel.jpg",
  sports: "assets/lifestyle-sports.jpg",
  life: "assets/lifestyle-life.jpg"
};

export const CONTENT: Record<Language, ContentData> = {
  zh: {
    nav: {
      services: "服务体系",
      marketing: "增长策略",
      design: "视觉全案",
      lifestyle: "生活洞察",
      about: "关于我",
      contact: "预约咨询"
    },
    hero: {
      nameZh: "刘嘉欣",
      nameEn: "Cola Liu",
      role: "品牌增长合伙人 | 连续创业者",
      prefix: "以创始人思维提供", 
      typewriterPhrases: [
        "DTC 品牌 0-1 闭环落地",
        "高溢价视觉增长模型",
        "体系化商业资产建设"
      ],
      ctaText: "建立联系 Book a Session",
      wechatLabel: "扫码沟通意向",
      educationTitle: "商业认知与知识体系",
      education: [
        { school: "英迪国际大学", degree: "工商管理硕士 (MBA) | 战略与全球化" },
        { school: "北京外国语大学", degree: "工商管理本科" }
      ],
      certificationTitle: "核心专业背书",
      certifications: [
        { name: "PMP / CSPM-2", detail: "国家级项目管理双认证 / 交付保障" },
        { name: "DTC 品牌闭环", detail: "从供应链到全链路营销实战经验" },
        { name: "高敏行业视觉策略", detail: "亲密关系赛道 4 年溢价实操经验" }
      ],
      personalDescription: "拥有 10 年+实战经验的独立品牌顾问。我不仅是资深视觉专家与项目经理，更是一名下场实操的 DTC 品牌创始人。我擅长将 MBA 的战略架构与创始人视角的 ROI 敏感度结合，为企业解决“有审美无增长、有策略无落地”的核心痛点。"
    },
    services: {
      title: "核心价值输出",
      subtitle: "不止于执行，更是您商业决策中的增长副驾驶。",
      items: [
        {
          title: "品牌 0-1 闭环咨询",
          description: "基于创始人视角的品牌全生命周期规划，涵盖定位、供应链、视觉与渠道。",
          deliverables: ["品牌商业模型", "产品视觉定义", "初创团队 SOP", "全链路 ROI 复盘"],
          icon: "Briefcase"
        },
        {
          title: "高溢价视觉全案",
          description: "通过视觉美学重构品牌心智，解决“高敏感、低溢价”行业的商业转化瓶颈。",
          deliverables: ["亲密关系美美学体系", "高转化电商视觉", "品牌资产管理", "内容生产流水线"],
          icon: "Palette"
        },
        {
          title: "千万级项目管理",
          description: "将 PMP 交付流程引入营销外包，确保大规模活动的高质量落地。",
          deliverables: ["营销活动全案", "传播链路设计", "跨平台资源整合", "项目全周期质控"],
          icon: "Target"
        }
      ]
    },
    stats: {
      title: "商业交付成果",
      items: [
        { project: "亲密关系品牌", label: "核心视觉支撑", value: "800W+", subLabel: "年度稳健营收规模" },
        { project: "中国移动", label: "资产激活用户", value: "1550W+", subLabel: "网龄活动单次表现" },
        { project: "友宝UBOX", label: "设备终端覆盖", value: "100K+", subLabel: "刷脸支付战略部署" },
        { project: "DTC 宠物品牌", label: "自创品牌进度", value: "CEO", subLabel: "从供应链到终端闭环" }
      ]
    },
    experience: {
      title: "专业履历记录 (实战导向)",
      items: [
        {
          company: "DTC 宠物用品品牌 (自主创业)",
          role: "创始人 / CEO",
          period: "2024.12 – 至今",
          highlights: [
            "全球化视角驱动：结合 MBA 留学期间对欧洲及意大利宠物市场的深度调研，观察到宠物情感资产化的高溢价趋势，促成 2024 年底自创品牌决策。",
            "全链路闭环实操：独立负责从品牌定位、供应链源头筛选、跨境营销链路搭建到全渠道营销的 0-1 落地过程。",
            "实战增长模型：以创始人身份理解每一分预算的商业价值，建立了以“强溢价、高毛利”为核心的增长逻辑。"
          ]
        },
        {
          company: "高溢价个人护理品牌 (亲密关系赛道)",
          role: "品牌视觉战略顾问 (4年深度服务)",
          period: "2020.01 - 2024.01",
          highlights: [
            "去情趣化美学重构：将传统高敏感赛道视觉进行降维打击，构建“高级、悦己、合规”的视觉体系，打破主流社交媒体传播壁垒。",
            "支撑业务规模：主导电商转化视觉全链路，助力品牌在行业流量红利消退期仍能支撑 800W+ 的年度稳健营收。",
            "品牌溢价策略：通过视觉差异化定位提升产品单价，成功将品牌心智从“工具”转变为“美学礼品”，毛利提升显著。"
          ]
        },
        {
          company: "亚信科技 (上市公司)",
          role: "高级项目经理 | Project Manager",
          period: "2022.06 - 2024.08",
          highlights: [
            "超大规模交付：主导中国移动 1550W+ 用户参与级别的营销活动，建立跨地域、多工种的协同管理标准。",
            "PMP 标准实践：负责项目全生命周期质控，确保营销节点 100% 准时达成，通过数据驱动优化，单次活动转化效率提升 15%。"
          ]
        },
        {
          company: "友宝科斯 (上市公司)",
          role: "品牌策划经理 / 长期品牌资产顾问",
          period: "2018.03 - 2022.06 (全职) | 2022 - 2024 (Retained)",
          highlights: [
            "高信誉持续合作：2022 年离职后受集团特邀，以顾问身份继续主导两年的远程视觉战略服务，负责集团核心视觉资产的连续性维护与更新。",
            "战略级推广：统筹 10W+ 智能终端的全国视觉落地，与支付宝、华为等巨头共同推进“刷脸支付”线下场景的规模化应用。",
            "资源整合力：操盘百场全国级异业联名营销，具备极强的甲乙方需求对齐与资源置换能力。"
          ]
        },
        {
          company: "早期品牌设计基石 (2018年以前)",
          role: "品牌全案专家",
          period: "2014 - 2018",
          highlights: [
            "服务超 100+ 品牌客户，主导稳健医疗、中国农业银行等多个明星项目的视觉全案落地。",
            "深耕实战设计逻辑：通过包装体系化升级助力稳健医疗从 B2B 成功转型 B2C，沉淀了“视觉即营销”的底层交付能力。"
          ]
        }
      ]
    },
    portfolio: {
      title: "精选交付案例",
      designTab: "视觉/空间全案",
      marketingTab: "营销/策略案例",
      viewProject: "查看案例详情",
      items: [
        { 
          id: 1, 
          title: "中国移动：网龄成长计划", 
          category: "忠诚度营销 / 策略策划", 
          year: "2024",
          stats: "1550W+ 参与用户",
          image: "assets/p1-china-mobile.png",
          description: "2024年度核心忠诚度项目，通过情感维系与分级权益实现亿级资产的精细化运营。",
          details: {
            context: "在存量市场背景下，中国移动需要深度激活老用户资产。本项目核心是根据用户网龄提供差异化的专属福利。",
            strategy: "1. 资产化运营：将“网龄”定义为用户的时间资产，建立 AIPL 增长模型。\n2. 链路优化：重构 APP 内转化流程，通过分级权益刺激分享与留存。",
            result: "达成 1550W+ 用户参与，有效降低离网率，为中国移动贡献了极高的用户活跃度与粘性。"
          }
        },
        { 
          id: 2, 
          title: "友宝 x 支付宝：刷脸支付推广", 
          category: "智慧零售 / 战略执行", 
          year: "2018",
          stats: "10W+ 智能设备",
          image: "assets/p2-ubox-face.png",
          description: "技术驱动的体验营销，联合支付宝快速抢占无人零售支付新蓝海。",
          details: {
            context: "2018年，刷脸支付作为新零售基础设施，亟需在线下无人场景实现规模化覆盖。",
            strategy: "1. 终端重构：设计统一的硬件交互视觉与支付海报。\n2. 场景化联动：结合“首单立减”等快节奏营销活动，培养用户支付习惯。",
            result: "在全国 300+ 城市部署 10W+ 终端，使友宝成为支付宝刷脸支付最大的 B 端应用场景方。"
          }
        },
        { 
          id: 5, 
          title: "友宝集团全品牌视觉体系", 
          category: "品牌全案 / VI系统", 
          year: "2018",
          image: "assets/p5-01.jpg",
          gallery: [
            "assets/p5-01.jpg", "assets/p5-02.jpg", "assets/p5-03.jpg", "assets/p5-04.jpg"
          ],
          description: "VOL.01 | 包含 Logo 优化、终端机身视觉、展会空间及子品牌视觉统一管理。",
          details: { 
            context: "随着业务版图扩张，集团需要一套极具识别度且高扩展性的视觉识别系统。", 
            strategy: "1. 核心视觉统一：建立以“活力橙”为主的视觉基调。\n2. 终端标准化：规范全国 10W+ 售货机的外观贴纸与交互 UI 风格。", 
            result: "成功塑造了专业、现代的智慧零售品牌形象，极大提升了招商与加盟的品牌溢价。" 
          }
        },
        { 
          id: 6, 
          title: "稳健医疗 | 展馆与包装视觉", 
          category: "空间设计 / 包装规范", 
          year: "2016",
          image: "assets/p6-01.jpg",
          gallery: [
            "assets/p6-01.jpg", "assets/p6-02.jpg", "assets/p6-03.jpg", "assets/p6-04.jpg"
          ], 
          description: "VOL.02 | 医疗级包装规范设计及企业总部展厅空间设计。",
           details: { 
             context: "配合稳健医疗品牌升级，需要通过空间与包装展示其“专业、洁净、领先”的品牌基因。", 
             strategy: "1. 包装体系化：统一 50+ SKU 的医疗及民用包装逻辑。\n2. 场景沉浸式展厅：设计手术室、实验室等场景化展示区域。", 
             result: "协助品牌成功从 B2B 制造转型为 B2C 消费领跑者，助力首季销售额大幅增长。" 
           }
        }
      ]
    },
    lifestyle: {
      title: "探索与热爱",
      subtitle: "不止于工作，更在于对世界保持敏锐的洞察。",
      items: [
        { title: "运动", description: "保持向上的生命力", image: LIFESTYLE_IMGS.sports, size: "large" },
        { title: "旅行", description: "探索 5 国 20 城的市场温度", image: LIFESTYLE_IMGS.travel, size: "small" },
        { title: "骑行", description: "在风中感受城市的商业脉搏", image: LIFESTYLE_IMGS.cycling, size: "small" },
        { title: "生活", description: "于伦敦大本钟晨跑，思考品牌未来", image: LIFESTYLE_IMGS.life, size: "tall" }
      ]
    },
    contact: {
      title: "预约商业咨询",
      email: "liujiaxi0597@vip.qq.com",
      phone: "187-7027-0511",
      bookingLabel: "建立增长联系"
    }
  },
  en: {
    nav: {
      services: "Capabilities",
      marketing: "Marketing",
      design: "Design",
      lifestyle: "Life",
      about: "About",
      contact: "Consultation"
    },
    hero: {
      nameZh: "刘嘉欣",
      nameEn: "Cola Liu",
      role: "Brand Growth Partner | Serial Entrepreneur",
      prefix: "Founder-led &",
      typewriterPhrases: [
        "DTC Brand 0-1 Delivery",
        "Strategic Visual Assets",
        "High-Premium Design Models"
      ],
      ctaText: "Free Consultation",
      wechatLabel: "Connect on WeChat",
      educationTitle: "Expertise",
      education: [
        { school: "INTI University", degree: "MBA in Global Strategy" },
        { school: "BFSU", degree: "BA in Business Admin" }
      ],
      certificationTitle: "Credentials",
      certifications: [
        { name: "PMP / CSPM-2", detail: "Expert Project Delivery" },
        { name: "DTC Expert", detail: "0-1 Full-link Startup Exp" },
        { name: "High-Premium Visual", detail: "Intimacy Wellness Sector Exp" }
      ],
      personalDescription: "Independent Brand Consultant with 10+ years of hands-on experience. I blend MBA strategic thinking, PMP delivery standards, and a Founder's ROI-driven mindset to solve complex brand challenges."
    },
    services: {
      title: "Service Matrix",
      subtitle: "Not just execution, but your co-pilot in business growth.",
      items: [
        {
          title: "DTC 0-1 Consulting",
          description: "Full-link brand building from positioning and supply chain to multi-channel growth.",
          deliverables: ["Business Model", "Product Definition", "SOP Development", "Growth Funnel"],
          icon: "Briefcase"
        },
        {
          title: "Strategic Visual Identity",
          description: "Redefining brand perception to overcome price and conversion bottlenecks.",
          deliverables: ["Wellness Aesthetics", "High-conversion UI/UX", "Visual Asset Mgmt", "Content Workflow"],
          icon: "Palette"
        },
        {
          title: "Scale Project Mgmt",
          description: "Applying PMP standards to marketing campaigns for flawless delivery.",
          deliverables: ["Campaign Strategy", "Activation Funnel", "Resource Integration", "Quality Control"],
          icon: "Target"
        }
      ]
    },
    stats: {
      title: "Commercial Milestones",
      items: [
        { project: "Wellness Brand", label: "Visual-led Revenue", value: "8M+", subLabel: "Annual Stable Scale" },
        { project: "China Mobile", label: "Loyalty Activation", value: "15.5M+", subLabel: "Active Participants" },
        { project: "Ubox Tech", label: "Strategic Deploy", value: "100K+", subLabel: "Nationwide Terminals" },
        { project: "Pet DTC Brand", label: "Entrepreneurship", value: "CEO", subLabel: "Founder & CEO" }
      ]
    },
    experience: {
      title: "Strategic History",
      items: [
        {
          company: "DTC Pet Brand (Startup)",
          role: "Founder / CEO",
          period: "2024.12 – Present",
          highlights: [
            "Building a brand from scratch based on European market insights.",
            "Integrating global pet economy trends discovered during MBA.",
            "Deep understanding of ROI from a founder's perspective."
          ]
        },
        {
          company: "High-Premium Care Brand",
          role: "Brand Strategy Consultant (4-year service)",
          period: "2020.01 - 2024.01",
          highlights: [
            "Crafting compliant, high-end aesthetics for sensitive categories.",
            "Supporting 8M+ annual revenue through visual-led conversion optimization.",
            "De-adult-toy design logic to bridge mainstream communication gaps."
          ]
        },
        {
          company: "AsiaInfo Tech",
          role: "Project Manager",
          period: "2022.06 - 2024.08",
          highlights: [
            "Managed 15.5M+ user campaign with rigorous PMP delivery standards.",
            "Led data-driven conversion strategies for national telecom projects."
          ]
        },
        {
          company: "Ubox Tech",
          role: "Planning Manager / Retained Consultant",
          period: "2018.03 - 2022.06 (Full-time) | 2022 - 2024 (Retained)",
          highlights: [
            "Strategic retained partnership to maintain brand asset continuity after leaving.",
            "Led strategic rollout of AI payment across 100K terminals.",
            "Managed multi-brand visual assets and cross-brand collaborations."
          ]
        }
      ]
    },
    portfolio: {
      title: "Selected Case Studies",
      designTab: "Visual / Space",
      marketingTab: "Strategy / Growth",
      viewProject: "Details",
      items: []
    },
    lifestyle: {
      title: "Vision & Passion",
      subtitle: "Exploring the world, sensing the market.",
      items: []
    },
    contact: {
      title: "Book a Strategic Session",
      email: "liujiaxi0597@vip.qq.com",
      phone: "+86 187-7027-0511",
      bookingLabel: "Partner for Growth"
    }
  }
};

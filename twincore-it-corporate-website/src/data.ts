export interface SubService {
  id: string;
  title: string;
  description: string;
  details: string[];
}

export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  iconName: string; // references lucide icon
  subServices: SubService[];
  benefits: string[];
}

export interface TechItem {
  name: string;
  iconName: string;
  level: string; // "Expert", "Advanced", etc.
  description: string;
}

export interface TechCategory {
  id: string;
  title: string;
  description: string;
  items: TechItem[];
}

export interface CaseStudy {
  id: string;
  title: string;
  clientName: string;
  industry: string;
  serviceCategory: string;
  summary: string;
  challenge: string;
  solution: string;
  results: string[];
  tags: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
}

export const SERVICES: Service[] = [
  {
    id: "odoo-erp",
    title: "Enterprise ERP & CRM (Odoo / Salesforce)",
    shortDescription: "End-to-end Odoo & Salesforce implementation, customization, module development, and localized financial modules.",
    longDescription: "We transform fragmented sales pipelines and inventory trails into unified, high-performing corporate orbits. As certified digital specialists, we write bespoke ERP customizations, automate CRM triggers, sync retail platforms, and deliver robust localized finance engines that make month-end audits effortless.",
    iconName: "Briefcase",
    benefits: [
      "Smooth data translations with zero operational system downtime",
      "Tailored multi-currency accounting ledgers and QWeb document templates",
      "Seamless integrations with major payment, shipping, and store APIs"
    ],
    subServices: [
      {
        id: "odoo-customization",
        title: "Module & Funnel Customization",
        description: "Drafting unique business rules, nested dashboards, and localized taxation workflows tailored strictly to local compliance guidelines.",
        details: [
          "Custom Odoo fields, multi-currency accounting, and CRM funnels",
          "Automated messenger alerts matched with twilio & meta API bridges",
          "Custom QWeb invoice generators with high resolution barcode printing"
        ]
      },
      {
        id: "crm-integrations",
        title: "Salesforce & CRM Optimization",
        description: "Connecting lead management databases with marketing hubs, external dispatchers, and automated rating algorithms.",
        details: [
          "Synchronized lead tracking matrices with direct sales calendars",
          "Third-party webhook triggers to update account status",
          "Custom visual reports representing live client conversation cycles"
        ]
      },
      {
        id: "odoo-upgrades",
        title: "Database Upgrades & Maintenance",
        description: "Proactive database cleanups, system checkups, and seamless model migrations across enterprise milestones.",
        details: [
          "Optimized PostgreSQL database query speeds and indices",
          "Automated backup triggers with external hot storage redundancy",
          "Zero-loss migration paths to latest Odoo versions (v16, v17, v18)"
        ]
      }
    ]
  },
  {
    id: "custom-web",
    title: "Custom Web & SaaS Product Development",
    shortDescription: "High-velocity custom software, .NET and Java enterprise layers, modern web microservices, and reactive SaaS systems.",
    longDescription: "We build modern, secure, and resilient custom websites and SaaS platforms designed to load in milliseconds. By combining beautiful, high-contrast reactive interfaces with robust type-safe backend architectures, we help you transform legacy operations into responsive business systems.",
    iconName: "Cpu",
    benefits: [
      "Lightweight progressive layouts with flawless Core Web Vitals",
      "Robust state control permitting offline productivity",
      "Decoupled service modularity supporting safe cloud scaling"
    ],
    subServices: [
      {
        id: "enterprise-engineering",
        title: "Enterprise Web Systems (.NET / Java / Node)",
        description: "Harnessing robust frameworks to power multi-level transactional systems, high-availability customer portals, and corporate hubs.",
        details: [
          "Strict type-safe TypeScript standards avoiding runtime crash triggers",
          "Secure Spring Boot & ASP.NET enterprise data transaction managers",
          "Custom API development (REST/GraphQL) matching standard OpenAPI specs"
        ]
      },
      {
        id: "saas-platforms",
        title: "SaaS Product Engineering",
        description: "Ideating, blueprinting, and constructing multi-tenant software systems featuring metered subscriptions and responsive dashboards.",
        details: [
          "Secure multi-tenant database isolation models protecting client data",
          "Interactive analytics dashboards powered by D3/Recharts modules",
          "Flexible subscription mechanics (Stripe, Paddle, custom gateways)"
        ]
      },
      {
        id: "frontend-modernization",
        title: "Core Web Performance Audit",
        description: "Optimizing database speeds, asset loading strategies, and responsive behaviors to guarantee maximum accessibility.",
        details: [
          "Flawless fluid responsive configurations for all desktop & mobile layouts",
          "Optimized media delivery pipelines shaving seconds off load cycles",
          "Comprehensive CSS/Tailwind reviews for high-contrast accessibility"
        ]
      }
    ]
  },
  {
    id: "mobile-apps",
    title: "High-Performance Mobile Applications",
    shortDescription: "Stunning cross-platform Flutter and React Native mobile applications with real-time sync and custom offline capability.",
    longDescription: "In partnership with top mobile innovators, we craft fluid, visually polished iOS and Android companion apps. From inventory barcode scanners to real-time maps and secure client dashboards, our apps operate flawlessly even in spotty connections.",
    iconName: "Smartphone",
    benefits: [
      "Consistent, fast UI actions across Android & iOS devices",
      "Offline database caching storing active state changes safely",
      "Native device integration (Camera, Bluetooth, GPS locator, FaceID)"
    ],
    subServices: [
      {
        id: "hybrid-apps",
        title: "Cross-Platform Engineering (Flutter & React Native)",
        description: "Writing lightweight, unified codebases that deploy natively to App Stores under rapid launch timelines.",
        details: [
          "Custom pixel-perfect UI rendering at 60fps animations",
          "Shared application state engine reducing redundant API hits",
          "Automated build pipelines preparing deploy-ready store packages"
        ]
      },
      {
        id: "offline-sync",
        title: "Offline Caching & Smart Synchronization",
        description: "Engineering local database vaults that log scans, transactions, and location metrics even without network connections.",
        details: [
          "SQLite & Hive local engines queuing queries during network loss",
          "Automatic background sync resuming the second connectivity returns",
          "Merge conflict resolver protocols avoiding Postgres inventory overrides"
        ]
      },
      {
        id: "hardware-integration",
        title: "Hardware & Companion App Integration",
        description: "Enabling reliable connections with physical devices, hardware scanners, GPS modules, and Bluetooth beacons.",
        details: [
          "Millisecond barcode scans for Zebra, Honeywell & PDA devices",
          "Dynamic cellular telemetry and precise driver location tracking",
          "Local storage buffers to prevent battery drain from constant scans"
        ]
      }
    ]
  },
  {
    id: "sharepoint-portals",
    title: "SharePoint, Microsoft 365 & Intranet Systems",
    shortDescription: "Beautiful custom SPFx intranet hubs, rapid document automation pipelines, Power Platform flows, and secure OCR parsing.",
    longDescription: "Unchain your company from slow out-of-the-box Microsoft pages. We remodel standard SharePoint layouts into modern corporate social portals, automate document approvals via Power Automate cloud hooks, and build OCR pipelines that auto-populate transaction rows.",
    iconName: "Layers",
    benefits: [
      "Custom lightweight SPFx components ensuring fast browser loads",
      "Unified document management reducing document duplication",
      "Active Directory integration maintaining bank-grade user permissions"
    ],
    subServices: [
      {
        id: "spfx-portals",
        title: "SPFx Modern Corporate Intranet Hubs",
        description: "Constructing striking visual social portals featuring live newsfeeds, milestones, calendar systems, and org charts.",
        details: [
          "Dynamic team announcements, directories, and corporate widgets",
          "Brand-focused color palettes matching company design guidelines",
          "Mobile-responsive portal dashboards designed for standard browsers"
        ]
      },
      {
        id: "power-automate",
        title: "DocFlow & Power Automate Workflows",
        description: "Connecting file changes, emails, and server actions to trigger automatic approvals and document tracking boards.",
        details: [
          "Custom multiple-level hierarchical authorization grids",
          "Automated reminders preventing project contract contract bottlenecks",
          "Adaptive Teams cards allowing click actions (Approve/Reject) in chat"
        ]
      },
      {
        id: "ocr-capture",
        title: "Custom Document OCR Ingestion",
        description: "Utilizing OCR capabilities to scan invoices, bills, and contracts, auto-filling SharePoint columns and Odoo database fields.",
        details: [
          "Automated extraction of supplier details, values, and due deadlines",
          "Intelligent data comparison flagging balance discrepancies instantly",
          "Dual PDF-A compliant dynamic indexing setups for secure archives"
        ]
      }
    ]
  },
  {
    id: "ai-bigdata",
    title: "AI Pipelines, Analytics & Big Data Systems",
    shortDescription: "Apache Spark/Kafka real-time data streaming, forecasting databases, customer segmentation models, and custom AI agents.",
    longDescription: "Turn raw operations data into predictive superpowers. Inspired by top-tier data architects, we set up low-latency message queues (Kafka), centralized analytical lakes (Snowflake/BigQuery), and deploy dynamic AI models to uncover optimization vectors.",
    iconName: "Terminal",
    benefits: [
      "Real-time visibility into complex business telemetry metrics",
      "Structured data stores built for clean dashboard visualizations",
      "Automated lead and product recommendation predictive engines"
    ],
    subServices: [
      {
        id: "data-streaming",
        title: "Real-Time Event Streaming (Kafka / Spark)",
        description: "Constructing persistent data bridges that route millions of system telemetry events per minute safely.",
        details: [
          "Decoupled event-driven patterns preventing core server strain",
          "Continuous log aggregation and high-speed data cleaning",
          "Instant alert notifications on unusual financial or user activities"
        ]
      },
      {
        id: "bi-lakes",
        title: "Snowflake & BI Dashboard Pipelines",
        description: "Synthesizing cross-system info into high-speed analytical databases and beautiful reports.",
        details: [
          "Unified data warehouses connecting Odoo, SharePoint, and Salesforce",
          "Highly responsive charts generated through Recharts and D3 engines",
          "Automated data pipelines reducing manual collection hours to zero"
        ]
      },
      {
        id: "ai-agents",
        title: "Custom AI & Conversational Copilots",
        description: "Integrating Gemini LLM architectures to query knowledge guides, draft messages, and classify emails.",
        details: [
          "Secure server-side LLM proxies protecting private company assets",
          "Intelligent classification engines tagging incoming client queries",
          "Interactive text-to-action search boxes across corporate data"
        ]
      }
    ]
  },
  {
    id: "devops-security",
    title: "DevOps, Managed Cloud & Cyber Security",
    shortDescription: "Kubernetes failover management, Terraformed IaC parameters, zero-downtime Canary deploys, and SOC-2 standard hardening.",
    longDescription: "We implement dynamic, reproducible cloud ecosystems mimicking standard Silicon Valley blueprints. By deploying Infrastructure as Code (IaC) and securing access firewalls, we defend your digital operations from modern server threats.",
    iconName: "Cloud",
    benefits: [
      "Infrastructure autoscaling that adjusts to usage spikes",
      "Completely automated, zero-downtime application releases",
      "Strict network security parameters protecting user privacy"
    ],
    subServices: [
      {
        id: "iac-terraform",
        title: "Infrastructure as Code (Terraform / AWS / GCP)",
        description: "Drafting code-defined networks, databases, and secure clusters to achieve complete server replication in minutes.",
        details: [
          "Provisioning AWS & GCP relational databases with automated backups",
          "Dynamic web servers that scale with system resource demand",
          "Private network VPCs and strict security filters deflecting threats"
        ]
      },
      {
        id: "kubernetes-k8s",
        title: "Kubernetes & Continuous Delivery (CI/CD)",
        description: "Wrapping applications in lightweight Docker packages managed by self-healing cluster layers.",
        details: [
          "Decoupled microservice networks preventing single-point failure crashes",
          "Blue-green and Canary server release strategies for clean updates",
          "Integrated vulnerability scans running automatically on system push"
        ]
      },
      {
        id: "soc2-compliance",
        title: "Enterprise Hardening & Compliance Scans",
        description: "Auditing application code, protecting credentials, and configuring secure logs in preparation for SOC-2 standards.",
        details: [
          "Secured API credential stores kept deep in server environments",
          "Comprehensive system activity trails tracking operations history",
          "SSL/TLS validation and custom encryption layers protecting databases"
        ]
      }
    ]
  }
];

export const TECHNOLOGIES: TechCategory[] = [
  {
    id: "frontend",
    title: "Frontend Ecosystem",
    description: "Sleek, responsive, and performance-driven interactive browser layers.",
    items: [
      { name: "React", iconName: "Code2", level: "Core Expert", description: "Standard for building dynamic rich client interfaces and single-page applications." },
      { name: "TypeScript", iconName: "FileJson", level: "Strict Standard", description: "Ensuring zero runtime bugs through deep interface definitions and rich compiler gates." },
      { name: "Tailwind CSS", iconName: "Palette", level: "Elite Precision", description: "Modern utility styling to support custom corporate design tokens flawlessly." },
      { name: "Next.js / Nuxt", iconName: "Layers", level: "Advanced", description: "Server-side rendering framework ensuring fast loads and perfect SEO." }
    ]
  },
  {
    id: "backend",
    title: "Backend Frameworks",
    description: "Secure, reliable, and decoupled data processing engines driving web operations.",
    items: [
      { name: "Node.js (NestJS)", iconName: "Server", level: "Enterprise Expert", description: "Architecting modular, TypeScript-native REST/GraphQL microservices." },
      { name: "Python", iconName: "Terminal", level: "Core Native", description: "Leveraging powerful backend processing and standard mathematical matrix support." },
      { name: "Go / Golang", iconName: "Zap", level: "High Scale", description: "Compiling ultra-fast standalone binaries for extreme request volumes." },
      { name: "Java / Spring Boot", iconName: "Cpu", level: "Legacy Power", description: "Supporting heavy transactional state controls and bank-grade isolation patterns." }
    ]
  },
  {
    id: "erp",
    title: "ERP & Odoo Core",
    description: "The primary technologies we utilize to create, extend, and deploy Odoo ERP suites.",
    items: [
      { name: "Odoo Framework", iconName: "Briefcase", level: "Authorized Mastery", description: "Extending models, CRM pipelines, accounting ledger controls and stock matrices natively." },
      { name: "PostgreSQL", iconName: "Database", level: "Deep Tuning", description: "Relational storage optimized for complex nested financial Ledger tables and index setups." },
      { name: "QWeb Engine", iconName: "FileText", level: "Custom Layouts", description: "Rendering rich dynamic invoice PDFs, supply listings, and custom barcode layouts." },
      { name: "Odoo API / XML-RPC", iconName: "Network", level: "Flawless Connect", description: "Writing two-way sync connections syncing shipping portals, custom apps, and Amazon Stores." }
    ]
  },
  {
    id: "cloud-devops",
    title: "Cloud & Devops Systems",
    description: "Deploy and manage resilient instances matching strict SLA standards.",
    items: [
      { name: "Kubernetes / Docker", iconName: "Container", level: "Mastery", description: "Isolating server workloads into decoupled self-healing lightweight packages." },
      { name: "AWS Core Services", iconName: "Cloud", level: "Certified Pro", description: "Utilizing RDS databases, EC2 scaling rigs, Lambda, and private S3 buckets securely." },
      { name: "Google Cloud Platform", iconName: "Cpu", level: "Certified Pro", description: "Harnessing Google's global low-latency fiber network for multi-tenant setups." },
      { name: "Terraform", iconName: "GitMerge", level: "Infrastructure as Code", description: "Codifying absolute network security groups, firewalls and container networks." }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "global-logistics-odoo",
    title: "Fully Tailored Odoo Suite for a Global Maritime Fleet Operator",
    clientName: "TransOceanic Logistics Inc.",
    industry: "Supply Chain & Shipping",
    serviceCategory: "Odoo ERP Solutions",
    summary: "Engineered a custom fleet management, real-time customs check manifest, and international currency accounting setup in Odoo, solving manual worksheet gaps.",
    challenge: "The client ran 4 major spreadsheets per ship to trace onboard provisions and fuel rates, leading to heavy communication lag and inventory reporting errors.",
    solution: "Deployed a decentralized offline-syncing Odoo custom app matching maritime connectivity bands, with automated compliance report generators running via QWeb.",
    results: [
      "94% drop in stock discrepancies within 6 weeks",
      "Automated automated custom clearance files saving 3 days per dock transition",
      "Unified global general ledgers displaying active exchange rates dynamically"
    ],
    tags: ["Odoo Customization", "PostgreSQL", "Database Sync", "Logistics UI"]
  },
  {
    id: "fintech-microservices",
    title: "SaaS Lending Platform Powered by React and Event-Driven Backend",
    clientName: "ApexCredit S.A.",
    industry: "Financial & SaaS",
    serviceCategory: "Full Stack Web Applications",
    summary: "Created a modern online commercial loan request and underwriting dashboard with advanced secure automated scoring integrations.",
    challenge: "The existing application procedure took 14 days and required complex offline paperwork and physical signatures.",
    solution: "Designed an interactive React client onboarding wizard coupled with a NestJS backend microservices pipeline integrating identity validation and digitized real-time scoring platforms.",
    results: [
      "Average processing time cut from 14 days down to 18 minutes",
      "Over $45M processed securely with zero server crash events",
      "Beautiful user wizard driving a 41% elevation in application completions"
    ],
    tags: ["React SPA", "TypeScript", "Microservices", "Underwriting Core"]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Marc Dumont",
    role: "Director of Enterprise Systems",
    company: "Belgique Retail Cooperative",
    content: "Twincore IT's mastery of Odoo is outstanding. They took down our slow, outdated SAP systems and set up a unified inventory structure that feels like it was custom built starting from scratch. Best partner we've ever engaged.",
    rating: 5
  },
  {
    id: "t2",
    name: "Elena Rostova",
    role: "VP of Product and Growth",
    company: "ScribeLabs AI",
    content: "The engineering speed and strict type safety Twincore IT brought to our cloud product are unparalleled. They worked as a seamless, high-velocity extension of our internal engineering core. Truly professional.",
    rating: 5
  },
  {
    id: "t3",
    name: "Vikram Sanjana",
    role: "Co-Founder & Chief Operations Officer",
    company: "AutoParts Circle",
    content: "Their consulting phase helped us save over $120,000 in redundant cloud databases in the first quarter alone. They don't just write code – they deliver real financial value.",
    rating: 5
  }
];

export const CORE_VALUES = [
  {
    title: "Innovate",
    description: "Never settle for stagnant patterns. We actively design adaptive custom solutions leveraging modern frameworks.",
    iconName: "Compass",
    color: "from-blue-500 to-indigo-600"
  },
  {
    title: "Develop",
    description: "Write highly scalable, modular, and type-safe code that stands the test of high traffic load.",
    iconName: "Code",
    color: "from-purple-500 to-pink-600"
  },
  {
    title: "Secure",
    description: "Build robust data layers and cloud structures using hardware firewalls and strict access policies.",
    iconName: "Shield",
    color: "from-emerald-500 to-teal-600"
  },
  {
    title: "Grow",
    description: "Align your tech investment with business returns to scale from proof-of-concept up to worldwide market leader.",
    iconName: "TrendingUp",
    color: "from-amber-500 to-orange-600"
  }
];

export interface ProductDetail {
  id: string;
  name: string;
  tagline: string;
  description: string;
  features: string[];
  specs: string[];
  iconName: string;
  badge?: string;
}

export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  iconName: string;
  products: ProductDetail[];
}

export const PRODUCTS_DATA: ProductCategory[] = [
  {
    id: "odoo-products",
    title: "Odoo Enterprise Apps",
    description: "Plug-and-play modular extensions engineered to supercharge inventory, financial compliance, and logistics inside standard Odoo ERP ecosystems.",
    iconName: "Briefcase",
    products: [
      {
        id: "twincore-fleet-pro",
        name: "Twincore Fleet Pro",
        tagline: "Preventive maintenance, IoT telemetry, and digital driver logs.",
        description: "Transform how your corporate fleet communicates with inventory and accounting. Fleet Pro integrates live telematics directly into Odoo Project and Fleet models, triggering preventive maintenance tickets based on physical vehicle distance metrics.",
        features: [
          "Automated fuel card transactions matching and receipt parsing",
          "Advanced maintenance planning algorithms to prevent breakdown delays",
          "Smart digital logbooks matching regional transport safety guidelines"
        ],
        specs: [
          "Odoo v16, v17, and v18 Compatibility",
          "Real-time GPS provider webhook integrations",
          "Fully automated offline-capable mobile interface"
        ],
        iconName: "Truck",
        badge: "Best Seller"
      },
      {
        id: "twincore-quick-scan",
        name: "Twincore Quick-Scan WMS",
        tagline: "Millisecond barcode scanning and offline-first inventory management.",
        description: "An advanced, robust, and highly optimized Android PDA Companion application linking with Odoo Warehouse module. Built to withstand erratic warehouse Wi-Fi, permitting offline stock scanning and automatically queuing updates to PostgreSQL.",
        features: [
          "Ultra-fast processing for major EAN-13, GS1-128, and QR barcodes",
          "Decoupled sync buffer to support offline storage for up to 8 hours of work",
          "Guided screen workflows minimizing manual warehouse picker human error"
        ],
        specs: [
          "Native Android hand-held SDK standard support",
          "Compatible with Zebra, Honeywell, and Datalogic scanners",
          "Over 12,000 active inventory items loaded in cache memory"
        ],
        iconName: "Barcode",
        badge: "Upgraded v5.0"
      },
      {
        id: "twincore-smart-ledger",
        name: "Twincore Smart Ledger",
        tagline: "Localized taxation automation and direct banking API reconciliation.",
        description: "An Odoo suite enhancement ensuring localized automatic dynamic tax rate adjustments, multi-currency ledger conversions, and direct secure bank feed streams, speeding up month-end book completion.",
        features: [
          "Syncs with global financial institutions and stripe gateways",
          "Intelligent balance matching suggestions with 98.7% accuracy rate",
          "Adaptive QWeb ledger reports customizable for auditing"
        ],
        specs: [
          "Full dual-ledger support and multi-currency adjustments",
          "SOC-2 Type II secure transmission standards",
          "Pre-configured tax structures for EU, GCC, and NA guidelines"
        ],
        iconName: "FileSpreadsheet"
      },
      {
        id: "smart-crm-sales-booster",
        name: "Smart CRM Sales-Booster",
        tagline: "Incorporate AI pipelines & automated messenger dispatchers directly in CRM.",
        description: "An interactive, visual helper that coordinates instant lead response tasks, assigns rating metrics using operational parameters, and opens dynamic WhatsApp/Email auto-chat panels.",
        features: [
          "Direct integration with WhatsApp API, email triggers, and chat widgets",
          "Automatic lead ranking using customizable parameters and customer history",
          "Interactive dashboard with real-time conversion rates and sales goals"
        ],
        specs: [
          "Seamless custom CRM funnel view integration",
          "Twilio & Meta API gateway connectors included",
          "Real-time sync and push notifications support"
        ],
        iconName: "Zap",
        badge: "Hot App"
      }
    ]
  },
  {
    id: "sharepoint-products",
    title: "SharePoint & Microsoft 365 Apps",
    description: "Premium collaborative portals, rapid document automation pipelines, and MS Teams integrations to streamline communication.",
    iconName: "Layers",
    products: [
      {
        id: "twincore-portal-hub",
        name: "Twincore Portal Hub",
        tagline: "The definitive enterprise digital intranet and social portal.",
        description: "Revitalize your legacy SharePoint site. Portal Hub replaces standard out-of-the-box corporate pages with highly styled, customizable widget modules for corporate announcements, company milestones, calendars, and organizational charts.",
        features: [
          "Custom lightweight web-parts ensuring fast loading across weak networks",
          "Multi-hub communication templates for departmental updates",
          "Fully integrated real-time birthday, work anniversary, and social feeds"
        ],
        specs: [
          "Modern SharePoint Online / SPFx Framework v1.18 Ready",
          "Responsive mobile layouts matching corporate design tokens",
          "Full Microsoft Active Directory security standard conformity"
        ],
        iconName: "Layout",
        badge: "Most Popular"
      },
      {
        id: "docflow-automator",
        name: "DocFlow Automator",
        tagline: "Automated document ingestion, OCR parsing, and custom approvals.",
        description: "A SharePoint document library enhancement that leverages Power-Automate connectors and secure server code to scan uploaded files, parse keys, populate custom metadata columns, and routing approvals.",
        features: [
          "OCR dynamic text extraction of PDFs, invoices, and purchase contracts",
          "Visual custom digital signature and secure validation tracking",
          "E-mail and Teams automatic confirmation dispatchers to external vendors"
        ],
        specs: [
          "Power Automate cloud flows and Azure Document Intelligence sync",
          "Stores standard PDF-A long-term archiving formats",
          "Complex hierarchical multi-level approval matrices compatible"
        ],
        iconName: "FileCheck",
        badge: "Save Time"
      },
      {
        id: "twinsync-teams-connector",
        name: "TwinSync Teams Connector",
        tagline: "Synchronize notifications, storage systems, and live monitors.",
        description: "A lightweight, secure utility connecting SharePoint updates, Odoo backend metrics, and live server alerts directly into customizable, secure Microsoft Teams channels with interactive buttons.",
        features: [
          "Adaptive cards rendering directly in MS Teams channels",
          "Supports actions like 'Approve Record' or 'View Invoice' straight from chat",
          "Smart rate-limiting prevents channel clutter and notification fatigue"
        ],
        specs: [
          "Secure Microsoft Graph API integration layers",
          "Highly configurable message card designer",
          "Under 100ms transit delay from triggering event to chat"
        ],
        iconName: "MessageSquare"
      },
      {
        id: "flow-task-matrix",
        name: "Power-Automate Task Matrix",
        tagline: "Visual command board tracking cross-department workflow queues.",
        description: "Unifies tasks from SharePoint, Jira, and Odoo into a highly responsive, modern kanban container. Eliminates the need for team members to log into multiple remote systems to clear approvals.",
        features: [
          "Consolidated single-dashboard workspace for all pending work items",
          "Rich interactive visual timers indicating contract SLAs and deadlines",
          "Automatic priority scoring to surface high-priority tasks first"
        ],
        specs: [
          "Fully responsive mobile grid for on-the-go managers",
          "Sync frequency under 30 seconds for all external sources",
          "Exportable workflow tracking spreadsheets"
        ],
        iconName: "Kanban",
        badge: "New Release"
      }
    ]
  }
];

import { Service, Technology, Product, PortfolioItem, BlogPost, Testimonial } from "./types";

export const servicesData: Service[] = [
  {
    id: "sharepoint-development",
    name: "SharePoint Development",
    shortDesc: "Architect robust intranet hubs, complex document repositories, and process automations that optimize enterprise collaboration.",
    detailedDesc: "NextAspect offers end-to-end SharePoint Solutions designed to scale. We transform cluttered files into structured document repositories, connect dispersed workforces with styled modern intranets, and build customized SPFx (SharePoint Framework) features that fit perfectly within your existing Microsoft 365 licensing.",
    benefits: [
      "Zero secondary hosting costs by utilizing existing enterprise M365 licensing",
      "Unified portal for document management, search, and secure communication",
      "Automatic synchronization across mobile devices, desktop apps, and web interfaces",
      "Military-grade access controls, information barrier protection, and compliance logs"
    ],
    features: [
      "Custom SharePoint Framework (SPFx) web parts using modern React components",
      "Enterprise Intranets & Structured Document Management Systems (DMS)",
      "Microsoft Power Automate integrations for frictionless legacy approvals",
      "Hybrid and fully cloud-based migrations with near-zero workflow downtime"
    ],
    techUsed: ["SharePoint Online", "SPFx React", "TypeScript", "Power Automate", "PowerApps", "Microsoft Graph API"],
    industries: ["Finance", "Healthcare", "Legal", "Construction & Engineering", "Global Logistics"],
    iconName: "SharepointIcon",
    faqs: [
      {
        question: "Can SharePoint integrate with our existing ERP?",
        answer: "Absolutely. We routinely bridge SharePoint with systems like SAP, Oracle, and Odoo using Microsoft Graph API and custom Express.js microservices."
      },
      {
        question: "Do you build SPFx components using React?",
        answer: "Yes, all our SharePoint web parts are engineered natively using React JS and TypeScript, aligned with Microsoft's official fluent architecture."
      }
    ]
  },
  {
    id: "react-js-development",
    name: "React JS Development",
    shortDesc: "Engaging user interfaces with pixel-perfect responsive layouts, optimized component architectures, and fluid animations.",
    detailedDesc: "Our core frontend team produces interactive, high-fidelity React applications. By employing responsive layouts, unified global state engines, and strict CSS variables, we deliver user interfaces that capture user attention instantly and maintain a smooth 60fps frame rate.",
    benefits: [
      "Unmatched loading performance with fine-tuned asset pipelines and code splitting",
      "Re-usable component trees that speed up future feature releases by up to 40%",
      "Predictable state architectures utilizing modern React Hooks and Contexts",
      "Complete aesthetic consistency customized to match your branding guidelines precisely"
    ],
    features: [
      "Intuitive dashboard environments with custom interactive charting engines",
      "Complex single-page applications (SPAs) optimized for browser rendering limits",
      "Highly responsive animations and gestures using the motion engine",
      "Legacy app migrations into modern modular React architectures"
    ],
    techUsed: ["React JS", "Vite", "TypeScript", "Tailwind CSS", "Motion", "Recharts", "D3"],
    industries: ["SaaS & Software", "E-commerce", "Fintech", "Healthtech", "Real Estate"],
    iconName: "ReactIcon",
    faqs: [
      {
        question: "How do you avoid performance bottlenecks in heavy React apps?",
        answer: "We employ lazy-loading, useMemo/useCallback memoizations, atomic state managers, and keep index layouts clean to prevent unsolicited and redundant re-renders."
      },
      {
        question: "Are your layouts mobile-responsive?",
        answer: "Yes, we build desktop-first precision layouts made responsive with fluid Tailwind utilities, tested across all popular screen breakpoints."
      }
    ]
  },
  {
    id: "nextjs-development",
    name: "Next.js Development",
    shortDesc: "Enterprise SEO-first apps leveraging server-side rendering, dynamic API routing, and state-of-the-art static-site generation.",
    detailedDesc: "Next.js is our premier framework for high-converting marketing portals, SaaS apps, and product catalogs. By combining Server-Side Rendering (SSR) and Incremental Static Regeneration (ISR), your site loads instantaneously, scoring straight 100s on Google Lighthouse while providing an app-like feel.",
    benefits: [
      "Maximum search-engine searchability out of the box with dynamic metadata",
      "Lightning-fast Initial Content Paint (ICP) times for superior conversion rates",
      "Flexible hybrid architectures using both client-interactive and server-rendered components",
      "Serverless route endpoints for keeping API credentials hidden and secure"
    ],
    features: [
      "Structured SEO architectures with automatic sitemap and metadata configurations",
      "Client-server hybrid layouts with server-side rendered data fetching",
      "Custom App Router and pages configurations for clear system boundaries",
      "Optimized Asset pipelines with intelligent next/image-like optimizations"
    ],
    techUsed: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel", "Node.js"],
    industries: ["Marketing & Media", "SaaS Startups", "Product Directory Catalogs", "E-commerce Platforms"],
    iconName: "NextIcon",
    faqs: [
      {
        question: "Why should we choose Next.js over standard React?",
        answer: "If your system needs SEO, public product indexing, and high organic search conversion, Next.js is absolutely essential as it compiles static markup on the server."
      }
    ]
  },
  {
    id: "mern-stack-development",
    name: "MERN Stack Development",
    shortDesc: "Full-stack web applications wired with Node, Express, React, and MongoDB for agile product delivery.",
    detailedDesc: "Our full-stack engineers specialize in the MERN stack to deliver flexible, robust web platforms quickly. We bind Mongo's flexible document structure with Express/Node backends, ensuring unified Javascript throughout your entire stack.",
    benefits: [
      "Accelerated time-to-market thanks to single-language Javascript execution",
      "Scalable document database schema that accommodates rapid business adjustments",
      "High throughput Node.js servers capable of handling thousands of simultaneous operations",
      "Clean modular code separating backend API paths from interactive frontend state"
    ],
    features: [
      "RESTful API endpoints with structured JSON schemas and robust error handling",
      "Secure JSON Web Token (JWT) authorizations and user account setups",
      "Real-time event sync using WebSockets for messaging and data updates",
      "Automated database migrations, backing up active production documents daily"
    ],
    techUsed: ["MongoDB", "Express.js", "React JS", "Node.js", "TypeScript", "Tailwind CSS"],
    industries: ["B2B SaaS", "Social Platforms", "Marketplaces", "Booking & Reservation Engines"],
    iconName: "MernIcon",
    faqs: [
      {
        question: "Is MongoDB suitable for financial transaction architectures?",
        answer: "While MongoDB has multi-document ACID transactions, for highly relational ledgers we often suggest Odoo ERP or MySQL/PostgreSQL, which we integrate seamlessly."
      }
    ]
  },
  {
    id: "typescript-development",
    name: "TypeScript Development",
    shortDesc: "Bring total type-safety, structural design patterns, and self-documenting code systems to your web operations.",
    detailedDesc: "We write strict, reliable TypeScript across all frontend and backend codebases. This mitigates over 90% of standard runtime exceptions, ensures auto-completions for developer teams, and serves as an interactive documentation tool for future code scaling.",
    benefits: [
      "Fewer system crashes with compile-time type validation",
      "Frictionless developer onboarding facilitated by structural interface guidelines",
      "Accelerated refactoring speeds, allowing code updates with complete confidence",
      "Robust data serialization models aligning API structures perfectly with UI state"
    ],
    features: [
      "Strict type assertions, avoiding structural bugs and loose generic parameters",
      "Intertwined data contracts defining clear communication rules between backend and client",
      "Refactored custom utilities engineered specifically to handle data transformations safely",
      "Strict type checking integrated directly within continuous integration (CI) run logs"
    ],
    techUsed: ["TypeScript", "ESLint", "TSC", "React TS Context", "Zod", "Type-safe Express Routing"],
    industries: ["Enterprise Software", "Fintech Systems", "Automated IoT Systems", "Complex Cloud Platforms"],
    iconName: "TypeScriptIcon",
    faqs: [
      {
        question: "Does compiling TypeScript slow down the website launch cycles?",
        answer: "On the contrary! By catching syntax and typing mistakes prior to runtime, it shaves off hours of live manual testing and minimizes deployment issues."
      }
    ]
  },
  {
    id: "odoo-erp-development",
    name: "Odoo ERP Development",
    shortDesc: "Tailor custom apps, automate operations, and consolidate all your enterprise resource pipelines in Odoo CRM and ERP.",
    detailedDesc: "NextAspect is a premier Odoo consulting and engineering force. We replace disconnected systems with a pristine, centralized Odoo platform. We write Python-based custom Odoo modules, set up dynamic multi-company ledgers, and automate custom supply chain tracking pipelines with precision.",
    benefits: [
      "Complete consolidation: ERP, CRM, HRM, Inventory, and Accounting on one unified platform",
      "Dramatically reduced software licensing overheads relative to SAP or Oracle NetSuite",
      "Extensible model structures, letting you add custom fields and automated server actions",
      "Fully customized workflows designed to represent your biological operational processes exactly"
    ],
    features: [
      "Custom Python module engineering matching complex organizational rules",
      "Styled PDF invoicing layouts, automated invoice dispatches, and bank syncs",
      "Modern inventory barcoding automations and custom reordering rulesets",
      "Advanced warehouse configurations supporting multi-step routing and drop-shipping"
    ],
    techUsed: ["Odoo ERP (Community/Enterprise)", "Python", "XML", "PostgreSQL", "Odoo QWeb", "Odoo APIs"],
    industries: ["Manufacturing", "Wholesale & Distribution", "E-commerce Retail", "Professional Services"],
    iconName: "OdooIcon",
    faqs: [
      {
        question: "Do you develop for both Odoo Community and Enterprise versions?",
        answer: "Yes. We configure and custom-engineer workflows for both versions, optimizing around your structural scale and licensing boundaries."
      },
      {
        question: "Can you map custom manufacturing operations in Odoo?",
        answer: "Yes, we specialize in advanced manufacturing configurations (MRP), designing custom bills of materials, work center operations, and capacity schedules."
      }
    ]
  },
  {
    id: "odoo-migration-services",
    name: "Odoo Migration & Upgrade",
    shortDesc: "Safely transition your historic business documents and custom Python modules to the latest Odoo versions.",
    detailedDesc: "ERP migrations require meticulous data mapping. We step in to structure and dry-run your databases, upgrading legacy instances (like Odoo v12 or v14) into the lightning-fast modern versions (v17 or v18) with complete relational record security.",
    benefits: [
      "Access to modern features, multi-company accounting wizards, and updated UI designs",
      "Substantial performance upgrades, shorterning large database query times",
      "Comprehensive cleanup, purging duplicate records and legacy technical clutter",
      "Zero historical record loss during active accounting reconciliation shifts"
    ],
    features: [
      "Advanced ETL processes mapping thousands of accounting and warehouse rows",
      "Custom Python refactoring, updating legacy syntax to modern Odoo platform frameworks",
      "Relational integrity matching: linking sales, invoices, and journal payments perfectly",
      "Complete dry-run test upgrades executed in cloud sandboxes before live deployments"
    ],
    techUsed: ["PostgreSQL ETL", "Python Module Upgrades", "XML Views Mapping", "Odoo Migration Scripts"],
    industries: ["Heavy Industry", "Large Scaled Supply Chains", "Multi-brand Conglomerates"],
    iconName: "OdooMigrationIcon",
    faqs: [
      {
        question: "How much database downtime is expected during Odoo upgrade shifts?",
        answer: "Through modular staging, we prepare and convert 100% of the data in sandbox environments first. The final live swap block is structured over a single weekend night, keeping business operations fully unaffected."
      }
    ]
  },
  {
    id: "erp-consulting",
    name: "ERP Consulting",
    shortDesc: "Strategic scoping, operational assessments, clear software audits, and direct business process optimization.",
    detailedDesc: "Don't buy software blindly. Our senior business designers analyze your current operation, spot manual administration dependencies, and draft a clean system architecture plan. We write actionable scoping sheets before any developer starts coding.",
    benefits: [
      "A complete operational map identifying administrative tasks that waste time",
      "Precise project scoping, eliminating structural software over-purchases",
      "Detailed technology selection reports, balancing custom coding and off-the-shelf software",
      "Clear implementation timelines ensuring project execution matches milestones precisely"
    ],
    features: [
      "Interactive workshop sessions cataloging operational bottlenecks",
      "Detailed architectural maps aligning finance, CRM, and supply networks",
      "ROI impact worksheets outlining expected structural savings and cycle times",
      "Change-management coaching helping team divisions adopt the custom software smoothly"
    ],
    techUsed: ["Enterprise Mapping Diagrams", "Business Operational Audits", "Figma Interactive Mockups"],
    industries: ["Distribution", "Commercial Real Estate", "Global Trading Hubs", "Healthcare Providers"],
    iconName: "ErpIcon",
    faqs: [
      {
        question: "Why invest in consulting before coding?",
        answer: "Because restructuring an architectural system mid-way is extremely costly. Clear initial consulting ensures the final software works exactly as your business behaves."
      }
    ]
  },
  {
    id: "api-integration",
    name: "API Integration Services",
    shortDesc: "Bridge legacy software systems, automate manual data synchronizations, and establish secure external API gateways.",
    detailedDesc: "We build secure bridges that let modern systems talk to each other. Whether syncing e-commerce with CRM pipelines, piping telemetry logs to monitoring suites, or integrating payment channels, we construct low-latency, highly secure custom API layers.",
    benefits: [
      "Elimination of manual export-import tasks between disconnected business tools",
      "Instant, real-time data sync, preventing clerical mistakes and outdated figures",
      "Highly stable communication interfaces that handle connection interruptions gracefully",
      "Military-grade endpoints with strict tokens, throttling rules, and monitoring dashboards"
    ],
    features: [
      "Custom webhook engines synchronizing events instantly across separate sites",
      "Enterprise payment integrations supporting Stripe, PayPal, and regional gateways",
      "Unified software middleware translation platforms built with Express.js and Node",
      "Comprehensive telemetry tracking detailing connection errors and API payload logs"
    ],
    techUsed: ["Node.js", "Express", "REST APIs", "OAuth 2.0", "Webhooks", "JSON Schema Validator"],
    industries: ["Fintech", "E-commerce Networks", "Supply Logistics", "Booking Systems"],
    iconName: "ApiIcon",
    faqs: [
      {
        question: "How do you handle third-party API outages?",
        answer: "Our middleware uses intelligent retry limits, queuing models, and local error backlogging to keep data intact until the third-party service recovers."
      }
    ]
  },
  {
    id: "cloud-solutions",
    name: "Cloud Solutions & DevOps",
    shortDesc: "Create scalable server networks on AWS or Azure with complete CI/CD automation, serverless setups, and round-the-clock safety.",
    detailedDesc: "Our cloud division sets up secure, automated server environments. We package your custom systems in containers, automate deployment pathways (CI/CD), and ensure automatic network scaling to save you up to 35% in hardware costs.",
    benefits: [
      "Near-zero server maintenance, letting developer teams focus purely on custom coding",
      "Automatic capacity expansion to easily manage sudden, high shopping or traffic peaks",
      "Significant reduction of cloud billing by deploying resources only when active",
      "Robust data protections with automated daily image backups and recovery tests"
    ],
    features: [
      "Docker container deployment patterns, ensuring exact operational replication on any cloud",
      "Seamless GitHub Actions pipeline setups, deploying vetted code branches automatically",
      "Serverless functions architecture for APIs, avoiding ongoing server idling costs",
      "Comprehensive cloud firewall configurations and DDoS protection layers"
    ],
    techUsed: ["AWS", "Azure", "Docker", "Kubernetes", "GitHub Actions", "Nginx", "Linux Server"],
    industries: ["High-traffic SaaS", "Retail E-commerce", "Govtech Networks", "Data Aggregators"],
    iconName: "CloudIcon",
    faqs: [
      {
        question: "Can you optimize our existing high AWS hosting charges?",
        answer: "Yes. We run cloud resource audits, cleaning out orphaned disks, right-sizing under-utilized instances, and establishing serverless micro-routing."
      }
    ]
  },
  {
    id: "custom-software-development",
    name: "Custom Software Development",
    shortDesc: "Build bespoke web and server applications engineered from scratch to serve your unique, proprietary operations.",
    detailedDesc: "When templated SaaS products can't handle your proprietary workflows, we engineer custom software from the ground up. We craft clean, self-documenting codebases with perfect responsive fidelity, modular data storage databases, and seamless scalability.",
    benefits: [
      "100% proprietary system ownership with zero ongoing user seat license costs",
      "Impenetrable structural fit, eliminating unnecessary side processes and spreadsheet hacks",
      "Total adaptability, letting your business evolve and introduce unique features on demand",
      "Robust data safety, as your system is not exposed on common, generic platforms"
    ],
    features: [
      "Thorough discovery phases matching processes with scalable software logic",
      "Complete clean-sheet database designs mapped precisely around relational datasets",
      "Highly interactive web frontends, styled with Inter & Space Grotesk look layouts",
      "Secure API layers, enabling easy future mobile and desktop application releases"
    ],
    techUsed: ["TypeScript", "Node.js", "Express", "PostgreSQL", "React", "Tailwind CSS"],
    industries: ["Proprietary Manufacturing", "Medical Scheduling Systems", "B2B Subscription Services"],
    iconName: "CustomDevIcon",
    faqs: [
      {
        question: "Do we own the full source code once the project is finished?",
        answer: "Absolutely. As NextAspect's partner, you own 100% of the developed custom source code, documentation repositories, and environment configurations."
      }
    ]
  },
  {
    id: "ui-ux-design",
    name: "UI/UX Design",
    shortDesc: "Sleek, human-centered interfaces combining modern aesthetic palettes, logical flows, and highly visual components.",
    detailedDesc: "Great design balances art and function. Our specialists draft wireframes, interactive web prototypes, and consistent design books. This guides development teams with pixel-perfect visual targets, focusing on ease-of-use and conversion rates.",
    benefits: [
      "User satisfaction and ease-of-use, preventing workflow abandonments",
      "Substantially faster implementation, as developer teams build from finalized visual layouts",
      "A brand appearance that commands trust and justifies enterprise-tier pricing",
      "Perfect mobile layout adaptability built into the dynamic design mockups from day one"
    ],
    features: [
      "Detailed wireframing loops illustrating structural path choices clearly",
      "High-fidelity interactive visual models allowing tactile flow reviews",
      "Complete design catalogs containing consistent colors, layouts, and font rules",
      "Regular usability testing with focus participants to refine critical conversion paths"
    ],
    techUsed: ["Figma Development Maps", "Interactive Prototypes", "A/B Layout Testing Scripts"],
    industries: ["Fintech Apps", "SaaS Startups", "Consumer Booking Ports", "Internal Enterprise Portals"],
    iconName: "UiUxIcon",
    faqs: [
      {
        question: "Do you supply the design files to our internal teams?",
        answer: "Yes, we transfer all finalized Figma source boards, component files, customized icons, and color libraries to you upon project closure."
      }
    ]
  }
];

export const technologiesData: Technology[] = [
  // Frontend
  {
    id: "tech-react",
    name: "React JS",
    category: "frontend",
    overview: "We construct lightweight, highly interactive user experiences utilizing atomic rendering structures in React. It's the engine of choice for modern B2B dashboards, interactive portals, and intricate product configuration wizards.",
    whyChoose: "Its component-driven framework allows us to translate complex systems into neat, maintainable, and highly reusable frontend blocks. This shaves calendar days off initial development while keeping the user experience snappy and fluid.",
    benefits: [
      "Speedy DOM loading via smart memory-buffered node diffs",
      "Thousands of vetted community modules, speeding up complex visual inclusions",
      "Highly predictable data flows, simplifying long-term bug triage",
      "Perfect integration with animation systems like Motion for premium visuals"
    ],
    useCases: ["Dynamic data dashboards", "Complex interactive checkout systems", "Custom control boards"],
    integrationCapabilities: "Integrates smoothly with any RESTful API architecture and supports instant live connections using libraries like Socket.io.",
    relatedServices: ["React JS Development", "MERN Stack Development", "Custom Software Development"],
    iconName: "ReactIcon"
  },
  {
    id: "tech-nextjs",
    name: "Next.js",
    category: "frontend",
    overview: "Next.js delivers the ultimate hybrid architecture: static page speed for search engine rankings, server-side data fetching for secure computations, and hydrated React assets for engaging client interactivity.",
    whyChoose: "In modern market environments, slow loading translates to lost revenue. Next.js ensures your marketing portals, product catalogs, and commercial platforms compile beforehand, rendering assets in milliseconds.",
    benefits: [
      "Impeccable SEO performance with automatic server-rendered HTML blocks",
      "Reduced server load because pre-rendered assets are cached at network edge limits",
      "Native image optimizations that prevent slow loading on mobile connections",
      "Seamless built-in routing configurations that keep the codebase organized"
    ],
    useCases: ["Optimized SaaS landing hubs", "Speed-sensitive catalog portals", "Content-heavy blogs"],
    integrationCapabilities: "Communicates seamlessly with Headless CMS networks, native databases, and standard Express middleware architectures.",
    relatedServices: ["Next.js Development", "UI/UX Design", "Custom Software Development"],
    iconName: "NextIcon"
  },
  {
    id: "tech-typescript",
    name: "TypeScript",
    category: "frontend",
    overview: "TypeScript injects structural type enforcement directly into standard JavaScript operations. This gives developer teams clear guardrails, catching coding errors inside the development environment before they can impact real users.",
    whyChoose: "Enterprise-grade operations cannot afford 'undefined' properties or erratic interface behaviors. TypeScript serves as a binding contract across all developer branches, keeping data layers clean and stable.",
    benefits: [
      "Elimination of silent type errors that disrupt active checkouts",
      "Self-documenting data structures that accelerate team onboarding cycles",
      "Superior code editing, bringing autocomplete functionality to custom configurations",
      "Zero impact on live size because compilation translates TypeScript back to pure JS assets"
    ],
    useCases: ["Complex financial computation dashboards", "SaaS client dashboards", "Large-scale collaborative tools"],
    integrationCapabilities: "Maps cleanly to database models in PostgreSQL and MongoDB, guaranteeing consistent types from datastore to button state.",
    relatedServices: ["TypeScript Development", "MERN Stack Development", "API Integration Services"],
    iconName: "TypeScriptIcon"
  },
  {
    id: "tech-tailwind",
    name: "Tailwind CSS",
    category: "frontend",
    overview: "A utility-first, modern styling architecture that lets us build premium modern UI directly within the component space. Its strict system of design tokens guarantees visual consistency across all pages.",
    whyChoose: "It completely cleans out the bloating generated by multi-megabyte legacy CSS sheets. This produces tiny, cached visual style packages that load instantly on low-bandwidth networks.",
    benefits: [
      "Ultra-fast page loads due to minimal style file compilations",
      "Responsive prefixes that make complex layouts adapt gracefully on screens",
      "Clean visual matching using standardized padding, margins, and border parameters",
      "Seamless layout updates without the risk of breaking adjacent page elements"
    ],
    useCases: ["Slick glassmorphic marketing interfaces", "Data panels needing fine responsive structures", "Light/Dark theme UI grids"],
    integrationCapabilities: "Integrates perfectly with React components and animation engines like Motion.",
    relatedServices: ["UI/UX Design", "React JS Development", "Next.js Development"],
    iconName: "TailwindIcon"
  },
  // Backend
  {
    id: "tech-node",
    name: "Node.js",
    category: "backend",
    overview: "Node’s asynchronous event-driven layout executes instructions concurrently. It forms the backbone of scale-critical micro-endpoints, data middleware, and processing backends.",
    whyChoose: "Its non-blocking nature means slow database processes won't lock up operations for other visiting customers. This allows single Node servers to coordinate thousands of active client systems concurrently.",
    benefits: [
      "Outstanding speed on asynchronous network communication structures",
      "Vast npm catalog containing pre-vetted modules for every business system",
      "Allows developers to write Javascript throughout, increasing collaboration speed",
      "Low RAM footprints, helping control cloud host bills as workflows scale"
    ],
    useCases: ["Scalable SaaS user engines", "Real-time activity logging platforms", "Integrative business API servers"],
    integrationCapabilities: "Pairs cleanly with MongoDB, PostgreSQL, standard MQTT IoT brokers, and enterprise payment systems.",
    relatedServices: ["MERN Stack Development", "API Integration Services", "Custom Software Development"],
    iconName: "NodeIcon"
  },
  {
    id: "tech-express",
    name: "Express.js",
    category: "backend",
    overview: "A lightweight, robust micro-framework written for Node.js. It organizes server-side business rules, routing configurations, and session authorization checks with minimal processing overhead.",
    whyChoose: "It avoids the heavy code-bloat of standard monolithic platforms. This lets NextAspect engineers custom-scaffold microservices that execute precisely the requested logic without uninvited internal checks.",
    benefits: [
      "Fast API path definitions with clean middleware stacks",
      "Frictionless configuration of JSON request bodies and response headers",
      "Simple setup of authorization checks protecting secure enterprise data paths",
      "Excellent compatibility with container systems like Docker"
    ],
    useCases: ["Security API gateways", "Third-party webhook endpoints", "Custom platform backdoors"],
    integrationCapabilities: "Serves as the vital link between front-end React clients and relational database structures.",
    relatedServices: ["MERN Stack Development", "API Integration Services", "Odoo ERP Development"],
    iconName: "ExpressIcon"
  },
  {
    id: "tech-python",
    name: "Python",
    category: "backend",
    overview: "Python is a robust, dynamic programming language globally acclaimed for its clean readability and unmatched power in mathematical analysis, machine learning models, and ERP frameworks.",
    whyChoose: "It is the native language of the Odoo ERP structure. We write Python to construct clean backend record engines, scheduled maintenance scripts, and automated database calculations.",
    benefits: [
      "Excellent syntax clarity, ensuring long-term software maintainability",
      "Powerful library suites for processing files, parsing data, and managing operations",
      "The native programming backbone of Odoo, ensuring flawless integration with Odoo Core",
      "Outstanding security controls for running critical calculations"
    ],
    useCases: ["Custom Odoo operations modules", "Scheduled accounting file tasks", "Complex data reports"],
    integrationCapabilities: "Fully integrated into PostgreSQL database engines through Odoo's Object-Relational Mapping (ORM) software.",
    relatedServices: ["Odoo ERP Development", "Odoo Migration & Upgrade", "ERP Consulting"],
    iconName: "PythonIcon"
  },
  // ERP
  {
    id: "tech-odoo",
    name: "Odoo ERP",
    category: "erp",
    overview: "Odoo is a comprehensive suite of business applications. It unifies CRM, Sales, E-commerce, Inventory, Manufacturing, HRM, and Accounting under a clean, modular technical canopy.",
    whyChoose: "It completely eliminates the information silos that plague modern businesses, replacing dozens of disconnected, expensive monthly software subscriptions with one single database.",
    benefits: [
      "Drastic licensing cost reductions compared to SAP or Salesforce",
      "Modular scalability - install only what you need, activate others later in 1-click",
      "Fully open-source community edition and highly supported enterprise layouts",
      "Highly customizable core using Python modules and custom structural rules"
    ],
    useCases: ["Centralized manufacturing and inventory tracking", "Integrated B2B commercial pipelines", "Unified company financial reporting"],
    integrationCapabilities: "Connects with Shopify, WooCommerce, DHL, FedEx, Stripe, and global tax APIs dynamically.",
    relatedServices: ["Odoo ERP Development", "Odoo Migration & Upgrade", "ERP Consulting"],
    iconName: "OdooIcon"
  },
  {
    id: "tech-sharepoint",
    name: "SharePoint",
    category: "erp",
    overview: "A secure, enterprise-grade content management system that integrates with the Microsoft 365 environment. It is the premier tool for building scalable corporate intranets, unified document control networks, and corporate workspaces.",
    whyChoose: "Since most enterprise organizations already pay for Microsoft licenses, customizing SharePoint taps into a secure, robust document platform without adding any hosting costs.",
    benefits: [
      "Flawless integration with document workflows like Word, Excel, and Outlook",
      "Deeply secure permission trees down to individual file rows",
      "Real-time visual collaborative reviews on documents",
      "Extensive file search capabilities utilizing Microsoft Graph analytics"
    ],
    useCases: ["Corporate document control repositories", "Secure internal team portals", "M365 intranet sites"],
    integrationCapabilities: "Wired into Power Automate, Microsoft Teams, and Power BI natively.",
    relatedServices: ["SharePoint Development", "ERP Consulting", "API Integration Services"],
    iconName: "SharepointIcon"
  },
  // Database
  {
    id: "tech-postgres",
    name: "PostgreSQL",
    category: "database",
    overview: "The world's most advanced open-source relational database. Built for extreme data integrity, it handles massive transactional loads and complex SQL queries with flawless reliability.",
    whyChoose: "It is the reliable storage foundation of Odoo ERP. We configure PostgreSQL with custom indexes, read-replicas, and storage strategies to keep enterprise reporting fast and safe.",
    benefits: [
      "Rigid data constraints guaranteeing immaculate financial accounting logs",
      "Impeccable performance on multi-table relational join queries",
      "Robust backup tools allowing real-time recovery without database downtime",
      "Fully active open-source codebase supported by global enterprise networks"
    ],
    useCases: ["Odoo resource data repositories", "B2B financial ledgers", "SaaS client access tables"],
    integrationCapabilities: "Connects securely with Node, Python, Odoo ORM, and major cloud dashboard products.",
    relatedServices: ["Odoo ERP Development", "Custom Software Development", "Cloud Solutions & DevOps"],
    iconName: "PostgresIcon"
  },
  {
    id: "tech-mongo",
    name: "MongoDB",
    category: "database",
    overview: "A document-based NoSQL database that stores data in flexible JSON-like documents. It is perfect for rapid scaling, unstructured datasets, and fast-paced developer iterations.",
    whyChoose: "When business features evolve weekly, standard relational schemas can cause deployment bottlenecks. MongoDB maps directly to JavaScript structures, facilitating rapid UI adjustments.",
    benefits: [
      "Dynamic data layouts - fields can be created on-the-fly without migrations",
      "Native horizontal scaling capabilities via built-in dataset sharing features",
      "Ultra-fast read and write operations on document structures",
      "Excellent compatibility with Node and Express frameworks (MERN Stack)"
    ],
    useCases: ["Content catalog records", "User activity feeds and profile objects", "Dynamic messaging platforms"],
    integrationCapabilities: "Integrates with Node through popular tools like Mongoose for clean validation.",
    relatedServices: ["MERN Stack Development", "Custom Software Development", "API Integration Services"],
    iconName: "MongoIcon"
  },
  // Cloud
  {
    id: "tech-docker",
    name: "Docker",
    category: "cloud",
    overview: "Docker packages custom applications and their exact technical dependencies into standardized virtual containers. This guarantees the application executes identically across all development, testing, and production servers.",
    whyChoose: "It completely eliminates the 'it worked on my computer!' excuse. By bundling environments cleanly, we speed up cloud deployment cycles while insulating core networks from adjacent bugs.",
    benefits: [
      "Guaranteed operational replication regardless of cloud choice (AWS/Azure)",
      "Vastly simplified server transitions and version upgrade pipelines",
      "Isolated execution, protecting underlying host settings from code vulnerabilities",
      "Near-instant startup times, enabling horizontal expansion within seconds"
    ],
    useCases: ["DevOps build workflows", "High-security microservice separations", "Odoo instance isolation configurations"],
    integrationCapabilities: "Runs on all major container orchestrators including Kubernetes and AWS ECS.",
    relatedServices: ["Cloud Solutions & DevOps", "Odoo Migration & Upgrade", "Custom Software Development"],
    iconName: "DockerIcon"
  }
];

export const productsData: Product[] = [
  {
    id: "aspect-erp",
    name: "AspectERP Core",
    tagline: "The Modern Blueprint for Connected Enterprises",
    shortDesc: "A modular, pre-configured enterprise management model designed for growing manufacturers, distributors, and logistics firms.",
    detailedDesc: "Based on the robust Odoo foundation, AspectERP Core accelerates implementation times by 60%. We deliver highly polished accounting wizards, advanced warehouse operations, and simple production tracking sheets pre-configured specifically for modern commerce pipelines.",
    features: [
      "Multi-currency, double-entry accounting with automated tax mapping",
      "Dynamically scheduled manufacturing operations (MRP) linked to real-time warehouse data",
      "Streamlined purchasing workflows with integrated supplier price books",
      "Visual custom dashboard tracking key company KPIs in real time"
    ],
    benefits: [
      "Complete elimination of clerical errors between inventory cards and accounting registries",
      "Substantially lower upfront cost relative to SAP or traditional custom software configurations",
      "Frictionless warehouse coordination with real-time barcode scanning capabilities"
    ],
    techStack: ["Odoo Core", "Python", "PostgreSQL", "Docker", "AWS Hosting Services"],
    mockupType: "dashboard"
  },
  {
    id: "aspect-crm",
    name: "AspectCRM Pro",
    tagline: "Wired pipelines that drive client conversion",
    shortDesc: "Modern commercial flow coordinator helping sales teams track discussions, automate quotes, and close deals.",
    detailedDesc: "AspectCRM Pro brings clarity to sales operations. With visual stages, quote automation, and integrated marketing triggers, your business records every touchpoint clearly, avoiding cold deals and missed follow-ups.",
    features: [
      "Drag-and-drop opportunity boards with automated action prompts",
      "Dynamic proposal generators translating technical requirements into cost spreadsheets",
      "Integrated marketing trackers routing leads from social campaigns directly into sales cards",
      "Automatic email recording linking correspondence directly to client profile accounts"
    ],
    benefits: [
      "Up to 30% increase in lead follow-up speeds via automated action triggers",
      "Complete visibility into team pipeline performance, clarifying monthly expectations",
      "Instant access to full customer purchase histories during ongoing negotiations"
    ],
    techStack: ["React Client JS", "Node.js Server", "MongoDB Store", "Tailwind CSS Layout"],
    mockupType: "kanban"
  },
  {
    id: "aspect-hrm",
    name: "AspectHRM Portal",
    tagline: "Nurture, align, and organize your workforce seamlessly",
    shortDesc: "A complete unified platform for leave management, attendance tracking, performance reviews, and secure payroll.",
    detailedDesc: "AspectHRM simplifies employee operations, replacing endless emails and spreadsheets with a clean employee hub. Employees request time off, upload documents, and complete evaluations from a single portal, while HR reviews records from one central panel.",
    features: [
      "Interactive personnel directories with secure private documentation cabinets",
      "Dynamic leave approval boards linked to visual company-wide vacation timelines",
      "Automated time-tracking tools paired with custom payroll calculation modules",
      "Performance evaluation wizards supporting 360-degree review feedback"
    ],
    benefits: [
      "Saves HR personnel up to 10 administrative hours per week by enabling employee self-service",
      "Ensures absolute compliance by organizing employee certifications and documents cleanly",
      "Accelerates employee reviews and approvals with automated email notifications"
    ],
    techStack: ["SharePoint Framework SPFx", "React JS", "TypeScript", "Power Automate Rules"],
    mockupType: "portal"
  }
];

export const portfolioData: PortfolioItem[] = [
  {
    id: "portfolio-1",
    title: "Global Supply Chain ERP Migration",
    category: "ERP & Odoo",
    description: "Upgraded a massive shipping and distribution enterprise from Odoo v12 with legacy custom code to a highly secure Odoo v18 environment hosted on AWS with zero downtime.",
    industry: "Wholesale & Logistics",
    client: "Apex Trade Global",
    technologies: ["Odoo ERP", "Python", "PostgreSQL", "Docker", "AWS EC2", "GitHub Actions"],
    problem: "Apex was locked out of modern features because their legacy system was built on custom Odoo modules using outdated, unsupported Python parameters. SQL databases frequently timed out, stalling warehouse shipments during peak hours.",
    solution: "NextAspect wrote custom data extraction tools (ETL) to relocate millions of transactional records cleanly. We rewrote legacy Odoo modules to meet modern v18 APIs, configured read-replicas in PostgreSQL, and moved operations to a containerized AWS network.",
    businessImpact: [
      "Reduced system loading delays from 4.5 seconds to 350ms per stock check",
      "Saved 15 hours of manual data alignment per week across multi-company operations",
      "Zero minutes of active business downtime during the ultimate production rollout"
    ],
    metric: "92%",
    metricLabel: "Downtime Reduction",
    mockupType: "spreadsheet"
  },
  {
    id: "portfolio-2",
    title: "Custom Fintech Transactions Dashboard",
    category: "Custom Web App",
    description: "Built a lightning-fast transactions monitoring portal using React and TypeScript, mapping dynamic investment logs onto secure D3 charting panels with complete data encryption.",
    industry: "Financial Services",
    client: "Sterling Mutual",
    technologies: ["React JS", "TypeScript", "Tailwind CSS", "Express.js", "D3.js & Recharts", "PostgreSQL"],
    problem: "Financial advisors lost valuable client time waiting for legacy reports to compile data from split ledger tables. Static charts failed to display complex real-time market trends clearly.",
    solution: "We engineered a clean-room TypeScript React application. Standard database checks were moved to optimized Express backend routes, while frontend panels utilized advanced state memoization alongside highly optimized interactive D3 charting assets.",
    businessImpact: [
      "Reduced average advisor report compilation cycles from 18 minutes to instant clicks",
      "Visualized real-time portfolios with pristine 60fps responsive rendering speeds",
      "100% security audit score achieved via strict token models and data encryption"
    ],
    metric: "15x",
    metricLabel: "Report Generation Speedup",
    mockupType: "dashboard"
  },
  {
    id: "portfolio-3",
    title: "Corporate Intranet & Document Control",
    category: "SharePoint & M365",
    description: "Architected a secure SharePoint document control hub and custom modern workspace for a multi-national healthcare network, managing strict approvals.",
    industry: "Healthcare Systems",
    client: "Vanguard Care Networks",
    technologies: ["SharePoint Online", "SPFx React", "TypeScript", "Power Automate", "Microsoft Graph"],
    problem: "Clinicians struggled with outdated treatment records stored across scattered folders, risking regulatory compliance violations during audits.",
    solution: "We designed a beautifully structured SharePoint DMS utilizing modern web parts built with React and TypeScript. Power Automate pipelines routed records for signature approvals, while Microsoft Graph APIs mapped document tags automatically based on clinician departments.",
    businessImpact: [
      "100% HIPAA audit compliance scores obtained consecutively across all hospitals",
      "Eliminated 25 minutes of document locator search efforts per day per clinician",
      "Zero extra software license fees incurred by leveraging existing corporate M365 accounts"
    ],
    metric: "100%",
    metricLabel: "Compliance Audit Score",
    mockupType: "portal"
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: "blog-1",
    title: "The Ultimate ERP Roadmap: Key Factors to Consider During Odoo Migration",
    category: "Odoo ERP Trends",
    excerpt: "Migrating to Odoo v18 can unlock incredible speeds, but only if you map your data relationships correctly. Discover how to avoid common pitfalls.",
    content: "Upgrading legacy operations systems is a critical event for any growing firm. Modern Odoo versions introduce substantial improvements in accounting reconciliation, automated barcoding, and core calculations. However, migrating complex databases requires systematic data mapping strategies. First, audit your current data, removing duplicate records and orphaned parameters. Second, ensure custom Python scripts are refactored to comply with modern API models. This article outlines our proven steps to minimize downtime during Odoo upgrades.",
    readTime: "6 min read",
    date: "May 25, 2026",
    author: {
      name: "Sarang Sharma",
      role: "Lead ERP Consultant",
      avatar: "SS"
    },
    tags: ["Odoo v18", "ERP Migration", "Database ETL", "Python"]
  },
  {
    id: "blog-2",
    title: "How TypeScript and React Prevent 90% of Common Frontend Production Bugs",
    category: "React Performance",
    excerpt: "Learn how strict type controls and smart interface contracts block errors before they ever reach your customer-facing checkout screens.",
    content: "Writing javascript without static checking can lead to intermittent exceptions on user devices, especially on erratic mobile connections. By enforcing strict TypeScript rules across your components, you catch null references and argument mismatches instantly at compile-time. Pairing this with optimized React Hooks and state memoization produces reliable user experiences that perform flawlessly under heavy traffic. Learn how we structure our React projects at NextAspect to guarantee enterprise stability.",
    readTime: "5 min read",
    date: "May 18, 2026",
    author: {
      name: "Elena Rostova",
      role: "Lead Frontend Engineer",
      avatar: "ER"
    },
    tags: ["React JS", "TypeScript", "Tailwind CSS", "Web Optimization"]
  },
  {
    id: "blog-3",
    title: "Mastering Next.js Route Handlers: Keeping Your Critical API Secrets Hidden",
    category: "Next.js SEO Advantages",
    excerpt: "Exposing third-party API keys in browser networks is a serious vulnerability. Here is how Next.js Server Route Handlers solve this securely.",
    content: "Many modern client applications interact with foreign APIs such as payment networks, SMS servers, and AI engines. Placing API credentials directly inside client JS files exposes them to anyone using browser DevTools. Next.js Route Handlers solve this effortlessly by routing these sensitive requests through secure, server-side code blocks. We analyze the best practices for structuring these handlers, managing environment variables, and ensuring low-latency communication with clients.",
    readTime: "4 min read",
    date: "May 10, 2026",
    author: {
      name: "Marcus Vance",
      role: "Cloud Architect",
      avatar: "MV"
    },
    tags: ["Next.js", "Serverless", "Security", "Web Architecture"]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Arthur Pendelton",
    role: "Chief Operating Officer",
    company: "Trident Logistics Corp",
    quote: "NextAspect redesigned our complete warehouse supply network with Odoo. The operational clarity we've achieved is incredible. Our shipping errors have dropped to near-zero, and team collaboration is fast and seamless.",
    rating: 5
  },
  {
    id: "test-2",
    name: "Samantha Lin",
    role: "VP of Product",
    company: "Scribe SaaS Solutions",
    quote: "The frontend engineering team at NextAspect delivered our web platform with pixel-perfect accuracy. They wrote clean react code with strict TypeScript rules that made our team's scaling process simple. Our customers love the speed.",
    rating: 5
  },
  {
    id: "test-3",
    name: "Dr. Alistair Sterling",
    role: "Director of Digital Systems",
    company: "Vanguard Health Partners",
    quote: "Our strict regulatory framework means document compliance is paramount. NextAspect built a SharePoint system that automated absolute security approvals across 12 hospitals easily, leveraging our existing Microsoft subscriptions.",
    rating: 5
  }
];

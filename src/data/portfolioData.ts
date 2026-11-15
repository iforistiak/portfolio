import {
  Project,
  Skill,
  GalleryPhoto,
  BlogPost,
  Testimonial,
  ClientPartner,
  EducationItem,
  WorkExperience,
  PersonalProfileInfo,
  InterestsData,
  CoreService,
  WorkSkillHighlight
} from '../types';

export const typewriterTitles: string[] = [
  "IT Support Specialist",
  "IT Administration",
  "Technical Support",
  "Web Development",
  "IT Consulting",
  "Office Operations",
  "Helping Businesses Solve Technology Challenges"
];

export const heroDescription: string =
  "As an IT Support Specialist, IT Administrator, and Web Developer, I deliver dependable technical support, office & CRM operations, IT consulting, and custom web development—helping businesses solve technology challenges, streamline daily workflows, and fuel sustainable growth.";

export const coreServices: CoreService[] = [
  {
    id: 'service-1',
    title: 'IT Support & Technical Troubleshooting',
    description:
      'Dedicated remote and on-site technical support for Windows & Linux workstations, software diagnostics, hardware troubleshooting, and rapid issue resolution to keep businesses running smoothly.',
    icon: 'fas fa-headset',
    iconColor: 'var(--blue)'
  },
  {
    id: 'service-2',
    title: 'IT Administration & System Management',
    description:
      'End-to-end office IT administration, MikroTik router & network security configuration, user access management, server maintenance, and automated data backup solutions.',
    icon: 'fas fa-network-wired',
    iconColor: 'var(--green)'
  },
  {
    id: 'service-3',
    title: 'Office Operations & CRM Management',
    description:
      'Streamlining daily office operations, CRM setup and administration, digital record management, client communication pipelines, and automated administrative workflows.',
    icon: 'fas fa-users-cog',
    iconColor: 'var(--purple)'
  },
  {
    id: 'service-4',
    title: 'Web Design & Full-Stack Development',
    description:
      'Fast, mobile-responsive, and search-optimized business websites, custom web portals, and e-commerce platforms engineered for speed, clarity, and reliability.',
    icon: 'fas fa-code',
    iconColor: 'var(--cyan)'
  },
  {
    id: 'service-5',
    title: 'IT Consulting & Technology Solutions',
    description:
      'Helping businesses solve complex technology challenges through practical IT audits, infrastructure upgrade planning, workflow digitization, and strategic tech consulting.',
    icon: 'fas fa-lightbulb',
    iconColor: '#f59e0b'
  },
  {
    id: 'service-6',
    title: 'Hardware Engineering & Office Setups',
    description:
      'Custom workstation assembly, SSD & hardware upgrades, BIOS optimization, structured LAN/Wi-Fi deployment, and complete multi-device office IT setups.',
    icon: 'fas fa-microchip',
    iconColor: 'var(--red)'
  }
];

export const personalProfileInfo: PersonalProfileInfo = {
  fullName: "Md. Istiak Islam",
  headlineRoles: [
    "IT Support Specialist",
    "IT Administration",
    "Technical Support",
    "Web Development",
    "IT Consulting",
    "Office Operations",
    "Helping Businesses Solve Technology Challenges"
  ],
  bio: "Versatile IT & Ops pro skilled in tech support, CRM, and admin. Driven to fuel growth via technology.",
  company: "JBD IT (JBDIT)",
  companyCategory: "Information Technology Company",
  location: "Rajshahi, Bangladesh",
  hometown: "Rajshahi",
  birthday: "October 19",
  college: "Rajshahi Court College, Rajshahi.",
  instagram: "istiakislam_",
  openToWorkRoles: [
    "Administrative Assistant",
    "Assistant Manager",
    "Computer Operator"
  ]
};

export const workSkillHighlights: WorkSkillHighlight[] = [
  {
    id: 'wskill-1',
    title: 'IT Support & Technical Troubleshooting',
    category: 'Remote & On-Site Support',
    summary: 'Rapid diagnosis and resolution of Windows/Linux OS issues, software crashes, workstation bottlenecks, and remote desktop support via AnyDesk & TeamViewer.',
    proficiency: 96,
    icon: 'fas fa-headset',
    gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)'
  },
  {
    id: 'wskill-2',
    title: 'IT Administration & Office Operations',
    category: 'Systems & Admin Management',
    summary: 'End-to-end office IT administration, user access control, digital record management, hardware inventory tracking, and streamlined daily operational workflows.',
    proficiency: 94,
    icon: 'fas fa-tasks',
    gradient: 'linear-gradient(135deg, #10b981, #059669)'
  },
  {
    id: 'wskill-3',
    title: 'CRM Management & Client Coordination',
    category: 'CRM & Business Ops',
    summary: 'Configuring and managing customer relationship systems, client communication pipelines, service ticketing, and automated follow-up workflows to fuel business growth.',
    proficiency: 92,
    icon: 'fas fa-users-cog',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
  },
  {
    id: 'wskill-4',
    title: 'Network Engineering & Server Security',
    category: 'MikroTik & Infrastructure',
    summary: 'MikroTik RouterOS bandwidth management, dual-ISP auto-failover, WireGuard VPN tunnels, LAN cabling, and automated NAS/cloud server backup setups.',
    proficiency: 92,
    icon: 'fas fa-network-wired',
    gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)'
  },
  {
    id: 'wskill-5',
    title: 'Web Development & E-Commerce Portals',
    category: 'Full-Stack Web Solutions',
    summary: 'Building fast, responsive business websites, custom web applications, e-commerce catalogs, and secure local payment gateway integrations.',
    proficiency: 88,
    icon: 'fas fa-laptop-code',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)'
  },
  {
    id: 'wskill-6',
    title: 'IT Consulting & Hardware Engineering',
    category: 'Technology Strategy & Builds',
    summary: 'Helping businesses solve technology challenges through strategic IT consulting, custom workstation assembly, BIOS tuning, and scalable office upgrades.',
    proficiency: 93,
    icon: 'fas fa-microchip',
    gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
  }
];

export const workExperiences: WorkExperience[] = [
  {
    id: 'work-1',
    company: 'Health Wealth & Career Buildup Corner',
    role: 'Information Technology Analyst (IT Analyst)',
    period: 'Feb 6, 2021 - Present',
    duration: '5 years, 8 months',
    isCurrent: true,
    icon: 'fas fa-chart-line',
    accentColor: 'var(--green)',
    gradient: 'linear-gradient(135deg, #10b981, #059669)'
  },
  {
    id: 'work-2',
    company: 'JBDIT',
    role: 'IT Support Admin',
    period: 'Feb 17, 2024 - Present',
    duration: '2 years, 8 months',
    isCurrent: true,
    icon: 'fas fa-headset',
    accentColor: 'var(--blue)',
    gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)'
  },
  {
    id: 'work-3',
    company: 'Hello Istiak',
    role: 'IT Project Manager',
    period: 'Apr 8, 2021 - Present',
    duration: '5 years, 6 months',
    isCurrent: true,
    icon: 'fas fa-tasks',
    accentColor: 'var(--purple)',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
  },
  {
    id: 'work-4',
    company: 'Selim English Education',
    role: 'Manager',
    period: 'Oct 27, 2021 - Apr 29, 2023',
    duration: '1 year, 6 months',
    isCurrent: false,
    icon: 'fas fa-user-tie',
    accentColor: 'var(--blue-light)',
    gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)'
  },
  {
    id: 'work-5',
    company: 'Hello DXN',
    role: 'Managing editor',
    period: 'Aug 9, 2021 - Aug 20, 2021',
    isCurrent: false,
    icon: 'fas fa-pen-nib',
    accentColor: 'var(--red)',
    gradient: 'linear-gradient(135deg, #ef4444, #f59e0b)'
  },
  {
    id: 'work-6',
    company: 'Alamgir Swimming Club',
    role: 'Swimmer',
    period: 'Aug 13, 2015 - Mar 12, 2017',
    duration: '1 year, 6 months',
    isCurrent: false,
    icon: 'fas fa-swimmer',
    accentColor: 'var(--cyan)',
    gradient: 'linear-gradient(135deg, #06b6d4, #3b82f6)'
  }
];

export const clientPartners: ClientPartner[] = [
  {
    id: 'org-1',
    name: 'JBDIT (JBD IT)',
    sector: 'IT Support Admin • Rajshahi',
    icon: 'fas fa-headset',
    gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)'
  },
  {
    id: 'org-2',
    name: 'Health Wealth & Career Buildup Corner',
    sector: 'IT Analyst • Since 2021',
    icon: 'fas fa-chart-line',
    gradient: 'linear-gradient(135deg, #10b981, #059669)'
  },
  {
    id: 'org-3',
    name: 'Hello Istiak',
    sector: 'IT Project Manager • Since 2021',
    icon: 'fas fa-tasks',
    gradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
  },
  {
    id: 'org-4',
    name: 'Selim English Education',
    sector: 'Operations Manager • Rajshahi',
    icon: 'fas fa-user-tie',
    gradient: 'linear-gradient(135deg, #0ea5e9, #2563eb)'
  },
  {
    id: 'org-5',
    name: 'Hello DXN',
    sector: 'Managing Editor • Media',
    icon: 'fas fa-pen-nib',
    gradient: 'linear-gradient(135deg, #ef4444, #f59e0b)'
  },
  {
    id: 'client-1',
    name: 'Apex Tech Mart',
    sector: 'E-Commerce • Dhaka',
    icon: 'fas fa-shopping-bag',
    gradient: 'linear-gradient(135deg, #2563eb, #06b6d4)'
  },
  {
    id: 'client-2',
    name: 'NextGen BD',
    sector: 'Enterprise Network • Dhaka',
    icon: 'fas fa-network-wired',
    gradient: 'linear-gradient(135deg, #10b981, #059669)'
  },
  {
    id: 'client-3',
    name: 'Padma Trade House',
    sector: 'Corporate Systems • Rajshahi',
    icon: 'fas fa-building',
    gradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)'
  },
  {
    id: 'client-4',
    name: 'SilkCity Design Studio',
    sector: 'Web Portal • Rajshahi',
    icon: 'fas fa-palette',
    gradient: 'linear-gradient(135deg, #f59e0b, #ef4444)'
  },
  {
    id: 'client-5',
    name: 'Metro Care Diagnostics',
    sector: 'Server & Backup • Rajshahi',
    icon: 'fas fa-heartbeat',
    gradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
  },
  {
    id: 'client-6',
    name: 'FrameCraft Media',
    sector: 'Workstation Lab • Dhaka',
    icon: 'fas fa-film',
    gradient: 'linear-gradient(135deg, #06b6d4, #2563eb)'
  },
  {
    id: 'client-7',
    name: 'Rajshahi Gadget Corner',
    sector: 'Catalog & POS • Rajshahi',
    icon: 'fas fa-microchip',
    gradient: 'linear-gradient(135deg, #10b981, #0ea5e9)'
  },
  {
    id: 'client-8',
    name: 'Bengal Agro Logistics',
    sector: 'Branch VPN • Multi-City',
    icon: 'fas fa-truck-loading',
    gradient: 'linear-gradient(135deg, #6366f1, #3b82f6)'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: 101,
    name: 'Ariful Islam',
    role: 'Managing Director, Rajshahi Trade Link',
    badge: 'IT Support & Troubleshooting',
    badgeClass: 'badge-support',
    badgeIcon: 'fas fa-headset',
    quote: 'Whenever our office computers or accounting systems face technical glitches, Istiak resolves them within minutes via remote support or an on-site visit. His calm, systematic troubleshooting has saved our business hours of costly downtime.',
    initials: 'AI',
    avatarGradient: 'linear-gradient(135deg, #2563eb, #06b6d4)'
  },
  {
    id: 102,
    name: 'Sadia Afrin',
    role: 'Operations Head, Horizon Consultancy BD',
    badge: 'IT Administration & Office Ops',
    badgeClass: 'badge-client',
    badgeIcon: 'fas fa-tasks',
    quote: 'Istiak completely restructured our daily office IT operations and CRM workflow. From setting up staff user permissions to organizing our client database and cloud files, everything now runs smoothly without administrative bottlenecks.',
    initials: 'SA',
    avatarGradient: 'linear-gradient(135deg, #10b981, #059669)'
  },
  {
    id: 103,
    name: 'Mehedi Hasan',
    role: 'CEO, SilkCity Mart BD (Rajshahi)',
    badge: 'Web Development Service',
    badgeClass: 'badge-client',
    badgeIcon: 'fas fa-laptop-code',
    quote: 'আমাদের প্রতিষ্ঠানের জন্য একটি দ্রুতগতির এবং আধুনিক ওয়েবসাইট প্রয়োজন ছিল। Istiak ভাই খুব অল্প সময়ের মধ্যে মোবাইল-ফ্রেন্ডলি ওয়েবসাইট ও কাস্টমার ইনকোয়ারি সিস্টেম তৈরি করে দিয়েছেন, যা আমাদের অনলাইন সেলস অনেক বাড়িয়েছে।',
    isBangla: true,
    initials: 'MH',
    avatarGradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
  },
  {
    id: 104,
    name: 'Tariqul Alam',
    role: 'Director, NorthBengal Agro & Cold Storage',
    badge: 'IT Consulting & Strategy',
    badgeClass: 'badge-network',
    badgeIcon: 'fas fa-lightbulb',
    quote: 'We hired Istiak for IT consulting when upgrading our branch office systems. He audited our existing setup, recommended cost-effective hardware and network upgrades, and helped us solve long-standing connectivity challenges.',
    initials: 'TA',
    avatarGradient: 'linear-gradient(135deg, #f59e0b, #ef4444)'
  },
  {
    id: 105,
    name: 'Engr. Rezaul Karim',
    role: 'Founder, PixelCraft Studio (Rajshahi)',
    badge: 'Technical Support & Hardware',
    badgeClass: 'badge-support',
    badgeIcon: 'fas fa-microchip',
    quote: 'অফিসের পিসিগুলোর হার্ডওয়্যার আপগ্রেড, এসএসডি সেটআপ এবং নেটওয়ার্ক মেইনটেন্যান্সের জন্য আমরা সবসময় Istiak-এর সার্ভিস নিয়ে থাকি। ওনার কাজের ফিনিশিং এবং টেকনিক্যাল সাপোর্ট সত্যিই অসাধারণ ও নির্ভরযোগ্য।',
    isBangla: true,
    initials: 'RK',
    avatarGradient: 'linear-gradient(135deg, #06b6d4, #2563eb)'
  },
  {
    id: 106,
    name: 'Nabila Tabassum',
    role: 'Client Relations Lead, PrimeCare Services',
    badge: 'CRM & Admin Automation',
    badgeClass: 'badge-client',
    badgeIcon: 'fas fa-users-cog',
    quote: 'Tracking client appointments and follow-up calls used to be chaotic for our front-desk team. Istiak implemented a clean CRM and digital admin system and trained our staff so every client inquiry is tracked accurately.',
    initials: 'NT',
    avatarGradient: 'linear-gradient(135deg, #ec4899, #8b5cf6)'
  },
  {
    id: 107,
    name: 'Shahriar Kabir',
    role: 'Branch Manager, Padma Valley Logistics',
    badge: 'Network & Server Administration',
    badgeClass: 'badge-network',
    badgeIcon: 'fas fa-network-wired',
    quote: 'Our office Wi-Fi and router used to drop connections during peak hours. Istiak reconfigured our MikroTik router with smart bandwidth management and automated server backups. Our network has been rock-solid ever since.',
    initials: 'SK',
    avatarGradient: 'linear-gradient(135deg, #10b981, #0ea5e9)'
  },
  {
    id: 108,
    name: 'Zahinul Haque',
    role: 'Co-Founder, EduSpark Academy',
    badge: 'Web Portal & Ongoing IT Support',
    badgeClass: 'badge-support',
    badgeIcon: 'fas fa-globe',
    quote: 'আমাদের একাডেমির ওয়েব পোর্টাল তৈরি থেকে শুরু করে প্রতিদিনের আইটি ও অফিস অপারেশন সাপোর্ট—সবকিছুতেই Istiak ভাই আমাদের প্রথম পছন্দ। যেকোনো টেকনিক্যাল সমস্যায় ওনাকে নক দিলে দ্রুত সমাধান পাওয়া যায়।',
    isBangla: true,
    initials: 'ZH',
    avatarGradient: 'linear-gradient(135deg, #8b5cf6, #6366f1)'
  }
];

export const featuredProjects: Project[] = [
  {
    id: 'project-1',
    title: 'E-Commerce Web Portal',
    category: 'Web Application',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=600&auto=format&fit=crop&q=80',
    description: 'A modern multi-vendor web application featuring dynamic product catalog management, responsive checkout flows, and local payment gateway integration.',
    tags: ['JavaScript', 'Node.js', 'Tailwind CSS', 'REST API'],
    siteUrl: 'https://github.com/iforistiak',
    inquiryUrl: 'https://wa.me/+8801640092412?text=Hello%20Istiak,%20I%20want%20to%20inquire%20about%20your%20E-Commerce%20Web%20Portal%20project.',
    fadeDelay: 0
  },
  {
    id: 'project-2',
    title: 'IT Support & Network Automation',
    category: 'Automation & Cloud',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&auto=format&fit=crop&q=80',
    description: 'Remote health monitoring, automated server backup scripts, and network diagnostic toolkits engineered to cut system downtime by over 90%.',
    tags: ['Linux / Bash', 'Networking', 'Server Config', 'Security'],
    siteUrl: 'https://github.com/iforistiak',
    inquiryUrl: 'https://wa.me/+8801640092412?text=Hello%20Istiak,%20I%20want%20to%20inquire%20about%20your%20IT%20Support%20and%20Network%20Automation%20system.',
    fadeDelay: 120
  },
  {
    id: 'project-3',
    title: 'Office IT Infrastructure & Firewall',
    category: 'Enterprise Setup',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80',
    description: 'Multi-department office network architecture with MikroTik bandwidth management, encrypted VPN gateways, Active Directory, and endpoint protection.',
    tags: ['Windows Server', 'MikroTik', 'Firewall'],
    siteUrl: 'https://github.com/iforistiak',
    inquiryUrl: 'https://wa.me/+8801640092412?text=Hello%20Istiak,%20I%20want%20to%20inquire%20about%20your%20Office%20IT%20Infrastructure%20setup.',
    fadeDelay: 240
  }
];

export const technicalSkills: Skill[] = [
  {
    id: 'skill-1',
    name: 'IT Support (Online & Remote / Onsite)',
    percentage: 95,
    icon: 'fas fa-headset',
    iconColor: 'var(--blue)',
    colorClass: 's-blue'
  },
  {
    id: 'skill-2',
    name: 'Computer Hardware, Assembly & Troubleshooting',
    percentage: 90,
    icon: 'fas fa-microchip',
    iconColor: 'var(--green)',
    colorClass: 's-green'
  },
  {
    id: 'skill-3',
    name: 'System & Network Administrator Management',
    percentage: 92,
    icon: 'fas fa-server',
    iconColor: 'var(--red)',
    colorClass: 's-red'
  },
  {
    id: 'skill-4',
    name: 'Web Development & Frontend Technologies',
    percentage: 85,
    icon: 'fas fa-globe',
    iconColor: 'var(--purple)',
    colorClass: 's-purple'
  },
  {
    id: 'skill-5',
    name: 'E-Commerce Store Management & Digital Operations',
    percentage: 88,
    icon: 'fas fa-store',
    iconColor: 'var(--blue)',
    colorClass: 's-blue'
  }
];

export const defaultGalleryPhotos: GalleryPhoto[] = [
  {
    id: 1,
    title: "Enterprise MikroTik & BGP Routing Deployment",
    desc: "Live packet tracing, subnet design, and high-availability core routing setup.",
    category: "training",
    date: "March 2026",
    location: "Rajshahi IT Hub",
    img: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 2,
    title: "Professional IT Excellence Recognition Ceremony",
    desc: "Honoring technical milestones in enterprise networking and Linux systems administration.",
    category: "certificates",
    date: "February 2026",
    location: "Rajshahi Auditorium",
    img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 3,
    title: "National Tech Summit & Networking Meetup",
    desc: "Representing regional IT specialists and presenting on FTTH architecture and ISP automation.",
    category: "events",
    date: "January 2026",
    location: "Convention Hall",
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 4,
    title: "Linux Server Security & Automated Backup Lab",
    desc: "Terminal administration for Ubuntu server security, firewall hardening, and cloud backups.",
    category: "training",
    date: "December 2025",
    location: "Operations Lab",
    img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 5,
    title: "Hardware & Network Engineering Honors",
    desc: "Recognition for enterprise client network architecture and system reliability benchmarks.",
    category: "certificates",
    date: "November 2025",
    location: "Regional Tech Center",
    img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 6,
    title: "42U Core Server Rack & Patch Panel Cabling Setup",
    desc: "High-density enterprise server rack cable management, patch panel termination, and UPS redundant power routing.",
    category: "infrastructure",
    date: "October 2025",
    location: "Data Center Lab",
    img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 7,
    title: "Regional ICT Conference & Systems Panel",
    desc: "Keynote discussion on modern network engineering, router security, and hardware diagnostics.",
    category: "events",
    date: "September 2025",
    location: "Science & Tech Pavilion",
    img: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80"
  },
  {
    id: 8,
    title: "Cisco Catalyst Switch VLAN & Trunking Lab",
    desc: "Layer 2/3 segmentation, Rapid Spanning Tree Protocol (RSTP), and secure port authentication.",
    category: "infrastructure",
    date: "August 2025",
    location: "Network Testing Lab",
    img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80"
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 101,
    title: "Configuring Dual-ISP Auto Failover & Bandwidth Queues in MikroTik RouterOS",
    description: "A practical step-by-step breakdown of keeping office networks online 24/7 using recursive routing, Netwatch scripts, and PCQ bandwidth management.",
    category: "Networking",
    photo: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1000&q=80",
    date: "March 18, 2026",
    readTime: "6 min read",
    keywords: "mikrotik routeros dual isp wan failover pcq bandwidth queue winbox office network",
    content: [
      "When managing an office with 30 or more concurrent workstations, relying on a single internet connection is a major operational risk. Even brief fiber cuts or upstream ISP maintenance can halt voice calls, cloud ERP access, and remote support sessions.",
      "<h4>1. Recursive Gateway Check vs. Netwatch</h4>",
      "Instead of only checking if the local fiber ONT gateway responds to ping, configure recursive routes in MikroTik RouterOS that verify reachability against public DNS resolvers (such as 8.8.8.8 and 1.1.1.1). When the primary upstream path drops packets, RouterOS automatically shifts traffic to the secondary ISP within seconds.",
      "<h4>2. Fair Bandwidth Allocation with PCQ</h4>",
      "Nothing slows down an office faster than a single workstation saturating the uplink with large backups. By setting up Per Connection Queuing (PCQ) in Queue Trees and prioritizing VoIP/Zoom packets via Mangle rules, every user gets responsive browsing and crystal-clear calls."
    ]
  },
  {
    id: 102,
    title: "Automated Offsite & NAS Backup Strategies for Small Business Servers",
    description: "How to eliminate manual file copying and protect business databases against hardware failure using scheduled incremental backups.",
    category: "Server & Linux",
    photo: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80",
    date: "February 27, 2026",
    readTime: "5 min read",
    keywords: "linux server backup rsync cron nas storage raid database recovery ubuntu windows server",
    content: [
      "Many clinics, retail showrooms, and regional businesses still rely on manually copying accounting folders onto an external USB drive at the end of the week. If a drive fails mid-week or a system crashes, days of critical billing records can be lost.",
      "<h4>1. Following the 3-2-1 Backup Rule</h4>",
      "Always maintain three copies of your data across two different storage media (such as the primary NVMe server array and a local RAID NAS box), with one encrypted copy synced nightly to offsite cloud storage.",
      "<h4>2. Automated Verification & Alerts</h4>",
      "Using scheduled night tasks at 12:00 AM, incremental snapshots transfer only modified blocks, completing in minutes and sending a summary status log so management knows their records are safe."
    ]
  },
  {
    id: 103,
    title: "Speeding Up E-Commerce Checkouts & Local Payment Gateways in Bangladesh",
    description: "Practical frontend and server optimizations that cut mobile page load times in half and improve bKash, Nagad, and SSLCommerz checkout reliability.",
    category: "Web Development",
    photo: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=1000&q=80",
    date: "February 10, 2026",
    readTime: "5 min read",
    keywords: "ecommerce web development bkash sslcommerz checkout speed optimization mobile performance bangladesh",
    content: [
      "Over 80% of online shoppers in Bangladesh browse directly from mobile devices, often over fluctuating 4G connections. Heavy uncompressed product banners and render-blocking scripts cause shoppers to abandon their cart before the checkout page even loads.",
      "<h4>1. Image Compression & Lazy Loading</h4>",
      "Converting catalog images to modern WebP formats and deferring offscreen assets immediately reduces initial payload size by up to 65%, making product pages feel instant on mid-range smartphones.",
      "<h4>2. Resilient Payment Callback Handling</h4>",
      "When integrating bKash or SSLCommerz, always implement idempotent webhook listeners on the backend so that if a customer's mobile browser closes right after payment confirmation, the order status still updates accurately."
    ]
  },
  {
    id: 104,
    title: "Choosing Reliable Hardware Components for 4K Video Editing & CAD Workstations",
    description: "A hardware specialist's guide to balancing CPU cores, VRM thermals, NVMe scratch disks, and power supply ratings for heavy workloads.",
    category: "IT Support",
    photo: "https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=1000&q=80",
    date: "January 22, 2026",
    readTime: "7 min read",
    keywords: "custom pc workstation hardware assembly bios thermal tuning nvme ssd psu video editing it support",
    content: [
      "When building workstations for creative agencies or engineering firms, spending the entire budget on the processor and graphics card while cutting corners on the motherboard VRM, airflow, or power supply leads to thermal throttling and sudden shutdowns during long renders.",
      "<h4>1. Dual-NVMe Storage Layout</h4>",
      "Separating the operating system and applications onto one Gen4 NVMe drive while dedicating a second high-endurance NVMe drive exclusively for active project cache and scratch files eliminates timeline stuttering.",
      "<h4>2. Clean Cable Routing & BIOS Tuning</h4>",
      "Proper front-to-back chassis airflow, custom fan curves, and XMP/EXPO memory stability testing ensure the workstation stays quiet and rock-solid under 100% sustained load."
    ]
  },
  {
    id: 105,
    title: "Securing Multi-Branch Office Networks with Site-to-Site WireGuard VPN",
    description: "How modern cryptographic VPN tunnels connect branch offices in Dhaka and Rajshahi securely without expensive leased lines.",
    category: "Cybersecurity",
    photo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1000&q=80",
    date: "January 05, 2026",
    readTime: "6 min read",
    keywords: "cybersecurity wireguard vpn firewall security branch office network encryption port forwarding",
    content: [
      "Exposing internal RDP ports, accounting servers, or file shares directly to the public internet invites brute-force attacks around the clock. Connecting branch offices requires an encrypted, authenticated tunnel.",
      "<h4>1. Why WireGuard Outperforms Legacy Tunnels</h4>",
      "Built directly into modern Linux kernels and RouterOS v7, WireGuard delivers significantly higher throughput and lower latency than older L2TP or OpenVPN setups, while reconnecting seamlessly if a dynamic IP changes.",
      "<h4>2. Strict Firewall Drop Rules</h4>",
      "Pair your VPN tunnel with strict input-chain firewall rules that drop unauthorized WAN port scans and restrict management access (Winbox/SSH) strictly to verified internal subnets."
    ]
  },
  {
    id: 106,
    title: "Essential Windows Server & Active Directory Hardening Checklist for SMEs",
    description: "Best practices for organizing departmental file permissions, Group Policy rules, and workstation health monitoring.",
    category: "Server & Linux",
    photo: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1000&q=80",
    date: "December 14, 2025",
    readTime: "5 min read",
    keywords: "windows server active directory gpo permissions sysadmin enterprise it infrastructure",
    content: [
      "As a company grows beyond 15 computers, managing shared folders and user passwords individually on each PC becomes chaotic. Centralizing identity and file access keeps operations organized and auditable.",
      "<h4>1. Role-Based Security Groups</h4>",
      "Assigning NTFS and share permissions to departmental groups (Accounts, HR, Operations) rather than individual user accounts makes onboarding new staff effortless and prevents accidental deletion of sensitive records.",
      "<h4>2. Proactive Health & Disk Monitoring</h4>",
      "Monitoring SMART disk health, event logs, and UPS battery status allows IT teams to replace aging components during scheduled maintenance windows before any disruption occurs."
    ]
  }
];

export const educationItems: EducationItem[] = [
  {
    id: 'edu-1',
    typeBadge: 'College / University • Class of 2024',
    badgeIcon: 'fas fa-graduation-cap',
    institution: 'Rajshahi Court College, Rajshahi.',
    classYear: 'Class of 2024',
    degree: 'Bachelor of Arts (BA) — National University',
    description: 'Higher studies emphasizing communications, humanities, and IT management.'
  },
  {
    id: 'edu-2',
    typeBadge: 'Higher Secondary (HSC)',
    badgeIcon: 'fas fa-university',
    institution: 'Shahid Mamun Mahmud Police Lines School & College, Rajshahi',
    description: 'Class - Eleven & Twelve (HSC)'
  },
  {
    id: 'edu-3',
    typeBadge: 'Secondary School (SSC)',
    badgeIcon: 'fas fa-school',
    institution: 'Rajshahi Lokenath High School, Rajshahi',
    description: 'Class - Eight, Nine & Ten (SSC)'
  },
  {
    id: 'edu-4',
    typeBadge: 'Primary & Secondary Academy',
    badgeIcon: 'fas fa-book-reader',
    institution: 'মসজিদ মিশন একাডেমী, রাজশাহী- Masjid Mission Academy, Rajshahi',
    description: 'Foundational Studies (Class - Play to Seven)'
  }
];

export const interestsData: InterestsData = {
  hobbies: [
    'Technology',
    'Planting',
    'Personal development',
    'Traveling'
  ],
  tvShows: [
    'National Geographic Explorer',
    'Man Vs. Wild',
    'Action movies',
    'Cartoon',
    'The Kapil Sharma Show.'
  ],
  movies: [
    '3 Idiots',
    'Train To Busan',
    'Interstellar'
  ]
};

export function convertGoogleDriveLink(rawUrl: string): string {
  if (!rawUrl) return '';
  const url = rawUrl.trim();

  const driveFileMatch = url.match(/\/file\/d\/([a-zA-Z0-9_-]+)/);
  if (driveFileMatch && driveFileMatch[1]) {
    return 'https://lh3.googleusercontent.com/d/' + driveFileMatch[1] + '=s1600';
  }

  const driveIdMatch = url.match(/[?&]id=([a-zA-Z0-9_-]+)/);
  if (driveIdMatch && driveIdMatch[1]) {
    return 'https://lh3.googleusercontent.com/d/' + driveIdMatch[1] + '=s1600';
  }

  const driveUcMatch = url.match(/\/uc\?id=([a-zA-Z0-9_-]+)/);
  if (driveUcMatch && driveUcMatch[1]) {
    return 'https://lh3.googleusercontent.com/d/' + driveUcMatch[1] + '=s1600';
  }

  if (/^https?:\/\//i.test(url)) {
    return url;
  }
  return '';
}

export function getCategoryLabel(category: string): string {
  switch (category) {
    case 'infrastructure': return 'Server Labs & Setups';
    case 'training': return 'Field Work & Labs';
    case 'certificates': return 'Recognition & Milestones';
    case 'events': return 'Tech Events & Summits';
    default: return 'Portfolio Gallery';
  }
}

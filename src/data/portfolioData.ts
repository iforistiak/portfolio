import { Project, Skill, GalleryPhoto, BlogPost, Testimonial, ClientPartner, EducationItem } from '../types';

export const typewriterTitles: string[] = [
  "IT Specialist & Consultant",
  "System Administrator",
  "IT Course Instructor",
  "E-Commerce & F-Commerce Admin",
  "Minimal Graphic Designer"
];

export const clientPartners: ClientPartner[] = [
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
    id: 1,
    name: 'Tanvir Ahmed',
    role: 'Founder, Apex Tech Mart (Dhaka)',
    badge: 'E-Commerce Development',
    badgeClass: 'badge-client',
    badgeIcon: 'fas fa-shopping-cart',
    quote: 'Our online store used to take forever to load on mobile phones and customers were dropping off at checkout. Istiak rebuilt the storefront, fixed our bKash and SSLCommerz checkout flow, and made the whole site super fast. Truly dependable work.',
    initials: 'TA',
    avatarGradient: 'linear-gradient(135deg, #10b981, #06b6d4)'
  },
  {
    id: 2,
    name: 'Mahmudul Hasan',
    role: 'Operations Manager, NextGen BD',
    badge: 'Office Network & MikroTik',
    badgeClass: 'badge-network',
    badgeIcon: 'fas fa-network-wired',
    quote: "With 35+ people working in our office, zoom calls used to freeze whenever someone downloaded large files. Istiak configured our MikroTik router with proper bandwidth queues and dual-ISP failover. We haven't had a single drop in months.",
    initials: 'MH',
    avatarGradient: 'linear-gradient(135deg, #2563eb, #60a5fa)'
  },
  {
    id: 3,
    name: 'Kamrul Islam',
    role: 'Managing Partner, Padma Trade House',
    badge: 'Remote Emergency IT Support',
    badgeClass: 'badge-support',
    badgeIcon: 'fas fa-headset',
    quote: 'রাত ১১টার দিকে আমাদের অফিসের মেইন একাউন্টিং পিসি হঠাৎ ক্র্যাশ করেছিল। Istiak ভাইকে কল দেওয়ার সাথে সাথেই উনি AnyDesk-এ ঢুকে আমাদের সব ডাটা অক্ষত রেখে সিস্টেম রিকভার করে দেন। ওনার মতো রেসপন্সিভ মানুষ খুব কম পাওয়া যায়।',
    isBangla: true,
    initials: 'KR',
    avatarGradient: 'linear-gradient(135deg, #8b5cf6, #c084fc)'
  },
  {
    id: 4,
    name: 'Nusrat Farhana',
    role: 'Director, SilkCity Design Studio (Rajshahi)',
    badge: 'Business Web Portal',
    badgeClass: 'badge-client',
    badgeIcon: 'fas fa-globe',
    quote: 'I needed a clean, trustworthy website for my consultancy where clients could book appointments directly on WhatsApp and email. He understood exactly what I wanted without complicated jargon and delivered two days ahead of schedule.',
    initials: 'NF',
    avatarGradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)'
  },
  {
    id: 5,
    name: 'Dr. Shakil Zaman',
    role: 'Coordinator, Metro Care Diagnostics',
    badge: 'Server & Data Backup Setup',
    badgeClass: 'badge-network',
    badgeIcon: 'fas fa-server',
    quote: 'আমাদের ডায়াগনস্টিক সেন্টারের লোকাল সার্ভার এবং অটোমেটেড ব্যাকআপ সিস্টেম পুরোটা Istiak সেটআপ করে দিয়েছেন। আগে প্রতিদিন ম্যানুয়ালি ফাইল কপি করতে হতো, এখন রাত ১২টায় অটোমেটিক ক্লাউড ও নাস ড্রাইভে ব্যাকআপ হয়ে যায়।',
    isBangla: true,
    initials: 'SZ',
    avatarGradient: 'linear-gradient(135deg, #ec4899, #f472b6)'
  },
  {
    id: 6,
    name: 'Rashedul Haque',
    role: 'Creative Lead, FrameCraft Media',
    badge: 'Custom Workstation Build',
    badgeClass: 'badge-support',
    badgeIcon: 'fas fa-microchip',
    quote: 'He helped our video editing agency pick the right PC hardware components within budget, assembled four high-end workstations with clean cable management, and tuned the BIOS & storage drives so 4K rendering runs cooler and faster.',
    initials: 'RH',
    avatarGradient: 'linear-gradient(135deg, #06b6d4, #2563eb)'
  },
  {
    id: 7,
    name: 'Ashraful Alam',
    role: 'Proprietor, Rajshahi Gadget Corner',
    badge: 'Catalog & Store Management',
    badgeClass: 'badge-client',
    badgeIcon: 'fas fa-store',
    quote: 'আমাদের শো-রুমের ইনভেন্টরি আর ওয়েবসাইটের প্রোডাক্ট ক্যাটালগ সবসময় এলোমেলো হয়ে থাকতো। Istiak ভাই পুরো সিস্টেমটা এত সুন্দরভাবে গুছিয়ে দিয়েছেন যে আমাদের স্টাফরাও এখন খুব সহজেই অর্ডার আর স্টক আপডেট করতে পারে।',
    isBangla: true,
    initials: 'AR',
    avatarGradient: 'linear-gradient(135deg, #10b981, #059669)'
  },
  {
    id: 8,
    name: 'Farhan Imtiaz',
    role: 'IT Lead, Bengal Agro Logistics',
    badge: 'Branch VPN & Firewall',
    badgeClass: 'badge-network',
    badgeIcon: 'fas fa-shield-alt',
    quote: 'Connecting our Dhaka and Rajshahi branch offices securely used to be a constant headache. Istiak set up a site-to-site WireGuard VPN on our routers and locked down unauthorized access. Rock-solid stability ever since.',
    initials: 'FI',
    avatarGradient: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
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
    typeBadge: 'University',
    badgeIcon: 'fas fa-graduation-cap',
    institution: 'Rajshahi Court College, Rajshahi',
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
    typeBadge: 'Primary & Junior Education',
    badgeIcon: 'fas fa-book-reader',
    institution: 'Masjid Mission Academy School & College, Rajshahi',
    description: 'Foundational Studies (Class - Play to Seven)'
  }
];

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

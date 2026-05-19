export const site = {
  name: "FMC Guru",
  domain: "fmc.guru",
  url: import.meta.env.SITE_URL || "https://fmc.guru",
  email: "hello@fmc.guru",
  description:
    "FMC Guru is a consulting command platform for founders and operators who want expert digital growth, business strategy, and scalable revenue systems.",
  launchContext: [
    "Deliver sharp growth strategy, market positioning, and digital execution plans for teams that need results, not theory.",
    "Turn scattered business insights into focused action briefs: who to reach, what to say, and where to double down.",
    "Connect strategy, content operations, conversion systems, and follow-up decisions into one coherent growth engine."
  ]
};

export const navItems = [
  { label: "Command OS", href: "/gateway/" },
  { label: "Docs", href: "/docs/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];

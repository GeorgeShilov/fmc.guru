export const site = {
  name: "FantomMarketCap",
  domain: "fmc.guru",
  url: import.meta.env.SITE_URL || "https://fmc.guru",
  email: "hello@fmc.guru",
  description:
    "FMC.guru (FantomMarketCap) by FTM.guru: Fantom Opera blockchain token prices, markets, DEX listings, Market Cap, and live trading data.",
  launchContext: [
    "Track token prices, market caps, and liquidity across the Fantom Opera ecosystem in real time.",
    "Discover new gems with ranked listings, nativity filters, and DEX directories for every major protocol.",
    "Map the Fantom DeFi landscape: AMMs, bridges, farms, vaults, stablecoins, oracles, and yield sources."
  ]
};

export const navItems = [
  { label: "Directory", href: "/gateway/" },
  { label: "Docs", href: "/docs/" },
  { label: "Pricing", href: "/pricing/" },
  { label: "FAQ", href: "/faq/" },
  { label: "Blog", href: "/blog/" },
  { label: "Contact", href: "/contact/" }
];

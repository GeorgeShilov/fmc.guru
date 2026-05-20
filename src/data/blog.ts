export type BlogPost = {
  slug: string;
  title: string;
  description: string;
  pubDate: string;
  author: string;
  category: string;
  tags: string[];
  featured?: boolean;
  heroImage: string;
  inlineImages: string[];
  referenceUrl?: string;
  articleText: string;
};

export const fallbackPosts: BlogPost[] = [
  {
    slug: "how-to-spot-early-gems-on-fantom",
    title: "How to spot early gems on Fantom",
    description:
      "A practical framework for evaluating new tokens before they hit the mainstream: nativity, liquidity, and on-chain signals.",
    pubDate: "2026-05-16",
    author: "FantomMarketCap Team",
    category: "Research",
    tags: ["Fantom", "Gems", "Research"],
    featured: true,
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Most token hunters miss the window because they wait for social proof instead of reading on-chain data early. The real edge comes from three filters: nativity (is the asset native or bridged), liquidity depth (can you enter and exit without moving the price), and holder distribution (is supply concentrated or spread).</p>
      <p>FantomMarketCap was built to surface these signals before the crowd arrives. Rank by market cap, sort by most liquid, filter by category — AMM, vault, yield, stablecoin — and you get a map of where the ecosystem is heading, not just where it has been.</p>
      <p>The most important discipline is patience with position sizing. Track supply changes weekly, volume trends daily, and resist the urge to ape before the contract has been verified and the liquidity locked.</p>
    `
  },
  {
    slug: "reading-dex-liquidity-like-a-trader",
    title: "Reading DEX liquidity like a trader",
    description:
      "How to interpret total value locked, volume, and slippage across Fantom DEXes to find the best execution routes.",
    pubDate: "2026-05-15",
    author: "FantomMarketCap Team",
    category: "Trading",
    tags: ["DEX", "Liquidity", "Fantom"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Liquidity is not a single number. It is a shape. A pool can look deep from the outside but be lopsided once you drill into token ratios and recent flow. On Fantom, where DEXes range from Sushi and Beethoven X to native protocols like PaintSwap and Waka, execution quality varies block by block.</p>
      <p>Start by comparing total value locked to twenty-four-hour volume. High TVL with low volume often means sticky deposits and wide spreads. Low TVL with high volume can mean volatile but efficient pricing. The best trades happen where the ratio is balanced.</p>
      <p>Review routes across multiple DEXes before swapping. Aggregators help, but direct comparison of slippage on identical pairs often reveals hidden liquidity on smaller venues. The best traders treat DEX selection as a first-class decision, not an afterthought.</p>
    `
  },
  {
    slug: "understanding-yield-farms-and-vaults",
    title: "Understanding yield farms and vaults",
    description:
      "What APY actually means, how vault strategies compound, and the risks to watch before depositing into a Fantom farm.",
    pubDate: "2026-05-14",
    author: "FantomMarketCap Team",
    category: "DeFi",
    tags: ["Yield", "Farming", "Vaults"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>APY is a projection, not a promise. The number you see on a farm page assumes the emission schedule, token price, and pool size stay constant — none of which ever do. The real question is not how high the APY is, but how long the incentive structure can sustain it.</p>
      <p>Vaults add another layer. Instead of manually harvesting and reinvesting, a vault strategy automates the loop, often compounding several times per day. This amplifies returns but also concentrates smart-contract risk. If the vault has not been audited, the APY is irrelevant.</p>
      <p>Before depositing, check the native token emission schedule, the depth of the reward pool, and the history of the protocol. On Fantom, the best farms are the ones that have survived at least one full market cycle without diluting holders into oblivion.</p>
    `
  }
];

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
    slug: "growth-strategy-for-scaling-digital-revenue",
    title: "Growth strategy for scaling digital revenue",
    description:
      "A practical framework for moving from ad-hoc marketing to a repeatable growth system that compounds.",
    pubDate: "2026-05-16",
    author: "FMC Guru Team",
    category: "Growth",
    tags: ["Growth", "Strategy", "Revenue"],
    featured: true,
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Most digital businesses do not fail because of bad product. They fail because growth is treated as a series of disconnected tactics instead of a coherent system. A real growth strategy starts with three clear decisions: your primary channel, your core offer, and the metric that tells you the engine is working.</p>
      <p>Once those are locked, the work shifts to compounding loops. Content builds trust, trust builds traffic, traffic feeds the funnel, and the funnel funds more content. The role of a consultant is not to add complexity, but to tighten the loop and remove the friction that kills momentum.</p>
      <p>The most important discipline is patience with measurement. Track leading indicators weekly, lagging indicators monthly, and resist the urge to pivot before the system has had time to compound.</p>
    `
  },
  {
    slug: "building-a-digital-strategy-that-executes",
    title: "Building a digital strategy that executes",
    description:
      "How to turn high-level business goals into focused digital initiatives that ship on time and drive outcomes.",
    pubDate: "2026-05-15",
    author: "FMC Guru Team",
    category: "Strategy",
    tags: ["Strategy", "Digital", "Execution"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Strategy without execution is just a document. The bridge between plan and result is a clear set of initiatives, each owned by one person, each with a measurable output and a hard deadline. Digital strategy fails when it stays at the vision level.</p>
      <p>Start by mapping business goals to digital capabilities. If the goal is to increase qualified leads, the capability is a content-to-funnel system. If the goal is to reduce churn, the capability is a customer success signal layer. Each capability gets one initiative per quarter.</p>
      <p>Review progress weekly, not monthly. Short feedback loops expose blockers early and keep the team aligned on what matters most. The best digital strategists are relentless about saying no to anything outside the current initiative set.</p>
    `
  },
  {
    slug: "consulting-frameworks-for-faster-decisions",
    title: "Consulting frameworks for faster decisions",
    description:
      "Proven mental models that help leadership teams cut through noise and make better strategic decisions under uncertainty.",
    pubDate: "2026-05-14",
    author: "FMC Guru Team",
    category: "Consulting",
    tags: ["Consulting", "Frameworks", "Leadership"],
    heroImage: "/assets/archive-grid.svg",
    inlineImages: ["/assets/identity-shield.svg", "/assets/wallet-ledger.svg"],
    articleText: `
      <p>Speed of decision-making is often the only real competitive advantage a small team has. The problem is not a lack of data; it is a lack of structure. Good consulting frameworks give leadership teams a shared language for evaluating options without analysis paralysis.</p>
      <p>Start with the simplest possible model: what is the problem, what are the constraints, what is the cheapest way to learn, and what does success look like in thirty days. Every other framework is just a more elaborate version of those four questions.</p>
      <p>The best teams document their decisions, not just their outcomes. A decision log reveals pattern bias, surfaces assumptions, and makes it easier to course-correct when the market shifts. In consulting, the value is rarely the answer. It is the process that produced it.</p>
    `
  }
];

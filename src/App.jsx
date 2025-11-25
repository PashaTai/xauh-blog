import React, { useState } from 'react';
import { Routes, Route, useNavigate, useParams } from 'react-router-dom';
import { Search, Clock, ArrowRight, ArrowLeft, Calendar, User, TrendingUp, Shield, Layers, GraduationCap, Linkedin, Twitter, Link2, ChevronDown, ChevronUp } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    slug: "swiss-gold-safest-asset-2025",
    title: "Why Swiss Gold Remains the Safest Asset in 2025",
    excerpt: "Discover why Swiss gold continues to be the ultimate safe haven for investors amid global economic uncertainty and market volatility.",
    category: "Gold Market Insights",
    date: "Nov 22, 2025",
    readTime: "8 min",
    gradient: "bg-gradient-to-br from-yellow-500/30 via-amber-600/20 to-orange-900/30",
    featured: true,
    author: "Herculis Research",
    icon: TrendingUp
  },
  {
    id: 2,
    slug: "physical-vs-paper-gold",
    title: "Physical Gold vs. Paper Gold: Why Ownership Matters",
    excerpt: "Understanding the critical differences between physical gold ownership and paper gold instruments.",
    category: "Gold Market Insights",
    date: "Nov 20, 2025",
    readTime: "6 min",
    gradient: "bg-gradient-to-br from-amber-600/30 to-yellow-900/40",
    author: "Market Team",
    icon: TrendingUp
  },
  {
    id: 3,
    slug: "rwa-revolution-tokenizing-assets",
    title: "The RWA Revolution: Tokenizing Real World Assets",
    excerpt: "How blockchain technology is transforming traditional asset ownership and creating new opportunities.",
    category: "Digital Assets & RWA",
    date: "Nov 18, 2025",
    readTime: "7 min",
    gradient: "bg-gradient-to-br from-blue-600/30 to-indigo-900/40",
    author: "Research",
    icon: Layers
  },
  {
    id: 4,
    slug: "stablecoins-vs-gold-tokens",
    title: "Stablecoins vs. Gold Tokens: A Guide for Smart Investors",
    excerpt: "Comparing stability mechanisms and investment potential of stablecoins versus gold-backed tokens.",
    category: "Digital Assets & RWA",
    date: "Nov 15, 2025",
    readTime: "5 min",
    gradient: "bg-gradient-to-br from-purple-600/30 to-violet-900/40",
    author: "Advisory",
    icon: Layers
  },
  {
    id: 5,
    slug: "xauh-audits-storage",
    title: "Transparency First: How XAUH Audits & Storage Work",
    excerpt: "A deep dive into XAUH's audit processes and Swiss vault storage infrastructure.",
    category: "XAUH Ecosystem",
    date: "Nov 12, 2025",
    readTime: "6 min",
    gradient: "bg-gradient-to-br from-yellow-500/30 to-orange-900/40",
    author: "XAUH Team",
    icon: Shield
  },
  {
    id: 6,
    slug: "xauh-redemption-process",
    title: "From Digital to Physical: The XAUH Redemption Process",
    excerpt: "Step-by-step guide to converting your XAUH tokens into physical gold bullion.",
    category: "XAUH Ecosystem",
    date: "Nov 10, 2025",
    readTime: "4 min",
    gradient: "bg-gradient-to-br from-emerald-600/30 to-teal-900/40",
    author: "XAUH Team",
    icon: Shield
  },
  {
    id: 7,
    slug: "how-to-buy-store-xauh",
    title: "Step-by-Step: How to Buy and Store XAUH Safely",
    excerpt: "Complete beginner's guide to purchasing, storing, and managing your XAUH tokens securely.",
    category: "Academy & Guides",
    date: "Nov 8, 2025",
    readTime: "10 min",
    gradient: "bg-gradient-to-br from-cyan-600/30 to-blue-900/40",
    author: "Education",
    icon: GraduationCap
  },
  {
    id: 8,
    slug: "crypto-portfolio-gold-hedge",
    title: "Why Every Crypto Portfolio Needs a Gold Hedge",
    excerpt: "Learn how gold-backed assets can reduce volatility and protect your crypto investments.",
    category: "Academy & Guides",
    date: "Nov 5, 2025",
    readTime: "7 min",
    gradient: "bg-gradient-to-br from-rose-600/30 to-pink-900/40",
    author: "Education",
    icon: GraduationCap
  }
];

const categories = [
  { name: "All", count: 24 },
  { name: "Gold Market Insights", count: 8 },
  { name: "Digital Assets & RWA", count: 6 },
  { name: "XAUH Ecosystem", count: 5 },
  { name: "Academy & Guides", count: 5 }
];

// Функция для преобразования категории в URL slug
const categoryToSlug = (category) => {
  const slugMap = {
    "Gold Market Insights": "gold-market",
    "Digital Assets & RWA": "digital-assets-rwa",
    "XAUH Ecosystem": "xauh-ecosystem",
    "Academy & Guides": "academy-guides"
  };
  return slugMap[category] || category.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '').replace(/[^a-z0-9-]/g, '');
};

// Функция для генерации URL статьи
const getArticleUrl = (post) => {
  const categorySlug = categoryToSlug(post.category);
  const titleSlug = encodeURIComponent(post.title);
  return `/${categorySlug}/${titleSlug}`;
};

// Функция для поиска статьи по URL параметрам
const findPostByUrl = (categorySlug, titleEncoded) => {
  const title = decodeURIComponent(titleEncoded);
  return blogPosts.find(post => {
    const postCategorySlug = categoryToSlug(post.category);
    return postCategorySlug === categorySlug && post.title === title;
  });
};

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="border-b border-white/10 sticky top-0 bg-zinc-950/95 backdrop-blur-md z-50">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/')}>
          <div className="w-7 h-7 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md flex items-center justify-center font-bold text-black text-xs">X</div>
          <span className="font-semibold">XAUH</span>
          <span className="text-white/30 text-sm ml-1">/ Blog</span>
        </div>
        <nav className="flex items-center gap-4 text-xs text-white/60">
          <a href="https://xauh.gold" className="hover:text-yellow-400 transition hidden sm:block">Home</a>
          <button onClick={() => navigate('/')} className="text-yellow-400">Blog</button>
          <a href="https://xauh.gold" className="px-3 py-1.5 bg-yellow-500 text-black font-medium rounded text-xs hover:bg-yellow-400 transition">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="border-t border-white/5 py-4">
    <div className="max-w-5xl mx-auto px-4 flex items-center justify-between text-xs text-white/30">
      <p>© 2025 Herculis Group. All rights reserved.</p>
      <div className="flex gap-4">
        <a href="#" className="hover:text-yellow-400">Privacy</a>
        <a href="#" className="hover:text-yellow-400">Terms</a>
      </div>
    </div>
  </footer>
);

const BlogHome = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("All");
  const featuredPost = blogPosts[0];
  const regularPosts = blogPosts.slice(1, 7);

  return (
    <>
      <section className="relative border-b border-white/5">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 to-transparent"></div>
        <div className="relative max-w-5xl mx-auto px-4 py-10 text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 bg-gradient-to-r from-white via-yellow-100 to-yellow-400 bg-clip-text text-transparent">
            Insights & Analysis
          </h1>
          <p className="text-white/50 text-sm max-w-md mx-auto mb-5">
            Expert perspectives on gold markets, tokenization, and wealth management
          </p>
          <div className="max-w-sm mx-auto relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/30" />
            <input
              type="text"
              placeholder="Search articles..."
              className="w-full pl-9 pr-3 py-2.5 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50"
            />
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-4 border-b border-white/5">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-3 py-1.5 rounded-full text-xs whitespace-nowrap transition ${
                activeCategory === cat.name
                  ? 'bg-yellow-500 text-black font-medium'
                  : 'bg-white/5 text-white/60 hover:bg-white/10'
              }`}
            >
              {cat.name} <span className="opacity-60">({cat.count})</span>
            </button>
          ))}
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-4 py-6">
        <section className="mb-8">
          <div 
            onClick={() => navigate(getArticleUrl(featuredPost))}
            className="group cursor-pointer relative rounded-xl overflow-hidden border border-white/10 hover:border-yellow-500/30 transition"
          >
            <div className={`${featuredPost.gradient} p-6 sm:p-8`}>
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded">FEATURED</span>
                <span className="px-2 py-1 bg-black/30 backdrop-blur text-xs rounded text-white/80">{featuredPost.category}</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-yellow-400 transition pr-8">{featuredPost.title}</h2>
              <p className="text-white/70 text-sm mb-5 max-w-2xl leading-relaxed">{featuredPost.excerpt}</p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-white/50">
                <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5" />{featuredPost.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5" />{featuredPost.readTime}</span>
                <span className="flex items-center gap-1.5"><User className="w-3.5 h-3.5" />{featuredPost.author}</span>
                <span className="flex items-center gap-1.5 text-yellow-400 font-medium ml-auto group-hover:gap-2.5 transition-all">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold">Latest Articles</h2>
            <span className="text-white/30 text-xs">Showing 6 of 24</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {regularPosts.map((post) => {
              const Icon = post.icon;
              return (
                <article 
                  key={post.id}
                  onClick={() => navigate(getArticleUrl(post))}
                  className="group cursor-pointer bg-white/5 rounded-lg overflow-hidden border border-white/5 hover:border-yellow-500/30 hover:bg-white/10 transition"
                >
                  <div className={`relative h-20 sm:h-24 ${post.gradient} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-white/20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 to-transparent"></div>
                    <span className="absolute bottom-1.5 left-1.5 px-1.5 py-0.5 bg-black/50 backdrop-blur text-xs rounded text-white/70 truncate max-w-[90%]">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-2.5 sm:p-3">
                    <h3 className="font-medium text-xs sm:text-sm mb-1.5 group-hover:text-yellow-400 transition line-clamp-2 leading-snug">{post.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-white/30">
                      <span>{post.date.split(',')[0]}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

          <div className="text-center mt-6">
            <button className="px-5 py-2 border border-white/10 text-white/60 rounded-lg hover:bg-white/5 hover:border-yellow-500/30 hover:text-yellow-400 transition text-xs font-medium">
              Load More Articles
            </button>
          </div>
        </section>
      </div>

      <section className="border-t border-white/5 mt-8">
        <div className="max-w-md mx-auto px-4 py-10 text-center">
          <h3 className="font-bold mb-2">Stay Informed</h3>
          <p className="text-white/50 text-xs mb-4">Get the latest insights delivered to your inbox</p>
          <div className="flex gap-2">
            <input type="email" placeholder="Enter email" className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-white/30 focus:outline-none focus:border-yellow-500/50" />
            <button className="px-4 py-2 bg-yellow-500 text-black font-medium rounded-lg text-xs hover:bg-yellow-400 transition">Subscribe</button>
          </div>
        </div>
      </section>
    </>
  );
};

const ArticlePage = () => {
  const navigate = useNavigate();
  const { categorySlug, title } = useParams();
  const [openFaq, setOpenFaq] = useState(null);
  
  const post = findPostByUrl(categorySlug, title);
  const relatedPosts = blogPosts.filter(p => p.id !== post?.id).slice(0, 3);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article not found</h1>
          <button onClick={() => navigate('/')} className="text-yellow-400 hover:underline">
            Back to Blog
          </button>
        </div>
      </div>
    );
  }

  const faqs = [
    { q: "Is Swiss gold really safer than gold from other countries?", a: "Yes, Swiss gold benefits from Switzerland's political neutrality, strict banking regulations, and world-renowned refinery standards. Swiss vaults offer maximum security with full insurance coverage and are not subject to foreign government seizure." },
    { q: "How does XAUH ensure the authenticity of its gold reserves?", a: "XAUH conducts quarterly third-party audits by independent auditors. All gold is LBMA-certified 999.9 fine gold from PX Precinox S.A., stored in high-security Swiss vaults with full documentation and provenance tracking." },
    { q: "Can I convert my XAUH tokens to physical gold?", a: "Yes, KYC-verified token holders can redeem XAUH for physical gold starting from 500 grams. The redemption process typically takes 5-7 business days, with delivery or vault storage options available." },
    { q: "What happens to my tokens if XAUH ceases operations?", a: "All gold reserves are held in segregated custody, meaning they belong to token holders, not the company. In any scenario, token holders retain full claim to the underlying physical gold assets." }
  ];

  return (
    <>
      <div className={`${post.gradient}`}>
        <div className="max-w-3xl mx-auto px-4 py-8">
          <button onClick={() => navigate('/')} className="flex items-center gap-2 text-white/60 hover:text-yellow-400 transition text-sm mb-6">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </button>
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2 py-1 bg-yellow-500 text-black text-xs font-bold rounded">{post.category}</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold mb-4">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-white/60">
            <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4" />{post.date}</span>
            <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime} read</span>
            <span className="flex items-center gap-1.5"><User className="w-4 h-4" />{post.author}</span>
          </div>
        </div>
      </div>

      <article className="max-w-3xl mx-auto px-4 py-8">
        <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-xl p-5 mb-8">
          <h2 className="text-yellow-400 font-bold text-sm mb-2 flex items-center gap-2">⚡ TL;DR</h2>
          <p className="text-white/80 text-sm leading-relaxed">
            Swiss gold remains the gold standard for wealth preservation in 2025 due to Switzerland's political neutrality, robust legal framework, and world-class storage infrastructure. With tokenization through XAUH, investors can now access Swiss-vaulted gold with unprecedented ease, combining traditional security with blockchain transparency.
          </p>
        </div>

        <p className="text-white/70 leading-relaxed mb-6">
          In an era of unprecedented economic uncertainty, geopolitical tensions, and currency volatility, investors worldwide are returning to humanity's oldest store of value: gold. But not all gold is created equal. Swiss gold, refined and stored in the heart of Europe's most stable nation, offers unique advantages that make it the preferred choice for sophisticated investors.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8">The Swiss Advantage: Why Location Matters</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          Switzerland has maintained political neutrality for over 200 years, surviving two World Wars without invasion or occupation. This unique status, combined with the country's robust legal framework, makes it an unparalleled jurisdiction for storing precious assets.
        </p>

        <ul className="space-y-2 mb-6 ml-4">
          <li className="flex items-start gap-3 text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
            <span><strong className="text-white">Political Neutrality:</strong> Switzerland's centuries-long neutral stance protects assets from international conflicts and sanctions</span>
          </li>
          <li className="flex items-start gap-3 text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
            <span><strong className="text-white">Legal Protection:</strong> Swiss law provides strong private property rights with no history of asset confiscation</span>
          </li>
          <li className="flex items-start gap-3 text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
            <span><strong className="text-white">Banking Excellence:</strong> World-renowned financial infrastructure with the highest security standards</span>
          </li>
          <li className="flex items-start gap-3 text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
            <span><strong className="text-white">Refinery Standards:</strong> Swiss refineries like PX Precinox produce LBMA-certified 999.9 fine gold</span>
          </li>
        </ul>

        <blockquote className="border-l-4 border-yellow-500 pl-5 py-3 my-8 bg-white/5 rounded-r-lg">
          <p className="text-white/80 italic mb-2">"In times of uncertainty, gold is not just an investment—it's insurance. And Swiss gold is the premium policy that never expires."</p>
          <cite className="text-white/50 text-sm">— Heinrich Müller, Chief Investment Officer, Herculis Partners SA</cite>
        </blockquote>

        <h2 className="text-xl font-bold mb-4 mt-8">2025 Market Outlook: Gold's Continued Relevance</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          The macroeconomic environment in 2025 presents compelling arguments for gold allocation. Central banks continue to accumulate gold reserves at historic rates, while inflation concerns and currency debasement drive retail investor interest.
        </p>

        <div className="overflow-x-auto mb-6">
          <table className="w-full text-sm border border-white/10 rounded-lg overflow-hidden">
            <thead className="bg-white/10">
              <tr>
                <th className="text-left p-3 font-medium">Asset Class</th>
                <th className="text-left p-3 font-medium">5Y Return</th>
                <th className="text-left p-3 font-medium">Volatility</th>
                <th className="text-left p-3 font-medium">Inflation Hedge</th>
              </tr>
            </thead>
            <tbody className="text-white/70">
              <tr className="border-t border-white/10">
                <td className="p-3 font-medium text-yellow-400">Swiss Gold</td>
                <td className="p-3">+67%</td>
                <td className="p-3">Low</td>
                <td className="p-3">Excellent</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">S&P 500</td>
                <td className="p-3">+52%</td>
                <td className="p-3">High</td>
                <td className="p-3">Moderate</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">Bitcoin</td>
                <td className="p-3">+180%</td>
                <td className="p-3">Very High</td>
                <td className="p-3">Uncertain</td>
              </tr>
              <tr className="border-t border-white/10">
                <td className="p-3">US Bonds</td>
                <td className="p-3">-8%</td>
                <td className="p-3">Moderate</td>
                <td className="p-3">Poor</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-bold mb-4 mt-8">The Tokenization Revolution: Accessing Swiss Gold Digitally</h2>
        <p className="text-white/70 leading-relaxed mb-4">
          While physical gold ownership has traditionally required significant capital and complex logistics, blockchain technology has democratized access. XAUH tokens represent a breakthrough in combining the security of Swiss-vaulted gold with the convenience of digital assets.
        </p>

        <ul className="space-y-2 mb-6 ml-4">
          <li className="flex items-start gap-3 text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
            <span><strong className="text-white">1:1 Backing:</strong> Each XAUH token represents exactly 1 gram of LBMA-certified gold</span>
          </li>
          <li className="flex items-start gap-3 text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
            <span><strong className="text-white">Fractional Ownership:</strong> Invest in gold starting from minimal amounts—no 400oz bar required</span>
          </li>
          <li className="flex items-start gap-3 text-white/70">
            <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2 flex-shrink-0"></span>
            <span><strong className="text-white">Physical Redemption:</strong> Convert tokens to physical gold from 500g with Swiss vault pickup or insured delivery</span>
          </li>
        </ul>

        <p className="text-white/70 leading-relaxed mb-6">
          This combination of traditional asset security and digital innovation positions XAUH as the optimal vehicle for gold exposure in the modern era. Investors gain the stability of Swiss gold with the liquidity and accessibility of cryptocurrency.
        </p>

        <h2 className="text-xl font-bold mb-4 mt-8">Conclusion</h2>
        <p className="text-white/70 leading-relaxed mb-8">
          As we navigate the complex financial landscape of 2025, Swiss gold remains an essential component of any well-diversified portfolio. Whether held physically or through tokenized instruments like XAUH, the combination of Switzerland's unparalleled stability and gold's timeless value provides investors with a foundation of security in uncertain times.
        </p>

        <div className="flex items-center gap-4 py-6 border-t border-b border-white/10 mb-8">
          <span className="text-white/50 text-sm">Share this article:</span>
          <div className="flex gap-2">
            <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"><Linkedin className="w-4 h-4" /></button>
            <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"><Twitter className="w-4 h-4" /></button>
            <button className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition"><Link2 className="w-4 h-4" /></button>
          </div>
        </div>

        <div className="mb-8">
          <h2 className="text-xl font-bold mb-4">Frequently Asked Questions</h2>
          <div className="space-y-2">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-white/5 transition"
                >
                  <span className="font-medium text-sm pr-4">{faq.q}</span>
                  {openFaq === i ? <ChevronUp className="w-4 h-4 text-yellow-400 flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-white/40 flex-shrink-0" />}
                </button>
                {openFaq === i && (
                  <div className="px-4 pb-4 text-white/60 text-sm leading-relaxed">{faq.a}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Related Articles</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {relatedPosts.map((p) => (
              <div
                key={p.id}
                onClick={() => { navigate(getArticleUrl(p)); window.scrollTo(0, 0); }}
                className="group cursor-pointer bg-white/5 rounded-lg p-3 border border-white/5 hover:border-yellow-500/30 transition"
              >
                <span className="text-xs text-yellow-400">{p.category}</span>
                <h3 className="font-medium text-sm mt-1 group-hover:text-yellow-400 transition line-clamp-2">{p.title}</h3>
                <span className="text-xs text-white/40 mt-2 block">{p.readTime}</span>
              </div>
            ))}
          </div>
        </div>
      </article>
    </>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Header />
      <Routes>
        <Route path="/" element={<BlogHome />} />
        <Route path="/:categorySlug/:title" element={<ArticlePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
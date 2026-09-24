import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Mail,
  MapPin,
  Menu,
  Phone,
  Search,
  X,
} from "lucide-react";

const HERO_IMAGE = "https://images.pexels.com/photos/6077797/pexels-photo-6077797.jpeg?auto=compress&cs=tinysrgb&w=1800";
const OFFICE_IMAGE = "https://images.pexels.com/photos/33719779/pexels-photo-33719779.jpeg?auto=compress&cs=tinysrgb&w=1200";
const COURT_IMAGE = "https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=1200";
const WRITING_IMAGE = "https://images.pexels.com/photos/8112113/pexels-photo-8112113.jpeg?auto=compress&cs=tinysrgb&w=1200";

type Page = "home" | "about" | "services" | "insights" | "contact" | "help" | "service-detail" | "article";
type Article = { title: string; image: string; date: string; body: string };
const navItems: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Services", page: "services" },
  { label: "Insights", page: "insights" },
  { label: "Contact", page: "contact" },
];
const services = ["Corporate & Commercial", "Dispute Resolution", "Property & Real Estate", "Family & Succession", "Employment & Labour", "Other Legal Matters"];
const articles: Article[] = [
  { title: "Understanding Rwanda's New Business Registration Process", image: COURT_IMAGE, date: "September 2026", body: "A clear introduction to the steps, documents and decisions involved when registering a business in Rwanda." },
  { title: "Key Changes in Labour Law Affecting Employers", image: HERO_IMAGE, date: "September 2026", body: "What employers should review when managing contracts, workplace expectations and employment decisions." },
  { title: "Tips for Protecting Your Intellectual Property in Rwanda", image: WRITING_IMAGE, date: "August 2026", body: "Practical considerations for protecting ideas, brands and creative work as your organisation grows." },
];

function Logo({ light = false }: { light?: boolean }) {
  return <div className={`logo ${light ? "logo-light" : "logo-dark"}`}><div className="logo-mark">M</div><div><strong>MOUSSA</strong><small>ADVOCATES</small></div></div>;
}

function TopNav({ page, onNavigate, onOpenMenu, light = false }: { page: Page; onNavigate: (page: Page) => void; onOpenMenu: () => void; light?: boolean }) {
  return <header className={`top-nav ${light ? "nav-light" : "nav-dark"}`}>
    <button className="brand-button" onClick={() => onNavigate("home")} aria-label="Moussa Advocates home"><Logo light={light} /></button>
    <nav className="desktop-nav">{navItems.map((item) => <button className={page === item.page ? "active" : ""} key={item.page} onClick={() => onNavigate(item.page)}>{item.label}</button>)}<button className="nav-cta" onClick={() => onNavigate("help")}>Get legal help <ArrowRight size={11} /></button></nav>
    <button className="menu-button" onClick={onOpenMenu} aria-label="Open menu"><Menu size={18} /></button>
  </header>;
}

function WelcomeOverlay({ onClose, onNavigate }: { onClose: () => void; onNavigate: (page: Page) => void }) {
  const [query, setQuery] = useState("");
  const choices = ["Our Services", "About Moussa Advocates", "Legal Insights", "Start a Consultation", "Contact"];
  const results = choices.filter((choice) => choice.toLowerCase().includes(query.toLowerCase()));
  return <div className="welcome-overlay" role="dialog" aria-label="Moussa Advocates navigation">
    <div className="overlay-top"><Logo light /><button onClick={onClose} aria-label="Close menu"><X size={21} /></button></div>
    <div className="overlay-inner"><p className="kicker">Welcome.</p><h2>What would you like to explore?</h2><label className="overlay-search"><Search size={16} /><input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Ask a question or search the site" aria-label="Search the site" /><button type="button" aria-label="Clear search" onClick={() => setQuery("")}><X size={14} /></button></label><div className="overlay-links">{results.map((choice, index) => <button key={choice} onClick={() => onNavigate(choice === "Our Services" ? "services" : choice === "About Moussa Advocates" ? "about" : choice === "Legal Insights" ? "insights" : choice === "Contact" ? "contact" : "help")}><span><small>0{index + 1}</small>{choice}</span><ArrowRight size={17} /></button>)}{results.length === 0 && <p className="empty-result">No matching destination. Try a different search.</p>}</div></div>
    <p className="overlay-foot">Moussa Advocates · Kigali, Rwanda</p>
  </div>;
}

function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return <footer><div className="footer-brand"><button onClick={() => onNavigate("home")} aria-label="Moussa Advocates home"><Logo light /></button><span>Kigali, Rwanda</span></div><div className="footer-links"><button onClick={() => onNavigate("services")}>Services</button><button onClick={() => onNavigate("about")}>About</button><button onClick={() => onNavigate("insights")}>Insights</button><button onClick={() => onNavigate("help")}>Legal Help</button><button onClick={() => onNavigate("contact")}>Contact</button></div><div className="footer-contact"><a href="tel:+250788123456"><Phone size={13} /> Call</a><a href="mailto:info@moussaadvocates.rw"><Mail size={13} /> Email</a><a href="https://maps.google.com/?q=Kigali,Rwanda" target="_blank" rel="noreferrer"><MapPin size={13} /> Directions</a></div><small className="footer-bottom">© 2026 Moussa Advocates · Built by <a href="https://sybellasystems.com" target="_blank" rel="noreferrer">Sybella Systems</a></small></footer>;
}

function Home({ onNavigate, onOpenMenu }: { onNavigate: (page: Page) => void; onOpenMenu: () => void }) {
  return <main className="home">
    <section className="arrival" style={{ backgroundImage: `linear-gradient(90deg, rgba(1,10,12,.8), rgba(1,10,12,.2)), url(${HERO_IMAGE})` }}><TopNav page="home" onNavigate={onNavigate} onOpenMenu={onOpenMenu} light /><div className="arrival-copy"><p className="kicker">Moussa Advocates · Rwanda</p><h1>Legal clarity.<br /><em>When it matters.</em></h1><p className="arrival-subtitle">Professional guidance for important decisions.</p><button className="light-button" onClick={onOpenMenu}>Get legal help <ArrowRight size={13} /></button></div><span className="scroll-label">Scroll to explore <ArrowRight size={12} /></span></section>
    <section className="home-intro"><p className="kicker">02 · Orientation</p><h2>Legal work should begin<br className="desktop-only" /> with understanding.</h2><p>We help individuals, businesses and organisations navigate important legal matters with clear advice, careful attention and practical direction.</p><button className="text-link" onClick={() => onNavigate("about")}>About Moussa Advocates <ArrowRight size={12} /></button></section>
    <section className="home-services"><div className="section-heading"><p className="kicker">03 · Services</p><h2>What do you need help with?</h2></div><ServiceList onNavigate={onNavigate} /></section>
    <section className="home-expertise"><div className="expertise-image" style={{ backgroundImage: `url(${OFFICE_IMAGE})` }} /><div><p className="kicker">04 · Expertise</p><h2>Thoughtful counsel.<br />Practical next steps.</h2><p>From commercial decisions to personal matters, our work is built around making the next step clearer.</p><button className="text-link" onClick={() => onNavigate("services")}>Explore our services <ArrowRight size={12} /></button></div></section>
    <section className="home-people"><p className="kicker">05 · The people</p><h2>People who pay attention.</h2><div className="people-feature"><img src={OFFICE_IMAGE} alt="Moussa Advocates office" /><div><p>Meet the advocates behind Moussa Advocates.</p><button className="text-link" onClick={() => onNavigate("about")}>Meet the team <ArrowRight size={12} /></button></div></div></section>
    <section className="home-insights"><div className="section-heading"><p className="kicker">06 · Knowledge</p><h2>Understanding the law<br />in Rwanda.</h2></div><ArticleList onOpen={(article) => onNavigateWithArticle(onNavigate, article)} /></section>
    <section className="home-conversion"><p className="kicker">07 · A clear next step</p><h2>Need legal help?</h2><button className="light-button" onClick={() => onNavigate("help")}>Tell us what you're dealing with <ArrowRight size={13} /></button></section>
    <section className="home-contact"><div><p className="kicker">08 · Contact</p><h2>Moussa Advocates</h2><p>Kigali, Rwanda</p></div><div className="contact-actions"><a href="tel:+250788123456">Call <ArrowUpRight size={13} /></a><a href="mailto:info@moussaadvocates.rw">Email <ArrowUpRight size={13} /></a><a href="https://maps.google.com/?q=Kigali,Rwanda" target="_blank" rel="noreferrer">Directions <ArrowUpRight size={13} /></a></div></section><Footer onNavigate={onNavigate} />
  </main>;
}

function onNavigateWithArticle(onNavigate: (page: Page) => void, article: Article) {
  window.dispatchEvent(new CustomEvent("moussa-article", { detail: article }));
  onNavigate("article");
}

function ServiceList({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return <div className="editorial-list">{services.map((service, index) => <button key={service} onClick={() => onNavigate("service-detail")}><span><small>0{index + 1}</small>{service}</span><ArrowRight size={16} /></button>)}</div>;
}
function ArticleList({ onOpen }: { onOpen: (article: Article) => void }) {
  return <div className="article-list">{articles.map((article) => <button key={article.title} onClick={() => onOpen(article)}><span><small>{article.date}</small><strong>{article.title}</strong></span><ArrowRight size={16} /></button>)}</div>;
}

function PageHero({ page, title, subtitle, image, onNavigate, onOpenMenu }: { page: Page; title: string; subtitle: string; image?: string; onNavigate: (page: Page) => void; onOpenMenu: () => void }) {
  return <section className="detail-hero" style={image ? { backgroundImage: `linear-gradient(90deg, rgba(1,11,13,.84), rgba(1,11,13,.2)), url(${image})` } : undefined}><TopNav page={page} onNavigate={onNavigate} onOpenMenu={onOpenMenu} light={!!image} /><div className="detail-title"><p className="kicker">Moussa Advocates</p><h1>{title}</h1><p>{subtitle}</p></div></section>;
}

function DetailPage({ page, onNavigate, onOpenMenu, article }: { page: Page; onNavigate: (page: Page) => void; onOpenMenu: () => void; article: Article | null }) {
  if (page === "article" && article) return <main className="detail-page"><PageHero page={page} title={article.title} subtitle={article.date} image={article.image} onNavigate={onNavigate} onOpenMenu={onOpenMenu} /><article className="reading-page"><p className="kicker">Legal insight</p><h2>{article.title}</h2><p>{article.body}</p><p>For guidance specific to your situation, speak with Moussa Advocates about the facts and decisions that matter to you.</p><button className="text-link" onClick={() => onNavigate("help")}>Talk to an advocate <ArrowRight size={12} /></button></article><Footer onNavigate={onNavigate} /></main>;
  if (page === "service-detail") return <main className="detail-page"><PageHero page={page} title="Corporate & Commercial" subtitle="Legal clarity for business decisions." image={COURT_IMAGE} onNavigate={onNavigate} onOpenMenu={onOpenMenu} /><section className="reading-page"><button className="back-link" onClick={() => onNavigate("services")}>← Services</button><h2>Business decisions often require legal clarity before they require legal action.</h2><p>We help organisations make informed decisions around formation, contracts, commercial agreements and compliance.</p><button className="text-link" onClick={() => onNavigate("help")}>Talk to an advocate <ArrowRight size={12} /></button></section><Footer onNavigate={onNavigate} /></main>;
  const content: { title: string; subtitle: string; image?: string } = { about: { title: "About Us", subtitle: "Integrity. Expertise. Results.", image: OFFICE_IMAGE }, services: { title: "Our Services", subtitle: "Practical legal solutions.", image: COURT_IMAGE }, insights: { title: "Legal Insights", subtitle: "Understanding Rwanda's legal environment.", image: WRITING_IMAGE }, contact: { title: "Contact Us", subtitle: "Let's talk." }, help: { title: "Get Legal Help", subtitle: "Tell us what you need help with." } }[page as "about" | "services" | "insights" | "contact" | "help"];
  return <main className="detail-page"><PageHero page={page} title={content.title} subtitle={content.subtitle} image={content.image} onNavigate={onNavigate} onOpenMenu={onOpenMenu} />{page === "about" && <AboutContent onNavigate={onNavigate} />}{page === "services" && <section className="detail-section"><p className="kicker">Legal services</p><h2>What do you need help with?</h2><ServiceList onNavigate={onNavigate} /></section>}{page === "insights" && <section className="detail-section"><p className="kicker">From our desk</p><h2>Useful context for important decisions.</h2><ArticleList onOpen={(item) => onNavigateWithArticle(onNavigate, item)} /></section>}{page === "contact" && <ContactContent onNavigate={onNavigate} />}{page === "help" && <HelpContent onNavigate={onNavigate} />}<Footer onNavigate={onNavigate} /></main>;
}

function AboutContent({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return <section className="reading-page about-reading"><img src={OFFICE_IMAGE} alt="Moussa Advocates office" /><div><p className="kicker">Who we are</p><h2>A steady hand when it matters most.</h2><p>Moussa Advocates is a Rwandan law firm grounded in integrity, responsiveness and practical expertise. We help people and organisations move forward with confidence.</p><button className="text-link" onClick={() => onNavigate("contact")}>Start a conversation <ArrowRight size={12} /></button></div></section>;
}
function ContactContent({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return <section className="contact-page-section"><div><p className="kicker">Contact</p><h2>Let's talk about what comes next.</h2><p>Kigali, Rwanda</p></div><div className="contact-actions"><a href="tel:+250788123456"><Phone size={14} /> +250 788 123 456</a><a href="mailto:info@moussaadvocates.rw"><Mail size={14} /> info@moussaadvocates.rw</a><a href="https://maps.google.com/?q=Kigali,Rwanda" target="_blank" rel="noreferrer"><MapPin size={14} /> Get directions</a><button className="text-link" onClick={() => onNavigate("help")}>Send an enquiry <ArrowRight size={12} /></button></div></section>;
}
function HelpContent({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return <section className="help-page-section"><p className="kicker">Start a conversation</p><h2>Tell us what you need help with.</h2><div className="help-options">{["Business", "Property", "Dispute", "Family", "Employment", "Other"].map((option) => <button key={option} onClick={() => onNavigate("contact")}>{option}<ArrowRight size={14} /></button>)}</div><button className="text-link" onClick={() => onNavigate("contact")}>Continue to contact <ArrowRight size={12} /></button></section>;
}

function App() {
  const [page, setPage] = useState<Page>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [article, setArticle] = useState<Article | null>(null);
  useEffect(() => {
    const handleArticle = (event: Event) => setArticle((event as CustomEvent<Article>).detail);
    window.addEventListener("moussa-article", handleArticle);
    document.title = page === "home" ? "Moussa Advocates" : page === "article" && article ? `${article.title} | Moussa Advocates` : `${page[0].toUpperCase() + page.slice(1)} | Moussa Advocates`;
    return () => window.removeEventListener("moussa-article", handleArticle);
  }, [page, article]);
  const navigate = (nextPage: Page) => { setMenuOpen(false); setPage(nextPage); };
  return <>{page === "home" ? <Home onNavigate={navigate} onOpenMenu={() => setMenuOpen(true)} /> : <DetailPage page={page} onNavigate={navigate} onOpenMenu={() => setMenuOpen(true)} article={article} />}{menuOpen && <WelcomeOverlay onClose={() => setMenuOpen(false)} onNavigate={navigate} />}</>;
}

export default App;

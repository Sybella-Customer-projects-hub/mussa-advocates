import { ArrowRight } from "lucide-react";
import { images, type Page } from "../../data/siteContent";
import Footer from "../../components/layout/Footer";
import PageHero from "../../components/layout/PageHero";

export default function AboutPage({ onNavigate, onOpenMenu }: { onNavigate: (page: Page) => void; onOpenMenu: () => void }) {
  return <main className="detail-page"><PageHero page="about" title="About Us" subtitle="Integrity. Expertise. Results." image={images.office} onNavigate={onNavigate} onOpenMenu={onOpenMenu} /><section className="reading-page about-reading"><img src={images.office} alt="Moussa Advocates office" /><div><p className="kicker">Who we are</p><h2>A steady hand when it matters most.</h2><p>Moussa Advocates is a Rwandan law firm grounded in integrity, responsiveness and practical expertise. We help people and organisations move forward with confidence.</p><button className="text-link" onClick={() => onNavigate("contact")}>Start a conversation <ArrowRight size={12} /></button></div></section><Footer onNavigate={onNavigate} /></main>;
}

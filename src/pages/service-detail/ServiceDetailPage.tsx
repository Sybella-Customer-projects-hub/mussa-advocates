import { ArrowRight } from "lucide-react";
import { images, type Page } from "../../data/siteContent";
import Footer from "../../components/layout/Footer";
import PageHero from "../../components/layout/PageHero";

export default function ServiceDetailPage({ onNavigate, onOpenMenu }: { onNavigate: (page: Page) => void; onOpenMenu: () => void }) {
  return <main className="detail-page"><PageHero page="service-detail" title="Corporate & Commercial" subtitle="Legal clarity for business decisions." image={images.court} onNavigate={onNavigate} onOpenMenu={onOpenMenu} /><section className="reading-page"><button className="back-link" onClick={() => onNavigate("services")}>← Services</button><h2>Business decisions often require legal clarity before they require legal action.</h2><p>We help organisations make informed decisions around formation, contracts, commercial agreements and compliance.</p><button className="text-link" onClick={() => onNavigate("help")}>Talk to an advocate <ArrowRight size={12} /></button></section><Footer onNavigate={onNavigate} /></main>;
}

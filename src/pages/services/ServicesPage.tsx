import { type Page } from "../../data/siteContent";
import { ServiceList } from "../../components/content/EditorialLists";
import Footer from "../../components/layout/Footer";
import PageHero from "../../components/layout/PageHero";

export default function ServicesPage({ onNavigate, onOpenMenu }: { onNavigate: (page: Page) => void; onOpenMenu: () => void }) {
  return <main className="detail-page"><PageHero page="services" title="Our Services" subtitle="Practical legal solutions." image="https://images.pexels.com/photos/6077447/pexels-photo-6077447.jpeg?auto=compress&cs=tinysrgb&w=1200" onNavigate={onNavigate} onOpenMenu={onOpenMenu} /><section className="detail-section"><h2>What do you need help with?</h2><ServiceList onNavigate={onNavigate} /></section><Footer onNavigate={onNavigate} /></main>;
}

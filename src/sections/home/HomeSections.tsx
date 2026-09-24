import { ArrowRight } from "lucide-react";
import { images, type Page } from "../../data/siteContent";
import Footer from "../../components/layout/Footer";
import TopNav from "../../components/navigation/TopNav";
import IntroSection from "./IntroSection";
import ProcessSection from "./ProcessSection";
import ExpertiseSection from "./ExpertiseSection";
import PeopleSection from "./PeopleSection";
import PreparationSection from "./PreparationSection";
import ConversionSection from "./ConversionSection";
import ContactSection from "./ContactSection";
import LightButton from "../../components/ui/buttons/LightButton";

const { hero: HERO_IMAGE } = images;

interface HomeSectionsProps {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}

export default function HomeSections({ onNavigate, onOpenMenu }: HomeSectionsProps) {
  return (
    <main className="home">
      <section className="arrival" style={{ backgroundImage: `linear-gradient(90deg, rgba(1,10,12,.8), rgba(1,10,12,.2)), url(${HERO_IMAGE})` }}>
        <TopNav page="home" onNavigate={onNavigate} onOpenMenu={onOpenMenu} light />
        <div className="arrival-copy"><h1>Your Rights.<br /><em>Our Commitment.</em></h1><p className="arrival-subtitle">Professional legal support for individuals,<br className="desktop-only" /> businesses and organizations in Rwanda.</p><LightButton onClick={onOpenMenu}>Get Legal Help <ArrowRight size={13} /></LightButton></div>
      </section>
      <IntroSection onNavigate={onNavigate} />
      <ProcessSection onNavigate={onNavigate} />
      <ExpertiseSection onNavigate={onNavigate} />
      <PeopleSection onNavigate={onNavigate} />
      <PreparationSection onNavigate={onNavigate} />
      <ConversionSection onNavigate={onNavigate} />
      <ContactSection />
      <Footer onNavigate={onNavigate} />
    </main>
  );
}

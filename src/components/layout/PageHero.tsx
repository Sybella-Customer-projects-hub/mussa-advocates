import { type Page } from "../../data/siteContent";
import TopNav from "../navigation/TopNav";

interface PageHeroProps {
  page: Page;
  title: string;
  subtitle: string;
  image?: string;
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}

export default function PageHero({ page, title, subtitle, image, onNavigate, onOpenMenu }: PageHeroProps) {
  return (
    <section className="detail-hero" style={image ? { backgroundImage: `linear-gradient(90deg, rgba(1,11,13,.84), rgba(1,11,13,.2)), url(${image})` } : undefined}>
      <TopNav page={page} onNavigate={onNavigate} onOpenMenu={onOpenMenu} light={!!image} />
      <div className="detail-title"><p className="kicker">Moussa Advocates</p><h1>{title}</h1><p>{subtitle}</p></div>
    </section>
  );
}

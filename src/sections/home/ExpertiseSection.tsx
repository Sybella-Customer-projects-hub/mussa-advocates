import { ArrowRight } from "lucide-react";
import { images, type Page } from "../../data/siteContent";

export default function ExpertiseSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return <section className="home-expertise"><div className="expertise-image" style={{ backgroundImage: `url(${images.office})` }} /><div><h2>Thoughtful counsel.<br />Practical next steps.</h2><p>From commercial decisions to personal matters, our work is built around making the next step clearer.</p><button className="text-link" onClick={() => onNavigate("services")}>Explore our services <ArrowRight size={12} /></button></div></section>;
}

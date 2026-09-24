import { ArrowRight } from "lucide-react";
import { type Page } from "../../data/siteContent";
import LightButton from "../../components/ui/buttons/LightButton";

export default function ConversionSection({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return <section className="home-conversion"><h2>Need legal help?</h2><LightButton onClick={() => onNavigate("help")}>Tell us what you're dealing with <ArrowRight size={13} /></LightButton></section>;
}

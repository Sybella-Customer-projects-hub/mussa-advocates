import { ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  return <section className="home-contact"><div><h2>Moussa Advocates</h2><p>Kigali, Rwanda</p></div><div className="contact-actions"><a href="tel:+250788123456">Call <ArrowUpRight size={13} /></a><a href="mailto:info@moussaadvocates.rw">Email <ArrowUpRight size={13} /></a><a href="https://maps.google.com/?q=Kigali,Rwanda" target="_blank" rel="noreferrer">Directions <ArrowUpRight size={13} /></a></div></section>;
}

import { ArrowRight } from "lucide-react";
import { type Article, type Page } from "../../data/siteContent";
import Footer from "../../components/layout/Footer";
import PageHero from "../../components/layout/PageHero";

export default function ArticlePage({ article, onNavigate, onOpenMenu }: { article: Article; onNavigate: (page: Page) => void; onOpenMenu: () => void }) {
  return <main className="detail-page"><PageHero page="article" title={article.title} subtitle={article.date} image={article.image} onNavigate={onNavigate} onOpenMenu={onOpenMenu} /><article className="reading-page"><p className="kicker">Legal insight</p><h2>{article.title}</h2><p>{article.body}</p><p>For guidance specific to your situation, speak with Moussa Advocates about the facts and decisions that matter to you.</p><button className="text-link" onClick={() => onNavigate("help")}>Talk to an advocate <ArrowRight size={12} /></button></article><Footer onNavigate={onNavigate} /></main>;
}

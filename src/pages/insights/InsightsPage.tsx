import { type Article, type Page } from "../../data/siteContent";
import { ArticleList } from "../../components/content/EditorialLists";
import Footer from "../../components/layout/Footer";
import PageHero from "../../components/layout/PageHero";

export default function InsightsPage({ onNavigate, onOpenMenu, onOpenArticle }: { onNavigate: (page: Page) => void; onOpenMenu: () => void; onOpenArticle: (article: Article) => void }) {
  return <main className="detail-page"><PageHero page="insights" title="Legal Insights" subtitle="Understanding Rwanda's legal environment." image="https://images.pexels.com/photos/8112113/pexels-photo-8112113.jpeg?auto=compress&cs=tinysrgb&w=1200" onNavigate={onNavigate} onOpenMenu={onOpenMenu} /><section className="detail-section"><h2>Useful context for important decisions.</h2><ArticleList onOpen={onOpenArticle} /></section><Footer onNavigate={onNavigate} /></main>;
}

import { useEffect, useState } from "react";
import { type Article, type Page } from "./data/siteContent";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import ServicesPage from "./pages/services/ServicesPage";
import InsightsPage from "./pages/insights/InsightsPage";
import ContactPage from "./pages/contact/ContactPage";
import HelpPage from "./pages/help/HelpPage";
import ServiceDetailPage from "./pages/service-detail/ServiceDetailPage";
import ArticlePage from "./pages/article/ArticlePage";
import LegalProcessPage from "./pages/legal-process/LegalProcessPage";
import WelcomeOverlay from "./components/navigation/WelcomeOverlay";

export default function App() {
  const [page, setPage] = useState<Page>("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const [article, setArticle] = useState<Article | null>(null);
  const [pendingSection, setPendingSection] = useState<string | null>(null);

  useEffect(() => {
    // Articles are opened from list components without coupling those components to the app router.
    const handleArticle = (event: Event) => setArticle((event as CustomEvent<Article>).detail);
    window.addEventListener("moussa-article", handleArticle);
    document.title = page === "home" ? "Moussa Advocates" : page === "article" && article ? `${article.title} | Moussa Advocates` : `${page[0].toUpperCase() + page.slice(1)} | Moussa Advocates`;
    return () => window.removeEventListener("moussa-article", handleArticle);
  }, [page, article]);

  useEffect(() => {
    if (pendingSection) {
      document.getElementById(pendingSection)?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  }, [page, pendingSection]);

  const navigate = (nextPage: Page, section?: string) => {
    setMenuOpen(false);
    setPage(nextPage);
    setPendingSection(section ?? null);
  };

  const onOpenMenu = () => setMenuOpen(true);
  const currentPage = page === "home" ? <HomePage onNavigate={navigate} onOpenMenu={onOpenMenu} />
    : page === "about" ? <AboutPage onNavigate={navigate} onOpenMenu={onOpenMenu} />
      : page === "services" ? <ServicesPage onNavigate={navigate} onOpenMenu={onOpenMenu} />
          : page === "legal-process" ? <LegalProcessPage onNavigate={navigate} onOpenMenu={onOpenMenu} />
            : page === "insights" ? <InsightsPage onNavigate={navigate} onOpenMenu={onOpenMenu} onOpenArticle={(nextArticle) => { setArticle(nextArticle); navigate("article"); }} />
              : page === "contact" ? <ContactPage onNavigate={navigate} onOpenMenu={onOpenMenu} />
                : page === "help" ? <HelpPage onNavigate={navigate} onOpenMenu={onOpenMenu} />
                  : page === "service-detail" ? <ServiceDetailPage onNavigate={navigate} onOpenMenu={onOpenMenu} />
                    : article ? <ArticlePage article={article} onNavigate={navigate} onOpenMenu={onOpenMenu} /> : <HomePage onNavigate={navigate} onOpenMenu={onOpenMenu} />;
  return <>
    {currentPage}
    {menuOpen && <WelcomeOverlay onClose={() => setMenuOpen(false)} onNavigate={navigate} />}
  </>;
}

import { ArrowRight } from 'lucide-react';
import { articles, services, type Article, type Page } from '../../data/siteContent';

export function ServiceList({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <div className="editorial-list">
      {services.map((service) => (
        <button key={service} onClick={() => onNavigate('service-detail')}>
          <span>{service}</span>
          <ArrowRight size={16} />
        </button>
      ))}
    </div>
  );
}

export function ArticleList({ onOpen }: { onOpen: (article: Article) => void }) {
  return (
    <div className="article-list">
      {articles.map((article) => (
        <button key={article.title} onClick={() => onOpen(article)}>
          <span>
            <small>{article.date}</small>
            <strong>{article.title}</strong>
          </span>
          <ArrowRight size={16} />
        </button>
      ))}
    </div>
  );
}

import HomeSections from '../../sections/home/HomeSections';
import { type Page } from '../../data/siteContent';

interface HomePageProps {
  onNavigate: (page: Page) => void;
  onOpenMenu: () => void;
}

export default function HomePage({ onNavigate, onOpenMenu }: HomePageProps) {
  return <HomeSections onNavigate={onNavigate} onOpenMenu={onOpenMenu} />;
}

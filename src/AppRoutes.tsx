import { Routes, Route } from 'react-router-dom';
import HPTop from './pages/HPTop';
import AboutPage from './pages/AboutPage';
import WorksPage from './pages/WorksPage';
import WorkDetailPage from './pages/WorkDetailPage';
import PricingPage from './pages/PricingPage';
import BukkenLPPage from './BukkenLPPage';
import ArticleListPage from './pages/ArticleListPage';
import ArticlePage from './pages/ArticlePage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import TokushohoPage from './pages/TokushohoPage';
import { ScrollToTop } from './shared';

export default function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HPTop />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/works" element={<WorksPage />} />
        <Route path="/works/:slug" element={<WorkDetailPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/articles" element={<ArticleListPage />} />
        <Route path="/articles/:slug" element={<ArticlePage />} />
        <Route path="/privacy" element={<PrivacyPolicyPage />} />
        <Route path="/tokushoho" element={<TokushohoPage />} />
        <Route path="/lp/bukken" element={<BukkenLPPage />} />
        {/* /lp/staging は既存広告URL継承のため新LPへルーティング */}
        <Route path="/lp/staging" element={<BukkenLPPage />} />
      </Routes>
    </>
  );
}

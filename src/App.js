import './App.css';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import MainNavbar from './Components/MainNavbar/MainNavbar';
import AboutUs from './Pages/AbouUs';
import TestimonialSection from './Components/Home/TestimonialSection/TestimonialSection';
import GroupWebsites from './Components/Home/GroupWebsites/GroupWebsites';
import EditionsPage from './Components/MagazinePage/EditionsPage/EditionsPage';
import ArticlesPage from './Components/MagazinePage/ArticlesPage/ArticlesPage';
import PodcastEventsPage from './Components/MagazinePage/PodcastEventsPage/PodcastEventsPage';
import DefSecEduPage from './Components/MagazinePage/DefSecEdu/DefSecEduPage';
import NewsletterPage from './Components/NewsletterPage/NewsletterPage';
import NewsPage from './Components/NewsletterPage/NewsPage/NewsPage';
import ArticlePage from './Components/NewsletterPage/ArticlePage/ArticlePage';

function App() {
  // const location = useLocation();

  return (
    <BrowserRouter>
      {window.location.pathname === '/' ? "" : <MainNavbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/editions" element={<EditionsPage />} />
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/podcast-and-events" element={<PodcastEventsPage />} />
        <Route path="/def-sec-edu" element={<DefSecEduPage />} />

        <Route path="/newsletter" element={<NewsletterPage />} />
        <Route path="/newsletter-news" element={<NewsPage />} />
        <Route path="/newsletter-article-page" element={<ArticlePage />} />
      </Routes>
      {window.location.pathname === '/' ? "" : <TestimonialSection />}
      {window.location.pathname === '/' ? "" : <GroupWebsites />}
    </BrowserRouter>
  );
}

export default App;

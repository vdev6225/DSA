import BrandParttern from "../../Home/BrandParttern/BrandParttern";
import NewsletterSection from "../../Home/NewsletterSection/NewsletterSection";
import AboutNewsletterSection from "../AboutNewsletterSection/AboutNewsletterSection";
import NavigationSection from "../NavigationSection/NavigationSection";
import RegionSection from "./RegionSection/RegionSection";
import "./NewsPage.css";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
export default function NewsPage() {
    return (
        <div className="newsletter-news-page">
            <NavigationSection />
            <AboutNewsletterSection />
            <NewsletterSection />
            <BrandParttern />
            <RegionSection />
            <CategoriesSection />
        </div>
    )
}
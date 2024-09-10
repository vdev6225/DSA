import BrandParttern from "../Home/BrandParttern/BrandParttern";
import DegSecWivesSection from "../Home/DegSecWivesSection/DegSecWivesSection";
import NewsletterSection from "../Home/NewsletterSection/NewsletterSection";
import AboutNewsletterSection from "./AboutNewsletterSection/AboutNewsletterSection";
import DsaAlertsSection from "./DsaAlertsSection/DsaAlertsSection";
import DsaArticlesSection from "./DsaArticlesSection/DsaArticlesSection";
import NavigationSection from "./NavigationSection/NavigationSection";
import "./NewsletterPage.css";
export default function NewsletterPage() {
    return (
        <div className="newsletter-page">
            <NavigationSection />
            <AboutNewsletterSection />
            <NewsletterSection />
            <BrandParttern />
            <DsaArticlesSection />
            <DsaAlertsSection />
            <DegSecWivesSection />
        </div>
    )
}
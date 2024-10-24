import DsaArticlesSection from "../NewsletterPage/DsaArticlesSection/DsaArticlesSection";
import MagazineDegSecWivesSection from "./MagazineDegSecWivesSection/MagazineDegSecWivesSection";
import "./MagazinePage.css";
import MagazinePageContentSection from "./MagazinePageContentSection/MagazinePageContentSection";
import MagazinePageTopSection from "./MagazinePageTopSection/MagazinePageTopSection";
import NavigationSection from "./NavigationSection/NavigationSection";
import DsaAuditSection from "./PodcastEventsPage/DsaAuditSection/DsaAuditSection";
export default function MagazinePage() {
    return (
        <div className="magazine-page">
            <NavigationSection />
            <MagazinePageTopSection />
            <MagazinePageContentSection />
            <DsaArticlesSection />
            <DsaAuditSection />
            <MagazineDegSecWivesSection />
        </div>
    )
}
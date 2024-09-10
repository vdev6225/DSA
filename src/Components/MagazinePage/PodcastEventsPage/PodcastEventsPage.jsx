import NavigationSection from "../NavigationSection/NavigationSection";
import AboutEventSection from "./AboutEventSection/AboutEventSection";
import AttendanceSection from "./AttendanceSection/AttendanceSection";
import CategoryFilter from "./CategoryFilter/CategoryFilter";
import DsaAuditSection from "./DsaAuditSection/DsaAuditSection";
import EventsPage from "./EventsPage/EventsPage";
import PodcastAccordion from "./PodcastAccordion/PodcastAccordion";
import PodcastsSection from "./PodcastsSection/PodcastsSection";

export default function PodcastEventsPage() {
    return (
        <>
            <NavigationSection />
            <DsaAuditSection />
            <CategoryFilter />
            <PodcastsSection />
            <AttendanceSection />
            <AboutEventSection />
            <PodcastAccordion />
            <EventsPage />
        </>
    )
}
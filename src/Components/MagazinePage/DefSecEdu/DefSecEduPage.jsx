import NavigationSection from "../NavigationSection/NavigationSection";
// import AwardsCategoryPage from "./AwardsCategoryFilter/AwardsCategoryPage";
// import BadgesSection from "./BadgesSection/BadgesSection";
import CareersPage from "./CareersPage/CareersPage";
// import IndianArmySection from "./IndianArmySection/IndianArmySection";
import TopSection from "./TopSection/TopSection";
import WelcomeSection from "./WelcomeSection/WelcomeSection";

export default function DefSecEduPage() {
    return (
        <>
            <NavigationSection />
            <TopSection />
            <WelcomeSection />
            {/* <CategoryFilter /> */}
            {/* Insignia page */}
            {/* <IndianArmySection />
            <BadgesSection /> */}
            {/* Awards Page */}
            {/* <AwardsCategoryPage /> */}
            {/* Careers Page */}
            <CareersPage />
        </>
    )
}
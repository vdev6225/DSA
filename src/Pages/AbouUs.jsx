import AboutPageHeader from "../Components/AboutUs/AboutPageHeader/AboutPageHeader";
import CeoSection from "../Components/AboutUs/CeoSection/CeoSection";
import DsaUps from "../Components/AboutUs/DsaUps/DsaUps";
import FounderSection from "../Components/AboutUs/FounderSection/FounderSection";
import JourneySection from "../Components/AboutUs/JourneySection/JourneySection";
import VisionSection from "../Components/AboutUs/VisionSection/VisionSection";
// import GroupWebsites from "../Components/Home/GroupWebsites/GroupWebsites";
import MilestoneSection from "../Components/Home/MilestoneSection/MilestoneSection";
// import TestimonialSection from "../Components/Home/TestimonialSection/TestimonialSection";


export default function AboutUs() {
    return (
        <>
            <AboutPageHeader />
            <MilestoneSection HeadingText={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"} />
            <VisionSection />
            <DsaUps />
            <FounderSection />
            <CeoSection />
            <JourneySection />
        </>
    )
}
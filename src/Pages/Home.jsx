import AbouUsSection from "../Components/Home/AbouUsSection/AbouUsSection";
import AddBanner from "../Components/Home/AddBanner/AddBanner";
import ArticlesSection from "../Components/Home/ArticlesSection/ArticlesSection";
import BrandParttern from "../Components/Home/BrandParttern/BrandParttern";
import CurrentAffairs from "../Components/Home/CurrentAffairs/CurrentAffairs";
import DegSecWivesSection from "../Components/Home/DegSecWivesSection/DegSecWivesSection";
import DsaUpsSection from "../Components/Home/DsaUpsSection/DsaUpsSection";
import GroupWebsites from "../Components/Home/GroupWebsites/GroupWebsites";
import Header from "../Components/Home/Header/Header";
import HomeBanner from "../Components/Home/HomeBanner/HomeBanner";
import InstagramFeed from "../Components/Home/InstagramFeed/InstagramFeed";
import MilestoneSection from "../Components/Home/MilestoneSection/MilestoneSection";
import NewsletterSection from "../Components/Home/NewsletterSection/NewsletterSection";
import PodcastSection from "../Components/Home/PodcastSection/PodcastSection";
import ServiceSection from "../Components/Home/ServiceSection/ServiceSection";
import TestimonialSection from "../Components/Home/TestimonialSection/TestimonialSection";
import MainNavbar from "../Components/MainNavbar/MainNavbar";

export default function Home() {
    return (
        <>
            {/* <MainNavbar /> */}
            <Header />
            <HomeBanner />
            <NewsletterSection />
            <BrandParttern />
            <CurrentAffairs />
            <AbouUsSection />
            <MilestoneSection />
            <ServiceSection />
            <ArticlesSection />
            <DegSecWivesSection />
            <PodcastSection />
            <AddBanner />
            <TestimonialSection />
            <GroupWebsites />
            <InstagramFeed />
            <DsaUpsSection />
        </>
    )
}
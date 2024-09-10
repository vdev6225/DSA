import GroupWebsites from "../../Home/GroupWebsites/GroupWebsites";
import TestimonialSection from "../../Home/TestimonialSection/TestimonialSection";
import NavigationSection from "../NavigationSection/NavigationSection";
import EditionsAboutSection from "./EditionsAboutSection/EditionsAboutSection";
import EditionsCategories from "./EditionsCategories/EditionsCategories";

export default function EditionsPage() {
    return (
        <>
            <NavigationSection />
            <EditionsAboutSection />
            <EditionsCategories />
        </>
    )
}
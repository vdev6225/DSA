import ArticleDetail from "../../MagazinePage/ArticlesPage/ArticleDetail/ArticleDetail";
import NewArticleSection from "../ArticlePage/NewArticleSection/NewArticleSection";
import NavigationSection from "../NavigationSection/NavigationSection";
import NewsletterDefArticleSection from "./NewsletterDefArticleSection/NewsletterDefArticleSection";
import NewsletterWelcomeSection from "./NewsletterWelcomeSection/NewsletterWelcomeSection";
import RelatedArticleSlider from "./RelatedArticleSlider/RelatedArticleSlider";
import TopSliderSection from "./TopSliderSection/TopSliderSection";

export default function DefSecWivesPage() {
    return (
        <>
            <NavigationSection />
            <TopSliderSection />
            <NewsletterWelcomeSection />
            <NewsletterDefArticleSection />
            <NewArticleSection />
            <ArticleDetail />
            <RelatedArticleSlider />
        </>
    )
}
import ArticleDetail from "../../MagazinePage/ArticlesPage/ArticleDetail/ArticleDetail";
import RelatedArticles from "../../MagazinePage/ArticlesPage/RelatedArticles/RelatedArticles";
import CategoryFilter from "../../MagazinePage/PodcastEventsPage/CategoryFilter/CategoryFilter";
import NavigationSection from "../NavigationSection/NavigationSection";
import ArticleSection from "./ArticleSection/ArticleSection";
import NewArticleSection from "./NewArticleSection/NewArticleSection";

export default function ArticlePage() {
    return (
        <>
            <NavigationSection />
            <NewArticleSection />
            {/* <CategoryFilter /> */}
            {/* <ArticleSection /> */}
            <ArticleDetail />
            <RelatedArticles />
        </>
    )
}
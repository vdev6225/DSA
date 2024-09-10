import NavigationSection from "../NavigationSection/NavigationSection";
import ArticleCategories from "./ArticleCategories/ArticleCategories";
import ArticleDetail from "./ArticleDetail/ArticleDetail";
import NewArticlesSection from "./NewArticlesSection/NewArticlesSection";
import RelatedArticles from "./RelatedArticles/RelatedArticles";

export default function ArticlesPage() {
    return (
        <>
            <NavigationSection />
            <NewArticlesSection />
            <ArticleDetail />
            <RelatedArticles />
            {/* <ArticleCategories /> */}
        </>
    )
}
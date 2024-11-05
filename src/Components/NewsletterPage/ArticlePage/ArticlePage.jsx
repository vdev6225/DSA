import { useEffect } from "react";
import ArticleDetail from "../../MagazinePage/ArticlesPage/ArticleDetail/ArticleDetail";
import RelatedArticles from "../../MagazinePage/ArticlesPage/RelatedArticles/RelatedArticles";
import CategoryFilter from "../../MagazinePage/PodcastEventsPage/CategoryFilter/CategoryFilter";
import NavigationSection from "../NavigationSection/NavigationSection";
import ArticleSection from "./ArticleSection/ArticleSection";
import NewArticleSection from "./NewArticleSection/NewArticleSection";

export default function ArticlePage() {
    useEffect(()=>{
        window.scrollTo({ top: 0, behavior: 'smooth' });
    },[])
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
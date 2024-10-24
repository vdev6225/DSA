import NavigationSection from "../NavigationSection/NavigationSection";
// import ArticleCategories from "./ArticleCategories/ArticleCategories";
import ArticleDetail from "./ArticleDetail/ArticleDetail";
import NewArticlesSection from "./NewArticlesSection/NewArticlesSection";
import RelatedArticles from "./RelatedArticles/RelatedArticles";
import {useState, useEffect} from 'react';
import PostApiCall from "../../../Helpers/Api/PostApi";

export default function ArticlesPage() {

    const [data, setData] = useState([]);

    const getMagazinesArticleData = () => {
        PostApiCall.postRequest(
            {
            whereClause:""
            },
            "GetMagazineArticles"
          ).then((results) => {
            results.json().then((obj) => {
              if (results.status === 200 || results.status === 201) {
                setData(obj.data)
              } else {
              }
            });
          });
      }

      useEffect(()=>{
        getMagazinesArticleData();
      },[])

      console.log(data, "data")

      const activeArticle = data?.filter((item)=> item?.fld_status === "Active")
      const latestArticle = data?.filter((item)=> item?.fld_status === "NEW" || item?.fld_status === "Upcoming")



    return (
        <>
            <NavigationSection />
            <NewArticlesSection data = {latestArticle}/>
            <ArticleDetail data ={latestArticle} />
            <RelatedArticles data={activeArticle}/>
            {/* <ArticleCategories /> */}
        </>
    )
}
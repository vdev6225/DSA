import NavigationSection from "../NavigationSection/NavigationSection";
import ArticleCategories from "./ArticleCategories/ArticleCategories";
import NewArticlesSection from "./NewArticlesSection/NewArticlesSection";
import {useState, useEffect} from 'react';
import PostApiCall from "../../../Helpers/Api/PostApi";

export default function ArticlesPage() {

    const [data, setData] = useState([]);

    useEffect(()=>{
      window.scrollTo({ top: 0, behavior: 'smooth' });
  },[])
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


      const activeArticle = data?.filter((item)=> item?.fld_status === "Active")
      const latestArticle = data?.filter((item)=> item?.fld_status === "NEW" || item?.fld_status === "Upcoming")


    return (
        <>
            <NavigationSection />
            <NewArticlesSection data = {latestArticle}/>
            <ArticleCategories data={activeArticle} />
        </>
    )
}
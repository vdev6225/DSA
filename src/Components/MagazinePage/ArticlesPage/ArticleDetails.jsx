import NavigationSection from "../NavigationSection/NavigationSection";
import ArticleCategories from "./ArticleCategories/ArticleCategories";
import ArticleDetail from "./ArticleDetail/ArticleDetail";
import NewArticlesSection from "./NewArticlesSection/NewArticlesSection";
import RelatedArticles from "./RelatedArticles/RelatedArticles";
import {useState, useEffect} from 'react';
import PostApiCall from "../../../Helpers/Api/PostApi";
import { useParams } from "react-router-dom";

export default function ArticleDetails() {
    let params = useParams()

    const [data, setData] = useState([]);

    const getMagazinesArticleData = () => {
        PostApiCall.postRequest(
            {
            whereClause:``
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
      const currentArticle = data?.filter((item)=> item?.fld_status === "Active" && item?.fld_id == params.id)
      const latestArticle = data?.filter((item)=> item?.fld_status === "NEW" || item?.fld_status === "Upcoming")
    return (
        <>
            <NavigationSection />
            <NewArticlesSection data = {latestArticle}/>
            <ArticleDetail data ={currentArticle} />
            <RelatedArticles data={activeArticle}/>
        </>
    )
}
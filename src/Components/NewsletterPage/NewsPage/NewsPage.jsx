import BrandParttern from "../../Home/BrandParttern/BrandParttern";
import NewsletterSection from "../../Home/NewsletterSection/NewsletterSection";
import AboutNewsletterSection from "../AboutNewsletterSection/AboutNewsletterSection";
import NavigationSection from "../NavigationSection/NavigationSection";
import RegionSection from "./RegionSection/RegionSection";
import "./NewsPage.css";
import CategoriesSection from "./CategoriesSection/CategoriesSection";

import { useEffect, useState } from "react";
import PostApiCall from "../../../Helpers/Api/PostApi";

export default function NewsPage() {
    const [newsLetterPageData, setNewsLetterPageData] = useState([])

    const getNewsLetterPageData = () => {
        PostApiCall.postRequest({whereClause:""},"GetNews").then((results)=> {
          results.json().then((obj) => {
            if (results.status === 200 || results.status === 201) {
              setNewsLetterPageData(obj.data); 
          }else {
            // notification.error({
            //   message: `Notification error`,
            //   description: obj.data,
            // });
            }
          })
        })
      }


    useEffect(()=>{
        getNewsLetterPageData()
    },[])



    return (
        <div className="newsletter-news-page">
            <NavigationSection />
            <AboutNewsletterSection />
            <NewsletterSection />
            <BrandParttern />
            <RegionSection />
            <CategoriesSection data = {newsLetterPageData}/>
        </div>
    )
}
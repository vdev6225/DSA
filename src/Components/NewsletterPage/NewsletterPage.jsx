import { useEffect, useState } from "react";
import BrandParttern from "../Home/BrandParttern/BrandParttern";
import DegSecWivesSection from "../Home/DegSecWivesSection/DegSecWivesSection";
import NewsletterSection from "../Home/NewsletterSection/NewsletterSection";
import AboutNewsletterSection from "./AboutNewsletterSection/AboutNewsletterSection";
import DsaAlertsSection from "./DsaAlertsSection/DsaAlertsSection";
import DsaArticlesSection from "./DsaArticlesSection/DsaArticlesSection";
import NavigationSection from "./NavigationSection/NavigationSection";
import "./NewsletterPage.css";
import GetApiCall from "../../Helpers/Api/GetApi";

export default function NewsletterPage() {

    const [newsLetterPageData, setNewsLetterPageData] = useState([])

    const getNewsLetterPageData = () => {
        GetApiCall.getRequest("GetNews").then((results)=> {
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
    })

      console.log(newsLetterPageData,"newsLetterPageData")
  
    
    return (
        <div className="newsletter-page">
            <NavigationSection />
            <AboutNewsletterSection />
            <NewsletterSection />
            <BrandParttern />
            <DsaArticlesSection />
            <DsaAlertsSection />
            <DegSecWivesSection />
        </div>
    )
}
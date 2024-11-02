import DsaArticlesSection from "../NewsletterPage/DsaArticlesSection/DsaArticlesSection";
import MagazineDegSecWivesSection from "./MagazineDegSecWivesSection/MagazineDegSecWivesSection";
import "./MagazinePage.css";
import MagazinePageContentSection from "./MagazinePageContentSection/MagazinePageContentSection";
import MagazinePageTopSection from "./MagazinePageTopSection/MagazinePageTopSection";
import NavigationSection from "./NavigationSection/NavigationSection";
import DsaAuditSection from "./PodcastEventsPage/DsaAuditSection/DsaAuditSection";

import React, { useState, useEffect, useContext } from 'react';
import PostApiCall from "../../Helpers/Api/PostApi";
import { store } from "../../Helpers/Store/Store";

export default function MagazinePage() {

    const [podCastData, setPodCastData] = useState([]);
    const [magazinesEditionData, setMagazinesEditionData] = useState([]);
    const [articleData, setArticleData] = useState([]);    
    const {defSecEduData, setDefSecEduData} = useContext(store);

    const getMagazinesArticleData = () => {
        PostApiCall.postRequest(
            {
            whereClause:""
            },
            "GetMagazineArticles"
          ).then((results) => {
            results.json().then((obj) => {
              if (results.status === 200 || results.status === 201) {
                setArticleData(obj.data)
              } else {
              }
            });
          });
      }

    const getMagazinesEditionData = () => {
        PostApiCall.postRequest(
            {
            whereClause:""
            },
            "GetEditions"
          ).then((results) => {
            results.json().then((obj) => {
              if (results.status === 200 || results.status === 201) {
                setMagazinesEditionData(obj.data)
              } else {
              }
            });
          });
      }
  
      const getPodCastData = () => {
          PostApiCall.postRequest(
              {
                  whereClause:""
              },
              "GetPodcast"
          ).then((results)=> {
            results.json().then((obj) => {
              if (results.status === 200 || results.status === 201) {
                  setPodCastData(obj.data); 
            }else {
              // notification.error({
              //   message: `Notification error`,
              //   description: obj.data,
              // });
              }
            })
          })
        }

    const getDefSecEduData = () => {
        PostApiCall.postRequest(
            {
                whereClause:""
            },
            "GetDefSecEdu"
        ).then((results)=> {
          results.json().then((obj) => {
            if (results.status === 200 || results.status === 201) {
                setDefSecEduData(obj.data); 
          }else {
            // notification.error({
            //   message: `Notification error`,
            //   description: obj.data,
            // });
            }
          })
        })
      }

      const latestData = magazinesEditionData?.filter((item) => item?.fld_status === "new" || item?.fld_status === "Upcoming")
      const latestArticle = articleData?.filter((item)=> item?.fld_status === "NEW" || item?.fld_status === "Upcoming")
      const insignia = defSecEduData?.filter((item)=> item?.fld_type === "Insignia")
      const awards = defSecEduData?.filter((item)=> item?.fld_type === "Awards")
      const careers = defSecEduData?.filter((item)=> item?.fld_type === "Careers")

      useEffect(()=>{
        getMagazinesEditionData();
        getMagazinesArticleData();
        getPodCastData();
        getDefSecEduData();
      },[])

    return (
        <div className="magazine-page">
            <NavigationSection />
            <MagazinePageTopSection data = {latestData}/>
            <MagazinePageContentSection />
            <DsaArticlesSection data = {latestArticle}/>
            <DsaAuditSection />
            <MagazineDegSecWivesSection insignia = {insignia[0]} awards= {awards[0]} careers = {careers[0]}/>
        </div>
    )
}
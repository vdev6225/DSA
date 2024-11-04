// import GroupWebsites from "../../Home/GroupWebsites/GroupWebsites";
// import TestimonialSection from "../../Home/TestimonialSection/TestimonialSection";
import NavigationSection from "../NavigationSection/NavigationSection";
import EditionsAboutSection from "./EditionsAboutSection/EditionsAboutSection";
import EditionsCategories from "./EditionsCategories/EditionsCategories";

import React, { useState, useEffect } from 'react';
import PostApiCall from "../../../Helpers/Api/PostApi";

export default function EditionsPage() {

    const [magazinesEditionData, setMagazinesEditionData] = useState([]);

    const latestData = magazinesEditionData?.filter((item) => item?.fld_status === "new" || item?.fld_status === "Upcoming")
 
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

      useEffect(()=>{
        getMagazinesEditionData();
      },[])

    return (
        <>
            <NavigationSection />
            <EditionsAboutSection data ={latestData}/>
            <EditionsCategories data = {magazinesEditionData}/>
        </>
    )
}
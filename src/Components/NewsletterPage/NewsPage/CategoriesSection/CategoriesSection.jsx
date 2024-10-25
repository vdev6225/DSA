import { Link } from "react-router-dom";
import "./CategoriesSection.css";
// import NewsDetailSection from "../NewsDetailSection/NewsDetailSection";

import React, { useState, useEffect } from 'react';

export default function CategoriesSection({data}) {
    const [filteredData, setFilteredData] = useState(data);
    useEffect(() => {
        setFilteredData(data);
    }, [data]);

    const getFilteredData = (category) => {
        if(category === ""){
            setFilteredData(data);
        }else{
            const filtered = data.filter(item => item.fld_category === category);
            setFilteredData(filtered);
        }
    }

  

    return (
        <section className="section-spacing py-0 news-categories-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 section-spacing-y pt-0">
                        <div className="category-tab">
                            <p>
                                Categories
                            </p>
                            <ul>
                                <li onClick={() => getFilteredData('Defence')}>
                                    Defence
                                </li>
                                <li onClick={() => getFilteredData('Security')}>
                                    Security
                                </li>
                                <li onClick={() => getFilteredData('Worldwide Affairs')}>
                                    Worldwide Affairs
                                </li>
                                <li onClick={() => getFilteredData('Border Conflicts')}>
                                    Border Conflicts
                                </li>
                                <li onClick={() => getFilteredData('Emerging tech')}>
                                    Emerging tech
                                </li>
                                <li onClick={() => getFilteredData('')}>
                                    All
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <NewsDetailSection /> */}
              
                <div className="row">
                    <div className="col-12">
                        {
                            filteredData?.map((item,id)=>{
                                return  <div className="news-categorie-card" key={item.fld_id}>
                                <div className="image">
                                    <img src={item?.fld_image} className="img-fluid" alt={item?.fld_alt} />
                                </div>
                                <div className="content">
                                    <div>
                                        <h3>
                                            {item?.fld_title}
                                        </h3>
                                        <p dangerouslySetInnerHTML={{ __html: item?.fld_short_desc }} />
                                          
                                    </div>
                                    <div className="d-flex justify-content-between mt-4">
                                    <span>Date - {item?.fld_date || "Not available"}</span>
                                        <Link to={`/news/${item.fld_id}`}>
                                            Full news</Link>
                                    </div>
                                </div>
                            </div>
                            })
                        }
                    </div>
                </div>
            </div>
        </section >
    )
}
import { Collapse } from 'antd';
import NoImg from "../../../../assets/img/no-image.jpg";
import "./CareersPage.css";
import React, { useState, useEffect } from "react";

export default function CareersPage({ data }) {
    const [filteredData, setFilteredData] = useState(data);
    const [type, setType] = useState({ categoryType: "Defence Forces", badgeType: "" });

    const getFilteredData = (category) => {
        setType((prevState) => ({
            ...prevState,
            categoryType: category,
            badgeType: "", 
        }));
        
        const filteredCategory = data?.filter(item => item.fld_category === category);
        setFilteredData(filteredCategory);
    };

    const getBadgeFilteredData = (badgeType) => {
        setType((prevState) => ({
            ...prevState,
            badgeType: badgeType
        }));

        const filterBadges = data?.filter(item => 
            item.fld_badge_type === badgeType && 
            item.fld_category === type.categoryType
        );

        console.log(filterBadges, "filterBadges");
        setFilteredData(filterBadges);
    };

    useEffect(() => {
        const filteredCategory = data?.filter(item => item.fld_category === "Defence Forces");
        setFilteredData(filteredCategory);
    }, [data]);

    const items = filteredData.map((item, id) => ({
        key: id,
        label: (
            <div className='careers-card'>
                <div className="image">
                    <img src={item?.fld_image} className='img-fluid' alt={item?.fld_alt} />
                </div>
                <div className="content">
                    <h2>{item?.fld_heading}</h2>
                    <p dangerouslySetInnerHTML={{__html :item?.fld_short_desc }}/>
                </div>
            </div>
        ),
        children: <div className='bottom-content' dangerouslySetInnerHTML={{__html :item?.fld_long_desc }}/>,
    }));

    return (
        <section className="section-spacing pb-0 careers-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 section-spacing-y">
                        <div className="category-tab">
                            <p>Categories</p>
                            <ul>
                                <li onClick={() => getFilteredData("Defence Forces")}>
                                    Defence Forces
                                </li>
                                <li onClick={() => getFilteredData("Security forces")}>
                                    Security forces
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 mx-auto mb-4">
                        <div className="main-heading mt-4">
                            <h2 className='mb-4'>{type.categoryType ? type.categoryType : "Defence Forces"}</h2>
                        </div>
                        <div className="careers-category">
                            <ul>
                                <li onClick={() => getBadgeFilteredData("Indian Army")}>
                                    <p>Indian Army</p>
                                </li>
                                <li onClick={() => getBadgeFilteredData("Indian Navy")}>
                                    <p>Indian Navy</p>
                                </li>
                                <li onClick={() => getBadgeFilteredData("Indian Air Force")}>
                                    <p>Indian Air Force</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <Collapse accordion items={items} bordered={false} />
                    </div>
                </div>
            </div>
        </section>
    );
}

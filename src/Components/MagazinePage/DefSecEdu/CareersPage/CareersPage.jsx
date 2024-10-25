import { Collapse } from 'antd';
import NoImg from "../../../../assets/img/no-image.jpg";
import "./CareersPage.css";
// import { FaYoutube } from 'react-icons/fa';

import React, {useState, useEffect} from "react";

export default function CareersPage({data}) {

    const [filteredData, setFilteredData] = useState(data);
    const [badgeType, setBadgeType] = useState("")
  
    useEffect(() => {
        const defaultData = data.filter(item => item?.fld_badge_type === "Indian Army")
        setFilteredData(defaultData);
    }, [data]);


    const getFilteredData = (category) => {
            setBadgeType(category)
            const filtered = data.filter(item => item.fld_category === category);
            setFilteredData(filtered);
    }

    console.log(data,"cdata")

    const text = <div className='bottom-content'><p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p></div>;
    const items = [
        {
            key: '1',
            label: <div className='careers-card'>
                <div className="image">
                    <img src={NoImg} className='img-fluid' alt="" />
                </div>
                <div className="content">
                    <h2>
                        topic one
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>,
            children: <div className='bottom-content'>{text}</div>,
        },
        {
            key: '2',
            label: <div className='careers-card'>
                <div className="image">
                    <img src={NoImg} className='img-fluid' alt="" />
                </div>
                <div className="content">
                    <h2>
                        topic one
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>,
            children: <div className='bottom-content'>{text}</div>,
        },
        {
            key: '3',
            label: <div className='careers-card'>
                <div className="image">
                    <img src={NoImg} className='img-fluid' alt="" />
                </div>
                <div className="content">
                    <h2>
                        topic one
                    </h2>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                </div>
            </div>,
            children: <div className='bottom-content'>{text}</div>,
        },
    ];
    return (
        <section className="section-spacing pb-0 careers-page">
            <div className="container-flid">
                <div className="row">
                    <div className="col-12 section-spacing-y">
                        <div className="category-tab">
                            <p>
                                Categories
                            </p>
                            <ul>
                                <li onClick={()=> getFilteredData("Defence Forces")}>
                                    Defence Forces
                                </li >
                                <li onClick={()=> getFilteredData("Security forces")}>
                                    Security forces
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-8 mx-auto">
                        <div className="main-heading">
                            <h2>{badgeType ? badgeType : "Defence Forces"}</h2>
                        </div>
                        <div className="careers-category">
                            <ul>
                                <li>
                                    <p>Indian Army</p>
                                </li>
                                <li>
                                    <p>Indian Navy</p>
                                </li>
                                <li>
                                    <p>Indian Air Force</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12">
                        <Collapse accordion items={items} bordered={false} defaultActiveKey={['1']} />
                    </div>
                </div>
            </div>
        </section>
    )
}
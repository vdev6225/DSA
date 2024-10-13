import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';

import NoImg from "../../../assets/img/no-image.jpg";
import "./HomeBanner.css";
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

export default function HomeBanner({banners}) {
    console.log(banners,"banners")

    return (
        <section className="section-spacing home-banner">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="count-card">
                            <p className="count">
                                100+
                            </p>
                            <span className="content">
                                Our Client
                            </span>
                        </div>
                        <div className="count-card">
                            <p className="count">
                                2K+
                            </p>
                            <span className="content">
                                Testimonials
                            </span>
                        </div>
                        <div className="count-card">
                            <p className="count">
                                300+
                            </p>
                            <span className="content">
                                Magazines
                            </span>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="banner-section">
                            <Swiper pagination={{
                                clickable: true,
                            }} modules={[Pagination]} className="mySwiper">

                            {
                                banners.map((item,id)=> {return (<SwiperSlide>
                                    <img src={item?.fld_desktop_image} className='img-fluid' alt={item?.fld_alt} />
                                </SwiperSlide>)})
                            }
                             
                            </Swiper>
                            <div className="banner-btn">
                                <Link to="">Advertise with dsa <FaArrowRight /></Link>
                            </div>
                            <div className="bottom-three-circle">
                                <p>Army</p>
                                <p>Navy</p>
                                <p>Air Force</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
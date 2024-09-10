import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import NoImg from "../../../assets/img/no-image.jpg";
import "./NewsletterSection.css";
export default function NewsletterSection() {
    return (
        <section className="section-spacing bg-theme newsletter-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={false}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="newsletter-card">
                                    <div className="image">
                                        <img src={NoImg} className='img-fluid' alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>COVID- 19: THE RUTHLESS ENEMY</h5>
                                        <span className="date">
                                            June 8, 2020
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="newsletter-card">
                                    <div className="image">
                                        <img src={NoImg} className='img-fluid' alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>COVID- 19: THE RUTHLESS ENEMY</h5>
                                        <span className="date">
                                            June 8, 2020
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="newsletter-card">
                                    <div className="image">
                                        <img src={NoImg} className='img-fluid' alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>COVID- 19: THE RUTHLESS ENEMY</h5>
                                        <span className="date">
                                            June 8, 2020
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="newsletter-card">
                                    <div className="image">
                                        <img src={NoImg} className='img-fluid' alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>COVID- 19: THE RUTHLESS ENEMY</h5>
                                        <span className="date">
                                            June 8, 2020
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="newsletter-card">
                                    <div className="image">
                                        <img src={NoImg} className='img-fluid' alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>COVID- 19: THE RUTHLESS ENEMY</h5>
                                        <span className="date">
                                            June 8, 2020
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="newsletter-card">
                                    <div className="image">
                                        <img src={NoImg} className='img-fluid' alt="" />
                                    </div>
                                    <div className="content">
                                        <h5>COVID- 19: THE RUTHLESS ENEMY</h5>
                                        <span className="date">
                                            June 8, 2020
                                        </span>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
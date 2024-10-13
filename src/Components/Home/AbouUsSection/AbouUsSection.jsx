import { Link } from "react-router-dom";
import "./AbouUsSection.css";
import React, { useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';


// import required modules
import { FreeMode, Pagination, Thumbs } from 'swiper/modules';
import NoImg from "../../../assets/img/no-image.jpg";
export default function AbouUsSection({banners}) {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <section className="section-spacing pb-4 about-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 left-section">
                        <img alt={banners[0]?.fld_alt} src={banners[0]?.fld_desktop_image} className="img-fluid" />
                        <div className="content">
                            <h2 className="main-heading">about <span>us</span></h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea dolorum praesentium sint cum expedita minima iure laborum et a. Odio dignissimos modi quasi adipisci voluptatibus! Perferendis veritatis expedita veniam rem?</p>
                            <div className="learn-more-btn">
                                <Link to="">
                                    Learn About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 about-section-swiper">
                        <h2 className="main-heading text-center">
                            dsa <span>editions</span>
                        </h2>
                        <Swiper
                            style={{
                                // '--swiper-navigation-color': '#fff',
                                '--swiper-pagination-color': '#fff',
                            }}
                            spaceBetween={10}
                            navigation={false}
                            // thumbs={{ swiper: thumbsSwiper }}
                            // pagination={{
                            //     clickable:"true"
                            // }}
                            thumbs={{swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null}}
                            modules={[FreeMode, Pagination, Thumbs]}
                            className="mySwiper2"
                        >
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>
                        <Swiper
                            onSwiper={setThumbsSwiper}
                            spaceBetween={20}
                            slidesPerView={4}
                            freeMode={true}
                            watchSlidesProgress={true}
                            pagination={{
                                clickable:"true"
                            }}
                            modules={[FreeMode, Pagination, Thumbs]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-1.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-2.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-3.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-4.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-5.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-6.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-7.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-8.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-9.jpg" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img alt="" src="https://swiperjs.com/demos/images/nature-10.jpg" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
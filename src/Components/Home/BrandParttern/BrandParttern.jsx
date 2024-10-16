import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import "./BrandParttern.css";
export default function BrandParttern() {
    return (
        <section className="brand-parttern-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            slidesPerView={4}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={false}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <p>Brand Parttern</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>Brand Parttern</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>Brand Parttern</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>Brand Parttern</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>Brand Parttern</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
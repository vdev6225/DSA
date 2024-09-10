import NoImg from "../../../assets/img/no-image.jpg";
import "./DsaUpsSection.css";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
export default function DsaUpsSection() {
    return (
        <section className="section-spacing dsa-ups-section pt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        {/* <h2 className="main-heading text-center mb-4">
                            <span>DSA</span> UPS’s
                        </h2> */}
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={3}
                            freeMode={true}
                            loop={true}
                            pagination={{
                                clickable:true
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="dsa-card">
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            Fair Prices
                                        </p>
                                        <p>we stand for fair and affordable pricing policy we stand for fair and affordable pricing policy</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="dsa-card">
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            Fair Prices
                                        </p>
                                        <p>we stand for fair and affordable pricing policy we stand for fair and affordable pricing policy</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="dsa-card">
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            Fair Prices
                                        </p>
                                        <p>we stand for fair and affordable pricing policy we stand for fair and affordable pricing policy</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="dsa-card">
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <p className="name">
                                            Fair Prices
                                        </p>
                                        <p>we stand for fair and affordable pricing policy we stand for fair and affordable pricing policy</p>
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
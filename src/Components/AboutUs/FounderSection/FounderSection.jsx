import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import "./FounderSection.css";
export default function FounderSection() {
    return (
        <>
        <section className="section-spacing founder-section py-0 pe-lg-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 left-section">
                        <p>DSA History</p>
                        <h2 className="main-heading">
                        meet our <span>founder</span>
                        </h2>
                        <p>
                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, 
                        </p>
                        <Link to="">Journey So Far</Link>
                    </div>
                    <div className="col-lg-6 right-section pe-lg-0">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-theme-light comittesd-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            slidesPerView={2.2}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={false}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <p>Committed to Defence and Security Worldwide</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>Committed to Defence and Security Worldwide</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>Committed to Defence and Security Worldwide</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>Committed to Defence and Security Worldwide</p>
                            </SwiperSlide>
                            <SwiperSlide>
                                <p>Committed to Defence and Security Worldwide</p>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
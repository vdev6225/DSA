import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import "./RegionSection.css";
import NoImg from "../../../../assets/img/no-image.jpg";
export default function RegionSection() {
    return (
        <section className="section-spacing px-0 my-5 region-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="main-heading text-center">
                            <h2>
                                region
                            </h2>
                        </div>
                        <Swiper
                            slidesPerView={1.5}
                            spaceBetween={20}
                            freeMode={true}
                            pagination={false}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                    spaceBetween: 20,
                                },
                                768: {
                                    slidesPerView: 4,
                                    spaceBetween: 20,
                                },
                                1024: {
                                    slidesPerView: 4.5,
                                    spaceBetween: 30,
                                },
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={NoImg} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NoImg} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NoImg} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NoImg} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NoImg} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NoImg} className="img-fluid" alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NoImg} className="img-fluid" alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
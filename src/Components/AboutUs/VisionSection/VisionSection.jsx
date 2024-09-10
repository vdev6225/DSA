import NoImg from "../../../assets/img/no-image.jpg";
import "./VisionSection.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
export default function VisionSection() {
    return (
        <section className="section-spacing vision-section pt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 left-section">
                        <img src={NoImg} className="img-fluid w-100 mb-4" alt="" />
                        <h2 className="main-heading">
                            dsa <span>vision</span>
                        </h2>
                        <p>
                            defence and security alert magazine
                        </p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable
                        </p>
                    </div>
                    <div className="col-lg-6 right-section">
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={1}
                            freeMode={true}
                            loop={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <div className="magazine-card">
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <span>
                                            on June 8, 2020
                                        </span>
                                        <p>
                                            simply dummy text
                                            of the printing setting
                                        </p>
                                    </div>
                                </div>
                                <div className="magazine-card">
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <span>
                                            on June 8, 2020
                                        </span>
                                        <p>
                                            simply dummy text
                                            of the printing setting
                                        </p>
                                    </div>
                                </div>
                                <div className="magazine-card">
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <div className="content">
                                        <span>
                                            on June 8, 2020
                                        </span>
                                        <p>
                                            simply dummy text
                                            of the printing setting
                                        </p>
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
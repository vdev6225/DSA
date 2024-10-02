
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import NoImg from "../../../../assets/img/no-image.jpg";
import "./AttendanceSection.css";
export default function AttendanceSection() {
    return (
        <section className="section-spacing attendance-section">
            <div className="container-fuid">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <Swiper
                            spaceBetween={10}
                            slidesPerView={1}
                            // freeMode={true}
                            loop={true}
                            pagination={true}
                            modules={[Pagination]}
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
                        </Swiper>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="main-heading">
                            attendance
                        </h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
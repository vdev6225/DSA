import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules'
import NoImg from "../../../../assets/img/no-image.jpg";
import "./TopSliderSection.css";
export default function TopSliderSection() {
    return (
        <section className="section-spacing top-slider-section pt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7">
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={1}
                            // freeMode={true}
                            loop={true}
                            pagination={{
                                clickable: true
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src={NoImg} className='img-fluid' alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NoImg} className='img-fluid' alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NoImg} className='img-fluid' alt="" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src={NoImg} className='img-fluid' alt="" />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="col-lg-5 position-relative">
                        <img src={NoImg} className='img-fluid' alt="" />
                        <div className="content">
                            <h2>we are</h2>
                            <p>
                                introducing a section specially designed for DEF-SEC wives to share their personal experience and hobbies
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
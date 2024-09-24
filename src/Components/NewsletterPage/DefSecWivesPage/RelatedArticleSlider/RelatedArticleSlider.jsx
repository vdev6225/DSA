
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import NoImg from "../../../../assets/img/no-image.jpg";
import "./RelatedArticleSlider.css";
export default function RelatedArticleSlider() {
    return (
        <section className="sectionspacing-y related-article-slider pb-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="main-heading sections-pacing-x">
                            <h2>
                                Related <span>Articles</span>
                            </h2>
                        </div>
                        <Swiper
                            spaceBetween={0}
                            slidesPerView={3.5}
                            freeMode={true}
                            loop={true}
                            pagination={true}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper pb-5"
                        >
                            <SwiperSlide className="edition-card">
                                <div className="box">
                                    <div className="date">
                                        <p>on June 8, 2020</p>
                                        <p>Category of magazine</p>
                                    </div>
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <h2>Article topic </h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="edition-card">
                                <div className="box">
                                    <div className="date">
                                        <p>on June 8, 2020</p>
                                        <p>Category of magazine</p>
                                    </div>
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <h2>Article topic </h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="edition-card">
                                <div className="box">
                                    <div className="date">
                                        <p>on June 8, 2020</p>
                                        <p>Category of magazine</p>
                                    </div>
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <h2>Article topic </h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                    </p>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="edition-card">
                                <div className="box">
                                    <div className="date">
                                        <p>on June 8, 2020</p>
                                        <p>Category of magazine</p>
                                    </div>
                                    <div className="image">
                                        <img src={NoImg} className="img-fluid" alt="" />
                                    </div>
                                    <h2>Article topic </h2>
                                    <p>
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                                    </p>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
import NoImg from "../../../assets/img/no-image.jpg";
import "./AboutGallerySection.css";
export default function AboutGallerySection() {
    return (
        <section className="section-spacing mt-5 about-gallery-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 text-center">
                        <div className="top-heading">
                            <p>
                                Best attendance
                            </p>
                        </div>
                        <div className="main-heading">
                            <h2>
                                <span><i>dsa</i></span> galley
                            </h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                        </div>
                        <Swiper pagination={{
                            clickable: true,
                        }} modules={[Pagination]} className="mySwiper py-5">
                            <SwiperSlide className='row'>
                                <div className="col-lg-4">
                                    <img src={NoImg} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-4">
                                    <img src={NoImg} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-4">
                                    <img src={NoImg} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-8">
                                    <img src={NoImg} className='img-fluid' alt="" />
                                </div>
                                <div className="col-lg-4">
                                    <img src={NoImg} className='img-fluid' alt="" />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
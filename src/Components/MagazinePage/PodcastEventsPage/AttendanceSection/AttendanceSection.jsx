
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import "./AttendanceSection.css";
export default function AttendanceSection({eventdata}) {
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
                            {eventdata[0]?.fld_all_images ? JSON.parse(eventdata[0]?.fld_all_images)?.map((dat)=>{
                                return(
                            <SwiperSlide>
                                <img src={dat} className="img-fluid" alt="" />
                            </SwiperSlide>
                                )
                            }):""}
                        </Swiper>
                    </div>
                    <div className="col-lg-6">
                        <h2 className="main-heading">
                            {eventdata[0]?.fld_heading}
                        </h2>
                        <p>
                            {eventdata[0]?.fld_short_desc}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
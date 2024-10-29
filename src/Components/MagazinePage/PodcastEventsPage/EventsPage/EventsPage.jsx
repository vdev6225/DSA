import "./EventsPage.css";
import NoImg from "../../../../assets/img/no-image.jpg";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/grid';
import 'swiper/css/pagination';

// import required modules
import { FreeMode, Grid, Pagination } from 'swiper/modules';
export default function EventsPage({eventdata}) {
    return (
        <section className="section-spacing my-5 events-section">
            <div className="container-flid">
                <div className="row">
                    <div className="col-12">
                        <Swiper
                            spaceBetween={15}
                            slidesPerView={3.5}
                            freeMode={true}
                            loop={true}
                            pagination={{
                                clickable: true,
                            }}
                            grid={{
                                rows: 2,
                                fill: "row",
                            }}
                            modules={[FreeMode,Grid, Pagination]}
                            className="mySwiper pb-5"
                        >
                            {eventdata?.map((data)=>{
                                return(
                                    <SwiperSlide>
                                        <div className="event-card">
                                            {console.log(data)}
                                            <img src={data.fld_image} className="img-fluid" alt="" />
                                            <div className="content">
                                                <h4>
                                                    {data.fld_heading}
                                                </h4>
                                                <p>{data.fld_short_desc}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    )
}
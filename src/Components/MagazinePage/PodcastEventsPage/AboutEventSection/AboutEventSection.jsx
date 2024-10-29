import { Link } from "react-router-dom";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./AboutEventSection.css";
import moment from "moment";
export default function AboutEventSection({eventdata}) {
    return (
        <section className="section-spacing py-0 about-event-section">
            <div className="container-fuid">
                <div className="row">
                    <div className="col-lg-5 pe-lg-5">
                        <h2 className="main-heading">
                            About the event
                        </h2>
                        <p>
                        {eventdata[1]?.fld_short_desc}
                        </p>
                        <div className="d-flex gap-5">
                            <div className="box d-flex">
                                <p>
                                    Date-
                                </p>
                                <p>{moment(eventdata[1]?.fld_createdon).format('MMMM D, YYYY')}</p>
                            </div>
                            <div className="box d-flex">
                                <p>
                                    Time-
                                </p>
                                <p>{moment(eventdata[1]?.fld_createdon).format('HH:mm:ss')}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="right-section">
                            <div className="left-three-img">
                            {eventdata[1]?.fld_all_images ? JSON.parse(eventdata[1]?.fld_all_images)?.slice(0,3).map((dat)=>{
                                return(
                                    <img src={dat} className="img-fluid" alt="" />
                                )
                            }):""}
                            </div>
                            <div className="right-img">
                                <div className="text-lg-end">
                                    <Link to="" className="theme-btn">
                                        View our events</Link>
                                </div>
                                {eventdata[1]?.fld_all_images ? JSON.parse(eventdata[1]?.fld_all_images)?.slice(3,4).map((dat)=>{
                                return(
                                    <img src={dat} className="img-fluid" alt="" />
                                )
                            }):""}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
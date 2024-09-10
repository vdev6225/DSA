import { Link } from "react-router-dom";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./AboutEventSection.css";
export default function AboutEventSection() {
    return (
        <section className="section-spacing py-0 about-event-section">
            <div className="container-fuid">
                <div className="row">
                    <div className="col-lg-3">
                        <h2 className="main-heading">
                            About the event
                        </h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                        </p>
                        <div className="d-flex gap-5">
                            <div className="box">
                                <p>
                                    Date-
                                </p>
                                <p></p>
                            </div>
                            <div className="box">
                                <p>
                                    Time-
                                </p>
                                <p></p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9">
                        <div className="right-section">
                            <div className="left-three-img">
                                <img src={NoImg} className="img-fluid" alt="" />
                                <img src={NoImg} className="img-fluid" alt="" />
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <div className="right-img">
                                <div className="text-lg-end">
                                    <Link to="">
                                        View our events</Link>
                                </div>
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
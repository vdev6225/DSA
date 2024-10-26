
import Image1 from "../../../../assets/img/podcast/international-podcast-day-poster-template-design.jpg";
import Image2 from "../../../../assets/img/podcast/professional-microphone-sound-studio-with-purple-backdrop.jpg";
import Image3 from "../../../../assets/img/podcast/close-up-podcast-microphone.jpg";
import { Link } from "react-router-dom";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./DsaAuditSection.css";
export default function DsaAuditSection() {
    return (
        <section className="section-spacing dsa-audit-section">
            <div className="center-heading">
                <span>podcast & events</span>
                <h2>
                    expert inputs
                </h2>
            </div>
            <div className="container-fuid">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="main-heading">
                            <i>DSA</i> <span>Audit</span>
                        </h2>
                        <div className="position-relative">
                            <img src={Image3} className="img-fluid" alt="" />
                            <img src={Image2} className="img-fluid bottom-img" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={Image3} className="img-fluid" alt="" />
                        <div className="d-flex flex-column align-items-end">
                            <p className="name">
                                about events
                            </p>
                            <div className="d-flex gap-5 bottom-date">
                                <div className="box">
                                    <p>
                                        By- 
                                    </p>
                                    <p>DSA</p>
                                </div>
                                <div className="box">
                                    <p>
                                        Date-
                                    </p>
                                    <p>June 24,2025</p>
                                </div>
                                <div className="box">
                                    <p>
                                        Time-
                                    </p>
                                    <p>12:00</p>
                                </div>
                            </div>
                                <Link to="" className="magazine-btn theme-btn d-none">categories</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
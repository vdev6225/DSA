import { Link } from "react-router-dom";
import LeftImg from "../../../assets/img/contact-mission.png";
import "./ContactUsMissionSection.css"
export default function ContactUsMissionSection() {
    return (
        <section className="section-spacing mt-4 mt-lg-5 contact-us-mission-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-8 left-section">
                        <div className="d-flex align-items-center">
                            <div className="left-content">
                                <div className="main-heading">
                                    <h2>Imagine <span>if you could</span></h2>
                                </div>
                                <div>
                                    <div className="main-heading mt-4">
                                        <h4>DSA <span>usp 1</span></h4>
                                    </div>
                                    <b>defence and security alert magazine</b>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                </div>
                                <div>
                                    <div className="main-heading mt-4">
                                        <h4>DSA <span>usp 2</span></h4>
                                    </div>
                                    <b>defence and security alert magazine</b>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                </div>
                                <div>
                                    <div className="main-heading mt-4">
                                        <h4>DSA <span>usp 3</span></h4>
                                    </div>
                                    <b>defence and security alert magazine</b>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                                </div>
                            </div>
                            <div className="right-img">
                                <img src={LeftImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center right-section">
                        <div>
                            <div className="main-heading mb-3">
                                <h2>
                                    DSA <span>Mission</span>
                                </h2>
                            </div>
                            <b>Defence And Security Alert Magazine</b>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</p>
                            <div className="mt-4">
                                <Link to="" className="theme-btn">Learn about Us</Link>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
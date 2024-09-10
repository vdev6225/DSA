import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import NoVideo from "../../../assets/img/no-video.png";
import "./CurrentAffairs.css";
import { FaArrowRight, FaBullhorn } from "react-icons/fa";
export default function CurrentAffairs() {
    return (
        <section className="section-spacing current-affairs-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex main-headin-box justify-content-between mb-4">
                            <h2 className="main-heading">
                                Current <span>Affairs</span>
                            </h2>
                            <p className="text-lg-end">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure sequi tempora aliquid sapiente nisi. Itaque obcaecati cum temporibus similique
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="left-box">
                            <img src={NoImg} alt="" className="img-fluid" />
                            <div className="bottom-text">
                                <span>
                                    On June 8, 2024
                                </span>
                                <p>
                                    Simply Dummy text <br />
                                    Of The Printing Setting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="center-box">
                            <div className="top-section">
                                <img src={NoImg} className="img-fluid" alt="" />
                                <div className="content">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat ullam, iusto quaerat amet iusto quaerat amet?
                                    </p>
                                    <div className="btn-box">
                                        <Link to="">
                                            <FaBullhorn />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-vido-section">
                                <img src={NoVideo} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="right-box">
                            <div className="top-section">
                                <img src={NoImg} className="img-fluid" alt="" />
                                <div className="content">
                                    <span>On June 8, 2024</span>
                                    <p>
                                        It has survived not only five centuries, but also the leap into electronic typesetting
                                    </p>
                                </div>
                            </div>
                            <div className="view-all-btn">
                                <Link to="">View All Categories <FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
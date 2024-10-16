import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import Img from "../../../assets/img/img.png";
import NoVideo from "../../../assets/img/no-video.png";
import "./CurrentAffairs.css";
import { FaArrowRight, FaBullhorn, FaPlay } from "react-icons/fa";
import BgShape from "../../../assets/img/bg-shapes/2.png";
import Horn from "../../../assets/img/icons/Megaphone.png";
import { GoArrowRight } from "react-icons/go";
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
                                <span className="text-end">
                                    On <br />June 8, 2024
                                </span>
                                <p>
                                    Simply Dummy Text <br />
                                    Of The Printing Setting
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="center-box">
                            <div className="top-section">
                                <div className="btn-box">
                                    <div className="position-relative">
                                        <img src={BgShape} className="img-fluid bg-shape" alt="" />
                                        <Link to="">
                                        <img src={Horn} className="img-fluid" alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <img src={Img} className="img-fluid" alt="" />
                                <div className="content">
                                    <p>
                                    not simply random text. It has roots in a piece of classical Latin literature from 45 BC
                                    </p>
                                    <span>On June 8, 2024</span>

                                </div>
                            </div>
                            <div className="bottom-vido-section">
                                <img src={NoImg} className="img-fluid" alt="" />
                                <FaPlay/> 
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
                                    It has survived not only five centuries
                                    </p>
                                </div>
                            </div>
                            <div className="view-all-btn">
                                <Link to=""><span>View All <br /> Categories</span> <GoArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
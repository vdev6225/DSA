import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import "./PodcastSection.css";
export default function PodcastSection() {
    return (
        <section className="section-spacing px-0 podcast-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 left-section">
                        <div className="top-section">
                            <img src={NoImg} className="img-fluid" alt="" />
                            <div className="content">
                                <div className="text">
                                    <h2 className="main-heading">
                                        podcasts <FaArrowRight /><br />
                                        that will inspire <br /> you to grow
                                    </h2>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                    </p>
                                </div>
                                <div className="youtube-btn">
                                    <Link to="">youtube channel</Link>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-two-cards">
                            <div className="b-card">
                                <img src={NoImg} className="img-fluid" alt="" />
                                <span>on June 8, 2020</span>
                                <p>#Loremipsum</p>
                            </div>
                            <div className="b-card">
                                <img src={NoImg} className="img-fluid" alt="" />
                                <span>on June 8, 2020</span>
                                <p>#Loremipsum</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="right-card">
                            <img src={NoImg} alt="" className="img-fluid" />
                            <span>on June 8, 2020</span>
                            <p>simply dummy text of the printing setting</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
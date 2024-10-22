import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import "./ContactUsServiceSection.css";
export default function ContactUsServiceSection() {
    return (
        <section className="section-spacing contact-us-service-section mt-5">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="text-center">
                            <div className="main-heading">
                                <h2>DSA <span>services</span></h2>
                            </div>
                            <b>Imagine if you could</b>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority
                            </p>
                            <div>
                                <Link to="">Services</Link>
                            </div>
                        </div>
                        <div>
                            <div className="contact-service-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <div className="text">
                                        <p className="name">
                                            Subscribe
                                        </p>
                                        <span className="des">
                                            Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
                                        </span>
                                    </div>
                                    <div className="arrow-btn">
                                        <Link to="">
                                            <FaArrowRight />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
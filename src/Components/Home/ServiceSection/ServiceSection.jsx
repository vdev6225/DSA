import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import "./ServiceSection.css";
export default function ServiceSection() {
    return (
        <section className="section-spacing pt-0 service-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mb-5">
                        <div className="heading-box d-flex justify-content-between ">
                            <h2 className="main-heading mb-0">
                                our <span>services</span>
                            </h2>
                            <Link to="">
                                View All
                                <FaArrowRight />
                            </Link>
                        </div>
                    </div>
                    <div className="col-12 mb-5">
                        <div className="service-card">
                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <div className="content">
                                <div className="text">
                                    <p className="name">
                                    Subscription
                                    </p>
                                    <span className="des">
                                    Stay ahead with our in-depth defence and security worldwide insights! Subscribe now for exclusive online access to expert analysis and the latest updates. access to expert analysis and the latest updates.
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
                    <div className="col-12 mb-5">
                        <div className="service-card">
                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <div className="content">
                                <div className="text">
                                    <p className="name">
                                    Associate with DSA
                                    </p>
                                    <span className="des">
                                    Defence and Security Alert (DSA) is a premier publication committed to creating an intellectually stimulating platform for disseminating critical information on defence internal, external security and world affairs.
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
        </section>
    )
}
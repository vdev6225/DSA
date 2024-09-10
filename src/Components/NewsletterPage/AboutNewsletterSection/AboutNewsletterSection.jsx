import { Link } from "react-router-dom";
import "./AboutNewsletterSection.css";
import NoImg from "../../../assets/img/no-image.jpg";
export default function AboutNewsletterSection() {
    return (
        <section className="section-spacing about-newsletter-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 left-section">
                        <div className="image">
                            <img src={NoImg} className="img-fluid" alt="" />
                        </div>
                        <div className="row">
                            <div className="col-lg-4">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <div className="col-lg-8">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 right-section">
                        <div className="top-section">
                            <div className="main-heading">
                                <h1>
                                    DSA <span>Newsletters</span>
                                </h1>
                            </div>
                            <b>Stay updated with us</b>
                            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't</p>
                            <Link to="">View ALL NEWS</Link>
                        </div>
                        <div className="image">
                            <img src={NoImg} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
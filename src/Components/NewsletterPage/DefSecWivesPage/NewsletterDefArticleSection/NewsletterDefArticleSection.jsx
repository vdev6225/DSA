import "./NewsletterDefArticleSection.css";
import NoImg from "../../../../assets/img/no-image.jpg";
import { Link } from "react-router-dom";

export default function NewsletterDefArticleSection() {
    
    return (
        <section className="section-spacing py-0 newsletter-def-article-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mb-4">
                        <div className="main-heading">
                            <h2>
                                Personal <span>Experience</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="newsletter-artice-card">
                            <img src={NoImg} className="img-fluid" alt="" />
                            <h2>
                                Article topic
                            </h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </p>
                            <Link to="">Read Full Article</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="newsletter-artice-card">
                            <img src={NoImg} className="img-fluid" alt="" />
                            <h2>
                                Article topic
                            </h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </p>
                            <Link to="">Read Full Article</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="newsletter-artice-card">
                            <img src={NoImg} className="img-fluid" alt="" />
                            <h2>
                                Article topic
                            </h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </p>
                            <Link to="">Read Full Article</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="newsletter-artice-card">
                            <img src={NoImg} className="img-fluid" alt="" />
                            <h2>
                                Article topic
                            </h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </p>
                            <Link to="">Read Full Article</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="newsletter-artice-card">
                            <img src={NoImg} className="img-fluid" alt="" />
                            <h2>
                                Article topic
                            </h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </p>
                            <Link to="">Read Full Article</Link>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="newsletter-artice-card">
                            <img src={NoImg} className="img-fluid" alt="" />
                            <h2>
                                Article topic
                            </h2>
                            <p>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
                            </p>
                            <Link to="">Read Full Article</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
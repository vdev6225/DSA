import { Link } from "react-router-dom";
import "./DsaArticlesSection.css";
import NoImg from "../../../assets/img/no-image.jpg";
export default function DsaArticlesSection() {
    return (
        <section className="section-spacing dsa-articles-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="left-section">
                            <div className="top-section">
                                <div className="main-heading">
                                    <h2>
                                        DSA <span>Articles</span>
                                    </h2>
                                </div>
                                <b>About our Articles</b>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't</p>
                                <Link to="">Categories</Link>
                            </div>
                            <div className="bottom-section">
                                <h2>
                                    Self <br />
                                    acceptance.
                                </h2>
                                <span>
                                    on June 8, 2020
                                </span>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                                <Link to="">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="image">
                            <img src={NoImg} className="img-fluid" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
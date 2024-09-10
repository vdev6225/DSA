import { Link } from "react-router-dom";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./CategoriesSection.css";
import NewsDetailSection from "../NewsDetailSection/NewsDetailSection";
export default function CategoriesSection() {
    return (
        <section className="section-spacing py-0 news-categories-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 section-spacing-y pt-0">
                        <div className="category-tab">
                            <p>
                                Categories
                            </p>
                            <ul>
                                <li>
                                    Defence
                                </li>
                                <li>
                                    Security
                                </li>
                                <li>
                                    Worldwide Affairs
                                </li>
                                <li>
                                    Border Conflicts
                                </li>
                                <li>
                                    Emerging tech
                                </li>
                                <li>
                                    All
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <NewsDetailSection />
                <div className="row">
                    <div className="col-12">
                        <div className="news-categorie-card">
                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <div className="content">
                                <div>
                                    <h3>
                                        Heading of the news <br />
                                        Heading of the news
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <span>
                                        Date -
                                    </span>
                                    <Link to="">
                                        Full news</Link>
                                </div>
                            </div>
                        </div>
                        <div className="news-categorie-card">
                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <div className="content">
                                <div>
                                    <h3>
                                        Heading of the news <br />
                                        Heading of the news
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <span>
                                        Date -
                                    </span>
                                    <Link to="">
                                        Full news</Link>
                                </div>
                            </div>
                        </div>
                        <div className="news-categorie-card">
                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <div className="content">
                                <div>
                                    <h3>
                                        Heading of the news <br />
                                        Heading of the news
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <span>
                                        Date -
                                    </span>
                                    <Link to="">
                                        Full news</Link>
                                </div>
                            </div>
                        </div>
                        <div className="news-categorie-card">
                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <div className="content">
                                <div>
                                    <h3>
                                        Heading of the news <br />
                                        Heading of the news
                                    </h3>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                                    </p>
                                </div>
                                <div className="d-flex justify-content-between mt-4">
                                    <span>
                                        Date -
                                    </span>
                                    <Link to="">
                                        Full news</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}
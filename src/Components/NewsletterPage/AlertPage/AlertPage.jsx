import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import "./AlertPage.css";
import NavigationSection from "../NavigationSection/NavigationSection";
export default function AlertPage() {
    return (
        <>
            <NavigationSection />
            <section className="section-spacing alert-page py-0">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <div className="category-tab">
                                <p>
                                    Categories
                                </p>
                                <ul>
                                    <li>
                                        Year
                                    </li>
                                    <li>
                                        Month
                                    </li>
                                    <li>
                                        All
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <div className="alert-news-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <div>
                                        <h3>
                                            Heading of the news
                                        </h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                            <div className="alert-news-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <div>
                                        <h3>
                                            Heading of the news
                                        </h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                            <div className="alert-news-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <div>
                                        <h3>
                                            Heading of the news
                                        </h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
                            <div className="alert-news-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <div>
                                        <h3>
                                            Heading of the news
                                        </h3>
                                        <p>
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
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
            </section>
        </>
    )
}
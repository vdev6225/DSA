import { Link } from "react-router-dom";
import "./DsaArticlesSection.css";
import RightImg from "../../../assets/img/self.png";
import moment from 'moment';

export default function DsaArticlesSection({ data }) {
    
    const article = Array.isArray(data) && data.length > 0 ? data[0] : null;

    return (
        <section className="section-spacing dsa-articles-section mb-4">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="left-section">
                            <div className="top-section">
                                <div className="main-heading">
                                    <h2>
                                        <i>DSA</i> <span>Articles</span>
                                    </h2>
                                </div>
                                <b>About our Articles</b>
                                <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't</p>
                                <Link to="" className="theme-btn mt-4">Categories</Link>
                            </div>
                            <div className="bottom-section">
                                {article ? (
                                    <>
                                        <h2>{article.fld_heading}</h2>
                                        <span>
                                            {moment(article.fld_createdon).format('MMMM Do YYYY, h:mm a')}
                                        </span>
                                        <p>{article.fld_short_desc}</p>
                                        <Link to={article.fld_redirect_url} className="theme-btn mt-5">Read more</Link>
                                    </>
                                ) : (
                                    <p>No articles available.</p>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="image">
                            {article && (
                                <img src={article.fld_image} className="img-fluid" alt={article.fld_alt} />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

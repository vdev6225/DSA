import { Link } from "react-router-dom";
import "./DsaArticlesSection.css";
import RightImg from "../../../assets/img/self.png";
import moment from 'moment';

export default function DsaArticlesSection({data}) {

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
                                {/* {Note : heading design } */}
                                <h2>
                                   {data[0]?.fld_heading}
                                </h2>
                                <span>
                                    
                                    {moment(data[0]?.fld_createdon).format('MMMM Do YYYY, h:mm a')}
                                </span>
                                <p>{data[0]?.fld_short_desc}</p>
                                <Link to={data[0]?.fld_redirect_url} className="theme-btn mt-5">Read more</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <div className="image">
                            <img src={data[0]?.fld_image} className="img-fluid" alt={data[0]?.fld_alt} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
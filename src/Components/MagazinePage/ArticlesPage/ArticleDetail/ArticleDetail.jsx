import { FaFacebookF, FaInstagramSquare , FaLinkedinIn } from "react-icons/fa";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./ArticleDetail.css";
import { FaXTwitter } from "react-icons/fa6";
export default function ArticleDetail() {
    return (
        <section className="section-spacing pt-0 article-detail-section">
            <div className="container-fuid">
                <div className="row">
                    <div className="col-lg-4 pe-lg-5">
                        <div className="article-card">
                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <h2 className="name">
                                name of the author
                            </h2>
                        </div>
                        <div className="date">
                            <div className="box">
                                <p className="left">
                                    Date
                                </p>
                                <p>
                                    14 Sept, 2024
                                </p>
                            </div>
                            <div className="box">
                                <p className="left">
                                    read time
                                </p>
                                <p>
                                    2 mins
                                </p>
                            </div>
                            <div className="box">
                                <p className="left">
                                    Share
                                </p>
                                <ul>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagramSquare  /></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></li>
                                    <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8">
                        <b className="mb-4 d-block">
                            Imagine There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words  you could
                        </b>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { FaFacebookF, FaInstagramSquare , FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./NewsDetailSection.css";
export default function NewsDetailSection() {
    return (
        // <section className="section-spacing pt-4 news-detail-section">
        //     <div className="container-fluid">
        <div className="row section-spacing-y pt-4 news-detail-section">
            <div className="col-12 ">
                <img src={NoImg} className="img-fluid" alt="" />
            </div>
            <div className="col-lg-4">
                <h2>
                    Source
                </h2>
                <div className="box">
                    <b>Date</b>
                    <span>
                        14 Sept, 2024
                    </span>
                </div>
                <div className="box">
                    <b>
                        Share
                    </b>
                    <span>
                        <ul>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagramSquare  /></a></li>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></li>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                            <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                        </ul>
                    </span>
                </div>
            </div>
            <div className="col-lg-8">
                <h1>Imagine There are many variations of passages</h1>
                <p><b>Imagine There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words  you could</b></p>
                <p>
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form
                </p>
            </div>
        </div>
        //     </div>
        // </section>
    )
}
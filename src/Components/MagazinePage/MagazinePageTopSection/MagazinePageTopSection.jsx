import "./MagazinePageTopSection.css";
import CenterBanner from "../../../assets/img/magazine-mockup.png";
import LeftImg from "../../../assets/img/contact-mission.png";
import { Link } from "react-router-dom";
export default function MagazinePageTopSection() {
    return (
        <section className="section-spacing magazine-page-top-section">
            <div className="container position-relative">
                <div className="row">
                    <img src={LeftImg} className="img-fluid left-img" alt="" />
                    <div className="col-lg-7 mx-auto text-center">
                        <img src={CenterBanner} alt="" className="img-fluid center-banner" />
                    </div>
                    <div className="content-box">
                        <div className="main-heading">
                            <h2>
                                DSA <span>magazines</span>
                            </h2>
                        </div>
                        <b>
                            About our magazines
                        </b>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't
                        </p>
                        <Link to="">View our collections</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
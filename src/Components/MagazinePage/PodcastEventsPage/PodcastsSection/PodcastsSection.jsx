import { Link } from "react-router-dom";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./PodcastsSection.css";
export default function PodcastsSection() {
    return (
        <section className="section-spacing podcast-event-page-podcast-section">
            <div className="container-flid">
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center top-section">
                        <h2 className="main-heading">
                            podcasts <br />
                            that will inspire you <br />
                            <span>To grow</span>
                        </h2>
                        <p>
                            <b>Imagine if you could</b>
                        </p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                        </p>
                        <div className="text-enter">
                            <Link to="">
                                YouTube channel
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="row position-relative py-5 align-items-center justify-content-center center-section">
                    <div className="col-lg-4">
                        <img src={NoImg} className="img-fluid left-img" alt="" />
                    </div>
                    <div className="col-lg-5">
                        <img src={NoImg} className="img-fluid right-img" alt="" />
                    </div>
                    <div className="center-heading">
                        <h2>
                            expert opinions
                        </h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6 mx-auto text-center">
                        <p><b>About our experts</b></p>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
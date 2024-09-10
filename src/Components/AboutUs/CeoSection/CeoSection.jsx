import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import "./CeoSection.css";
export default function CeoSection() {
    return (
        <section className="section-spacing ceo-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-6 pe-lg-4">
                        <div className="ceo-card">
                            <img src={NoImg} className="img-fluid" alt="" />
                            <p className="name">
                                Manvendra <span>Singh</span>
                            </p>
                            <span>
                                Editor-in-Chief
                            </span>
                            <div className="text-end">
                                <Link to="" >Read The Blog</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-4">
                        <div className="ceo-card">
                            <img src={NoImg} className="img-fluid" alt="" />
                            <p className="name">
                                Pawan <span>agarwal</span>
                            </p>
                            <span>
                                Publisher & CEO
                            </span>
                            <div className="text-end">
                                <Link to="" >Read The Blog</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import "./MagazineDegSecWivesSection.css";

export default function MagazineDegSecWivesSection({ insignia, awards, careers }) {

    return (
        <section className="section-spacing magazine-deg-sec-wives-section">
            <div className="container-fluid mt-lg-4">
                <div className="row">
                    <div className="col-lg-6 pe-lg-5">
                        <div className="top-section">
                            <div className="image-section">
                                <div className="main-heading">
                                    <h2>
                                        Def-sec <span>edu</span>
                                    </h2>
                                </div>
                                <div className="image">
                                  <img src="https://manmeetawsbucket.s3.eu-north-1.amazonaws.com/Indian+Army+Flag.png" className="img-fluid" alt="" />
                                </div>
                                <div className="image">
                                <img src="https://manmeetawsbucket.s3.eu-north-1.amazonaws.com/Indian+Navy+Flag.png" className="img-fluid" alt="" />
                                </div>
                                <div className="image">
                                <img src="https://manmeetawsbucket.s3.eu-north-1.amazonaws.com/Airforce+Flag.png" className="img-fluid" alt="" />
                                </div>
                            </div>

                            <p>
                                Enhance your knowledge with our curated educational resources, designed for students, academics, and professionals pursuing careers in the defence field.
                            </p>
                        </div>
                        <div className="bottom-section">
                            <img src="https://manmeetawsbucket.s3.eu-north-1.amazonaws.com/Indian+Army.png" className="img-fluid" alt="" />
                            <div className="content">
                                <h3>
                                    learn with us
                                </h3>
                                <p>
                                    learn career opportunities with DSA learn career opportunities with DSA learn career opportunities with DSA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 ps-lg-5">
                        <div className="top-heading">
                            <h3>Stay updated with us</h3>
                            <p className="w-75 mx-auto">learn career opportunities with DSA learn career opportunities with DSA learn career opportunities with DSA</p>
                        </div>
                        <div className="personal-card">
                            <div className="image">
                                <img src={insignia?.fld_image} className="img-fluid" alt={insignia?.fld_alt} />
                            </div>
                            <div className="content">
                                <h4>
                                    {insignia?.fld_type}
                                </h4>
                                <p>{insignia?.fld_short_desc}</p>
                            </div>
                        </div>
                        <div className="personal-card">
                            <div className="image">
                                <img src={awards?.fld_image} className="img-fluid" alt={awards?.fld_alt} />
                            </div>
                            <div className="content">
                                <h4>
                                    {awards?.fld_type}
                                </h4>
                                <p>{awards?.fld_short_desc}</p>
                            </div>
                        </div>
                        <div className="personal-card">
                            <div className="image">
                                <img src={careers?.fld_image} className="img-fluid" alt={careers?.fld_alt} />
                            </div>
                            <div className="content">
                                <h4>
                                    {careers?.fld_type}
                                </h4>
                                <p>{careers?.fld_short_desc}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 text-center">
                        <Link to="/def-sec-edu" className="theme-btn">Know more</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
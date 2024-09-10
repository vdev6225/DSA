import NoImg from "../../../assets/img/no-image.jpg";
import "./DegSecWivesSection.css";
export default function DegSecWivesSection() {
    return (
        <section className="section-spacing deg-sec-wives-section">
            <div className="contain-fluid mt-lg-4">
                <div className="row">
                    <div className="col-lg-6">
                        <div className="top-section">
                            <div className="image-section">
                                <div className="main-heading">
                                    <h2>
                                        Def-sec <span>wives</span>
                                    </h2>
                                </div>
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                    <h5>
                                        creativity
                                    </h5>
                                </div>
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                    <h5>
                                        creativity
                                    </h5>
                                </div>
                            </div>
                            <p>
                                Enhance your knowledge with our curated educational resources, designed for students, academics, and professionals pursuing careers in the defence field.
                            </p>
                        </div>
                        <div className="bottom-section">
                            <img src={NoImg} className="img-fluid" alt="" />
                            <div className="content">
                                <h4>
                                    hobbies
                                </h4>
                                <p>
                                    learn career opportunities with DSA learn career opportunities with DSA learn career opportunities with DSA
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="top-heading">
                            <h3>PERSONAL EXPERIENCE</h3>
                            <p>learn career opportunities with DSA learn career opportunities with DSA learn career opportunities with DSA</p>
                        </div>
                        <div className="personal-card">
                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <div className="content">
                                <h4>
                                    PERSON 1
                                </h4>
                                <p>Enhance your knowledge with our curated educational resources, designed for students, </p>
                            </div>
                        </div>
                        <div className="personal-card">
                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <div className="content">
                                <h4>
                                    PERSON 1
                                </h4>
                                <p>Enhance your knowledge with our curated educational resources, designed for students, </p>
                            </div>
                        </div>
                        <div className="personal-card">
                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                            <div className="content">
                                <h4>
                                    PERSON 1
                                </h4>
                                <p>Enhance your knowledge with our curated educational resources, designed for students, </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
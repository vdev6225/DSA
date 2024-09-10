import "./BadgesSection.css";
import NoImg from "../../../../assets/img/no-image.jpg";
export default function BadgesSection() {
    return (
        <section className="section-spacing badges-section py-0">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 mx-auto">
                        <h4 className="heading">
                            All Badges of the Indian Army and Their Meaning
                        </h4>
                        <div className="badge-category">
                            <ul>
                                <li>
                                    <p>Commissioned</p>
                                </li>
                                <li>
                                    <p>Junior Commissioned</p>
                                </li>
                                <li>
                                    <p>Non-Commissioned</p>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-12">
                        <div className="badge-card-box">
                            <div className="top-section">
                                <div className="top-card">
                                    <h3>Badges</h3>
                                    <p>Images</p>
                                </div>
                                <div className="top-card">
                                    <h3>Badges</h3>
                                    <p>Names</p>
                                </div>
                                <div className="top-card">
                                    <h3>Ranks</h3>
                                    <p>Categorization</p>
                                </div>
                                <div className="top-card">
                                    <h3>Details</h3>
                                    <p>Badges</p>
                                </div>
                            </div>
                            <div className="badge-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div>
                                    <h4>
                                        Badge name
                                    </h4>
                                </div>
                                <div>
                                    <h4>
                                        Commissioned
                                    </h4>
                                </div>
                                <div>
                                    <p>The Indian Army is the land-based branch of the Indian Armed Forces. It is the largest component of the Indian Armed Forces with 1,237,117 active troops and 960,000 reserve troops. </p>
                                </div>
                            </div>
                            <div className="badge-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div>
                                    <h4>
                                        Badge name
                                    </h4>
                                </div>
                                <div>
                                    <h4>
                                        Commissioned
                                    </h4>
                                </div>
                                <div>
                                    <p>The Indian Army is the land-based branch of the Indian Armed Forces. It is the largest component of the Indian Armed Forces with 1,237,117 active troops and 960,000 reserve troops. </p>
                                </div>
                            </div>
                            <div className="badge-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div>
                                    <h4>
                                        Badge name
                                    </h4>
                                </div>
                                <div>
                                    <h4>
                                        Commissioned
                                    </h4>
                                </div>
                                <div>
                                    <p>The Indian Army is the land-based branch of the Indian Armed Forces. It is the largest component of the Indian Armed Forces with 1,237,117 active troops and 960,000 reserve troops. </p>
                                </div>
                            </div>
                            <div className="badge-card">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div>
                                    <h4>
                                        Badge name
                                    </h4>
                                </div>
                                <div>
                                    <h4>
                                        Commissioned
                                    </h4>
                                </div>
                                <div>
                                    <p>The Indian Army is the land-based branch of the Indian Armed Forces. It is the largest component of the Indian Armed Forces with 1,237,117 active troops and 960,000 reserve troops. </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
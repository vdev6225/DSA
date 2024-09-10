import NoImg from "../../../assets/img/no-image.jpg";
import "./DsaAlertsSection.css";
export default function DsaAlertsSection() {
    return (
        <section className="section-spacing dsa-alerts-section">
            <div className="container-fluid">
                <div className="roww">
                    <div className="col-12">
                        <div className="main-heading text-center">
                            <h2>
                                Dsa <span>Alerts</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="alerts-card">
                            <div className="content">
                                <div>
                                    <h4>
                                        topic one
                                    </h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <span>
                                    Date -
                                </span>
                            </div>

                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="alerts-card">
                            <div className="content">
                                <div>
                                    <h4>
                                        topic one
                                    </h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <span>
                                    Date -
                                </span>
                            </div>

                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="alerts-card">
                            <div className="content">
                                <div>
                                    <h4>
                                        topic one
                                    </h4>
                                    <p>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    </p>
                                </div>
                                <span>
                                    Date -
                                </span>
                            </div>

                            <div className="image">
                                <img src={NoImg} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
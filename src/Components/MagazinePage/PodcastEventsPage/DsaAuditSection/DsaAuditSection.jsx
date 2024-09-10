import NoImg from "../../../../assets/img/no-image.jpg";
import "./DsaAuditSection.css";
export default function DsaAuditSection() {
    return (
        <section className="section-spacing dsa-audit-section">
            <div className="center-heading">
                <span>podcast & events</span>
                <h2>
                    expert inputs
                </h2>
            </div>
            <div className="container-fuid">
                <div className="row">
                    <div className="col-lg-6">
                        <h2 className="main-heading">
                            DSA <span>Audit</span>
                        </h2>
                        <div className="position-relative">
                            <img src={NoImg} className="img-fluid" alt="" />
                            <img src={NoImg} className="img-fluid bottom-img" alt="" />
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <img src={NoImg} className="img-fluid" alt="" />
                        <div className="d-flex flex-column align-items-end">
                            <p className="name">
                                about events
                            </p>
                            <div className="d-flex gap-5">
                                <div className="box">
                                    <p>
                                        By-
                                    </p>
                                    <p></p>
                                </div>
                                <div className="box">
                                    <p>
                                        Date-
                                    </p>
                                    <p></p>
                                </div>
                                <div className="box">
                                    <p>
                                        Time-
                                    </p>
                                    <p></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
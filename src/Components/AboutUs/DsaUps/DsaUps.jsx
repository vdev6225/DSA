import './DsaUps.css';
import NoImg from "../../../assets/img/no-image.jpg";
export default function DsaUps() {
    return (
        <section className="section-spacing about-dsa-section pt-0">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 mb-3">
                        <h2 className="main-heading text-center mb-4">
                            <span>DSA</span> UPS’s
                        </h2>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="dsa-card">
                            <div className="count">
                                01
                            </div>
                            <div className="box">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                        Fair Prices
                                    </p>
                                    <p>we stand for fair and affordable pricing policy we stand for fair and affordable pricing policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="dsa-card">
                            <div className="count">
                                02
                            </div>
                            <div className="box">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                        Fair Prices
                                    </p>
                                    <p>we stand for fair and affordable pricing policy we stand for fair and affordable pricing policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="dsa-card">
                            <div className="count">
                                03
                            </div>
                            <div className="box">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                        Fair Prices
                                    </p>
                                    <p>we stand for fair and affordable pricing policy we stand for fair and affordable pricing policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3">
                        <div className="dsa-card last-dsa-card">
                            <div className="count">
                                04
                            </div>
                            <div className="box">
                                <div className="image">
                                    <img src={NoImg} className="img-fluid" alt="" />
                                </div>
                                <div className="content">
                                    <p className="name">
                                        Fair Prices
                                    </p>
                                    <p>we stand for fair and affordable pricing policy we stand for fair and affordable pricing policy</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}


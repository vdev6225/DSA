import "./TopSection.css";
import NoImg from "../../../../assets/img/no-image.jpg";
export default function TopSection() {
    return (
        <section className="section-spacing top-section-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-5">
                        <div className="left-box">
                            {/* <img src={NoImg} className="img-fluid" alt="" /> */}
                            <div className="content">
                                <h2 className="main-heading">
                                    DEF- SEC EDU
                                </h2>
                                <p>
                                    Why we are starting this and motive behind this
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-7">
                        <img src="https://manmeetawsbucket.s3.eu-north-1.amazonaws.com/Indian+Army.png" className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
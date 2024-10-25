import NoImg from "../../../assets/img/Frame1.png";
import "./JourneySection.css";
export default function JourneySection() {
    return (
        // <section className="section-spacing journey-section">
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12 d-flex position-relative">
                        {/* <h2 className="main-heading">
                            Journey <span>so far</span>
                        </h2> */}
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
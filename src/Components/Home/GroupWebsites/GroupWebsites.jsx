import "./GroupWebsites.css";
import NoImg from "../../../assets/img/no-image.jpg";
export default function GroupWebsites() {
    return (
        <section className="section-spacing pt-0 group-company-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2 className="main-heading text-center">
                            <span>Group</span> websites
                        </h2>
                    </div>
                    <div className="col-12 company-card">
                        <img src={NoImg} className="img-fluid" alt="" />
                        <img src={NoImg} className="img-fluid" alt="" />
                        <img src={NoImg} className="img-fluid" alt="" />
                        <img src={NoImg} className="img-fluid" alt="" />
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
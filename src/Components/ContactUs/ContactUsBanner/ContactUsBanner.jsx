import NoImg from "../../../assets/img/no-image.jpg";
import "./ContactUsBanner.css";
export default function ContactUsBanner() {
    return (
        <>
            <section className="section-spacing px-lg-4 contact-us-page-banner">
                <img src={NoImg} className="img-fluid" alt="" />
                <div className="container-fluid">
                    <div className="row h-100">
                        <div className="col-12">
                            <div className="d-flex h-100 flex-column justify-content-between">

                                <div className="d-flex justify-content-between">
                                    <p>
                                        Journey so far
                                    </p>
                                    <p>
                                        Journey so far
                                    </p>
                                </div>
                                <div className="text-center">
                                    <div className="main-heading">
                                        <h1>Magazine <br /><span>DSA</span></h1>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-between">
                                    <p>
                                        Journey so far
                                    </p>
                                    <p>
                                        Journey so far
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-spacing  contact-us-page-banner-bottom-text">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12">
                            <h2>
                                A defence and security alert magazine
                            </h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
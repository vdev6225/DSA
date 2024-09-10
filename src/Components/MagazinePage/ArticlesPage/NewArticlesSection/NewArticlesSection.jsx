import NoImg from "../../../../assets/img/no-image.jpg";
import "./NewArticlesSection.css";
export default function NewArticlesSection() {
    return (
        <section className="section-spacing pt-0 new-articles-section">
            <div className="container-fuid">
                <div className="row">
                    <div className="col-lg-4">
                        <h2 className="main-heading">
                            new article topic
                        </h2>
                    </div>
                    <div className="col-lg-8">
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
                        </p>
                        <div className="d-flex gap-5 text-capitalize mt-4">


                            <b>
                                published by
                            </b>
                            <b>
                                Date
                            </b>
                            <b>Time</b>
                        </div>
                    </div>
                    <div className="col-12">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
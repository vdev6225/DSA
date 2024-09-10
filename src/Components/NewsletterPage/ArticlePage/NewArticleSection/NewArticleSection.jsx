import "./NewArticleSection.css";
import NoImg from "../../../../assets/img/no-image.jpg";
export default function NewArticleSection() {
    return (
        <section className="section-spacing pt-0 new-article-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-4">
                        <h1>
                            new article topic
                        </h1>
                    </div>
                    <div className="col-lg-8">
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
                        </p>
                        <div className="d-flex">
                            <div className="box">
                                <b>Published By</b>
                                <span>

                                </span>
                            </div>
                            <div className="box">
                                <b>Date</b>
                                <span>

                                </span>
                            </div>
                            <div className="box">
                                <b>Time</b>
                                <span>

                                </span>
                            </div>
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
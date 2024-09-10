import "./EditionsAboutSection.css";
import NoImg from "../../../../assets/img/no-image.jpg";
export default function EditionsAboutSection() {
    return (
        <section className="section-spacing pt-4 editions-about-section">
            <div className="container-fuid">
                <div className="row">
                    <div className="col-lg-7">
                        <h2 className="main-heading">
                            About upcoming
                            magazine
                        </h2>
                        <p>
                            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightlyThere are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly
                        </p>

                    </div>
                    <div className="col-lg-5">
                        <img src={NoImg} className="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}
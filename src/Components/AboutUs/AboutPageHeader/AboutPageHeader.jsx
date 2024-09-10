import "./AboutPageHeader.css";
import NoImg from "../../../assets/img/no-image.jpg";
export default function AboutPageHeader() {
    return (
        <section className="about-page-header">
            <div className="content">
            <h1>about</h1>
            <img src={NoImg} className="img-fluid" alt="" />
            </div>
        </section>
    )
}
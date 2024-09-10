import NoImg from "../../../assets/img/no-image.jpg";
import "./AddBanner.css";
export default function AddBanner() {
    return(
        <section className="add-banner">
            <img src={NoImg} className="img-fluid" alt="" />
        </section>
    )
}
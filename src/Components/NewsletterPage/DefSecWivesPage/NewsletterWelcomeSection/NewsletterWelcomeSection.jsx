import { LuMedal } from "react-icons/lu";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./NewsletterWelcomeSection.css";
import { FaTrophy } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
export default function NewsletterWelcomeSection() {
    return (
        <section className="section-spacing newsletter-welcome-section position-relative">
            <img src={NoImg} className="img-fluid" alt="" />
            <div className="container-fluid position-relative">
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center">
                        <h2>Welcome</h2>
                        <b>
                            Description of why we are educating on this topic and what they information the students or any person can grab here. Description of why we are educating on this topic and what they information the students or any person can grab here.
                        </b>
                        <p>
                            <i>
                                it’s all about defence and Securuty
                            </i>
                        </p>
                    </div>
                    <div className="col-lg-7 mx-auto">
                        <div className="newsletter-welcome-box">
                            <div className="newsletter-welcome-card active">
                                <h3>Personal Experience</h3>
                            </div>
                            <div className="newsletter-welcome-card">
                                <h3>Hobbies &
                                    Creativity</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
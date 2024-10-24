import { HiOutlineChevronDoubleLeft, HiOutlineChevronDoubleRight } from "react-icons/hi";
import "./ContactUsForm.css";
export default function ContactUsForm() {
    return (
        <>
            <section className="section-spacing mb-4 contact-us-form">
                <div className="container">
                    <div className="row justify-content-lg-between">
                        <div className="col-12 text-center mb-4">
                            <div className="main-heading">
                                <h2>Stay updated <span>with us</span></h2>
                            </div>
                            <b>contact VIA form below & we’ll get back to you</b>
                        </div>
                        <div className="col-lg-3 contact-links">
                            <div className="box">
                                <p>
                                    email
                                </p>
                                <a href="mailto:">asd@gmail.com</a>
                            </div>
                            <div className="box">
                                <p>
                                    phone
                                </p>
                                <a href="tel:+">1234567890</a>
                            </div>
                            <div className="box">
                                <p>
                                    Address
                                </p>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    contact vIA form
                                </a>
                            </div>
                            <div className="box">
                                <p>
                                    Social
                                </p>
                                <a href="" target="_blank" rel="noopener noreferrer">
                                    contact vIA form
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 conact-form">
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Phone" />
                            <input type="email" placeholder="Email" />
                            <textarea placeholder="TYPE YOUR CONCERN" rows="10"></textarea>
                            <div>
                                <button type="submit"> Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-spacing contact-call-section">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="d-flex align-items-center gap-3 fs-3">
                                <span><HiOutlineChevronDoubleLeft /> </span>
                                <a href="tel:+">
                                    Schedule a call
                                </a>
                                <span><HiOutlineChevronDoubleRight /></span>
                            </div>
                        </div>
                        <div className="col-lg-6 text-lg-end">
                            <p>
                                Connect with us between <br /> 11:00 am-5:00 Pm (Mon-Sat)
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
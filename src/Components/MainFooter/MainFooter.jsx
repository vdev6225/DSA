import { FaFacebookF, FaInstagramSquare, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaMapLocationDot, FaXTwitter } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";

import TopImg from "../../assets/img/footer-bg.png";
import Logo from "../../assets/img/logo/dsa-white-logo.png";
import "./MainFooter.css";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";
export default function MainFooter() {
    return (
        <>
            <section className="section-spacing pt-0 main-footer">
                <img src={TopImg} className="img-fluid top-img" alt="" />
                <div className="container-fluid position-relative">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src={Logo} className="img-fluid" alt="" />
                            <p>From the house of <b>OCEAN MEDIA PRIVATE LIMITED</b></p>
                            <p className="my-2">(A Group company of Prabhat Prakashan Pvt. Ltd.) An ISO 9001:2015 Certified Company</p>
                            <b>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable</b>
                            <ul className="sm-links">
                                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagramSquare /></a></li>
                                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></li>
                                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                            </ul>
                        </div>
                        <div className="col-lg-8 footer-links">
                            <div className="row">
                                <div className="col-lg-6 ps-lg-4">
                                    <h4>
                                        Contact Info
                                    </h4>
                                    <ul>
                                        <li>
                                            <div className="icon">
                                                <FaPhoneVolume />
                                            </div>
                                            <div>
                                                <p>Loading for communication</p>
                                                <a href="tel:+91-11-41634999">+91-11-41634999</a>,<br /><a href="tel:+91-11-23268999"> 23268999, </a>
                                                <a href="tel:+919958382999">9958382999</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <IoMdMail />
                                            </div>
                                            <div>
                                                <p>Write us Email</p>
                                                <a href="mailto:info@dsalert.org">info@dsalert.org</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="icon">
                                                <FaMapLocationDot />
                                            </div>
                                            <div>
                                                <p>Visit Our location</p>
                                                <a href="http://" target="_blank" rel="noopener noreferrer"><b>prabhat prakashan tower</b><br />
                                                    4/19, Asaf ali road, new Delhi, India</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3">
                                    <h4>
                                        Our Services
                                    </h4>
                                    <ul>
                                        <li>
                                            <Link to="">
                                                Privacy policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Terms and conditions
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Journey so far
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Gallery
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Disclaimer
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Credits
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-lg-3">
                                    <h4>
                                        Quick Links
                                    </h4>
                                    <ul>
                                        <li>
                                            <Link to="">
                                                Privacy policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                GDPR Policy
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Terms Of Service
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Career With DSA
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                FAQ's
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to="">
                                                Subscribe
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-spacing py-3 copyright-section">
                <div className="container-fluid position-relative">
                    <div className="row">
                        <div className="col-lg-6">
                            Copyright © 2020 DSA - Defence and Security Alert Magazine
                        </div>
                        <div className="col-lg-6">
                            Brought by <a href="https://www.oceanmedia.in/" target="_blank" rel="noopener noreferrer">Ocean Media Pvt. Ltd.</a> ( A Group company of Prabhat Prakashan Pvt. Ltd.)
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
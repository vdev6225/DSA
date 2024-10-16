import MainNavbar from "../../MainNavbar/MainNavbar";
import "./Header.css";
import Flag from "../../../assets/img/indian-flag.jpg";
import { FaFacebookF, FaInstagramSquare , FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
export default function Header() {
    return (
        <>
            <header className=" home-header">
                <MainNavbar />
                <div className="container-fluid">
                    <div className="content px-lg-3">
                        <div className="left-content">
                            <div className="d-flex align-items-end">
                                <p className="name">
                                    Defence and</p>
                                <h1>Commited to Defence <br /> and Security Worlwide</h1>
                            </div>
                            <div className="d-flex align-items-center">
                                <div className="logo">
                                    <img src={Flag} className="img-fluid" alt="Indian Flag" />
                                </div>
                                <p className="name">
                                    Security Alert
                                </p>
                            </div>
                        </div>
                        <div className="right-sm-links">
                            <ul>
                                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaInstagramSquare  /></a></li>
                                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a></li>
                                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaXTwitter /></a></li>
                                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a></li>
                                <li><a href="http://" target="_blank" rel="noopener noreferrer"><FaYoutube /></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
import { Link } from "react-router-dom";
import NoImg from "../../../assets/img/no-image.jpg";
import NoVideo from "../../../assets/img/no-video.png";
import "./CurrentAffairs.css";
import { FaArrowRight, FaBullhorn } from "react-icons/fa";
export default function CurrentAffairs({banners}) {
    console.log(banners, "current affairs")
    return (
        <section className="section-spacing current-affairs-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="d-flex main-headin-box justify-content-between mb-4">
                            <h2 className="main-heading">
                                Current <span>Affairs</span>
                            </h2>
                            <p className="text-lg-end">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo iure sequi tempora aliquid sapiente nisi. Itaque obcaecati cum temporibus similique
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="left-box">
                            <img src={banners[0]?.fld_image} alt={banners[0]?.fld_alt} className="img-fluid" />
                            <div className="bottom-text">
                                <span>
                                   {banners[0]?.fld_createdon}
                                </span>
                                <p>
                                    {banners[0]?.fld_short_desc}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <div className="center-box">
                            <div className="top-section">
                                <img src={banners[1]?.fld_image} className="img-fluid" alt={banners[1]?.fld_alt} />
                                <div className="content">
                                    <p>
                                    {banners[1]?.fld_short_desc}
                                    </p>
                                    <div className="btn-box">
                                        <Link to="">
                                            <FaBullhorn />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="bottom-vido-section">
                                <img src={banners[2]?.fld_image} className="img-fluid" alt={banners[2]?.fld_alt}/>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <div className="right-box">
                            <div className="top-section">
                                <img src={banners[3]?.fld_image} className="img-fluid" alt={banners[3]?.fld_alt} />
                                <div className="content">
                                    <span>{banners[3]?.fld_createdon}</span>
                                    <p>
                                        {banners[1]?.fld_short_desc}
                                    </p>
                                </div>
                            </div>
                            <div className="view-all-btn">
                                <Link to="">View All Categories <FaArrowRight /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
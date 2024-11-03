import "./RelatedArticles.css";
import NoImg from "../../../../assets/img/no-image.jpg";
import { Link } from "react-router-dom";
export default function RelatedArticles({ data }) {
    console.log(data, "article")
    return (
        <section className="section-spacing pt-0 related-articles-section">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <h2 className="main-heading">
                            Related Articles
                        </h2>
                    </div>
                    {
                        data?.map((item, id) => {
                            return (<div className="col-lg-4 edition-card" key={id}>
                                <div className="box">
                                    <div className="date">
                                        {/* //cannot find proper key */}
                                        <p>on{item?.date}</p>
                                        <p>{item?.fld_heading}</p>
                                    </div>
                                    <div className="image">
                                        <img src={item?.fld_image} className="img-fluid" alt={item?.fld_alt} />
                                    </div>
                                    <h2> {item?.fld_short_desc}</h2>
                                    {/* not sure if its the correct key */}
                                    {/* <p>
                                        {item?.fld_long_desc}
                                    </p> */}
                                </div>
                            </div>)
                        })
                    }
                    <div className="col-12 text-center mt-5">
                        <Link to="" className="theme-btn">Back to Categories</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
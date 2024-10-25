import "./EditionsAboutSection.css";
import NoImg from "../../../../assets/img/no-image.jpg";


export default function EditionsAboutSection({ data }) {


    return (
        <section className="section-spacing pt-4 editions-about-section">
            <div className="container">
                {data?.map((item, id) => {
                    return (
                        <div className="row" key={id}>
                            <div className="col-lg-7 pe-lg-4">
                                <h2 className="main-heading">
                                    {item?.fld_heading}
                                </h2>
                                <p>
                                    {item?.fld_short_desc}
                                </p>

                            </div>
                            <div className="col-lg-5 text-end ps-lg-4">
                                <img src={item?.fld_image} className="img-fluid" alt={item?.fld_alt} />
                            </div>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}
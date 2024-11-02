import NoImg from "../../../assets/img/no-image.jpg";
import "./DsaAlertsSection.css";
export default function DsaAlertsSection({newsLetterAlertData}) {

    const topAlerts = newsLetterAlertData?.slice(0, 3);

    return (
        <section className="section-spacing dsa-alerts-section">
            <div className="container-fluid">
                <div className="roww">
                    <div className="col-12">
                        <div className="main-heading text-center">
                            <h2>
                                Dsa <span>Alerts</span>
                            </h2>
                        </div>
                    </div>
                    <div className="col-12">
                        {
                            topAlerts?.map((item, id)=> {
                                return(<div className="alerts-card" key={id}>
                                    <div className="content">
                                        <div>
                                            <h4>
                                              {item?.fld_title}
                                            </h4>
                                            <p dangerouslySetInnerHTML={{ __html: item?.fld_short_desc }} /> 
                                                
                                        </div>
                                        <span>
                                        Date -  {item?.fld_date || "Not available"}
                                        </span>
                                    </div>
        
                                    <div className="image">
                                        <img src={item?.fld_image} className="img-fluid" alt={item?.fld_alt} />
                                    </div>
                                </div>)
                            })
                        }
                       
                    </div>
                </div>
            </div>
        </section>
    )
}
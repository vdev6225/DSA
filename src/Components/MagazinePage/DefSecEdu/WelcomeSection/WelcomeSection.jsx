import { LuMedal } from "react-icons/lu";
import NoImg from "../../../../assets/img/no-image.jpg";
import "./WelcomeSection.css";
import { FaTrophy } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";
import { useContext } from "react";
import { store } from "../../../../Helpers/Store/Store";
export default function WelcomeSection() {
    const {defSecEduType,setDefSecEduType,defSecEduData, setDefSecEduData,defSecEduFilteredData, setDefSecEduFilteredData} = useContext(store)
    const getFilteredData = (category) => {
        if(category === ""){
            setDefSecEduFilteredData(defSecEduData);
        }else{
            const filtered = defSecEduData.filter(item => item.fld_type === category);
            setDefSecEduFilteredData(filtered);
        }
    }
    return (
        <section className="section-spacing mb-lg-5 welcome-section position-relative">
            {/* <img src={NoImg} className="img-fluid" alt="" /> */}
            <div className="bg"></div>
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
                        <div className="welcome-card-box">
                            <div className={defSecEduType === "Insignia" ? "welcome-card active" : "welcome-card"} onClick={()=>{setDefSecEduType("Insignia")
                                getFilteredData("Insignia")
                            }}>
                                <LuMedal />

                                <h3>Insignia</h3>
                            </div>
                            <div className={defSecEduType === "Awards" ? "welcome-card active" : "welcome-card"} onClick={()=>{setDefSecEduType("Awards")
                                getFilteredData("Awards")
                            }}>
                                <FaTrophy />
                                <h3>Awards</h3>
                            </div>
                            <div className={defSecEduType === "Careers" ? "welcome-card active" : "welcome-card"} onClick={()=>{setDefSecEduType("Careers")
                                getFilteredData("Careers")
                            }}>
                                <MdCastForEducation />
                                <h3>Careers</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
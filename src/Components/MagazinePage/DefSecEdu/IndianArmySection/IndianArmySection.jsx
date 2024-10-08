import LeftBanner from "../../../../assets/img/left-banner.png";
import "./IndianArmySection.css";
import Flag from "../../../../assets/img/flag.png";
export default function IndianArmySection() {
    return (
        <>
            <section className="section-spacing pt-0 pb-4 category-filter">
                <div className="container-flid">
                    <div className="row">
                        <div className="col-12">
                            <div className="category-tab">
                                <p>
                                    Categories
                                </p>
                                <ul>
                                    <li>
                                        Indian Army
                                    </li>
                                    <li>
                                        Indian Navy
                                    </li>
                                    <li>Indian Air Force</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section-spacing indian-army-section pt-0">
                <div className="container-flid">
                    <div className="row">
                        <div className="col-12">
                            <div className="main-heading text-center pb-4 pb-lg-5">
                                <h2>
                                    Indian <span>Army</span>
                                </h2>
                            </div>
                        </div>
                        <div className="col-lg-5 left-section">
                            <div className="image">
                                <img src={LeftBanner} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 right-section">
                            <b>Seva Asmakam Dharma</b>
                            <div className="d-lg-flex gap-lg-4">
                                <img src={Flag} className="img-fluid" alt="" />
                                <p>
                                    The Indian Army is the land-based branch of the Indian Armed Forces. It is the largest component of the Indian Armed Forces with 1,237,117 active troops and 960,000 reserve troops.
                                </p>
                            </div>
                            <p>
                                The Indian Army is also the second-largest standing army in the world. Like any other branches of the Indian Armed Forces, working at the Indian Army is a matter of great pride and prestige.
                            </p>
                            <p className="mt-4">
                                The Indian Army Ranks reflect the ranks of Western militaries, especially, the British and Commonwealth Militaries. At present, the Indian Army Ranks are classified into three categories:
                            </p>
                            <ul>
                                <li>
                                    <p>
                                        1. Commissioned Officers
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        2. Junior Commissioned Officers
                                    </p>
                                </li>
                                <li>
                                    <p>
                                        3. Other Ranks (Non-Commissioned Officers and Soldiers)
                                    </p>
                                </li>
                            </ul>
                            <p className="mt-4">
                                Let us look at the Indian Army Ranks under each of the three categories.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
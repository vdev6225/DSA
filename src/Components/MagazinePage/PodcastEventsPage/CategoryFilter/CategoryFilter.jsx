import { useContext } from "react";
import "./CategoryFilter.css";
import { store } from "../../../../Helpers/Store/Store";
export default function CategoryFilter() {
    const {setMagazineType} = useContext(store)
    return (
        <section className="section-spacing pb-4 category-filter">
            <div className="container-flid">
                <div className="row">
                    <div className="col-12">
                        <div className="category-tab">
                            <p>
                                Categories
                            </p>
                            <ul>
                                <li onClick={()=>{setMagazineType("Podcast")}}>
                                    Podcasts
                                </li>
                                <li onClick={()=>{setMagazineType("Events")}}>
                                    Events
                                </li>
                                {/* <li>All</li> */}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
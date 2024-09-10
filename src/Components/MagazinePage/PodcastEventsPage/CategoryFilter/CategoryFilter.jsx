import "./CategoryFilter.css";
export default function CategoryFilter() {
    return (
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
                                    Podcasts
                                </li>
                                <li>
                                    Events
                                </li>
                                <li>All</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
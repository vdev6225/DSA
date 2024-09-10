import { Collapse } from 'antd';
import NoImg from "../../../../assets/img/no-image.jpg";
import "./PodcastAccordion.css";
import { FaYoutube } from 'react-icons/fa';
export default function PodcastAccordion() {
    const text = <><div className="d-flex youtube-link justify-content-between">
        <p>Listed on</p>
        <a href="http://" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
    </div><div className='content'><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words</p><p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words  There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words </p><a href="" target="_blank" rel="noopener noreferrer">Full podcast</a></div></>;
    const items = [
        {
            key: '1',
            label: <div className="podcast-card">
                <div className="number">
                    01
                </div>
                <div className="image">
                    <img src={NoImg} className='img-fluid' alt="" />

                </div>
                <div className="content">
                    <div className="heading">
                        <h4>
                            Imagine if you could <br />
                            Imagine if you could
                        </h4>

                    </div>
                    <div className="date d-flex gap-5">
                        <div className="box">
                            <p>
                                Date-
                            </p>
                            <p></p>
                        </div>
                        <div className="box">
                            <p>
                                Time-
                            </p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>,
            children: <div className='bottom-content'>{text}</div>,
        },
        {
            key: '2',
            label: <div className="podcast-card">
                <div className="number">
                    02
                </div>
                <div className="image">
                    <img src={NoImg} className='img-fluid' alt="" />

                </div>
                <div className="content">
                    <div className="heading">
                        <h4>
                            Imagine if you could <br />
                            Imagine if you could
                        </h4>

                    </div>
                    <div className="date d-flex gap-5">
                        <div className="box">
                            <p>
                                Date-
                            </p>
                            <p></p>
                        </div>
                        <div className="box">
                            <p>
                                Time-
                            </p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>,
            children: <div className='bottom-content'>{text}</div>,
        },
        {
            key: '3',
            label: <div className="podcast-card">
                <div className="number">
                    03
                </div>
                <div className="image">
                    <img src={NoImg} className='img-fluid' alt="" />

                </div>
                <div className="content">
                    <div className="heading">
                        <h4>
                            Imagine if you could <br />
                            Imagine if you could
                        </h4>

                    </div>
                    <div className="date d-flex gap-5">
                        <div className="box">
                            <p>
                                Date-
                            </p>
                            <p></p>
                        </div>
                        <div className="box">
                            <p>
                                Time-
                            </p>
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>,
            children: <div className='bottom-content'>{text}</div>,
        },
    ];
    return (
        <section className="section-spacing podcast-detail-section">
            <div className="container-flid">
                <div className="row">
                    <div className="col-12">
                        <Collapse accordion items={items} bordered={false} defaultActiveKey={['1']} />
                    </div>
                </div>
            </div>
        </section>
    )
}
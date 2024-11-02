import React, { useState } from 'react';
import FlipPage from 'react-flip-page';
import './FlipBook.css'; // Import your CSS file
import cover from "../../assets/img/contact-banner.png"; // Cover image
import page1 from "../../assets/img/16.jpg"; // First page image
import page2 from "../../assets/img/contact-mission.png"; // Second page image
import page3 from "../../assets/img/contact-news.png"; // Third page image

const Flipbook = () => {
    // Adjust the array to include two pages for each spread
    const pages = [
        cover,  // Cover page
        page1,  // Page 1
        page2,  // Page 2
        page3,  // Page 3
        cover,  // Back cover
    ];

    const [currentPage, setCurrentPage] = useState(0); // Current page state

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleNext = () => {
        if (currentPage < pages.length - 2) { // Ensure there's a next spread
            setCurrentPage(currentPage + 2); // Increment by 2 to show the next spread
        }
    };

    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 2); // Decrement by 2 to show the previous spread
        }
    };

    return (
        <section className="section-spacing">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="flipbook-container">
                            <FlipPage
                                page={currentPage} // Controlled page
                                onPageChange={handlePageChange} // Update page on change
                                showSwipeHint={true}
                                showTouchHint={true}
                                orientation="horizontal" // Ensure horizontal flipping
                            >
                                {pages.map((page, index) => (
                                    <div key={index} className="page">
                                        <img src={page} alt={`Page ${index + 1}`} />
                                    </div>
                                ))}
                            </FlipPage>

                            <div className="pagination">
                                <button className="nav-button" onClick={handlePrev} disabled={currentPage === 0}>
                                    Previous
                                </button>
                                <span className="current-page">
                                    Page {Math.floor(currentPage / 2) + 1} of {Math.ceil(pages.length / 2)} {/* Displaying the correct page count */}
                                </span>
                                <button className="nav-button" onClick={handleNext} disabled={currentPage >= pages.length - 2}>
                                    Next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Flipbook;

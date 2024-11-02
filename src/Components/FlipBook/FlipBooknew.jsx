// // src/FlipBook.js
// import React, { useState, useRef } from 'react';
// import PageFlip from 'react-pageflip';
// import './FlipBook.css';

// const FlipBook = () => {
//     const pageFlipRef = useRef();
//     const [currentPage, setCurrentPage] = useState(1);
    
//     const pages = [
//         { content: "Welcome to My Flip Book", cover: true }, // Cover page
//         { content: "This is the first page" },
//         { content: "This is the second page" },
//         { content: "This is the third page" },
//         { content: "This is the fourth page" }
//     ];

//     const goToPage = (page) => {
//         if (pageFlipRef.current) {
//             pageFlipRef.current.pageFlip.flipToPage(page);
//             setCurrentPage(page);
//         }
//     };

//     const nextPage = () => {
//         if (currentPage < pages.length) {
//             goToPage(currentPage + 1);
//         }
//     };

//     const prevPage = () => {
//         if (currentPage > 1) {
//             goToPage(currentPage - 1);
//         }
//     };

//     return (
//         <div className="flipbook-container">
//             <PageFlip ref={pageFlipRef} width={300} height={400} onFlip={(e) => setCurrentPage(e.data)}>
//                 {pages.map((page, index) => (
//                     <div className="page" key={index} data-ref={index + 1}>
//                         <div className={`content ${page.cover ? 'cover' : ''}`}>
//                             {page.content}
//                         </div>
//                     </div>
//                 ))}
//             </PageFlip>
//             <div className="navigation">
//                 <button className="nav-button" onClick={prevPage} disabled={currentPage === 1}>
//                     Previous
//                 </button>
//                 <span className="page-number">{currentPage} / {pages.length}</span>
//                 <button className="nav-button" onClick={nextPage} disabled={currentPage === pages.length}>
//                     Next
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default FlipBook;

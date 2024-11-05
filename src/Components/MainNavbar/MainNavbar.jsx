import { Dropdown, Space } from 'antd';
import { Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { VscListSelection } from 'react-icons/vsc';
import Logo from "../../assets/img/logo/dsa-white-logo.png";
import HamIcon from "../../assets/img/icons/ham.png";
import { FaSearch, FaTimes } from "react-icons/fa";

import "./MainNavbar.css"
import LoginModal from '../Login/LoginModal';
import { useContext, useState } from 'react';
import { store } from '../../Helpers/Store/Store';
import { Link } from 'react-router-dom';
export default function MainNavbar() {
    const [showOffcanvas, setShowOffcanvas] = useState(false);

    const handleCloseOffcanvas = () => setShowOffcanvas(false);
    const handleShowOffcanvas = () => setShowOffcanvas(true);
    const { setShow, setModalType } = useContext(store);
    const [isOpen, setIsOpen] = useState(false);
    const [searchText, setSearchText] = useState("");

    // Toggle the search bar visibility
    const toggleSearchBar = () => {
        setIsOpen(!isOpen);
    };

    // Handle search input change
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };
    const items = [
        {
            key: '1',
            label: (
                <div onClick={() => {
                    setShow(true)
                    setModalType("Login")
                }}>
                    Login
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div onClick={() => {
                    setShow(true)
                    setModalType("Register")
                }}>
                    Register now
                </div>
            ),
        }
    ]
    return (
        <div className='px-lg-3 main-navbar-box'>
            <LoginModal />
            <Navbar collapseOnSelect expand="lg" className='main-navbar py-0'>
                <Container fluid>
                    <div className="side-drawer" onClick={handleShowOffcanvas}>
                        {/* <VscListSelection /> */}
                        <img src={HamIcon} className='img-fluid' alt="" />
                    </div>
                    <Navbar.Brand href='/' className='d-block d-lg-none'>
                        <img src={Logo} className="img-fluid" alt="DSA Logo" />
                    </Navbar.Brand>
                    <div className="d-flex align-items-center d-block d-lg-none">
                        <div className="login-dropdown">
                            <Dropdown
                                menu={
                                    {
                                        items
                                    }}
                            >
                                <a href='/' onClick={(e) => e.preventDefault()}>
                                    <Space>
                                        <FaUser />
                                    </Space>
                                </a>
                            </Dropdown>

                        </div>
                    </div>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="d-flex align-items-center justify-content-between w-100">
                            <div className="d-flex align-items-center">
                                <Nav.Link href="/magazine">Magazine</Nav.Link>
                                <Nav.Link href="/newsletter">Newsletters</Nav.Link>
                                <Nav.Link href="/">Alerts</Nav.Link>
                                <div className="search-btn ms-2 mb-1" onClick={toggleSearchBar}>
                                    <IoSearch />
                                </div>
                            </div>
                            <Navbar.Brand href='/'>
                                <img src={Logo} className="img-fluid" alt="DSA Logo" />
                            </Navbar.Brand>
                            <div className="d-flex align-items-center">
                                <Nav.Link href="/" className='theme-btn me-3'>Subscribe</Nav.Link>
                                <div className="login-dropdown">
                                    <Dropdown
                                        menu={
                                            {
                                                items
                                            }}
                                    >
                                        <a href='/' onClick={(e) => e.preventDefault()}>
                                            <Space>
                                                <FaUser />
                                            </Space>
                                        </a>
                                    </Dropdown>

                                </div>
                            </div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
            <Offcanvas show={showOffcanvas} onHide={handleCloseOffcanvas} className="navbar-offcanvas">
                <Offcanvas.Header closeButton>
                    <div className="d-flex gap-4 align-items-center">
                        <Link to="">LOG IN</Link>
                        <div className="search-btn ms-2 mb-1">
                            <IoSearch />
                        </div>
                    </div>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div className="row h-100">
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <ul className='left-links h-100'>
                                <li>
                                    <Link to="">Subscribe</Link>
                                </li>
                                <li>
                                    <Link to="">Donate</Link>
                                </li>
                                <li>
                                    <Link to="">Magazine</Link>
                                </li>
                                <li>
                                    <Link to="">Latest</Link>
                                </li>
                                <li>
                                    <Link to="">Archive</Link>
                                </li>
                                <li>
                                    <Link to="">Podcast</Link>
                                </li>
                                <li>
                                    <Link to="">Newsletters</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="border-left">
                                <ul className='mid-links mb-4 mb-lg-5'>
                                    <p>SECTIONS</p>
                                    <li>
                                        <Link to="">Politics</Link>
                                    </li>
                                    <li>
                                        <Link to="">World</Link>
                                    </li>
                                    <li>
                                        <Link to="">Economy</Link>
                                    </li>
                                    <li>
                                        <Link to="">Culture</Link>
                                    </li>
                                    <li>
                                        <Link to="">Books & the Arts</Link>
                                    </li>
                                </ul>
                                <ul className='mid-links'>
                                    <p>THE NATION</p>
                                    <li>
                                        <Link to="">About</Link>
                                    </li>
                                    <li>
                                        <Link to="">Events</Link>
                                    </li>
                                    <li>
                                        <Link to="">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to="">Advertise</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 mb-4 mb-lg-0">
                            <div className="border-left border-left-image">
                                <p>
                                    CURRENT ISSUE
                                </p>
                                <div className="image">
                                    <img src="" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
            {/* Full-width search bar overlay */}
            {/* <div className={`search-overlay ${isOpen ? "open" : ""}`}>
                <div className="search-bar">
                    <input
                        type="text"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        placeholder="Search for flowers, gifts, and more..."
                        className="search-input"
                    />
                    <button className="close-button" onClick={toggleSearchBar}>
                        <FaTimes />
                    </button>
                </div>
            </div> */}
        </div>
    )
}
import { Dropdown, Space } from 'antd';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { IoSearch } from 'react-icons/io5';
import { VscListSelection } from 'react-icons/vsc';
import "./MainNavbar.css"
export default function MainNavbar() {
    const items = [
        {
            key: '1',
            label: (
                <div>
                    Login
                </div>
            ),
        },
        {
            key: '2',
            label: (
                <div>
                    register now
                </div>
            ),
        }
    ]
    return (
        <div className='px-lg-3 main-navbar-box'>
            <Navbar collapseOnSelect expand="lg" className='main-navbar'>
                <Container fluid>
                    <div className="side-drawer">
                        <VscListSelection />
                    </div>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="d-flex align-items-center justify-content-between w-100">
                            <div className="d-flex align-items-center">
                                <Nav.Link href="/">Megazine</Nav.Link>
                                <Nav.Link href="/">Newsletters</Nav.Link>
                                <Nav.Link href="/">Alerts</Nav.Link>
                                <div className="search-btn ms-2">
                                    <IoSearch />
                                </div>
                            </div>
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
        </div>
    )
}
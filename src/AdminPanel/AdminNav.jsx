import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import Logo from "../assets/img/logo/DSA-transparent-logo.png";
export default function AdminNav() {
    return (
        <Navbar expand={false} className="bg-body-tertiary mb-3">
            <Container fluid>
                <Navbar.Brand href="#"><img src={Logo} className="admin-logo img-fluid" /></Navbar.Brand>
                <Navbar.Toggle aria-controls={`offcanvasNavbar-expand`} />
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand`}
                    aria-labelledby={`offcanvasNavbarLabel-expand`}
                    placement="end"
                >
                    <Offcanvas.Header closeButton>
                        <img src={Logo} className="admin-logo img-fluid" />
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                            <Nav.Link href="#action1">Home</Nav.Link>
                            <Nav.Link href="#action2">Link</Nav.Link>

                        </Nav>
                    </Offcanvas.Body>
                </Navbar.Offcanvas>
            </Container>
        </Navbar>
    )
}
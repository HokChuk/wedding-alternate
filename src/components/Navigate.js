import { Container, Nav, Navbar } from 'react-bootstrap';
import "../styles/App.css";

function Navigate() {
    return (
        <div className="Navigate">
          <>
            <Navbar fixed= "top">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Container>
                <Navbar.Brand href="#wedHome" className="mr-auto">JE &#9829; PA</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link href="#story" className="mx-3">Our Story</Nav.Link>
                    <Nav.Link href="#getthere" className="mx-3">Getting There</Nav.Link>
                    <Nav.Link href="#sched" className="mx-3">Schedule</Nav.Link>
                    <Nav.Link href="#info" className="mx-3">Information</Nav.Link>
                    <Nav.Link href="#rsvp" className="mx-3">RSVP</Nav.Link>
                </Nav>
              </Container>
            </Navbar>
          </>
        </div>
    );
}

export default Navigate;
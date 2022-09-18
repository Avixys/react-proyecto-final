import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget";
import "./NavBar.css";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    TODO GAMER
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link className="text-white" href="#home">HOME</Nav.Link>
                    <Nav.Link className="text-white" href="#PC">PC</Nav.Link>
                    <Nav.Link className="text-white" href="#PS5">PS5</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
};

export default NavBar;
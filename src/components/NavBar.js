import { Container, Nav, Navbar } from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";
import {Link} from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src="https://javascript-proyecto-final-ten.vercel.app/multimedia/logo_full.png" width="250" className="navBarImg" alt="Todo Gamer logo"/>
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link as={Link} to="/category/micro" className="text-white">MICRO</Nav.Link>
                    <Nav.Link as={Link} to="/category/mother" className="text-white">MOTHER</Nav.Link>
                    <Nav.Link as={Link} to="/category/ram" className="text-white">RAM</Nav.Link>
                    <Nav.Link as={Link} to="/category/gpu" className="text-white">GPU</Nav.Link>
                    <Nav.Link as={Link} to="/category/gabinete" className="text-white">GABINETE</Nav.Link>
                    <Nav.Link as={Link} to="/category/disco" className="text-white">DISCO</Nav.Link>
                    <Nav.Link as={Link} to="/category/fuente" className="text-white">FUENTE</Nav.Link>
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
    );
};

export default NavBar;
import { Container, Navbar, Dropdown } from "react-bootstrap";
import CartWidget from "./CartWidget/CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img src="https://javascript-proyecto-final-ten.vercel.app/multimedia/logo_full.png" width="250" className="navBarImg" alt="Todo Gamer logo" />
                </Navbar.Brand>
                <Dropdown className="bg-dark border-danger">
                    <Dropdown.Toggle className="bg-dark border-danger" variant="success" id="dropdown-basic">
                        Categorías
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item as={Link} to="/category/micro">MICRO</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/category/mother">MOTHER</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/category/ram">RAM</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/category/gpu">GPU</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/category/gabinete">GABINETE</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/category/disco">DISCO</Dropdown.Item>
                        <Dropdown.Item as={Link} to="/category/fuente">FUENTE</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <CartWidget />
            </Container>
        </Navbar>
    );
};

export default NavBar;
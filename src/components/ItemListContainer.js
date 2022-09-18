import {Container} from "react-bootstrap";
import "./ItemListContainer.css"

const ItemListContainer = ({ greeting }) => {
    return (
        <Container>
            <h3 className="greeting">{greeting}</h3>
        </Container>
    );
}

export default ItemListContainer;
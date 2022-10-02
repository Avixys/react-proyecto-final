import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import "./Item.css"

const Item = ({product}) => {
    return (
        <Card>
            <Card.Img variant="top" src={product.pictureUrl}/>
            <Card.Body>
                <Card.Title>
                    {product.title}
                </Card.Title>
                <Link to={`/item/${product.id}`}>
                    <Button variant="primary">
                        Detalles
                    </Button>
                </Link>
            </Card.Body>
        </Card>
    );
};

export default Item;
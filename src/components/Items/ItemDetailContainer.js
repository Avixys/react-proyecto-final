import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { getProduct } from "../../utils/products";
import ItemDetail from "./ItemDetail";
import { Container } from "react-bootstrap";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const {id} = useParams();

    useEffect (() => {
        getProduct (id)
            .then((data) => {
                setProduct (data);
            })
            .catch(error => console.warn(error))
    }, [id]);

    return (
        <Container>
            <h1>Detalle del Producto</h1>
            {product && <ItemDetail product={product}/>}
        </Container>
    );
};

export default ItemDetailContainer;
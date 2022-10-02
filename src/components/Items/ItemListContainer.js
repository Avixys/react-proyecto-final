import { useEffect } from "react";
import { useState } from "react";
import {Container} from "react-bootstrap";
import { useParams } from "react-router-dom";
import {getAllProducts, getProductsByCategory} from "../../utils/products";
import ItemList from "./ItemList"
import "./ItemListContainer.css"


const ItemListContainer = ({ greeting }) => {
    const {categoryId} = useParams();
    const [products, setProducts] = useState([]);

    useEffect (() => {
        if (categoryId) {
            getProductsByCategory (categoryId)
                .then((data) => setProducts(data))
                .catch((error) => console.warn(error))
        } else {
            getAllProducts()
                .then ((data) => setProducts(data))
                .catch((error) => console.warn(error))
        }
    }, [categoryId]);

    return (
        <Container>
            <h1>Productos</h1>
            <h3 className="greeting">{greeting}</h3>
            <ItemList products={products}></ItemList>
        </Container>
    );
}

export default ItemListContainer;
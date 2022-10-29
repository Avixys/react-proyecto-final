import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import "./CartWidget.css";
import {Link} from "react-router-dom";
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {
    const {totalQuantity} = useContext(CartContext);
    return (
        <>
            <Link to="/cart">
                <FontAwesomeIcon icon={faCartShopping} />
                {totalQuantity > 0 && (
                <Badge pill bg="danger">{totalQuantity}</Badge>
                )}
            </Link>
            
        </>
    );
}

export default CartWidget;
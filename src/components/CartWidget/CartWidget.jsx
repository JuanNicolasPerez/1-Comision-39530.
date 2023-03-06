import { Link } from "react-router-dom";
import {useCarritoContext} from "../../context/CarritoContext"

const CartWidget = ({cantCarrito}) => {
    const {getItemQuantity} = useCarritoContext()

    return (
        <>
            <Link className="nav-link" to={'/cart'}>
                <button className="btn">🛒</button>
                {getItemQuantity() > 0 && <span className="cantCarrito">{getItemQuantity()}</span>}
            </Link> 
        </>
    );
}

export default CartWidget;

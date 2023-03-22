import { Link } from "react-router-dom"
import { ItemList } from "../ItemList/ItemList"
import { useCarritoContext } from "../../context/CarritoContext"

export const Cart = () => {
    const { carrito, totalPrice, emptyCart } = useCarritoContext()

    return (
        <>
            {carrito.length === 0
                ?
                <>
                    <div className="Cart_comprar">
                        <h2>Carrito vacio</h2>
                        <Link className="nav-link" to={'/'}><button className="btn btn-dark">Continuar comprando</button></Link>
                    </div>
                </>
                :
                <div className="container cartContainer">
                    {<ItemList productos={carrito} plantilla={'itemCart'} />}
                    <div className="divButtons">
                        <p>Resumen de la compra: $ {new Intl.NumberFormat('de-DE').format(totalPrice())}</p>
                        <button className="boton btn btn-danger" onClick={() => emptyCart()}>Vaciar carrito</button>
                        <Link className="boton nav-link" to={'/'}><button className="btn btn-dark">Continuar Comprando</button></Link>
                        <Link className="boton nav-link" to={'/checkout'}><button className="btn btn-dark">Finalizar compra</button></Link>
                    </div>
                </div>
            }
        </>
    )

}

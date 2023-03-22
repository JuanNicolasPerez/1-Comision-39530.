import { useCarritoContext } from "../../context/CarritoContext"

export const ItemCart = ({ item }) => {
    const { removeItem } = useCarritoContext()

    return (
        <div className="mb-3">
            <div className="card_itemCart">
                <div className="conten_img_itemCart">
                    <img src={item.img} alt={`Imagen de producto ${item.nombre}`} className="img_itemCart" />
                </div>
                <div className="row m-0">
                    <div className="card-body_itemCart">
                        <h5 className="card-title">{item.nombre} {item.modelo}</h5>
                        <p className="card-text">Precio Unitario: $ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                        <p className="card-text">Subtotal: $ {new Intl.NumberFormat('de-DE').format(item.precio * item.cant)}</p>
                    </div>
                    <div className="btnItemCart">
                        <button className="btn btn-danger" onClick={() => removeItem(item.id)}>Eliminar del Carrito</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
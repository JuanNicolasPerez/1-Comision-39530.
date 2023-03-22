import { useDarkModeContext } from "../../context/DarkModeContext"
import { useCarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";
import React from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { createOrdenCompra, getProducto, updateProducto } from "../../firebase/firebase";

export const Checkout = () => {
    const { darkMode } = useDarkModeContext();
    const { carrito, emptyCart, totalPrice } = useCarritoContext();
    const datosFormulario = React.useRef();
    let navigate = useNavigate();

    const consultarFormulario = (e) => {
        e.preventDefault()
        const datForm = new FormData(datosFormulario.current)
        const cliente = Object.fromEntries(datForm)
        if (cliente.email === cliente.repEmail) {
            const aux = [...carrito]
            aux.forEach(prodCarrito => {
                getProducto(prodCarrito.id).then(prodBDD => {
                    prodBDD.stock -= prodCarrito.cant
                    updateProducto(prodCarrito.id, prodBDD)
                })
            })

            createOrdenCompra(cliente, aux, totalPrice(), new Date().toISOString()).then(ordenCompra => {
                toast.success(`¡Muchas gracias por comprar con nosotros!, su orden de compra con el ID: ${ordenCompra.id
                    } por un total de $ ${new Intl.NumberFormat('de-DE').format(totalPrice())} fue realizada con exito`)
                emptyCart()
                e.target.reset()
                navigate("/")
            })

        }
        else {
            toast.warning("El email debe ser el mismo");
        }

    }

    return (
        <>
            {carrito.length === 0 ?
                <>
                    <div className="conte_ckeckout row align-items-center py-3">
                        <div className="col-12 text-center align-self-center mt-3">
                            <h2 className={`${darkMode ? 'text-light' : 'text-dark'} py-3`}>El Carrito está vacío</h2>
                            <Link className="nav-link" to={'/'}><button className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'} zoomIn d-block mx-auto`}>Ir a comprar productos</button></Link>
                        </div>
                    </div>
                </>
                :
                <div className="container px-5">
                    <div className="row align-items-center py-3">
                        <div className="col-12 align-self-center mt-3">

                            <form onSubmit={consultarFormulario} ref={datosFormulario}>
                                <div className="mb-3">
                                    <label htmlFor="nombre" className="form-label">Nombre y Apellido</label>
                                    <input type="text" className="form-control" name="nombre" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="text" className="form-control" name="email" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Repetir email</label>
                                    <input type="text" className="form-control" name="repEmail" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="celular" className="form-label">Celular</label>
                                    <input type="number" className="form-control" name="celular" required />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="direccion" className="form-label">Dirección</label>
                                    <input type="texy" className="form-control" name="direccion" required />
                                </div>
                                <button type="submit" className={`btn ${darkMode ? 'btn-secondary' : 'btn-primary'} zoomIn`}>Finalizar Compra</button>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </>


    )
}
import { Link } from "react-router-dom";

//Context
import { useDarkModeContext } from "../../context/DarkModeContext"

export const Item = ({ item }) => {
    const { darkMode } = useDarkModeContext()

    return (
        <div className={`card mb-3 cardProducto ${darkMode ? 'text-dark bg-secondary' : 'border-light'}`}>
            <img src={item.img} className="card-img-top" alt={`Imagen de ${item.nombre}`} />
            <div className="card-body">
                <h5 className="card-title">{item.nombre} {item.nombre}</h5>
                <h5 className="card-text">{item.rubro}</h5>
                <p className="card-text">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
                <button className={`btn ${darkMode ? 'btn-primary' : 'btn-secondary'}`}>
                    <Link className="nav-link" to={`/item/${item.id}`}>Ver Producto</Link>
                </button>
            </div>
        </div>

    );
}
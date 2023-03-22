import { Link } from "react-router-dom";

//Context
import { useDarkModeContext } from "../../context/DarkModeContext"

export const Item = ({ item }) => {
    const { darkMode } = useDarkModeContext()

    return (
        <div className={`mb-3 card_Producto ${darkMode ? 'text-dark bg-secondary' : 'border-light'}`}>
            <div className="conten_img">
                <img src={item.img} className="img_item" alt={`Imagen de ${item.nombre}`} />
            </div>
            <div className="card_body">
                <h5 className="card-title">{item.nombre}</h5>
                <h5 className="card-text">{item.rubro}</h5>
                <p className="card-precio">$ {new Intl.NumberFormat('de-DE').format(item.precio)}</p>
            </div>
            <div className="card_footer">
            <button className={`btn_card btn ${darkMode ? 'btn-primary' : 'btn-secondary'}`}>
                    <Link className="link_card nav-link" to={`/item/${item.id}`}>Ver Producto</Link>
                </button>
            </div>
        </div>

    );
}
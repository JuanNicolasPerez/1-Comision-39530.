import { Link } from "react-router-dom";

const Seccion = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}><button className="btn">Inicio</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/Contacto"}><button className="btn">Contacto</button></Link>
            </li>
        </>
    );
}

export default Seccion;

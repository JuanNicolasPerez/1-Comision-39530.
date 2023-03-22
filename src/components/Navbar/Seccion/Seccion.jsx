import { Link } from "react-router-dom";

const Seccion = () => {
    return (
        <>
            <li className="nav-item">
                <Link className="nav-link" to={"/"}><button className="btn btn_seccion">Inicio</button></Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to={"/Contacto"}><button className="btn btn_seccion">Contacto</button></Link>
            </li>
        </>
    );
}

export default Seccion;

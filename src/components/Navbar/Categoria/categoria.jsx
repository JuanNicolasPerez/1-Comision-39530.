import { Link } from "react-router-dom";
import React from "react";

const Categoria = React.memo(() => {
    return (
        <>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <button className="btn">Productos</button> 
                </a>
                <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to={"/category/1"}>Varios</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to={"/category/2"}>Marcadores</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to={"/category/3"}>Lapices</Link></li>
                </ul>
            </li>
        </>
    );
})

export default Categoria;

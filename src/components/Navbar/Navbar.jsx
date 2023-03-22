import CartWidget from "../CartWidget/CartWidget";
import Categoria from "./Categoria/categoria";
import Seccion from "./Seccion/Seccion";
import { BotonDarkMode } from "./BotonDarkMode/BotonDarkMode";

const Navbar = () => {
    return (
        <nav className="nav-container navbar-expand-lg bg-light">
            <div className="navbar container-fluid">
                <a className="navbar-logo navbar-brand">Yunino</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="navbar_seccion collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Seccion/>
                        <Categoria/>
                    </ul>
                    <CartWidget/>
                    <BotonDarkMode/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

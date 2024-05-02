import { Link, NavLink } from "react-router-dom";
import logoAM from "../assets/images/Logo-AM.jpg";
import CartWidget from "./CartWidget";
import Search from "./Search";

const NavBar = () => {
  return (
    <div className="container-fluid">
      <div className="row bg-black">
        <div className="col d-flex align-items-center"><Search/></div>
        <div className="col-md text-center">
          <Link to={"/"}>
            <img src={logoAM} alt="AM LUJOS" width={180} />
          </Link>
        </div>
        <div className="col d-flex align-items-center justify-content-end">
          <CartWidget />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to={"/"}>
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to={"/categoria/tejas"}>
                Tejas/Deflectores
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to={"/categoria/accesorios"}>
                Accesorios
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to={"/categoria/limpieza"}>
                Limpieza
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link text-dark" to="#">
                Contacto
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
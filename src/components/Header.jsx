import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "../styles/header.scss";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <nav>
        <NavLink
          className={({ isActive }) =>
            isActive ? "header-link active" : "header-link"
          }
          to="/"
        >
          Accueil
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "header-link active" : "header-link"
          }
          to="/a-propos"
        >
          A Propos
        </NavLink>
      </nav>
    </div>
  );
}

export { Header };

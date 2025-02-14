import { NavLink, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Header.scss";

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
          <span className="nav-text">Accueil</span>
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "header-link active" : "header-link"
          }
          to="/a-propos"
        >
          <span className="nav-text">A Propos</span>
        </NavLink>
      </nav>
    </div>
  );
}

export { Header };

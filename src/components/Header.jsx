import { Link } from "react-router";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <div className="flex justify-between items-center p-4 ">
      <img src={logo} alt="Logo" />
      <nav className="flex gap-4">
        <Link to="/">Accueil</Link>
        <Link to="/a-propos">A Propos</Link>
      </nav>
    </div>
  );
}

export { Header };

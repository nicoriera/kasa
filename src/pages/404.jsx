import { Link } from "react-router-dom";
import "../styles/404.scss";

function NotFound() {
  return (
    <div className="not-found">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-text">
        Oups! La page que vous demandez n&apos;existe pas.
      </p>
      <Link to="/" className="not-found-link">
        Retourner sur la page d&apos;accueil
      </Link>
    </div>
  );
}

export { NotFound };

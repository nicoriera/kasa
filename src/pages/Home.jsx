import { Link } from "react-router";

function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1>Home</h1>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/a-propos">A Propos</Link>
        <Link to="/fiche-logement/1">Fiche Logement</Link>
        <Link to="/404">404</Link>
      </nav>
    </div>
  );
}

export { Home };

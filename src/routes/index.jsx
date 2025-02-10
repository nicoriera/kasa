import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "../pages/Home";
import { APropos } from "../pages/APropos";
import { Logement } from "../pages/Logement";
import { NotFound } from "../pages/404";
import { LayoutDefault } from "../layout/LayoutDefault";

const Router = () => {
  // Déterminez le basename en fonction de l'environnement :
  const basename = import.meta.env.DEV ? "/" : "/kasa";

  return (
    <BrowserRouter basename={basename}>
      <Routes>
        <Route
          path="/"
          element={
            <LayoutDefault>
              <Home />
            </LayoutDefault>
          }
        />
        <Route
          path="/a-propos"
          element={
            <LayoutDefault>
              <APropos />
            </LayoutDefault>
          }
        />
        <Route
          path="/fiche-logement/:id"
          element={
            <LayoutDefault>
              <Logement />
            </LayoutDefault>
          }
        />
        <Route
          path="/404"
          element={
            <LayoutDefault>
              <NotFound />
            </LayoutDefault>
          }
        />
        <Route
          path="*"
          element={
            <LayoutDefault>
              <NotFound />
            </LayoutDefault>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };

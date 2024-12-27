import { BrowserRouter, Routes, Route } from "react-router";
import { Home } from "../pages/Home";
import { APropos } from "../pages/APropos";
import { FicheLogement } from "../pages/FicheLogement";
import { NotFound } from "../pages/404";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<APropos />} />
        <Route path="/fiche-logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { Router };

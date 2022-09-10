import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../components/App";
import NotFoundPage from "../components/NotFoundPage";
import PlanetDetails from "../components/PlanetDetails";
import UrlGrid from "../components/UrlGrid/UrlGrid";
import Redux from "../redux";
import { filmsHeader, residentsHeader } from "../utils/constant";

const Router = () => {
  return (
    <Redux>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<App />} />
          <Route path="planets/:planetId" element={<PlanetDetails />} />
          <Route path="films" element={<UrlGrid type="Films" header={filmsHeader} />} />
          <Route path="residents" element={<UrlGrid type="Residents" header={residentsHeader} />} />
          <Route element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </Redux>
  );
};

export default Router;

import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import { routes } from "./routes";

const Router = (): JSX.Element => (
  <main className="app-router">
    <Routes>
      <Route path="/" element={ <Navigate to="/home" /> }/>

      { routes.map(obj => <Route key={ obj.id } path={ `/${obj.path}` } element={ obj.view() } />) }

      <Route path="/*" element={ <Navigate to="/home" /> }/>
    </Routes>
  </main>
);

export default Router;
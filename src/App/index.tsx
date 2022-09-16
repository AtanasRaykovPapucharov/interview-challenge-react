/**
 * App Component
 * 
 */

import React from "react";
import { HashRouter as RouterProvider } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
 
import store from "../redux/store";
import Router from "../routes/Router";
import Header from "./Header";

import "./index.css";
 
const App = () => (
  <main className="app">
    <ReduxProvider store={store}>
      <RouterProvider>
        <Header />
        <Router />
      </RouterProvider>
    </ReduxProvider>
  </main>
);
 
export default App;
 
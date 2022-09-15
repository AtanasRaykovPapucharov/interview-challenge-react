/**
 * App Component
 * 
 */

 import React from "react";
 import { HashRouter as RouterProvider } from "react-router-dom";
 import { Provider as ReduxProvider } from "react-redux";
 
 import store from "../redux/store";
 
 const App = () => (
  <ReduxProvider store={store}>
    <RouterProvider>
      <main className="app">
        app works
      </main>
    </RouterProvider>
  </ReduxProvider>
 );
 
 export default App;
 
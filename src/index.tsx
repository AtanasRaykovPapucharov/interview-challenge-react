/**
 * React Lazy Loading App Component
 * 
 */

import React from "react";
import { 
  lazy, 
  LazyExoticComponent, 
  ReactNode, 
  StrictMode,
  Suspense
 } from "react";

import { createRoot } from "react-dom/client";

import Loading from "./components/Loading";

import "./index.css";

const root: HTMLElement | null = document.getElementById("root");

const App: LazyExoticComponent<(props: {}) => JSX.Element> = lazy(() => import("./App"));
const LazyApp: ReactNode = (() => <Suspense fallback={Loading()}>
  <StrictMode>
    <App />
  </StrictMode>
</Suspense>)();

root ? 
  createRoot(root).render(LazyApp) : 
  console.log("HTML element with id 'root' is missing");

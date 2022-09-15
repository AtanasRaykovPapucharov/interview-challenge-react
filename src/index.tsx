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

const root: HTMLElement | null = document.getElementById("root");
const appWidth: number = root !== null ? root.offsetWidth : 0;

const App: LazyExoticComponent<(props: {}) => JSX.Element> = lazy(() => import("./App"));
const LazyApp: ReactNode = (() => <Suspense fallback={Loading(appWidth)}><StrictMode><App /></StrictMode></Suspense>)();

root !== null ? 
  createRoot(root).render(LazyApp) : 
  console.log("HTML element with id 'root' is missing");
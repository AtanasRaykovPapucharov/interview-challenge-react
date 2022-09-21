import React from "react";
import { MDXProvider } from "@mdx-js/react";
import Docs from "../docs/docs.mdx";

import { getData } from "../services/requester";
import { RouteType } from "./type";
import Listings from "../components/Listings";
import MapSearch from "../components/MapSearch";

// const url = "https://api.github.com/repos/tannerlinsley/react-query";

export const routes: RouteType[] = [
    {
        id: "home-unique-key",
        name: "Home",
        path: "/home",
        view: () => <Listings getData={ getData } />
    },
    {
        id: "map-extension-unique-key",
        name: "MapSearch",
        path: "/map",
        view: () => <MapSearch getData={ getData } />
    },
    {
        id: "docs-unique-key",
        name: "Docs",
        path: "/docs",
        view: () => <MDXProvider >
            <Docs />
        </MDXProvider>
    }
];
    
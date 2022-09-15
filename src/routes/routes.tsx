import React from "react";

import { RouteType } from "./type";
import Listings from "../components/Listings";

export const routes: RouteType[] = [
    {
        id: "home-unique-key",
        name: "Home",
        path: "/home",
        view: () => <Listings />
    },
    {
        id: "extension-unique-key",
        name: "route",
        path: "/route",
        view: () => <p>Just Route</p>
    }
];
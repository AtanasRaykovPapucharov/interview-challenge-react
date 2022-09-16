/**
 * @jest-environment jsdom
 */

import React from "react";
import { createRoot } from "react-dom/client";
import * as ReactDOM from "react-dom";
import Listings from "../Listings";

describe("Listings component tests", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = window.document.createElement("div");
        window.document.body.appendChild(container);
        // createRoot(container).render(<Listings />)
        ReactDOM.render(<Listings />, container);
    });

    afterEach(() => {
        window.document.body.removeChild(container);
        container.remove();
    });
    describe("initial document renders correctly", () => {
        it("inputs length must be 1", () => {
            const inputs = window.document.querySelectorAll("input");
            expect(inputs).toHaveLength(1);
        });
        it("input name must be 'search'", () => {
            const inputs = window.document.querySelectorAll("input");
            expect(inputs[0].name).toBe("search");
        });
    });
});
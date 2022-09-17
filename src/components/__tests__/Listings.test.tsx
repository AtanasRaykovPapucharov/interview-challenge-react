/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";

import Listings from "../Listings";

describe("Listings component tests", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = window.document.createElement("div");
        window.document.body.appendChild(container);
        render(<Listings />, { container });
    });

    afterEach(() => {
        window.document.body.removeChild(container);
        cleanup();
    });

    describe("the document renders correctly", () => {
        it("inputs list length should be 1", () => {
            const inputs = window.document.querySelectorAll("input");
            expect(inputs).toHaveLength(1);
        });
        it("the input name should be 'search'", () => {
            const inputs = window.document.querySelectorAll("input");
            expect(inputs[0].name).toBe("search");
        });
    });
});
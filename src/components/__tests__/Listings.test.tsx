/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, screen, cleanup } from "@testing-library/react";

import Listings from "../Listings";

const getDataMock = async (url: string): Promise<object> => {
    return await { data: [] }
};

describe("Tests Listings component renders correctly", () => {
    beforeEach(() => {
        render(<Listings getData={ getDataMock } />);
    });

    afterEach(() => {
        cleanup();
    });

    describe("the inputs list", () => {
        it("has expected length", () => {
            const inputs = document.querySelectorAll("input");
            const expected = 1;

            expect(inputs).toHaveLength(expected);
        });
    });

    describe("the input name", () => {
        it("should be expected", () => {
            const inputs = document.querySelectorAll("input");
            const expected = "search";

            expect(inputs[0].name).toBe(expected);
        });
    });

    describe("the text on the screen", () => {
        it("has expected type", () => {
            const textElement = screen.getByText("no results");
            
            expect(textElement).toBeInstanceOf(HTMLHeadingElement);
        });

        it("has expected className", () => {
            const textElement = screen.getByText("no results");
            const expected = "no-results";
            
            expect(textElement).toHaveClass(expected);
        });
    });
});
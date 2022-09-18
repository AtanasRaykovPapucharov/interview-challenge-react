/**
 * @jest-environment jsdom
 */

import { render, cleanup } from "@testing-library/react";

import ItemsMapper from "../ItemsMapper";
import { ItemType } from "../types";

const inputMock: ItemType[] = [
    {
        uniqueKey: "1",
        name: "Gosho",
        imgUrl: ""
    },
    {
        uniqueKey: "2",
        name: "Pesho",
        imgUrl: ""
    },
    {
        uniqueKey: "3",
        name: "Misho",
        imgUrl: ""
    }
];

describe("Tests ItemsMapper component renders correctly", () => {
    beforeEach(() => {
        render(ItemsMapper(inputMock));
    });

    afterEach(() => {
        cleanup();
    });

    describe("articles list", () => {
        it("has expected length", () => {
            const articles = document.querySelectorAll("article");
            const expectedLength = inputMock.length;

            expect(articles).toHaveLength(expectedLength);
        });
    });

    describe("h2 list", () => {
        it("has expected length", () => {
            const h2List = document.querySelectorAll("h2");
            const expectedLength = inputMock.length;

            expect(h2List).toHaveLength(expectedLength);
        });

        it("has expected innerHTML", () => {
            const h2List = document.querySelectorAll("h2");
            
            const resultA = h2List[0].innerHTML;
            const expectedA = "Gosho";
            const resultB = h2List[1].innerHTML;
            const expectedB = "Pesho";
            const resultC = h2List[2].innerHTML;
            const expectedC = "Misho";
          
            expect(resultA).toEqual(expectedA);
            expect(resultB).toEqual(expectedB);
            expect(resultC).toEqual(expectedC);
        });
    });
});
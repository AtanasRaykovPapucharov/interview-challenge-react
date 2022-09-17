/**
 * @jest-environment jsdom
 */

import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";

import ItemsMapper from "../ItemsMapper";
import { ItemType } from "../types";

const emptyInputMock: ItemType[] = [];
const inputMock: ItemType[] = [
    {
        uniqueKey: "1",
        name: "",
        imgUrl: ""
    },
    {
        uniqueKey: "2",
        name: "",
        imgUrl: ""
    },
    {
        uniqueKey: "3",
        name: "",
        imgUrl: ""
    }
];

describe("ItemsMapper component tests", () => {
    let container: HTMLDivElement;

    beforeEach(() => {
        container = window.document.createElement("div");
        window.document.body.appendChild(container);
        render(ItemsMapper(inputMock), { container });
    });

    afterEach(() => {
        window.document.body.removeChild(container);
        cleanup();
    });

    describe("the document renders correctly", () => {
        it("articles list length should be 3", () => {
            const articles = window.document.querySelectorAll("article");
            const expectedLength = inputMock.length;
            expect(articles).toHaveLength(expectedLength);
        });
    });
});
/**
 * @jest-environment jsdom
 */

import axios from "axios";

import { getData } from "../requester";
import { URL, HEADERS } from "../../constants";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Tests requester sevice", () => {
    describe("getData", () => {
        it("fetches successfully data from an API", async () => {
            const data: any = { data: [] };
        
            mockedAxios.get.mockImplementationOnce(() => Promise.resolve(data));
        
            await expect(getData(URL)).resolves.toEqual(data);
        
            expect(mockedAxios.get).toHaveBeenCalledWith(URL, HEADERS);
        });
    });
});
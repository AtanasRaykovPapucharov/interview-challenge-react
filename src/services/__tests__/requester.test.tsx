/**
 * @jest-environment jsdom
 */

import axios from "axios";

import { getData } from "../requester";
import { URL, HEADERS } from "../../constants";

jest.mock("axios");

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Tests requester service", () => {
    describe("getData", () => {
        it("fetches successfully data from an API", async () => {
            const response: any = { data: {} };
        
            mockedAxios.get.mockImplementationOnce(() => Promise.resolve(response));
        
            await expect(getData(URL)).resolves.toEqual(response);
        
            expect(mockedAxios.get).toHaveBeenCalledWith(URL, HEADERS);
        });
    });
});
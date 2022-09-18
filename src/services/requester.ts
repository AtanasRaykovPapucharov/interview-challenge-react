/**
 * Axios requester
 * 
 * @param url : string input 
 * 
 */

import axios from "axios";
import { HEADERS } from "../constants";

axios.defaults.withCredentials = false;

export const getData = async (url: string): Promise<object> => {
  try {
    return await axios.get(url, HEADERS);
  } 
  catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message: ", error.message);
      throw new Error(error.message);
    } else {
      console.log("unexpected error: ", error);
      throw new Error(error);
    }
  }
}

/**
 * Axios requester
 * 
 */

import axios from "axios";

axios.defaults.withCredentials = false;

export const getData = async (url: string): Promise<object> => {
  try {
    const { data, status } = await axios.get(
      url, {
        headers: {
          Accept: "application/json",
        }
      }
    );
    // console.log("response status : ", status);
    return data;
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

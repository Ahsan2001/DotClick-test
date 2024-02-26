import axios from "axios";
import { REACT_APP_INTERNAL_API_PATH } from "../utils";


const api = axios.create({
  baseURL: REACT_APP_INTERNAL_API_PATH,
  headers: {
    "Content-Type": "application/json",
  },
});


export const GetData = async () => {
    let response;
    try {
      response = await api.get("/api");
    } catch (error) {
      return error;
    }
    return response;
}
  

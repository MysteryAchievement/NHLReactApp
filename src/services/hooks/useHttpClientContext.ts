import { AxiosInstance } from "axios";
import { createContext, useContext } from "react";
import httpClient from "../httpClient";

console.log("baseURL:", import.meta.env.VITE_BASE_URL);

const AxiosContext = createContext<AxiosInstance>(
  new Proxy(httpClient, {
    apply: () => {
      throw new Error("You must wrap the component in our HttpClientContext");
    },
    get: () => {
      throw new Error("You must wrap the component in our HttpClientContext");
    },
  })
);

const useHttpClientContext = () => {
  return useContext(AxiosContext);
};

export default useHttpClientContext;

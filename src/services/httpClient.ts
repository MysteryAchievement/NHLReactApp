import Axios from "axios";

console.log("baseURL:", import.meta.env.VITE_BASE_URL);
const httpClient = Axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string,
  timeout: 30000, // 30 seconds
  headers: {
    "Content-Type": "application/json",
  },
});

export default httpClient;

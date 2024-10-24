import axios from "axios";

const mainUrl = axios.create({
  baseURL: "https://dummyjson.com",
});

export default mainUrl;

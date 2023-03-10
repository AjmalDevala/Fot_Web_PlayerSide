import axios from "axios";

const Instance = axios.create({
  baseURL: "http://localhost:7007/api",
  // baseURL: "https://fotweb.evotym.site/api",
});

export default Instance;
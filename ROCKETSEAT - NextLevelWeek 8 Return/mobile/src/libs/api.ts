import axios from "axios";

export const api = axios.create({
  baseURL: "http://192.168.100.73:3333"
})
import axios from "axios";

const api = axios.create({
  // Substituir o IP 192.168.15.200 pelo o IP da máquina que está a api. Para encontrar o IP: ipconfig
  baseURL: "http://127.0.0.1:8000/api/",
});

export default api;

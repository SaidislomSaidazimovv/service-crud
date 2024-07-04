import http from "./config";
const order = {
  create: data => http.post("/order", data),
};
export default order;

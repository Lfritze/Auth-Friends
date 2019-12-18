import axios from "axios";

export const axiosWithAUth = () => {
  const token = localStorage.getItem("token");
  return axios.create({
    baseURL: "http://localhost:5000/api",
    headers: {
      authorization: token
    }
  });
};

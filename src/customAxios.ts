import axios from "axios";

const customAxios = axios.create({
  baseURL: "https://api.coinlore.net/api/",
  params: { apiKey: "" },
});

// Add a request interceptor
customAxios.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    return config;
  },
  function (error) {
    // Do something with request error
    console.log("error");
    return Promise.reject(error);
  }
);

customAxios.interceptors.response.use(
  function (response) {
    console.log(response);
    return response;
  },
  function (error) {
    console.log("rejected");
    return Promise.reject(error);
  }
);

export default customAxios;

import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    "Content-Type": "application/json",
    "ngrok-skip-browser-warning": "69420",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
    "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
    "Access-Control-Allow-Headers":
      "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers",
  },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const tokenValue = "Bearer " + token();
    if (tokenValue) {
      config.headers.Authorization = tokenValue;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

function token() {
  const storage = localStorage.getItem("user");
  if (storage) {
    const user = JSON.parse(storage);
    console.log("token", user?.data?.accessToken);
    if (user?.data?.accessToken) {
      return user?.data?.accessToken;
    } else {
      return null;
    }
  } else {
    return null;
  }
}

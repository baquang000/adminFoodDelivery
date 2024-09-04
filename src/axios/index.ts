import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/v1";

axios.interceptors.request.use((request) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    request.headers.Authorization = `Bearer ${accessToken}`;
  }

  return request;
});

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response) {
      if (error.response.status === 401) {
        localStorage.clear();

        return (window.location.href = "/");
      }

      return Promise.reject(error.response.data);
    }

    return Promise.reject(error);
  }
);

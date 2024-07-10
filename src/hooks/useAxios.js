import axios from "axios";
import { API_HOST } from "../network/domain";

const useAxios = () => {
  const instance = axios.create({
    baseURL: `${API_HOST}`,
  });

  instance.interceptors.request.use((request) => {
    return request
  })

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    function (error) {
      return Promise.reject(error);
    }  
  )

  return { instance }
}

export default useAxios
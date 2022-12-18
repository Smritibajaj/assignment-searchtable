import axios, {
  AxiosError,
  AxiosRequestConfig,

  AxiosInstance,
} from "axios";
import toast from "react-hot-toast";
//import { history } from '../helpers/history';
import { APP_USER_ROUTES } from "./constants/appRoutes";
import {
  getApiResponseErrorMessage,
  getResponseFromApiResponse,
} from "./common";


const axiosInstance: AxiosInstance = axios.create();

axios.defaults.baseURL = "";
axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    const userSessionActive = localStorage.getItem("token");
    if (config.headers) {
      config.headers["Content-Type"] = "application/json";
      // config.withCredentials = true;
      if (userSessionActive && config.headers) {
        config.headers["Authorization"] = `Bearer ${userSessionActive}`;
      }
    }

    return config;
  }
);
axiosInstance.interceptors.response.use(
  (response): any => getResponseFromApiResponse(response),
  (error: AxiosError): Promise<never> => {
    if (error.message === "Network error" && !error.response) {
      toast.error("Newtwork error - Make Sure Api is runnung");
    }
    if (error.response) {
      const { status, data }: any = error.response;
      const message = getApiResponseErrorMessage(data);
      if (status === 403 && !data?.errors?.code) {
        window.location.href = `/${APP_USER_ROUTES.unauthorised}`;
      }
      if (status === 404) {
        // window.location.pathname=(APP_USER_ROUTES.external.NOT_FOUND);
      } else if (status === 500) {
        toast.error("Internal Server Error");
      } else if (status === 417) {
        if (data.errors.service) {
          const errors = Object.values(data.errors.service);
          if (errors) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            errors.map((value: any) => toast.error(value));
          }
        } else {
          toast.error(message);
        }
      } else {
        toast.error(message);
      }
    }
    return Promise.reject(getApiResponseErrorMessage(error?.response?.data));
  }
);
export default axiosInstance;

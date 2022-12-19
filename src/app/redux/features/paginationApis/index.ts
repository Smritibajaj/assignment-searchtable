import { AxiosError, AxiosRequestConfig } from "axios";
import { API_URLS } from "../../../utils/constants/apiUrls";
import axiosInstance from "../../../utils/interceptor";
import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      params?: AxiosRequestConfig["params"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, params }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        params,
      });
      return { data: { ...result } };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err.response?.status,
          data: err.response?.data || err.message,
        },
      };
    }
  };

export const api = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: ``,
  }),
  keepUnusedDataFor: 0,
  refetchOnMountOrArgChange: 10,
  endpoints: (builder) => ({
    getTableData: builder.query<
      any,
      {
        page?: number;
        limit?: number;
        sort?: string;
        sortBy?: string;
        filter?: string;
      }
    >({
      query: (arg): any => {
        const { page, limit, sort, sortBy, filter } = arg;

        return {
          method: "get",
          url: `${API_URLS.getAllCompanies}`,
          params: { page, limit, sort, sortBy, filter },
        };
      },
    }),
  }),
});
export const { useGetTableDataQuery } = api;

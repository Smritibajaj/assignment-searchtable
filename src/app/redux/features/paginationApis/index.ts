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
      //data?: AxiosRequestConfig["data"];
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
      return { data: result };
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
    getAllSupplierRfq: builder.query<
      any,
      {
        user: string;
        c_uuid: string;
        page?: number;
        limit?: number;
        sort?: string;
        sortBy?: string;
        filter?: string;
      }
    >({
      query: (arg): any => {
        const { user, c_uuid, page, limit, sort, sortBy, filter } = arg;

        return {
          method: "get",
          url: `${API_URLS[user].getAllRfq}`,
          params: { c_uuid, page, limit, sort, sortBy, filter },
        };
      },
    }),
    getRfq: builder.query<
      any,
      {
        user: string;
        c_uuid: string;
        page?: number;
        limit?: number;
        sort?: string;
        sortBy?: string;
        filter?: string;
      }
    >({
      query: (arg): any => {
        const { user, c_uuid, page, limit, sort, sortBy, filter } = arg;
        return {
          method: "get",
          url: `${API_URLS[user].getAllRFQ}`,
          params: { c_uuid, page, limit, sort, sortBy, filter },
        };
      },
    }),

    getBuyers: builder.query<
      any,
      {
        user: string;
        c_uuid: string;
        page?: number;
        limit?: number;
        sort?: string;
        sortBy?: string;
        filter?: string;
      }
    >({
      query: (arg): any => {
        const { user, c_uuid, page, limit, sort, sortBy, filter } = arg;
        return {
          method: "get",
          url: `${API_URLS[user].getBuyers}`,
          params: { c_uuid, page, limit, sort, sortBy, filter },
        };
      },
    }),
    getSupplier: builder.query<
      any,
      {
        user: string;
        c_uuid: string;
        page?: number;
        limit?: number;
        sort?: string;
        sortBy?: string;
        filter?: string;
      }
    >({
      query: (arg): any => {
        const { user, c_uuid, page, limit, sort, sortBy, filter } = arg;
        return {
          method: "get",
          url: `${API_URLS[user]?.getSupplierList}`,
          params: { c_uuid, page, limit, sort, sortBy, filter },
        };
      },
    }),
    getAllBillingEntities: builder.query<
      any,
      {
        user: string;
        c_uuid: string;
        page?: number;
        limit?: number;
        sort?: string;
        sortBy?: string;
        filter?: string;
      }
    >({
      query: (arg): any => {
        const { user, c_uuid, page, limit, sort, sortBy, filter } = arg;
        return {
          method: "get",
          url: `${API_URLS[user].getAllBillingEntity}`,
          params: { c_uuid, page, limit, sort, sortBy, filter },
        };
      },
    }),
    getInvitedUsers: builder.query<
      any,
      {
        user: string;
        c_uuid: string;
        page?: number;
        limit?: number;
        sort?: string;
        sortBy?: string;
        filter?: string;
      }
    >({
      query: (arg): any => {
        const { user, c_uuid, page, limit, sort, sortBy, filter } = arg;
        return {
          method: "get",
          url: `${API_URLS[user].getCompanyInvitedUsers}`,
          params: { c_uuid, page, limit, sort, sortBy, filter },
        };
      },
    }),
  }),
});
export const {
  useGetRfqQuery,
  useGetInvitedUsersQuery,
  useGetAllSupplierRfqQuery,
  useGetBuyersQuery,
  useGetAllBillingEntitiesQuery,
  useGetSupplierQuery,
} = api;

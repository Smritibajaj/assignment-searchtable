import axiosInstance from "../../../utils/interceptor";
import { API_URLS } from "../../../utils/constants/apiUrls";
import { createAsyncThunk } from "@reduxjs/toolkit";

/**
 * Auth service for make call to the server to get Auth Data
 */

export const login = createAsyncThunk("authSlice/login", async (data: any) => {
  const request = { ...data.body };
  const result = await axiosInstance.post(API_URLS.login, request);
  return result;
});

export const resendEmailVerfication = createAsyncThunk(
  "authSlice/resendEmailVerification",
  async (data: any) => {
    const request = { ...data.body };
    const result =
      data.user &&
      (await axiosInstance.post(
        API_URLS.resendEmailVerifcation,
        request
      ));
    return result;
  }
);

export const register = createAsyncThunk(
  "authSlice/register",
  async (data: any) => {
    let request = { ...data.body };

    const result = await axiosInstance.post(
      API_URLS.register,
      request
    );
    return result;
  }
);
export const forgotPassword = createAsyncThunk(
  "authSlice/forgotPassword",
  async (data: any) => {
    const request = { ...data.body };
    const result = await axiosInstance.post(
      API_URLS.forgotPassword,
      request
    );
    return result;
  }
);
export const verifyPasswordToken = createAsyncThunk(
  "authSlice/verifyPasswordToken",
  async (data: any) => {
    const request = { ...data.body };
    const result = await axiosInstance.post(
      API_URLS.verifyPasswordToken,
      request
    );
    return result;
  }
);
export const resetPassword = createAsyncThunk(
  "authSlice/resetPassword",
  async (data: any) => {
    const request = { ...data.body };
    const result = await axiosInstance.post(
      API_URLS.resetPassword,
      request
    );
    return result;
  }
);

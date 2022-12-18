import axiosInstance from "../../../utils/interceptor";
import { API_URLS } from "../../../utils/constants/apiUrls";
import { IUpdateUserObject } from "../../../utils/ObjectTypes";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserProfile = createAsyncThunk('userSlice/getUser', async () => {
  const result = await axiosInstance.get(API_URLS.currentUser);
  return result;
});

export const updateUserProfile = createAsyncThunk('userSlice/updateUser',async (data: IUpdateUserObject) => {
  const request = { ...data.body };
  const result = await axiosInstance.put(
    API_URLS[data.user].profileUpdate(data.id),
    request
  );
  return result;
});

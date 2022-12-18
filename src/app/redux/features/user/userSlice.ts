import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUser, IUserState } from "../../interfaces";
import { getUserProfile } from "./userApi";

const initialState: IUserState = {
  data: null,
  status: "idle",
};

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    logout: () => initialState,
    setUser: (state, action: PayloadAction<IUser>) => {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getUserProfile.pending, (state, action) => {
      state.status = "pending";
    });
    builder.addCase(getUserProfile.fulfilled, (state, action) => {
      state.status = "succeeded";
      state.data = action.payload;
    });
    builder.addCase(getUserProfile.rejected, (state, action) => {
      state.status = "failed";
    });
  },
});

export default userSlice.reducer;

export const { logout, setUser } = userSlice.actions;

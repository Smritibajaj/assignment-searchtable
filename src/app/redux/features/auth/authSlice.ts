import { createSlice } from "@reduxjs/toolkit";
import {
  login,
  register,
  forgotPassword,
  resendEmailVerfication,
  resetPassword,
} from "./authApi";

const initialState: any = {
  login: {
    data: null,
    status: "idle",
  },
  register: {
    data: null,
    status: "idle",
  },
  forgotPassword: {
    data: null,
    status: "idle",
  },
  resetPassword: {
    data: null,
    status: "idle",
  },
  verifyPasswordToken: {
    data: null,
    status: "idle",
  },
  resendEmailVerify: {
    data: null,
    status: "idle",
  },
};

const authSlice = createSlice({
  initialState,
  name: "authSlice",
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state, action) => {
      state.login.status = "pending";
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.login.status = "succeeded";
      state.login.data = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.login.status = "failed";
      state.login.data = action.error.message;
    });
    builder.addCase(register.pending, (state, action) => {
      state.register.status = "pending";
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.register.status = "succeeded";
      state.register.data = action.payload;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.register.status = "failed";
      state.register.data = action.error.message;
    });
    builder.addCase(forgotPassword.pending, (state, action) => {
      state.forgotPassword.status = "pending";
    });
    builder.addCase(forgotPassword.fulfilled, (state, action) => {
      state.forgotPassword.status = "succeeded";
      state.forgotPassword.data = action.payload;
    });
    builder.addCase(forgotPassword.rejected, (state, action) => {
      state.forgotPassword.status = "failed";
      state.forgotPassword.data = action.error.message;
    });
    builder.addCase(resendEmailVerfication.pending, (state, action) => {
      state.resendEmailVerify.status = "pending";
    });
    builder.addCase(resendEmailVerfication.fulfilled, (state, action) => {
      state.resendEmailVerify.status = "succeeded";
      state.resendEmailVerify.data = action.payload;
    });
    builder.addCase(resendEmailVerfication.rejected, (state, action) => {
      state.resendEmailVerify.status = "failed";
      state.resendEmailVerify.data = action.error.message;
    });
    builder.addCase(resetPassword.pending, (state, action) => {
      state.resetPassword.status = "pending";
    });
    builder.addCase(resetPassword.fulfilled, (state, action) => {
      state.resetPassword.status = "succeeded";
      state.resetPassword.data = action.payload;
    });
    builder.addCase(resetPassword.rejected, (state, action) => {
      state.resetPassword.status = "failed";
      state.resetPassword.data = action.error.message;
    });
  },
});
export default authSlice.reducer;

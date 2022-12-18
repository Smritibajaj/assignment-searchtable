import React, { useState, useEffect } from "react";
import Button from "../../../common/Button";
import {
  API_CONSTANTS,
  LOADING_TEXT,
  DEFAULT_ERROR_MESSAGE,
} from "../../../utils/constants/constants";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";
import CommonInput from "../../../common/Input";
import AppLogo from "../../../common/AppLogo";
import {
  verifyPasswordToken,
  resetPassword,
} from "../../../redux/features/auth/authApi";
import * as yup from "yup";
import { useFormik } from "formik";
import { AppDispatch } from "../../../redux/store";
interface Props {
  routeKey: string;
}

// interface ValidationObject {
//   token?: string;
//   password?: string;
//   confirmPassword?: string;
// }

const validationSchema = yup.object().shape({
  token: yup.string().nullable().required("Required"),
  password: yup.string().nullable().required("Required"),
  confirmPassword: yup.string().nullable().required("Required"),
});

const ResetPassword: React.FC<Props> = (props) => {
  const { routeKey } = props;
  const param = routeKey;
  const dispatch = useDispatch<AppDispatch>();
  const resetPasswordSelector = useSelector(
    (state: any) => state.auth.resetPassword
  );
  const verifyPasswordTokenSelector = useSelector(
    (state: any) => state.auth.verifyPasswordToken
  );

  const [loading, setLoading] = useState({
    verifyPassword: false,
    resetPassword: false,
  });

  const formik = useFormik({
    initialValues: {
      token: window.location.search.replace("?token=", ""),
      password: "",
      confirmPassword: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values: any) => {
      if (values.password === values.confirmPassword) {
        dispatch(
          resetPassword({
            body: {
              token: window.location.search.replace("?token=", ""),
              password: values.password,
            },
            user: param,
          })
        );
      }
    },
  });

  useEffect(() => {
    dispatch(
      verifyPasswordToken({
        body: { token: window.location.search.replace("?token=", "") },
        user: param,
      })
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    let toastId: any;
    if (verifyPasswordTokenSelector?.status === API_CONSTANTS.loading) {
      setLoading({
        ...loading,
        verifyPassword: true,
      });
      toastId = toast.loading(LOADING_TEXT.processing);
    }
    if (
      verifyPasswordTokenSelector?.status === API_CONSTANTS.success &&
      loading.verifyPassword
    ) {
      setLoading({
        ...loading,
        verifyPassword: false,
      });
      toast.dismiss(toastId);
    }
    if (
      verifyPasswordTokenSelector?.status === API_CONSTANTS.error &&
      loading.verifyPassword
    ) {
      setLoading({
        ...loading,
        verifyPassword: false,
      });
      toast.dismiss(toastId);
      toast.error(
        verifyPasswordTokenSelector.data || DEFAULT_ERROR_MESSAGE.error1
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [verifyPasswordTokenSelector]);

  useEffect(() => {
    let toastId: any;
    if (resetPasswordSelector?.status === API_CONSTANTS.loading) {
      setLoading({
        ...loading,
        resetPassword: true,
      });
      toastId = toast.loading(LOADING_TEXT.processing);
    }
    if (
      resetPasswordSelector?.status === API_CONSTANTS.success &&
      loading.resetPassword
    ) {
      setLoading({
        ...loading,
        resetPassword: false,
      });
      toast.dismiss(toastId);
      toast.success(resetPasswordSelector.data?.message);
      //(`/${routeKey}/${APP_USER_ROUTES.login}`);
    }
    if (
      resetPasswordSelector?.status === API_CONSTANTS.error &&
      loading.resetPassword
    ) {
      setLoading({
        ...loading,
        resetPassword: false,
      });
      toast.dismiss(toastId);
      toast.error(resetPasswordSelector.data || DEFAULT_ERROR_MESSAGE.error1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetPasswordSelector]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-2/3">
        <div className="mb-8">
          <AppLogo />
        </div>
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-medium text-brand-text-title">
            Reset your password
          </h1>
          <p className="text-brand-text-primary text-base font-normal">
            If you want to reset your password, please enter your new password
            below.
          </p>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            formik.handleSubmit();
          }}
        >
          <CommonInput
            type="password"
            name="password"
            label="New Password"
            placeholder="New Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            validationKey={formik.touched.password && formik.errors.password}
          />
          <CommonInput
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="Confirm Password"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            validationKey={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <Button
            type="submit"
            className="w-full block mt-8 py-3 px-2 bg-brand-primary-blue hover:bg-brand-hover-blue text-brand-extra-background"
            text={"Reset password"}
          />
        </form>
        <p className="mt-4 text-center text-sm text-brand-text-primary">
          {
            "If you didn’t request a password recovery link, please ignore this "
          }
        </p>
      </div>
    </div>
  );
};
export default ResetPassword;

import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import {
  API_CONSTANTS,
  LOADING_TEXT,
  DEFAULT_ERROR_MESSAGE,
  DEFAULT_SUCCESS_MESSAGE,
} from "../../../utils/constants/constants";
import { APP_USER_ROUTES } from "../../../utils/constants/appRoutes";
import { useDispatch, useSelector } from "react-redux";
import {
  login,
  resendEmailVerfication as resendEmailVerification,
} from "../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import CommonInput from "../../../common/Input";
import AuthHelpers from "../../../helpers/AuthHelpers";
import AppLogo from "../../../common/AppLogo";
import Button from "../../../common/Button";
import FullPageLoader from "../../../common/Loader/FullPageLoader";
import { useFormik } from "formik";
import * as yup from "yup";
import { AppDispatch } from "../../../redux/store";
import { RouteComponent } from "../../../utils/common";

export interface ValidationObject {
  email: string;
  password: string;
}

const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please write a valid email")
    .nullable()
    .required("Required"),
  password: yup.string().nullable().required("Required"),
});

const Login: React.FC<RouteComponent> = (props: RouteComponent) => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const loginSelector = useSelector((state: any) => state.auth.login);
  const resendEmailVerifySelector = useSelector(
    (state: any) => state.auth.resendEmailVerify
  );
  const [loading, setLoading] = useState(false);
  const [showResendEmail, setshowResendEmail] = useState(false);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const email_verified: any = query.get("ev") || "";
  let externalMessage: any = {
    success: "Your email is successfully verified",
    token_expired: "Email link is expired. Please request the link again",
    invalid_user: "Invalid token in the link",
    already_verified: "Your email is already verified. Please login",
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        login({
          body: { ...values },
        })
      );
    },
  });

  const makeUserLoggedIn = () => {
    AuthHelpers.saveTokenToLocalStorage(loginSelector.data?.token);
    window.location.href = `/${APP_USER_ROUTES.buyer}/${APP_USER_ROUTES.dashboard}`;
  };
  
  const resendEmailForVerification = () => {
    dispatch(
      resendEmailVerification({
        body: {
          email: formik.values.email,
        }
      })
    );
  };

  useEffect(() => {
    let toastId: any;
    if (resendEmailVerifySelector?.status === API_CONSTANTS.loading) {
      setLoading(true);
      toastId = toast.loading(LOADING_TEXT.processing);
    }
    if (
      resendEmailVerifySelector?.status === API_CONSTANTS.success &&
      loading
    ) {
      setLoading(false);
      toast.dismiss(toastId);
      setshowResendEmail(false);
      toast.success(DEFAULT_SUCCESS_MESSAGE.verification);
    }
    if (resendEmailVerifySelector?.status === API_CONSTANTS.error && loading) {
      setLoading(false);
      toast.dismiss(toastId);
      toast.error(
        resendEmailVerifySelector.data || DEFAULT_ERROR_MESSAGE.error1
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resendEmailVerifySelector]);

  useEffect(() => {
    let toastId: any;
    if (loginSelector?.status === API_CONSTANTS.loading) {
      setLoading(true);
      toastId = toast.loading(LOADING_TEXT.processing);
    }
    if (loginSelector?.status === API_CONSTANTS.success && loading) {
      //setLoading(false);
      toast.dismiss(toastId);
      makeUserLoggedIn();
    }
    if (loginSelector?.status === API_CONSTANTS.error && loading) {
      setLoading(false);
      toast.dismiss(toastId);
      toast.error(loginSelector.data || DEFAULT_ERROR_MESSAGE.error1);
      if (loginSelector.data === "Please verify your email first") {
        setshowResendEmail(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loginSelector]);

  if (loading) {
    return <FullPageLoader />;
  }

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-2/3">
        <div className="mb-8">
          <AppLogo />
        </div>
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-medium text-brand-text-title">
            Login
          </h1>
          <p className="text-brand-text-primary text-base font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <CommonInput
            name="email"
            type="email"
            label="Email"
            placeholder="john@doe.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            validationKey={formik.touched.email && formik.errors.email}
          />
          <CommonInput
            name="password"
            type="password"
            label="Password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            validationKey={formik.touched.password && formik.errors.password}
          />
          <>
            <p className="mt-4 text-right">
              <Link
                className="text-brand-primary-blue"
                to={`/${APP_USER_ROUTES.buyer}/${APP_USER_ROUTES.forgotPassword}`}
              >
                Forgot Password
              </Link>
            </p>
          </>
          <Button
            type={"submit"}
            className="mt-8 px-2 w-full py-3 bg-brand-primary-blue hover:bg-brand-hover-blue text-brand-extra-background"
            text={"Log in"}
          />
        </form>

        {showResendEmail && (
          <p className="text-brand-primary-red text-sm py-2">
            {DEFAULT_ERROR_MESSAGE.prompt}{" "}
            <a
              href="#"
              onClick={resendEmailForVerification}
              className="text-brand-primary-blue"
            >
              Click here
            </a>{" "}
            to resend verification email.
          </p>
        )}
      </div>
    </div>
  );
};
export default Login;

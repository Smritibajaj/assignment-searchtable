import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "../../../common/Button";
import {
  API_CONSTANTS,
  LOADING_TEXT,
  DEFAULT_ERROR_MESSAGE,
  DEFAULT_SUCCESS_MESSAGE,
} from "../../../utils/constants/constants";
import { handleCheckValidation } from "../../../helpers/ValidationHelpers";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword } from "../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import CommonInput from "../../../common/Input";
import AppLogo from "../../../common/AppLogo";
import { APP_USER_ROUTES } from "../../../utils/constants/appRoutes";
import { AppDispatch } from "../../../redux/store";
import { RouteComponent } from "../../../utils/common";

interface ValidationObject {
  email?: string;
}

const ForgotPassword: React.FC<RouteComponent> = (props: RouteComponent) => {
  const { routeKey } = props;
  const param = routeKey;
  const dispatch = useDispatch<AppDispatch>();
  const forgotPasswordSelector = useSelector(
    (state: any) => state.auth.forgotPassword
  );
  const [forgotpasswordDetails, setForgotpasswordDetails] = useState({
    email: "",
  });
  const [validationObj, setValidationObj] = useState<ValidationObject>({});
  const [loading, setLoading] = useState(false);

  const handleInputChange = (key: any, value: any) => {
    setForgotpasswordDetails({ ...forgotpasswordDetails, [key]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const validation: ValidationObject = handleCheckValidation(
      forgotpasswordDetails
    );
    setValidationObj(validation);
    if (validation && !validation.email) {
      /// callback send email function
      dispatch(
        forgotPassword({
          body: { ...forgotpasswordDetails, type: param },
          user: param,
        })
      );
    }
  };

  useEffect(() => {
    let toastId: any;
    if (forgotPasswordSelector?.status === API_CONSTANTS.loading) {
      setLoading(true);
      toastId = toast.loading(LOADING_TEXT.processing);
    }
    if (forgotPasswordSelector?.status === API_CONSTANTS.success && loading) {
      setLoading(false);
      toast.dismiss(toastId);
      toast.success(
        forgotPasswordSelector.data?.message ||
          DEFAULT_SUCCESS_MESSAGE.verification
      );
    }
    if (forgotPasswordSelector?.status === API_CONSTANTS.error && loading) {
      setLoading(false);
      toast.dismiss(toastId);
      toast.error(forgotPasswordSelector.data || DEFAULT_ERROR_MESSAGE.error1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [forgotPasswordSelector]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-2/3">
        <div className="mb-8">
          <AppLogo />
        </div>
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-medium text-brand-text-title">
            Forgot Password
          </h1>
          <p className="text-brand-text-primary text-base font-normal">
            Enter your email to receive the password reset link to reset the passwotd
          </p>
        </div>
        <form onSubmit={onSubmit}>
          <CommonInput
            type="email"
            label="Email"
            placeholder="john@doe.com"
            value={forgotpasswordDetails.email}
            onChange={(e: any) => handleInputChange("email", e.target.value)}
            validationKey={validationObj?.email}
          />
          <Button
            type="submit"
            className="w-full block mt-8 py-3 px-2 bg-brand-primary-blue hover:bg-brand-hover-blue text-brand-extra-background"
            text={"Send Recovery Email"}
          />
        </form>
        <p className="mt-4 text-center text-brand-text-primary">
          {"Don't have account? "}
          <Link
            className="text-brand-primary-blue"
            to={`/${routeKey}/${APP_USER_ROUTES.register}`}
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};
export default ForgotPassword;

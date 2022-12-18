import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../common/Button";
import {
  API_CONSTANTS,
  LOADING_TEXT,
  DEFAULT_ERROR_MESSAGE,
  DEFAULT_SUCCESS_MESSAGE
} from "../../../utils/constants/constants";
import { APP_USER_ROUTES } from "../../../utils/constants/appRoutes";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../../../redux/features/auth/authApi";
import toast from "react-hot-toast";
import CommonInput from "../../../common/Input";
import { getFirstLastNameSepration } from "../../../utils/common";
import AppLogo from "../../../common/AppLogo";
import { useFormik } from "formik";
import * as yup from "yup";
import { AppDispatch } from "../../../redux/store";
interface Props {
  history?: any;
  routeKey: string;
}

export interface ValidationObject {
  name?: string;
  companyName?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
  //privacy?: boolean;
  master_key?: string;
}

const initialStage = {
  name: "",
  companyName: "",
  email: "",
  password: "",
  //confirmPassword: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().nullable().required("Required"),
  companyName: yup.string().nullable().required("Required"),
  email: yup
    .string()
    .email("Please write a valid email")
    .nullable()
    .required("Required"),
  password: yup.string().nullable().required("Required"),
  //confirmPassword:  yup.string().nullable().required("Required"),
});

const Register: React.FC<Props> = (props) => {
  const { routeKey } = props;
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const param = routeKey;

  const registerSelector = useSelector((state: any) => state.auth.register);
  const formik = useFormik({
    initialValues: initialStage,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(
        register({
          body: {
            first_name: getFirstLastNameSepration(values.name).first_name,
            last_name: getFirstLastNameSepration(values.name).last_name,
            company_name: values.companyName,
            email: values.email,
            password: values.password,
            type: param,
          },
          user: param,
        })
      );
    },
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let toastId: any;
    if (registerSelector?.status === API_CONSTANTS.loading) {
      setLoading(true);
      toastId = toast.loading(LOADING_TEXT.processing);
    }
    if (registerSelector?.status === API_CONSTANTS.success && loading) {
      setLoading(false);
      toast.dismiss(toastId);
      toast.success(DEFAULT_SUCCESS_MESSAGE.verification, { duration: 1000000 });
      navigate(`/${APP_USER_ROUTES.buyer}/${APP_USER_ROUTES.login}`);
      formik.resetForm({ values: { ...initialStage } });
    }
    if (registerSelector?.status === API_CONSTANTS.error && loading) {
      setLoading(false);
      toast.dismiss(toastId);
      toast.error(registerSelector.data || DEFAULT_ERROR_MESSAGE.error1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [registerSelector]);

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div className="w-2/3">
        <div className="mb-8">
          <AppLogo />
        </div>
        <div className="mb-8">
          <h1 className="mb-2 text-2xl font-medium text-brand-text-title">
            Register on Buydesk
          </h1>
          <p className="text-brand-text-primary text-base font-normal">
            Create a new purchaser account to start procurement management with
            Buydesk
          </p>
        </div>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            formik.handleSubmit(e);
          }}
          autoComplete={"off"}
        >
          <CommonInput
            name="name"
            type="text"
            label="Name"
            placeholder="Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            validationKey={formik.touched.name && formik.errors.name}
          />

          <CommonInput
            name="companyName"
            type="text"
            label="Organisation Name"
            placeholder="Organisation Name"
            value={formik.values.companyName}
            onChange={formik.handleChange}
            validationKey={
              formik.touched.companyName && formik.errors.companyName
            }
          />

          <CommonInput
            type="email"
            name="email"
            label="Email"
            placeholder="john@example.com"
            value={formik.values.email}
            onChange={formik.handleChange}
            validationKey={formik.touched.email && formik.errors.email}
          />
          <CommonInput
            type="password"
            label="Password"
            name="password"
            placeholder="Password"
            value={formik.values.password}
            onChange={formik.handleChange}
            validationKey={formik.touched.password && formik.errors.password}
          />
          {/* <label className="mt-6">
            <input
              type="checkbox"
              onClick={(e) => handleInputChange(e,"privacy", true)}
              required
              className="ring-0 focus:ring-0"
            />
            <span className="ml-2 text-brand-extra-icon font-medium">
              I agree to the <span className="underline">privacy policy</span>
            </span>
          </label> */}

          <Button
            type="submit"
            className="w-full block mt-8 py-3 px-2 bg-brand-primary-blue hover:bg-brand-hover-blue text-brand-extra-background"
            text={" Register"}
          />
        </form>

        <p className="mt-4 text-center text-brand-text-primary">
          {"Already have an account? "}
          <Link
            className="text-brand-primary-blue"
            to={`/${routeKey}/${APP_USER_ROUTES.login}`}
          >
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};
export default Register;

import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import PageTitle from "../../../common/Typography/PageTitle";
import * as yup from "yup";
import Input from "../../../common/Input";
import Button from "../../../common/Button";
import { updateBuyerProfile } from "../../../redux/features/profile/profileApi";
import { useSelector } from "react-redux";
import {
  getFirstLastNameSepration,
  RouteComponent,
} from "../../../utils/common";
import toast from "react-hot-toast";
import { LOADING_TEXT } from "../../../utils/constants/constants";
import { useCompanySelector } from "../../../hooks/useCompanySelector";
import Loader from "../../../common/Loader";
const initialState = {
  name: "",
  alternative_email: "",
  email: "",
  designation: "",
  contact_number: "",
};

const validationSchema = yup.object().shape({
  name: yup.string().nullable().required("Required"),
  alternative_email: yup.string().email().nullable().required("Required"),
  designation: yup.string().nullable().required("Required"),
  contact_number: yup.string().nullable().required("Required"),
});
const Profile: React.FC<RouteComponent> = (props: RouteComponent) => {
  const userProfile = useSelector((state: any) => state.user.data);
  const { user, c_uuid } = useCompanySelector(props.routeKey);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    formik.setValues({
      name: userProfile.name,
      alternative_email: userProfile.alternative_email,
      email: userProfile.email,
      designation: userProfile.designation,
      contact_number: userProfile.contact_number,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const formik = useFormik({
    initialValues: initialState,
    validationSchema: validationSchema,
    onSubmit: (values) => {
      let toastId: any;
      toastId = toast.loading(LOADING_TEXT.processing);
      updateBuyerProfile({
        user,
        c_uuid,
        data: {
          first_name: getFirstLastNameSepration(values.name).first_name,
          last_name:
            getFirstLastNameSepration(values.name).last_name ?? undefined,
          alternative_email: values.alternative_email,
          designation: values.designation,
          contact_number: values.contact_number,
        },
      }).then((data: any) => {
        formik.setSubmitting(false);
        setLoading(false);
        toast.dismiss(toastId);
        toast.success("Updated Successfully");
      });
    },
  });

  if (loading) {
    return <Loader />;
  }

  return (
    <React.Fragment>
      <PageTitle>Profile Details</PageTitle>
      <div className="bg-white px-6 my-6">
        <form onSubmit={formik.handleSubmit}>
          <div className="grid grid-cols-2 gap-4">
            <Input
              label={"Name"}
              placeholder={"Enter your name"}
              name={"name"}
              value={formik.values.name}
              onChange={formik.handleChange}
              validationKey={formik.touched.name && formik.errors.name}
            />
            <Input
              label={"Email"}
              placeholder={"Enter your email address"}
              name={"email"}
              value={formik.values.email}
              onChange={formik.handleChange}
              disabled={true}
              validationKey={formik.touched.email && formik.errors.email}
            />
            <Input
              label={"Alternate Email"}
              placeholder={"Enter alternative email address"}
              name={"alternative_email"}
              value={formik.values.alternative_email}
              onChange={formik.handleChange}
              validationKey={
                formik.touched.alternative_email &&
                formik.errors.alternative_email
              }
            />
            <Input
              label={"Contact Number"}
              name={"contact_number"}
              placeholder={"Enter your Contact number"}
              value={formik.values.contact_number}
              onChange={formik.handleChange}
              validationKey={
                formik.touched.contact_number && formik.errors.contact_number
              }
            />
            <Input
              //style="col-[1/-1]"
              label={"Designation"}
              name={"designation"}
              placeholder={"Enter your designation"}
              value={formik.values.designation}
              onChange={formik.handleChange}
              validationKey={
                formik.touched.designation && formik.errors.designation
              }
            />
          </div>
          <div className="py-6 grid place-content-end">
            <Button type="submit" text="Save" disabled={formik.isSubmitting} />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default Profile;

import * as yup from "yup";
export let companySchema = yup.object().shape({
    uuid: yup.string().nullable().required("Required"),
    name: yup.string().nullable().required("Required"),
    contact_number: yup.string().nullable().required("Required"),
    alternative_contact_number: yup.string().nullable(),
    organisation_type_id: yup.string().nullable().required("Required"),
    address: yup.string().nullable().required("Required"),
    payment_terms: yup.string().nullable(),
    pincode: yup.string().nullable().required("Required"),
    revenue_type_id: yup.string().nullable(),
    website: yup.string().nullable(),
    employee_range_id: yup.string().nullable(),
    no_of_offices: yup.string().nullable(),
    cin_number: yup.string().nullable(),
    pan_number: yup.string().nullable(),
    tan_number: yup.string().nullable(),
    gstin_number: yup.string().nullable(),
    company_type: yup.string().nullable().required("Required"),
    city_id: yup.string().nullable().required("Required"),
  });
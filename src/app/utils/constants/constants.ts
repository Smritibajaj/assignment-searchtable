export enum PLATFORM_USERS {
  ADMIN = "system_admin",
  BUYER = "buyer",
  SUPPLIER = "supplier",
}

export enum ROUTE {
  MAIN = ""
}

export const API_CONSTANTS = {
  success: "succeeded",
  error: "failed",
  loading: "pending",
};

export enum Action {
  ADD = "Add",
  EDIT = "Edit",
}

export interface Image {
  url: string;
  label: string;
}

export const FORM_ERROR_MESSAGES = {
  REQUIRED_MESSAGE: "Required!",
  EMPTY_MESSAGE: "Please select a value",
  INVALID_EMAIL_ADDRESS: "Please enter a valid email address",
  PASSWORD_CRITERIA: "Password should be of atleast 8 characters",
  INVALID_NAME: "Please enter a valid full name",
  INVALID_NUMBER: "please enter valid contact number",
  INVALID_INPUT: "please enter a valid input",
  INVALID_DOMAIN: "please enter a valid domain",
};
export const LOADING_TEXT = {
  processing: "Processing...",
  fetching: "Fetching...",
  loading: "Loading...",
  saving: "Saving...",
};

export const DEFAULT_ERROR_MESSAGE = {
  error1: "Error while fetching",
  prompt:
    "Your email is not verified. Please check your inbox to verify the email.",
  failed: "Failed",
};

export const DEFAULT_SUCCESS_MESSAGE = {
  verification: "Email verification link sent to email. Kindly check your email.",
  success: "Success",
};

export const toastOptions = {
  duration: 4000,
  success: {
    style: {
      background: "#F3FCF4",
      border: "1px solid #4FD564",
      borderRadius: "4px",
    },
  },
  error: {
    style: {
      background: "#FDF6F6",
      border: "1px solid #EC4140",
      borderRadius: "4px",
    },
  },
};

// Company Constans

// Billing Entity Constants
export const BILLING_ENTITY_UPDATE_KEYS = [
  "address",
  "c_uuid",
  "gstin_number",
  "legal_name",
  "pincode",
  "city_id",
  "tax_type",
];

export const RFQ_RECOMMENDATION_TYPE = {
  auto: "auto",
  single: "single",
};

export const RFQ_RECOMMENDATION_STATUS = {
  pending: "pending",
  approved: "approved",
};

export const RFQ_RECOMMENDATION_AUTO_CRITERIA = {
  lowest_total_cost: "lowest_total_cost",
  lowest_line_item_total_cost: "lowest_line_item_total_cost",
};

export const RFQ_PRODUCT_UNIT_TYPES = [
  {
    key: "PCS",
    value: "PCS",
    text: "PCS",
  },
  {
    key: "BAG",
    value: "BAG",
    text: "BAG",
  },
  {
    key: "BOX",
    value: "BOX",
    text: "BOX",
  },
  {
    key: "BTL",
    value: "BTL",
    text: "BTL",
  },
  {
    key: "CAN",
    value: "CAN",
    text: "CAN",
  },
  {
    key: "CBM",
    value: "CBM",
    text: "CBM",
  },
  {
    key: "CCM",
    value: "CCM",
    text: "CCM",
  },
  {
    key: "CMS",
    value: "CMS",
    text: "CMS",
  },
  {
    key: "CTN",
    value: "CTN",
    text: "CTN",
  },
  {
    key: "DOZ",
    value: "DOZ",
    text: "DOZ",
  },
  {
    key: "KG",
    value: "KG",
    text: "KG",
  },
  {
    key: "KM",
    value: "KM",
    text: "KM",
  },
  {
    key: "LTR",
    value: "LTR",
    text: "LTR",
  },
  {
    key: "MLT",
    value: "MLT",
    text: "MLT",
  },
  {
    key: "MTR",
    value: "MTR",
    text: "MTR",
  },
  {
    key: "MTS",
    value: "MTS",
    text: "MTS",
  },
  {
    key: "NOS",
    value: "NOS",
    text: "NOS",
  },
  {
    key: "PAC",
    value: "PAC",
    text: "PAC",
  },
  {
    key: "PRS",
    value: "PRS",
    text: "PRS",
  },
  {
    key: "QTL",
    value: "QTL",
    text: "QTL",
  },
  {
    key: "ROL",
    value: "ROL",
    text: "ROL",
  },
  {
    key: "SET",
    value: "SET",
    text: "SET",
  },
  {
    key: "SQF",
    value: "SQF",
    text: "SQF",
  },
  {
    key: "SQM",
    value: "SQM",
    text: "SQM",
  },
  {
    key: "SQY",
    value: "SQY",
    text: "SQY",
  },
  {
    key: "TBS",
    value: "TBS",
    text: "TBS",
  },
  {
    key: "TGM",
    value: "TGM",
    text: "TGM",
  },
  {
    key: "TON",
    value: "TON",
    text: "TON",
  },
  {
    key: "TUB",
    value: "TUB",
    text: "TUB",
  },
  {
    key: "UNT",
    value: "UNT",
    text: "UNT",
  },
  {
    key: "YDS",
    value: "YDS",
    text: "YDS",
  },
];

// Date and Time Format String
export const DATETIME_FORMAT_STRINGS =  {
  HUMAN_FRIENDLY_STRING : 'MMM DD, YYYY hh:mmA',
  INPUT_FRIENDLY_STRING: 'DD-MM-YYYY h:mm A',
  STANDARD_DATE_STRING: 'DD/MM/YYYY',
};


// File Samples Constants
export const RFQ_PRODUCT_UPLOAD_SAMPLE_FILE = "https://buydesk-assets.s3.ap-south-1.amazonaws.com/RFQ_Sample.xlsx";
export const BUYER_BULK_USER_UPLOAD_SAMPLE_FILE = "https://buydesk-assets.s3.ap-south-1.amazonaws.com/Bulk_Upload_Users_Buyer_Sample.xlsx";
export const SUPPLIER_BULK_USER_UPLOAD_SAMPLE_FILE = "https://buydesk-assets.s3.ap-south-1.amazonaws.com/Bulk_Upload_Users_Supplier_Sample.xlsx";
export const INITIAL_PRODUCT = {
  name: "",
  quantity: 0,
  target_price: 0,
  category_id: null,
  unit: "",
  specification: null,
  id: "",
};

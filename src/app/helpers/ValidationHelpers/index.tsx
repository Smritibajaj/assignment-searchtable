import { FORM_ERROR_MESSAGES } from "../../utils/constants/constants";

/**
 * Validation helper functions to match the regex of strings and validate values
 */
const ValidationHelpers = {
  checkLimitValue: (value: any) => {
    if (value > 10000) return "Please enter limit under 10000";
  },
  isEmpty: (value: any) => {
    if (value && value.length > 0) {
      return null;
    }
    return FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
  },
  checkEmail: (value: any) => {
    /* eslint-disable-next-line */
    const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_EMAIL_ADDRESS;
    }
    return null;
  },
  checkFullName: (value: any) => {
    const regex = /[a-zA-Z0-9'-]\s{0,}/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NAME;
    }
    return null;
  },
  checkFirstName: (value : any) => {
    const regex = /^[a-zA-Z\s]{0,30}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NAME;
    }
    return null;
  },
  checkPhoneNumber: (value: any) => {
    const regex = /^[0-9]{0,12}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_NUMBER;
    }
    return null;
  },
  checkNumber: (value:any) => {
    const regex = /^[0-9]{0,}$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_INPUT;
    }
    return null;
  },
  checkImageFile: (value: any) => {
    const regex = /.(gif|jpe?g|tiff?|png|webp|bmp)$/i;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_INPUT;
    }
    return null;
  },
  checkExcelFile: (value: any) => {
    const regex = /^.+\.(xlsx|xls|csv)$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_INPUT;
    }
    return null;
  },
  checkPassword: (value: any) => {
    if (value && value.length < 8) {
      return FORM_ERROR_MESSAGES.PASSWORD_CRITERIA;
    }
    return null;
  },
  checkDomain: (value: any) => {
    /* eslint-disable-next-line */
    const regex = /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/;
    if (value && !regex.test(String(value).toLowerCase())) {
      return FORM_ERROR_MESSAGES.INVALID_DOMAIN;
    }
  },
};
/**
 * 
 * @param data any object with string or array
 * @returns error in object of key and values exist in object
 */
export const handleCheckValidation = (data: any) => {
  let error: any = {};
  for (var key in data) {
    if(!data[key]){
      error[key] = FORM_ERROR_MESSAGES.REQUIRED_MESSAGE;
    } else if (key === "limit_value") {
      error[key] = ValidationHelpers.checkLimitValue(data[key]);
    } else if (key === "email") {
      error[key] = ValidationHelpers.checkEmail(data[key]);
    }
  }
  return error;
};

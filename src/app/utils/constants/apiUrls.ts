import { API_DOMAIN } from "./apiConfig";

export const API_URLS: any = {
  login: `${API_DOMAIN}/api/v1/auth/signin`,
  register: `${API_DOMAIN}/api/v1/auth/signup`,
  resendEmailVerifcation: `${API_DOMAIN}/api/v1/auth/resend-email-verification`,
  verifyEmailToken: `${API_DOMAIN}/api/v1/auth/verify-email-token`,
  forgotPassword: `${API_DOMAIN}/api/v1/auth/forgot-password`,
  verifyPasswordToken: `${API_DOMAIN}/api/v1/auth/verify-pwd-token`,
  resetPassword: `${API_DOMAIN}/api/v1/auth/update-password`,
  currentUser: `${API_DOMAIN}/api/v1/user/profile`,
  profileUpdate: `${API_DOMAIN}/api/v1/user/update`,
  getDashboard: `${API_DOMAIN}/api/v1/buyer/dashboard`,
  getAllCompanies: `${API_DOMAIN}/api/v1/companies/allcompanies`,
};

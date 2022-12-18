export let ErrorCodesList: any = {
  EMAIL_VERIFICATION_FAILED: {
    code: "EMAIL-VERIFICATION-FAILED",
    message: "Please verify your email first",
  },
  PASSWORD_MISMATCH: {
    code: "PASS-MISMATCH",
    message: "Invalid password provided",
  },
  APPROVAL_REQUIRED: {
    code: "APPROVAL-REQUIRED",
    message: "Approval is still pending. Please contact administrator",
  },
  COMPANY_NOT_ALLOWED: {
    code: "COMPANY-NOT-ALLOWED",
    message: "You are not allowed to login to this company",
  },
  USER_NOT_ALLOWED: {
    code: "USER-NOT-ALLOWED",
    message: "You are not allowed to login",
  },
  OPERATION_NOT_ALLOWED: {
    code: "OPERATION-NOT-ALLOWED",
    message: "This operation is not allowed",
  },
};

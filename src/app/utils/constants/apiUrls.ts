import { API_DOMAIN } from "./apiConfig";
import { PLATFORM_USERS } from "./constants";

export const API_URLS: any = {
  
    login: `${API_DOMAIN}/api/v1/auth/signin`,
    register: `${API_DOMAIN}/api/v1/auth/signup/buyer`,
    resendEmailVerifcation: `${API_DOMAIN}/api/v1/auth/resend-email-verification`,
    verifyEmailToken: `${API_DOMAIN}/api/v1/auth/verify-email-token`,
    forgotPassword: `${API_DOMAIN}/api/v1/auth/forgot-password`,
    verifyPasswordToken: `${API_DOMAIN}/api/v1/auth/verify-pwd-token`,
    resetPassword: `${API_DOMAIN}/api/v1/auth/update-password`,
    currentUser: `${API_DOMAIN}/api/v1/auth/profile`,
    profileUpdate: (id: string | undefined) => `${API_DOMAIN}/api/v1/buyer/profile`,
    comapnyDetails: `${API_DOMAIN}/api/v1/company`,
    addCompanyUser: `${API_DOMAIN}/api/v1/company/invite-user`,
    getCompanyUsers: `${API_DOMAIN}/api/v1/company/users`,
    getCompanyInvitedUsers: `${API_DOMAIN}/api/v1/company/invited-users`,
    getCompanyUserRoles: `${API_DOMAIN}/api/v1/company/roles`,
    getAllSystemPermissions: `${API_DOMAIN}/api/v1/company/permissions`,
    addRole: `${API_DOMAIN}/api/v1/company/roles`,
    editRole: (roleId: string) => `${API_DOMAIN}/api/v1/company/roles/${roleId}`,
    postCompanyUserResendInvite: `${API_DOMAIN}/api/v1/company/resend-user-invite`,
    getSupplierList: `${API_DOMAIN}/api/v1/buyer/supplier`,
    addSupplier: `${API_DOMAIN}/api/v1/buyer/add-supplier`,
    addBllingEntity: `${API_DOMAIN}/api/v1/billing_entities`,
    getBillingEntity: `${API_DOMAIN}/api/v1/billing_entities`,
    updateBillingEntity: `${API_DOMAIN}/api/v1/billing_entities`,
    getAllBillingEntity: `${API_DOMAIN}/api/v1/billing_entities`,
    addBillingDelivery: `${API_DOMAIN}/api/v1/delivery_addresses`,
    updateBillingDelivery: `${API_DOMAIN}/api/v1/delivery_addresses`,
    bulkUploadUsers:(c_uuid:string) => `${API_DOMAIN}/api/v1/company/invite/bulk?c_uuid=${c_uuid}`,

    getBillingDelivey: (billing_entity_uuid: string, c_uuid: string) =>
      `${API_DOMAIN}/api/v1/billing_entities/${billing_entity_uuid}/delivery_addresses?c_uuid=${c_uuid}`,
    getAllDeliveryAddresses: `${API_DOMAIN}/api/v1/delivery_addresses`,

    updateDeliveryAddress: (delivery_address_uuid: string) =>
      `${API_DOMAIN}/api/v1/delivery_addresses/${delivery_address_uuid}`,

    createRFQ: `${API_DOMAIN}/api/v1/rfq/buyer`,
    updateRFQ: (rfqId: string) => `${API_DOMAIN}/api/v1/rfq/buyer/${rfqId}`,
    getRfq: (rfqId: string) => `${API_DOMAIN}/api/v1/rfq/buyer/${rfqId}`,
    getAllRFQ: `${API_DOMAIN}/api/v1/rfq/buyer/all`,

    getRFQStringTemplate: `${API_DOMAIN}/api/v1/rfq/buyer/templates`,
    getRFQTemplate: `${API_DOMAIN}/api/v1/rfq_templates`,
    addRFQTemplate: `${API_DOMAIN}/api/v1/rfq_templates`,
    getAllRFQTemplates: `${API_DOMAIN}/api/v1/rfq_templates?c_uuid=`,

    uploadProduct: (rfqId: string, c_uuid: string) =>
      `${API_DOMAIN}/api/v1/rfq/products/${rfqId}/upload?c_uuid=${c_uuid}`,

    releaseRFQ: `${API_DOMAIN}/api/v1/rfq/buyer`,
    createProduct: (rfq_uuid: string) =>
      `${API_DOMAIN}/api/v1/rfq/products/${rfq_uuid}`,
    listProducts: (rfqId: string) => `${API_DOMAIN}/api/v1/rfq/products/${rfqId}`,
    addProduct: (rfqId: string) => `${API_DOMAIN}/api/v1/rfq/products/${rfqId}`,
    updateProduct: `${API_DOMAIN}/api/v1/rfq/products`,
    deteleProduct: (rfq_uuid: string, rfq_product_uuid: string) =>
      `${API_DOMAIN}/api/v1/rfq/products/${rfq_uuid}/${rfq_product_uuid}`,
    getSupplierRequestsRfqId: `${API_DOMAIN}/api/v1/rfq/buyer`,
    getQuotationByRfqId: `${API_DOMAIN}/api/v1/rfq/buyer`,
    getQuotationDetailsForBuyer: `${API_DOMAIN}/api/v1/rfq/buyer/request`,
    downloadQuotationForBuyer: (rfqId: string, quotationId: string): string =>
      `${API_DOMAIN}/api/v1/rfq/buyer/${rfqId}/quotation/${quotationId}/download`,
    allQuotations: `${API_DOMAIN}/api/v1/rfq/buyer/request`,
    postRemarkToAll: (rfqId: string): string =>
      `${API_DOMAIN}/api/v1/rfq-conversations/buyer/rfq/${rfqId}/bulk-send`,
    getRemarkToAll: (rfqId: string): string =>
      `${API_DOMAIN}/api/v1/rfq-conversations/buyer/rfq/${rfqId}`,
    postRemarks: (rfqId: string, quotationId: string): string =>
      `${API_DOMAIN}/api/v1/rfq-conversations/buyer/${rfqId}/quotation/${quotationId}`,
    getRemarks: (rfqId: string, quotationId: string): string =>
      `${API_DOMAIN}/api/v1/rfq-conversations/buyer/rfq/${rfqId}/quotation/${quotationId}`,
    getRecommendationList: `${API_DOMAIN}/api/v1/rfq/buyer/recommendations/list`,
    getRecommendationListApprovers: `${API_DOMAIN}/api/v1/rfq/buyer/recommendations/approvals`,
    autocreateRecommendation: (rfqId: string) =>
      `${API_DOMAIN}/api/v1/rfq/buyer/${rfqId}/recommendations/auto-create`,
    createRecommendation: (rfqId: string, quotationId: string) =>
      `${API_DOMAIN}/api/v1/rfq/buyer/${rfqId}/quotation/${quotationId}/recommendation`,
    acceptRecommendation: (recommendationId: string) =>
      `${API_DOMAIN}/api/v1/rfq/buyer/recommendations/${recommendationId}/accept`,
    updateRecommendation: (rfqId: string, quotationId: string) =>
      `${API_DOMAIN}/api/v1/rfq/buyer/${rfqId}/recommendations/${quotationId}/approvals`,
    sendToSupplier: (rfqId: string, recommendationId: string) =>
      `${API_DOMAIN}/api/v1/rfq/buyer/${rfqId}/send-to-supplier/${recommendationId}`,
    getRecommandationForReview : (rfqId: string) => `${API_DOMAIN}/api/v1/rfq/buyer/${rfqId}/recommendation/preview`,
    downloadRecommandationQuotation : (rfqId: string, recommendationId: string, quotationId: string) => `${API_DOMAIN}/api/v1/rfq/buyer/${rfqId}/recommendations/${recommendationId}/quotation/${quotationId}/download`,
    extendSubmission: (rfqId:string) => `${API_DOMAIN}/api/v1/rfq/buyer/${rfqId}/extend`,
    getAllRfqRequests: `${API_DOMAIN}/api/v1/rfq/buyer/list/quotations`,
    getDashboard: `${API_DOMAIN}/api/v1/buyer/dashboard`
};

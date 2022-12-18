import { API_DOMAIN } from "../../../utils/constants/apiConfig";
import axiosInstance from "../../../utils/interceptor";

export const updateBuyerProfile = async (data: {
  user: string;
  c_uuid: string;
  data: any;
}) => {
  try {
    const result = axiosInstance.put(`${API_DOMAIN}/api/v1/buyer/profile`, {
      c_uuid: data.c_uuid,
      ...data.data,
    });
    return result;
  } catch (e) {
    return e;
  }
};

export const updateSupplierProfile = async (data: {
  user: string;
  c_uuid: string;
  data: any;
}) => {
  try {
    const result = axiosInstance.put(`${API_DOMAIN}/api/v1/supplier/profile`, {
      c_uuid: data.c_uuid,
      ...data.data,
    });
    return result;
  } catch (e) {
    return e;
  }
};

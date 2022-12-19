import { API_DOMAIN } from "../../../utils/constants/apiConfig";
import axiosInstance from "../../../utils/interceptor";

export const updateBuyerProfile = async (data: {
  data: any;
}) => {
  try {
    const result = axiosInstance.put(`${API_DOMAIN}/api/v1/buyer/profile`, {
      ...data.data,
    });
    return result;
  } catch (e) {
    return e;
  }
};

import { useSelector } from "react-redux";
import AuthHelpers from "../helpers/AuthHelpers";

export const useCompanySelector = (routeKey: string) => {
  const company = useSelector((state: any) => state.company.company);
  const currentCompanyDetails = useSelector((state: any) => state.company?.companyDetails?.data);
  const companyFromLocal = AuthHelpers.getDataFromLocalStorage("company") || "";
  const c_uuid = company.data?.id || JSON.parse(companyFromLocal).id;
  return { user: routeKey, c_uuid, company, currentCompanyDetails };
};

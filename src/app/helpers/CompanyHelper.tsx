import { useSelector } from "react-redux";

export const useCompany = () => {
  const companySelector = useSelector((state: any) => state.company.company);
  const companyLocalStorage = localStorage.getItem("company");
  const parsedLocalStorage =
    companyLocalStorage && JSON.parse(companyLocalStorage);
  return companySelector || parsedLocalStorage;
};

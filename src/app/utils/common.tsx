import { matchPath, useLocation } from "react-router";
import { APP_USER_ROUTES } from "./constants/appRoutes";
import { UserObject } from "./ObjectTypes";


export const getApiResponseErrorMessage = (object: any) => {
  if (object && object?.errors?.errors)
    return object?.errors?.errors?.join(" ");
  else if (object && object?.errors?.message) return object?.errors?.message;
};

export const getResponseFromApiResponse = (object: any): any => {
  const { data, headers } = object;
  if (data?.meta || data?.data?.length || data?.data?.length === 0) {
    return { data: data?.data, meta: data?.meta };
  }
  // Handling for file download
  if(headers[`content-type`] && (headers[`content-type`] === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" || headers[`content-type`] === "application/pdf")) {
    return {data:data, headers: headers};
  }
  const response = data?.data;
  return response;
};

export const redirectToUrl = (endpoint: string | null = null) => {
  return endpoint ? window.location.href = `/${endpoint}` : null;
};

export const parseSessionStorage = (key: string) => {
  return JSON.parse(sessionStorage.getItem(key) || "");
};

export const getAuthRoute = () => {
  //const { redirect, params } =  checkRegisterRedirection();
  return `${APP_USER_ROUTES.login}`;
};

export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getUserData = (object: UserObject) => {
  return object;
};

export const getFirstLastNameSepration = (value: string) => {
  if(!value) return {first_name: "", last_name: ""}
  const newVal = value.split(" ");
  const first_name = newVal[0];
  const last_name = newVal.slice(1).join(" ");
  return { first_name, last_name };
};

export interface IPincodeObject {
  city_id?: string;
  created_at?: string;
  district?: string;
  division_name?: string;
  id?: number | string;
  office_name?: string;
  pincode?: string;
  region_name?: string;
  state_id?: string;
  state_name?: string;
  area?: string;
}

interface IStateObject {
  id?: number | string;
  name?: string;
  state: { name?: string };
  state_id?: number;
}

export const staructureCityData = (data: Array<IStateObject>) => {
  return data.map((item: IStateObject) => ({
    text: item.name,
    value: item.id,
    state_id: item.state_id,
  }));
};

export const structureCityObjectData = (data: IStateObject) => {
  return {
    text: data.name,
    value: data.id,
    state_id: data.state_id,
  };
};

export const downloadURI = (uri:string, name:string) => {
  var link = document.createElement("a");
  link.download = name.trim().replace(/['"]+/g, '');
  link.href = uri;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

export function debounceMethod(cb: any, delay = 1000) {
  let timeout: any;
  return (...args: any) => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
      timeout = null;
      cb(...args);
    }, delay);
  };
}

export interface IReturnType {
  key: string;
  value: string;
  text: string;
}

export interface RouteComponent {
  routeKey: string;
}

export function useRouteMatch(patterns: readonly string[]) {
  const { pathname } = useLocation();

  for (let i = 0; i < patterns.length; i += 1) {
    const pattern = patterns[i];
    const possibleMatch = matchPath(pattern, pathname); 
    if (possibleMatch !== null) {
      return possibleMatch;
    }
  }
  return null;
}

/**
 * @description Auth helpers file to deal with all authentication related stuff.
 */

import { redirectToUrl, getAuthRoute } from "../utils/common";

const TOKEN = "token";
const USERTYPE = "userType";

const AuthHelpers = {
  isAuthenticated: () => !!localStorage.getItem(TOKEN),
  login: () => {
    // Add api for login
  },
  signup: () => {
    // addd api for signup
  },
  logout: (type: any) => {
    if (AuthHelpers.isAuthenticated()) {
      if (!type) {
        window.location.href = getAuthRoute();
      } else {
        redirectToUrl(getAuthRoute());
      }
      localStorage.removeItem(TOKEN);
      localStorage.clear();
    }
  },
  saveTokenToLocalStorage: (token: any) => {
    localStorage.setItem(TOKEN, token);
  },
  saveDataInLocalStorage: (key:any, value: any) => {
    localStorage.setItem(key, value);
  },
  saveUserTypeToLocalStorage: (userType: any) => {
    localStorage.setItem(USERTYPE, userType);
  },
  saveCompanyUuid: (id: string) => {
    localStorage.setItem("c_uuid", id);
  },
  getTokenFromLocalStorage: () => {
    return localStorage.getItem(TOKEN);
  },
  getUserTypeFromLocalStorage: () => {
    return localStorage.getItem(USERTYPE);
  },
  getDataFromLocalStorage : (key: string) => {
    return localStorage.getItem(key)
  },
  removeTokenFromLocalStorage: () => {
    localStorage.removeItem(TOKEN);
  },
  removeUserTypeFromLocalStorage: () => {
    localStorage.removeItem(USERTYPE);
  },
  removeKeyFromLocalStorage: (key: string) => {
    localStorage.removeItem(key);
  }, 
  checkToken: (): boolean => !!localStorage.getItem(TOKEN),
};

export default AuthHelpers;

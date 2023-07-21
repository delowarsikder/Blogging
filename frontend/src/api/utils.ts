/**
 *  Common utility functions needed in API authentication / authorization
 */

import decodeJWT from "jwt-decode";
import moment from "moment";

export enum Statuses {
  Initial = "Not Fetch",
  Loading = "Loading...",
  UpToDate = "Up To Date",
  Delete = "Deleted",
  Error = "Error",
}


export interface ITokenData {
  user: {
    user_id: number,
    first_name: string,
    last_name: string,
    email: string,
  }
}

export interface IGetTokenData {
  (): ITokenData | null;
}

export function isTokenData(object: any): object is ITokenData {
  return (
    object.user.user_id !== undefined &&
    object.user.first_name !== undefined &&
    object.user.last_name !== undefined &&
    object.user.email !== undefined
  );
}

// localStorage key name for storing token
const TOKEN = "auth_token";
const TOKEN_EXPIRATION = "token_expiration";

// save the jwt token on browser local storage
export const setToken = (token: string) => {
  localStorage.setItem(TOKEN, token);
};

// read the jwt token on browser local storage
export const getToken = () => {
  const token = localStorage.getItem(TOKEN);
  return token ? token : null;
};

// remove the jwt token from browser local storage
export const clearToken = () => {
  localStorage.removeItem(TOKEN);
};

// localStorage key name for storing SearchTxt
const SEARCH_TEXT = "search_txt";

// save the jwt SearchTxt on browser local storage
export const setSearchTxt = (key: any, searchValue: string) => {
  localStorage.setItem(SEARCH_TEXT + key, searchValue);
};

// read the jwt SearchTxt on browser local storage
export const getSearchTxt = (key: any) => {
  const searchData: any = localStorage.getItem(SEARCH_TEXT + key)
  if (searchData !== null) {
    return searchData;
  } else {
    return "";
  }
};

// remove the jwt SearchTxt from browser local storage
export const clearSearchTxt = (key: any,) => {
  localStorage.removeItem(SEARCH_TEXT + key);
};

// extracts data from token
// returns null when fails
export const getTokenData: IGetTokenData = () => {
  let tokenData: ITokenData;
  let valid = false;

  try {
    const token = getToken() || "";
    tokenData = decodeJWT(token);
    valid = tokenData && isTokenData(tokenData);
  } catch {
    // Failed to decode token
    clearToken();
    return null;
  }

  if (!valid) {
    // The token is not valid
    clearToken();
    return null;
  }

  return tokenData;
};

// checks if the user is authenticated by checking the token & it's expiration
export const isAuthenticated = (): boolean => {
  if (getTokenData() !== null && hasTokenExpired() === false) {
    return true;
  }

  clearToken();
  clearTokenExpiration();
  return false;
};

// check user role: system admin or admin
export const isAdmin = (): boolean => {
  const tokenData: any = getTokenData();
  if (tokenData !== null) {
    return tokenData.role.toLowerCase().indexOf("admin") >= 0 ? true : false;
  } else {
    return false;
  }
};

// check user role: system admin or admin
export const isAuditor = (): boolean => {
  const tokenData: any = getTokenData();
  if (tokenData !== null) {
    return tokenData.role.toLowerCase().indexOf("auditor") >= 0 ? true : false;
  } else {
    return false;
  }
};

// save token expiration on browser local storage
export const setTokenExpiration = (dateString: string) => {
  localStorage.setItem(TOKEN_EXPIRATION, dateString);
};

// read token expiration from browser local storage
export const getTokenExpiration = () => {
  return localStorage.getItem(TOKEN_EXPIRATION);
};

// remove token expiration from browser local storage
export const clearTokenExpiration = () => {
  localStorage.removeItem(TOKEN_EXPIRATION);
};

export const hasTokenExpired = (): boolean => {
  const tokenExpDate = getTokenExpiration();
  if (
    tokenExpDate &&
    moment(tokenExpDate).isValid() &&
    moment(tokenExpDate).isSameOrAfter(Date.now())
  ) {
    return false;
  }
  return true;
};

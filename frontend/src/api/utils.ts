/**
 *  Common utility functions needed in API authentication / authorization
 */

// import decodeJWT from "jwt-decode";
// import moment from "moment";

export enum Statuses {
  Initial = "Not Fetch",
  Loading = "Loading...",
  UpToDate = "Up To Date",
  Delete = "Deleted",
  Error = "Error",
}
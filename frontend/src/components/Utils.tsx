import { Navigate, useNavigate } from "react-router-dom";
import React from 'react'

const navigator = useNavigate();

export default function Utils() {
  return (
    <div>Utils</div>
  )
}

export const redirectTo = (path: any) => {
  return;
  // return <Navigate to = path />
};

export const justAnAlert = (msg: any) => {
  return alert(msg);
};


export function isValidEmail(email: any) {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const result: boolean = expression.test(email); // true
  return result;
}

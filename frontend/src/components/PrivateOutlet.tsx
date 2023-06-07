import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import useAuth from '../hooks/useAuth';

function PrivateOutlet({ auth }: any) {
  // const auth = useAuth();
  return auth ? <Outlet /> : <Navigate to="/signin" replace />;
}

export default PrivateOutlet
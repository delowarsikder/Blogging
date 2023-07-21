import React from 'react'
import { Navigate, Outlet } from "react-router-dom";
import useAuth from '../hooks/useAuth';
import { getToken } from '../api/utils';

function PrivateOutlet() {
  const token = getToken();
  return token ? <Outlet /> : <Navigate to="/signin" replace />;
}

export default PrivateOutlet
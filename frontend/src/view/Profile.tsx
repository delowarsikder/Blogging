import React from 'react'
import { useSelector } from 'react-redux';

export default function Profile() {
  const { userInfo } = useSelector((state: any) => state.auth);
  console.log("userData: ", userInfo);
  return (<div>
    <h1>Profile</h1>
    <span>
      {/* Welcome <strong>{userInfo?.first_name}!</strong> You can view this page */}
      because you're logged in
    </span>
  </div>);
};
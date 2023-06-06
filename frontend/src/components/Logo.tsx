import React from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import userLogo from "../assets/userLogo.png"
const Logo = () => {
  return (
    <Box>
      <Link to="/">
        <Box component="img" sx={{ width: '20%' }}  src={userLogo} alt="logo" />
      </Link>
    </Box>
  );
};

export default Logo;

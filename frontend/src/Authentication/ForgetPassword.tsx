import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Checkbox, Container, Typography, Box, Divider } from "@mui/material";
import { motion } from "framer-motion";


import SocialAuth from "./SocialIcon/SocialAuth";
import Logo from "../components/Logo";
import ForgetPasswordForm from "./Form/ForgetPasswordForm";

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing },
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

export default function ForgetPassword() {
  return (
    <Container component="main" maxWidth="sm">


      <Logo />
      <Typography component="h1" variant="h5">
        Forget Password
      </Typography>
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          // px: 4,
          py: 4,
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h6">
          You will receive a link to create a new password via email.
        </Typography>
        <ForgetPasswordForm />

        <Link to="/signin" >
          {"Remember your password?"}
        </Link>
      </Box>
    </Container>
  );
}




import { Box, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";


import Logo from "../../components/Logo";
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
        <Typography component="h1" variant="h5">  Forget Password</Typography>
        <Typography component="p">
          You will receive a link to create a new password via email.
        </Typography>
        <ForgetPasswordForm />

        <Link to="/auth/signin" >
          {"Remember your password?"}
        </Link>
      </Box>
    </Container>
  );
}




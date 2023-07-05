import { Box, Container, Divider, Typography } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import SigninForm from "./Form/SigninForm";
import SocialAuth from "./SocialIcon/SocialAuth";

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

export default function Signin({ setAuth }: any) {
  return (
    <Container component="main" maxWidth="sm">
      <Logo />
      <Typography component="h1" variant="h5">
        Login to share your feelings
      </Typography>
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 0,
          py: 2,
          marginTop: 2,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <SigninForm />
        <Link to="/auth/signup" >
          {"Don't have an account? Sign Up"}
        </Link>

        <Divider sx={{ my: 2 }} component={motion.div} {...fadeInUp}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            OR
          </Typography>
        </Divider>

        <Box component={motion.div} {...fadeInUp}>
          <Typography component="h6" variant="h6">
            or sign up with:
          </Typography>
          <SocialAuth />
        </Box>
      </Box>
    </Container>
  );
} 

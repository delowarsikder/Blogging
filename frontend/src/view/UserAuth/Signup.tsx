import styled from "@emotion/styled";
import { Box, Container, Divider, Link, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import Logo from "../../components/Logo";
import SignupForm from "./Form/SignupForm";
import SocialAuth from "./SocialIcon/SocialAuth";

import { motion } from "framer-motion";

const HeadingStyle = styled(Box)({
  textAlign: "center",
});

const ContentStyle = styled(Box)({
  maxWidth: 480,
  padding: 25,
  margin: "auto",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  background: "#fff",
});

let easing = [0.6, -0.05, 0.01, 0.99];
const fadeInUp = {
  initial: {
    y: 40,
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

const Signup = () => {
  return (
    <Container component="main" maxWidth="sm">
      <Box>
        <HeadingStyle component={motion.div} {...fadeInUp}>
          <Logo />

          <Typography sx={{ color: "text.secondary", mb: 1 }}>
            Enter your details below.
          </Typography>
        </HeadingStyle>

        <SignupForm/>

        <Divider sx={{ my: 1 }} component={motion.div} {...fadeInUp}>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            OR
          </Typography>
        </Divider>

        <Box component={motion.div} {...fadeInUp}>
          <SocialAuth />
        </Box>


        <Typography
          component={motion.p}
          {...fadeInUp}
          variant="body2"
          align="center"
          sx={{ color: "text.secondary", mt: 2 }}
        >
          By registering, I agree to{" "}
          <Link underline="always" color="text.primary" href="/">
            Terms of Services
          </Link>{" "}
          &{" "}
          <Link underline="always" color="text.primary" href="/">
            Privacy Policy
          </Link>
          .
        </Typography>

        <Typography
          component={motion.p}
          {...fadeInUp}
          variant="body2"
          align="center"
          sx={{ mt: 3 }}
        >
          Have an account?{" "}
          <Link variant="subtitle2" component={RouterLink} to="/auth/signin">
            Login
          </Link>
        </Typography>
      </Box>
    </Container>

  );
};

export default Signup;

import * as yup from "yup";
import { useEffect, useState } from "react";
import { useFormik, Form, FormikProvider } from "formik";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form'
import {
  Stack,
  Box,
  TextField,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

import { createUserAsync } from "../../../api/auth/authActions";

import { useDispatch, useSelector } from 'react-redux'

let easing = [0.6, -0.05, 0.01, 0.99];
const animate = {
  opacity: 1,
  y: 0,
  transition: {
    duration: 0.6,
    ease: easing,
    delay: 0.16,
  },
};

const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch<any>();
  const navigate = useNavigate();
  const { loading, userInfo, error, success } = useSelector(
    (state: any) => state.auth
  )
  const { register } = useForm();
  const SignupSchema = yup.object().shape({
    firstName: yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("First name is required"),
    lastName: yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Last name is required"),
    email: yup.string()
      .email("Email must be a valid email address")
      .required("Email is required"),
    password: yup.string()
      // .min(8, "Password must have at least 8 characters")
      .required("Password is required")
    // .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/, "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"),
    , confirmPassword: yup.string()
      .required("Please re-type your password")
      .oneOf([yup.ref("password")], "Passwords does not match"),
  });

  useEffect(() => {
    //redirect to login page if registration successfull
    if (success) {
      navigate('/auth/signin');
    }
    if (Object.keys(userInfo).length) {
      navigate('/');
    }
  }, [navigate, userInfo, success]);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: SignupSchema,
    onSubmit: (userInfo) => {
      setTimeout(() => {
        const formData = {
          userRegistrationInfo: {
            first_name: userInfo.firstName,
            last_name: userInfo.lastName,
            email: userInfo.email.toLowerCase(),
            password: userInfo.password,
          }
        }
        console.log(formData);
        dispatch(createUserAsync(formData));

        // setAuth(true);
        // navigate("/", { replace: true });
      }, 2000);
    },
  });

  const { errors, touched, handleSubmit, isSubmitting, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Box
          component={motion.div}
          animate={{
            transition: {
              staggerChildren: 0.55,
            },
          }}
        >


          <Stack
            spacing={1}
            component={motion.div}
            initial={{ opacity: 0, y: 25 }}
            animate={animate}
          >

            <Stack
              component={motion.div}
              initial={{ opacity: 0, y: 30 }}
              animate={animate}
              direction={{ xs: "column", sm: "row" }}
              spacing={1}
            >
              <TextField
                fullWidth
                label="First name"
                {...getFieldProps("firstName")}
                error={Boolean(touched.firstName && errors.firstName)}
                helperText={touched.firstName && errors.firstName}
              />

              <TextField
                fullWidth
                label="Last name"
                {...getFieldProps("lastName")}
                error={Boolean(touched.lastName && errors.lastName)}
                helperText={touched.lastName && errors.lastName}
              />
            </Stack>

            <Stack
              spacing={1}
              component={motion.div}
              initial={{ opacity: 0, y: 25 }}
              animate={animate}
            >
              <TextField
                fullWidth
                autoComplete="username"
                type="email"
                label="Email address"
                {...getFieldProps("email")}
                error={Boolean(touched.email && errors.email)}
                helperText={touched.email && errors.email}
              />

              <TextField
                fullWidth
                autoComplete="current-password"
                type={showPassword ? "text" : "password"}
                label="Password"
                {...getFieldProps("password")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={() => setShowPassword((prev) => !prev)}
                      >
                        <Icon
                          icon={
                            showPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.password && errors.password)}
                helperText={touched.password && errors.password}
              />


              <TextField
                fullWidth
                autoComplete="current-password"
                type={showConfirmPassword ? "text" : "password"}
                label="ConfirmPassword"
                {...getFieldProps("confirmPassword")}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        edge="end"
                        onClick={(e) => setShowConfirmPassword((e) => !e)}
                      >
                        <Icon
                          icon={
                            showConfirmPassword ? "eva:eye-fill" : "eva:eye-off-fill"
                          }
                        />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                error={Boolean(touched.confirmPassword && errors.confirmPassword)}
                helperText={touched.confirmPassword && errors.confirmPassword}
              />

            </Stack>

            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 20 }}
              animate={animate}
            >
              <LoadingButton
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                loading={isSubmitting}
              >
                Sign up
              </LoadingButton>
            </Box>
          </Stack>
        </Box>
      </Form>
    </FormikProvider>
  );
};

export default SignupForm;
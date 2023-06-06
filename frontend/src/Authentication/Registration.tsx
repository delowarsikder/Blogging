import {
  Container,
  Typography,
  TextField,
  Button,
} from "@mui/material";

import { createStyles, makeStyles } from '@mui/styles';
import { createTheme, ThemeProvider } from '@mui/material/styles';


import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import SignupForm from "./Form/SignupForm";


interface IFormInput {
  email: string;
  name: string;
  password: string;
  confirmPassword: string;
}


const schema = yup.object().shape({
  email: yup.string().required().email(),
  Name: yup.string().required().min(2).max(25),
  password: yup.string().required().min(8).max(120),
  confirmPassword: yup.string().required().min(8).max(120),
});



// const theme = createTheme();
// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     heading: {
//       textAlign: "center",
//       margin: "1 0 4",
//     },
//     submitButton: {
//       marginTop: "4",
//     },
//   }),
// );









const useStyles = makeStyles({
  heading: {
    textAlign: "center",
    margin: "1 0 4",
  },
  submitButton: {
    marginTop: "4",
  },
});

export default function Registration() {

  const classes = useStyles();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInput>({
    resolver: yupResolver(schema),
  });



  const [json, setJson] = useState<string>();

  const onSubmit = (data: IFormInput) => {
    setJson(JSON.stringify(data));
  };

  return (
    <Container maxWidth="xs">
      <Typography className={classes.heading} variant="h3">
        Sign Up Form
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <TextField
          {...register("email")}
          variant="outlined"
          margin="normal"
          label="Email"
          helperText={errors.email?.message}
          error={!!errors.email?.message}
          fullWidth
          required
        />
        <TextField
          {...register("name")}
          variant="outlined"
          margin="normal"
          label="First Name"
          helperText={errors.name?.message}
          error={!!errors.name?.message}
          fullWidth
          required
        />
        <TextField
          {...register("password")}
          variant="outlined"
          margin="normal"
          label="Password"
          helperText={errors.password?.message}
          error={!!errors.password?.message}
          type="password"
          fullWidth
          required
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submitButton}
        >
          Sign Up
        </Button>
        {json && (
          <>
            <Typography variant="body1">
              Below is the JSON that would normally get passed to the server
              when a form gets submitted
            </Typography>
            <Typography variant="body2">{json}</Typography>
          </>
        )}
      </form>
    </Container>
  );
}


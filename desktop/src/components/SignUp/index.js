import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from './copyright/index';
import Image from 'material-ui-image';
import useForm from './useForm';
import apiService from '../../services';
import validate from './validate';

// custom styles
import './styles.scss';

const BootstrapButton = withStyles({
  root: {
    backgroundColor: '#1e2a9c;',
    boxShadow: 'none',
    '&:hover': {
      backgroundColor: '#15225a',
      boxShadow: 'none',
    },
  }
})(Button);

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    //backgroundColor: `${bgcolor}`,
  },
}));

export default function SignUp() {
 const classes = useStyles();
 const {handleSubmit, handleChange, user, error} = useForm(submit, validate)

 function submit(){
   const data = {
     firstName: user.firstName,
     secondName: user.secondName,
     email: user.email,
     password: user.password,
    }

    apiService.create(data)
    .then(response => {
      console.log(response.data);
    })
    .catch(e => {
      console.log(e);
    });
  

 }

  return (
   <div className="signUpComponent">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="DivLogoCW">
            <Image src="images/colibriWork.png"/> 
          </div>  
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form method="POST" onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={handleChange}
                  value={user.firstName}
                />
                {error.firstName && <p>{error.firstName}</p>}
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="secondName"
                  autoComplete="lname"
                  onChange={handleChange}
                  value={user.secondName}
                />
                {error.secondName && <p>{error.secondName}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={handleChange}
                  value={user.email}
                />
                {error.email && <p>{error.email}</p>}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={handleChange}
                  value={user.password}
                />
                {error.password && <p>{error.password}</p>}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            
            <BootstrapButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign Up
            </BootstrapButton>
            <Grid className="signUpAccount" container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>

        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}
import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from './copyright/index';
import Image from 'material-ui-image';
import useForm from './useForm';
import validate from './validate';
import ApiServices from '../../services';

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
  },
}));

export default function LogIn() {
 const classes = useStyles();
 const {handleSubmit, handleChange, user, error} = useForm(submit, validate)

 function submit() {
  var data = {
      password: user.password,
      email: user.email,
  };

  ApiServices.login(data).then(response =>{
    console.log(response.data)
    ApiServices.login(data).then(response => {
      //we store the data of the validated user in localStorage
      window.localStorage.setItem("user", JSON.stringify(response.data.user))
      console.log(response.data.user);
      console.log(window.localStorage.getItem("user"));
    })
    .catch(e => {
      console.log(e);
    });  
  });
}

  return (
   <div className="signInComponent">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <div className="DivLogoCW">
            <Image src="images/colibriWork.png"/> 
          </div>  
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form method="POST" onSubmit={handleSubmit} className={classes.form} noValidate>
            <Grid container spacing={2}>
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
            </Grid>
            
            <BootstrapButton
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Login In
            </BootstrapButton>
            <Grid className="signInAccount" container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Forgot your password?
                </Link> 
              </Grid> 
            </Grid>
            <Grid className="signInAccount" container justify="flex-end">
                <Grid item>
                  <Link href="#" variant="body2">
                    Sign up ColibriWork
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
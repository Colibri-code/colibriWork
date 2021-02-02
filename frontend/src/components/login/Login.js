import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
//import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import GoogleLogin from 'react-google-login';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import img from './../../assets/linkedin.png'
import googlesignin from './../../assets/google.png'
import MicrosoftLogin from "react-microsoft-login";




function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="colibriwork.com">
                ColibriWork
         </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}



const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignInSide() {
    const classes = useStyles();
    const [code, setErrorMessage] = useState('')
    const handleSuccess = (data) => {
        setErrorMessage({
            code: data.code,
            errorMessage: '',
        });
    }

    const handleFailure = (error) => {
        setErrorMessage({
            code: '',
            errorMessage: error.errorMessage,
        });
    }

    const authHandler = (err, data) => {
        console.log(err, data);
    }
 
      const responseGoogle = (response) => {
        console.log(response);
    }

    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        {/*<LockOutlinedIcon />*/}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
          </Typography>
                    <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
                        </Button>
                            <div
                                >
                            or 
                            </div>
                        <GoogleLogin
                            clientId="871231342119-gcggt14i4s90p3u712hs02m3t26i7td4.apps.googleusercontent.com"
                            render={renderProps => (
                              <button onClick={renderProps.onClick} disabled={renderProps.disabled}>
                               <img src={googlesignin}  style={{ maxWidth: '197px' }} />
                               <div style={{ maxWidth: '47px' }}></div>
                                   
                              </button>
                            )}
                            buttonText="Login"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />

                        <div style={{ marginTop: '5px' }}>
                            <LinkedIn
                                clientId="81lx5we2omq9xh"
                                onFailure={handleFailure}
                                onSuccess={handleSuccess}
                                redirectUri="http://localhost:3000/linkedin"
                        
                            >
                                <img src={img} alt="Log in with Linked In" style={{ maxWidth: '197px' }} />
                            </LinkedIn>
                            {!code && <div></div>}
                            {code && <div>Code: {code}</div>}
                            {/*errorMessage && <div>{errorMessage}</div>*/}
                            <div style={{ marginTop: '5px' }}></div>
                            <MicrosoftLogin
                                clientId="906e62b7-ab80-469d-b1fd-6863b7085ba4"
                                authCallback={authHandler}
                                //buttonTheme= "dark"
                                redirectUri = "http://localhost:3000/"
                                
                              
                           />

                        </div>

                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="/signup" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                            <Copyright />


                        </Box>
                    </form>
                </div>
            </Grid>
        </Grid>
    );
}

import { React, useState, useLayoutEffect  } from 'react';
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

import { GoogleLogin } from 'react-google-login';
import { LinkedIn } from 'react-linkedin-login-oauth2';
import MicrosoftLogin from "react-microsoft-login";
import LogoPng from '.././../assets/img/colibriWork.png';
import useLogin from './useLogin';
import Validate from './validate'
import ApiServices from '.././../services';
import GoogleLogo from '.././../assets/google.png';
import linkedinLogo from '.././../assets/linkedin.png';
function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="colibriwork.com">
                ColibriCode
         </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function SignInSide() {

    const [msgerror, setmsgerror] = useState({
        code: '',
        errorMessage: ''
    });
    const { handleSubmit, handleChange, user, error, useStyles } = useLogin(Submit, Validate);

    const classes = useStyles();


    const responseGoogle = (response) => {
        console.log(response);
    }


   const  handleSuccess = (data) => {
        setmsgerror({
            code: data.code,
            errorMessage: '',
        });
    }

   const handleFailure = (error) => {
        setmsgerror({
            code: '',
            errorMessage: error.errorMessage,
        });
    }

    const authHandler = (err, data) => {
        console.log(err, data);
      };


    function Submit() {
        var data = {
            password: user.password,
            email: user.email,
        };

        ApiServices.login(data).then(response => {
            window.localStorage.setItem("user", JSON.stringify(response.data.user))
            console.log(response.data.user)
        }).catch(e => {
            console.log(e);
           
        });
    }


    useLayoutEffect(() => { 
        window.localStorage.removeItem("user");
      }, []); 


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />
            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar} alt="ColibriWork" src={LogoPng}>
                        {/*<LockOutlinedIcon />*/}
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Login
          </Typography>
                    <form className={classes.form} noValidate
                        onSubmit={handleSubmit} method="POST">
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            onChange={handleChange}
                            autoFocus

                        />
                        {error.email && <p>{error.email}</p>}
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            onChange={handleChange}
                            autoComplete="current-password"
                        />
                        {error.password && <p>{error.password}</p>}
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


                        <GoogleLogin
                            clientId="871231342119-gcggt14i4s90p3u712hs02m3t26i7td4.apps.googleusercontent.com"
                            render={renderProps => (
                                <Button onClick={renderProps.onClick} >
                                    <img src={GoogleLogo} alt="Google_signin" />
                                </Button>
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
                                <img src={linkedinLogo} alt="Log in with Linked In" style={{ maxWidth: '197px' }} />
                            </LinkedIn>
                          

                        </div>


                            <MicrosoftLogin
                                clientId="906e62b7-ab80-469d-b1fd-6863b7085ba4"
                                authCallback={authHandler}
                                //buttonTheme= "dark"
                                redirectUri = "http://localhost:3000/"
                           />
                                
                        
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

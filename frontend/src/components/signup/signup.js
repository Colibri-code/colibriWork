import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';

import MenuItem from '@material-ui/core/MenuItem';
import ApiServices from '.././../services';
import LogoPng from '.././../assets/img/colibriWork.png';
import useForm from './useForm';
import Validate from './validate'
import './styles/styles.css'




export default function SignUp() {


  const { handleSubmit, handleChange, user, error, useStyles } = useForm(Submit, Validate);

  const classes = useStyles();


  /**
   * Ejecuta la peticion al backend para realizar el envio de los datos del
   * formulario 
  */
  function Submit() {
    var data = {
      firstName: user.firstName,
      secondName: user.secondName,
      password: user.password,
      email: user.email,
      profile: user.profile,
    };
  
    ApiServices.create(data)
      .then(response => {
        setUser({
          id: response.data.id,
          firtsName: response.data.firstName,

          secondName: response.data.secondName,
          password: response.data.password,
          email: response.data.email,
          profile: response.data.profile,
        });
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);

      });
     
  }
  return (
    <div>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar} alt="ColibriWork" src={LogoPng}>

          </Avatar>
          <Typography className={classes.headregister} component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate
            method="POST" onSubmit={handleSubmit} >
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
              <Grid item xs={12} sm={6}>
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

              <Grid item xs={12} sm={6} >

                <Select
                  className={classes.form}
                  variant="outlined"
                  onChange={handleChange}
               
                >
                  <MenuItem value="" disabled>
                    <em>Choose..Type Profile</em>
                  </MenuItem>
                  <MenuItem value={user.profile}>Project Manager Profile</MenuItem>
                  <MenuItem value={user.profile}>Developer Profile</MenuItem>
                  <MenuItem value={user.profile}>Designer Profile</MenuItem>
                  <MenuItem value={user.profile}>Finance Profile</MenuItem>
                </Select>
              
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              className={classes.colorbutton}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Login
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>

        </Box>
      </Container>
    </div>

  );
}
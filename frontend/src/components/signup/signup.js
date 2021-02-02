import React, { Component, useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Select from '@material-ui/core/Select';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl'
import NativeSelect from '@material-ui/core/NativeSelect';
import MenuItem from '@material-ui/core/MenuItem';
import ApiServices from '.././../services';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
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
    //marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));


export default function SignUp() {
  const classes = useStyles();

  const Userstate = {
    firstName: "",
    secondName: "",
    password: "",
    email: "",
    profile: ""
  };

  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [user, setUser] = useState(Userstate);



  const handleNameChange = event => {

    setUser({
      ...user,
      [event.target.name]: event.target.value
    });
  };

  function handleSubmit(e) {
    e.preventDefault()

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
      {/* <form onSubmit={handleSubmit}>
        <input placeholder="Name" value={name} onChange={handleNameChange} />        
          <button>Submit</button>
      </form>*/}
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>

          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
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
                  onChange={handleNameChange}
                />
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
                  onChange={handleNameChange}
                />
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
                  onChange={handleNameChange}

                />
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
                  onChange={handleNameChange}

                />
              </Grid>

              <Grid item xs={12} sm={6} >

                <Select
                  value={age}
                  onChange={handleNameChange}
                  displayEmpty
                  className={classes.form}
                  inputProps={{ 'aria-label': 'Without label' }}
                  variant="outlined"
                >
                  <MenuItem value="">
                    <em>Choose..Type Profile</em>
                  </MenuItem>
                  <MenuItem value={1}>Project Manager Profile</MenuItem>
                  <MenuItem value={2}>Developer Profile</MenuItem>
                  <MenuItem value={3}>Designer Profile</MenuItem>
                  <MenuItem value={4}>Finance Profile</MenuItem>
                </Select>
                {/* <Select  className={classes.form}
                  
                  labelId="demo-simple-select-label"
                  id="demo-simple-select-helper"
                  name="profile"
                  label="Profile"
                  onChange={handleNameChange}
                  placeholder="profile"
                >
                  <MenuItem  value="">
                    <em>Choose.. Type Profile</em>
                  </MenuItem>
                  <MenuItem value={1}>Project Manager Profile</MenuItem>
                  <MenuItem value={2}>Developer Profile</MenuItem>
                  <MenuItem value={3}>Designer Profile</MenuItem>
                  <MenuItem value={4}>Finance Profile</MenuItem>

                </Select>*/}
              </Grid>
              {/*
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="location"
                    label="Location"
                    type="Location_type"
                    id="location"
                    autoComplete=""
                    onChange={handleNameChange}

                  />
                </Grid>*/
              }
              {/*
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="picture"
                    label="Picture"
                    type="Picture"
                    id="picture"
                    autoComplete=""
                    onChange={handleNameChange}

                  />
                </Grid>*/
              }
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>


            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className=''

            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
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
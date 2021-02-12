import './App.css';

import '././assets/colors.scss'
import '././assets/fonts.scss'
import './App.css';
import Login from './components/login/Login';
import React, { Component } from 'react';
//import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
//import { render } from 'react-dom';
import signup from './components/signup/signup';
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {


  return (
    <div className="App">
      <div className="body">
        <BrowserRouter>
          <Switch>
            <Route exact path={"/"} component={Login}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/signup" component={signup} ></Route>
          </Switch>
        </BrowserRouter>
      </div>

    </div >

  );
}

export default App;

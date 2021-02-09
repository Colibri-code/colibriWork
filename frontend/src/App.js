import './App.css';

import '././assets/colors.scss'
import '././assets/fonts.scss'
import './App.css';
import Login from './components/login/Login';
import React, { Component } from 'react';
//import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
//import { render } from 'react-dom';
import signup from './components/signup/signup';
import { BrowserRouter, Route } from "react-router-dom";

function App() {


  return (

    <div className="App">
      <header className="">

      </header>
      <div className="body">
        <BrowserRouter>
          {/*<Signup/>*/}
          <Route path="/login" component={Login}></Route>
          <Route path="/signup" component={signup} ></Route>
        </BrowserRouter>
      </div>

    </div >

  );
}

export default App;

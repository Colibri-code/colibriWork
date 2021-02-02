import './App.css';
//import Signup from './components/signup/signup';
import Login from './components/login/Login';
import React, { Component } from 'react';
//import { LinkedInPopUp } from 'react-linkedin-login-oauth2';
import { BrowserRouter, Route } from 'react-router-dom';
//import { render } from 'react-dom';
import linkedinSignIn from './components/linkedinSignIn';
import signup from './components/signup/signup';
import { BrowserRouter, Route} from "react-router-dom";

function App() {


      return (
        
          <div className="App">
            <header className="">

            </header>
            <div className="body">
              <BrowserRouter>
              {/*<Signup/>*/}
              <Route path = "/Login" component= {Login}></Route> 
              <Route path = "/linkedinSignIn" component={linkedinSignIn} ></Route> 
              <Route path ="/signup" component= {signup} ></Route>
              </BrowserRouter>
            </div>
          </div>
       
      )
    }

      </header>
    <div className="body">
      <BrowserRouter>
      <Route path="/register" component={Signup}></Route>
      </BrowserRouter>
    </div>
    </div>
  );
}

export default App;

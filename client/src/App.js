import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.css';
import { Router } from "@reach/router";
import { createBrowserHistory } from 'history';



import _ from 'lodash'
import LoginForm from './components/Login';
import DisplayAll from './components/DisplayAll';
import ContactUs from './components/ContactUs';
import DisplayOne from './components/DisplayOne';
import Account from './components/Account';
import Register from './components/Register';

const App = () => {

  const history = createBrowserHistory();

  const [userLoggedIn, setUserLoggedIn] = useState({})
  console.log(_.isEmpty(userLoggedIn))


  return (
    <div className="App">
      <Router history={history}>
            <LoginForm path="/login"
              userLoggedIn = {userLoggedIn}
              setUserLoggedIn = {setUserLoggedIn}
            />
            <DisplayAll path = "/"
              userLoggedIn = {userLoggedIn}
              setUserLoggedIn = {setUserLoggedIn}
            />
            <ContactUs path = "/contactUs" />
            <DisplayOne path = "/:id" 
              userLoggedIn = {userLoggedIn}
              setUserLoggedIn = {setUserLoggedIn}
            />
            <Account path = "/account"
              userLoggedIn = {userLoggedIn}
              setUserLoggedIn = {setUserLoggedIn}
            />
            <Register path = "/register"
              userLoggedIn = {userLoggedIn}
              setUserLoggedIn = {setUserLoggedIn}
            />
      </Router>
    </div>
  );
}

export default App;

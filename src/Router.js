
import React  ,{ useState, useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";



import Login from './pages/Login'
import Header from './pages/Header'
import {Grommet} from 'grommet'
import AccountDetails from "./pages/AccountDetails";

import './App.scss'
import Statement from "./pages/Statement";
import Dashboard from "./pages/Dashboard";
import { Store } from "./store/global";
import { observer } from "mobx-react"

const App = observer(() =>{

  useEffect(() => {
    Store.getAuth()
  });

  return (
    <Grommet
  theme={{ global: { 
      colors: { brand: '#817EFE', focus: "#00000",
      //text: "#456789",
       } 
      }
    }}
  >

  {Store.auth?
    <Router>
      <div>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/account-details">
            <AccountDetails />
          </Route>

          <Route path="/statement">
            <Statement />
          </Route>

          <Route path="/cash">
            <AccountDetails />
          </Route>

          <Route path="/account-transfer">
            <AccountDetails />
          </Route>

          <Route path="/login">
            <Redirect to="/dashboard"/>
          </Route>
          <Route path="/">
            <Dashboard />
          </Route>
        </Switch>
      </div>
    </Router>:
    <div>
    <Router>
    <Redirect to="/login"/>
        <Switch>
          <Route path="/">
            <Login />
          </Route>
          </Switch>
    </Router>
    </div>
    }
    </Grommet>
  );
})
export default App
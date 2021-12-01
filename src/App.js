import React from 'react';
import './App.css';
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home/Home';
import initfirebase from './Components/Firebase/firebase.init';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Projects from './Components/Projects/Projects';
import Header from './Components/Header/Header'

initfirebase();

function App() {
  return (
    <div className="back-ground-full-bady">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/' >
            <Home></Home>
          </Route>
          <Route path='/home' >
            <Home></Home>
          </Route>
          <Route path='/project/:id' >
            <Projects></Projects>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

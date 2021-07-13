import React from 'react'
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Agent from './components/Agent'
import Property from './components/Property'
import Home from './components/Home'
import Manager from './components/Manager'
import propertyForm from './components/propertyForm'
import addBuyer from './components/addBuyer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/addBuyer' component={addBuyer} />
        <Route path='/propertyForm' component={propertyForm} />
        <Route path='/property' component={Property} />
        <Route path='/agent' component={Agent} />
        <Route path='/manager' component={Manager} />
        <Route path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

import React from 'react'
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Agent from './components/Agent'
import Property from './components/Property'
import Home from './components/Home'
import Manager from './components/Manager'
import PropertyForm from './components/PropertyForm'
import addBuyer from './components/addBuyer'
import Seller from './components/Seller'
import Buyer from './components/Buyer'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/addBuyer' component={addBuyer} />
        <Route path='/propertyForm' component={PropertyForm} />
        <Route path='/property' component={Property} />
        <Route path='/agent' component={Agent} />
        <Route path='/manager' component={Manager} />
        <Route path='/seller' component={Seller} />
        <Route path='/buyer' component={Buyer} />
        <Route exact path='/' component={Home} />
      </Switch>
    </Router>
  );
}

export default App;

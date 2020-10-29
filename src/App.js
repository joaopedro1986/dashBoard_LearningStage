import React from 'react';

import './App.css';
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Workers from './Pages/Workers';
import Reports from './Pages/Reports';
import Footer from './Components/Footer'
import NavBarBt from './Components/NavBarBt'



function App() {
  return (
    <>
    <Router>
        <NavBarBt />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/workers' component={Workers} />
          <Route path='/reports' component={Reports} />
        </Switch>
      </Router>
      <Footer />
      
    </>
  );
}

export default App;

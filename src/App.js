import React from 'react';

import './App.css';
import NavBar from './Components/NavBar'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Products from './Pages/Products';
import Reports from './Pages/Reports';



function App() {
  return (
    <>
    <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/products' component={Products} />
          <Route path='/reports' component={Reports} />
        </Switch>
    </Router>
      
    </>
  );
}

export default App;

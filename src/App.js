import React from 'react';
import './App.css';
import ReactDom from 'react-dom';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import { Routes , Route } from 'react-router';
import {Header} from './Header';
import { Home } from './Home';
import { Footer } from './Footer'
import { About } from './About'
import { Project } from './Project'
import { Experience } from './Experience'
import './main.css';
import  '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Container , Row , Col  } from 'react-bootstrap';
const App = () => {
  return(
    <div>
       <Router>
       <Header />
      <Switch>
       <Route path='/' exact><Home /></Route>
       <Route path='/about'><About /></Route>
       <Route path='/project'><Project /></Route>
       <Route path='/Experience'><Experience /></Route>
       </Switch>
       <Footer />
       </Router>
    </div>
  );
}
export default App;

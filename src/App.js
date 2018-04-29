import React, {Component} from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import ComponentA from '../src/components/ComponentA';
import ComponentB from '../src/components/ComponentB';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Layout}/>
          <Route exact path='/a' component={ComponentA}/>
          <Route exact path='/b' component={ComponentB}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

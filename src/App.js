import React, {Component} from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Layout}/>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

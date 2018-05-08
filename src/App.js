import React, { Component } from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import ComponentA from '../src/components/ComponentA';
import ComponentB from '../src/components/ComponentB';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Auth from './store/auth'
import Chat from './components/Chat/Chat';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Layout} />
          <Route
            exact
            path='/a'
            getComponent={(location, callback) => {
              Auth.verifyToken().then((data) => {
                console.log('data', data);
                  callback(null, props => <ComponentA {...props} />);
              });
            }}
          />
          <Route exact path='/b' component={ComponentB} />
          <Route exact path='/chat' component={Chat} />
        </Switch>
      </BrowserRouter>)
  }
}
export
  default
  App;
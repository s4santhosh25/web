import React, {Component} from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import ComponentA from '../src/components/ComponentA';
import ComponentB from '../src/components/ComponentB';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Auth from './store/auth'
import Chat from './components/Chat/Chat';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false
    };
  }

  componentWillMount() {
    this.setState({
      auth: Auth.verifyToken()
    });
  }

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Layout}/>

          <Route
            exact
            path='/a'
            render={(props) => (this.state.auth
            ? (<ComponentA {...props}/>)
            : (<Redirect {...props} to="/"/>))}/>

          <Route exact path='/b' component={ComponentB}/>

          <Route exact path='/chat' component={Chat}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App;
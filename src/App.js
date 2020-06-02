import React, {Component} from 'react';
import {connect} from 'react-redux'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-don"
import './App.css';

class App extends Component {
  render() {
    return(
      <Router>
        <Switch>
          <Route path="/signup">

          </Route>
          <Route path="/user">

          </Route>
          <Route path="/">
            
          </Route>
        </Switch>
      </Router>
    )
  }
}

export default App;

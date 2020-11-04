import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import './index.css';

import reportWebVitals from './reportWebVitals';
import UserContext from './contexts/user';

import Home from './Home';
import Login from './Login';
import Admin from './Admin';

import PrivateRoute from './PrivateRoute';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.updateUser = this.updateUser.bind(this);

    this.state = {
      signedIn: false,
      updateUser: this.updateUser
    }
  }

  updateUser(signedIn) {
    this.setState(() => ({ signedIn }));
  }

  render() {
    return (<Router>
      <UserContext.Provider value={this.state}>
        <div className="App container">
          <h1>Modos en Webpack</h1>
          <nav>
            <ul>
              <li><NavLink activeClassName="active" exact to="/">Inicio</NavLink></li>
              <li><NavLink activeClassName="active" to="/login">Login</NavLink></li>
              <li><NavLink activeClassName="active" to="/admin">Admin</NavLink></li>
            </ul>
          </nav>
          <Route path="/" exact component={Home}/>
          <Route path="/login" exact component={Login}/>
          <PrivateRoute path="/admin" component={Admin}/>
        </div>
      </UserContext.Provider>
    </Router>);
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

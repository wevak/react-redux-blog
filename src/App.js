import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from 'react-redux'
import { userLogin, userLogout, userRegistration } from './redux'
import PublicRoutes from './routes/public'
import AuthorizedRoutes from './routes/authorized'
import $ from 'jquery'

/* Todos
1.React-Redux Done
2.Registration Feature Done
3.Login Feature Done
4.Directory Structure Done
5.Registration Form Validation Done
6.Alert Done
7.React Router Done
8.Password same as Conf Psw Done using Bootstrap Toast Component Done
9.uuid Done
10.Login Form Validation Done
11.Login Alert upon Login Feature Done
12.Login as Registered Feature Done
13.Logout Feature by Done
14.Redux-form implementation
15.Note Articles Done
16.Landing Page Done
17.Note Articles upon login
18.User Profile Page
19.Add Category */

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    this.handleRegistration = this.handleRegistration.bind(this);
  }
 /*  static getDerivedStateFromProps(props, state) {
    console.log(props);
    return state;
  } */
  handleLogin(e) {
    e.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    this.props.dispatch(userLogin({ username, password }));
    if (this.props.session.currentlyLoggedIn.error) {
      $("#customToast").toast('show');
    } else {
      $("#customToast").toast('hide');
      $("#login").modal('hide');
    }
  }
  handleRegistration(e) {
    e.preventDefault();
    if (this.state.password !== this.state.confirmPassword) {
      $("#customToast").toast('show');
    } else {
      this.props.dispatch(userRegistration({
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
      }));
      $("#signup").modal('hide');
    }
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleLogout() {
    this.props.dispatch(userLogout(this.props.session.currentlyLoggedIn.id));
  }
  render() {
    /* const dismissableTopAlertUponRegistration = !this.props.session.currentlyRegistered.firstName
      ? null
      : <Alert username={this.props.session.currentlyRegistered.firstName} action={"registered"} />;
    const dismissableTopAlertUponLogin = !this.props.session.currentlyLoggedIn.firstName
      ? null
      : <Alert username={this.props.session.currentlyLoggedIn.firstName} action={"logged in"} />; */
    const { isLogged } = this.props
    return (
      <Router>
        {isLogged ? <AuthorizedRoutes /> :  <PublicRoutes />}
      </Router>
    );
  }
}

const mapStateToProps = state => {
  const {session} = state
  return{
    isLogged: session.isLogged
  }
}
export default connect(mapStateToProps)(App);

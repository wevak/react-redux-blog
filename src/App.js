import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { connect } from 'react-redux'
import PublicRoutes from './routes/public'
import AuthorizedRoutes from './routes/authorized'

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
14.Redux-form implementation Done
15.Note Articles Done
16.Landing Page Done
17.Note Articles upon login Done
18.User Profile Page
19.Add Category Done
*/
const App = (props) => {
  const { isLogged } = props
  return (
    <Router>
      {isLogged ? <AuthorizedRoutes /> : <PublicRoutes />}
    </Router>
  );
}

const mapStateToProps = state => {
  const { session } = state
  return {
    isLogged: session.isLogged
  }
}
export default connect(mapStateToProps)(App);

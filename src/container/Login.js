import React from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../redux'
import $ from 'jquery'
import LoginForm from '../presentational/LoginForm'

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin(values) {
    this.props.dispatch(userLogin(values));
    // debugger
    if (this.props.login.error){
      $("#customToast").toast('show');
    } else {
      $("#customToast").toast('hide');
      $("#login").modal('hide');
    }
  }
  render() {
    return (
      <LoginForm 
        onLogin={this.handleLogin}
        errorMessage={this.props.login.error}
      />
    )
  }
}

const mapStateToProps = state => {
  return {
    login: state.session.currentlyLoggedIn
  }
}

export default connect(mapStateToProps)(Login);

import React from 'react'
import RegistrationForm from '../components/RegistrationForm'
import $ from 'jquery'
import { userRegistration } from '../redux'
import { connect } from 'react-redux'

class Registration extends React.Component{
  constructor(props){
    super(props)
    this.handleRegistration = this.handleRegistration.bind(this)
  }
  handleRegistration(values){
    if (values.password !== values.confirmPassword) {
      $("#customToast").toast('show');      //Show message upon unmatching password inputs
    } else {
      this.props.dispatch(userRegistration(values))
      $("#signup").modal('hide');
    }
  }
  render(){
    return (
      <RegistrationForm 
        onSignup = {this.handleRegistration}
      />
    )
  }
}

export default connect()(Registration)
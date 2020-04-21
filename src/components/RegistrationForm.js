import React from 'react';
import Toast from './CustomToast';
import { Field, reduxForm } from 'redux-form'

const RegistrationForm = (props) => {
  const { onSignup, handleSubmit } = props;
  return (
    <div className="modal fade" id="signup" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <form onSubmit={handleSubmit(onSignup)}>
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalCenterTitle">Sign Up</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-row">
                <div className="form-group col-6">
                  <label htmlFor="firstName">First Name</label>
                  <Field
                    name="firstName"
                    className="form-control"
                    component="input"
                    type="text"
                    placeholder="John"
                  />
                </div>
                <div className="form-group col-6">
                  <label htmlFor="lastName">Last Name</label>
                  <Field
                    name="lastName"
                    component="input"
                    className="form-control"
                    type="text"
                    placeholder="Doe"
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <Field
                  name="username"
                  component="input"
                  className="form-control"
                  type="text"
                  placeholder="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <Field
                  name="email"
                  component="input"
                  className="form-control"
                  type="email"
                  placeholder="john@doe.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  component="input"
                  className="form-control"
                  type="password"
                  placeholder="password"
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  component="input"
                  className="form-control"
                  type="password"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="modal-footer">
              <Toast message={"Please enter matching passwords"} />
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary">Sign Up</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
export default reduxForm({
  form: 'registration'
})(RegistrationForm);
import React from 'react';
import Toast from './CustomToast'
import { Field, reduxForm } from 'redux-form'

const Login = ({ onLogin, handleSubmit, errorMessage }) => {
  return (
    <div className="modal fade" id="login" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalCenterTitle">Login</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <form onSubmit={handleSubmit(onLogin)}> {/* Redux Form handleSubmit */}
            <div className="modal-body">
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">Username:</label>
                <Field
                  name="username"
                  className="form-control"
                  component="input"
                  type="text"
                  placeholder="username"
                />
              </div>
              <div className="form-group">
                <label htmlFor="recipient-name" className="col-form-label">Password:</label>
                <Field
                  name="password"
                  className="form-control"
                  component="input"
                  type="password"
                  placeholder="password"
                />
              </div>
            </div>
            <div className="modal-footer">
              <Toast message={errorMessage} />
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default reduxForm({
  form: "login"
})(Login);
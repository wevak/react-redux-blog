import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Navbar = (props) => {
  const hideLoginSignUpButton = props.onLogin || props.onRegistration ? 'd-none' : '';
  return (
    <>
      <nav className="navbar navbar-dark bg-dark">
        <Link to="/" className="navbar-brand">Activello</Link>
        <div className="form-inline">
            <button type="button" className={`btn btn-success ${hideLoginSignUpButton}`}  onClick={()=> $("#signup").modal('show')}
            /* data-toggle="modal" */ data-target="#signup">
              Sign Up
            </button>
            <button type="button" className={`btn btn-success ml-2 ${hideLoginSignUpButton}`} onClick={()=> $("#login").modal('show')}
            /* data-toggle="modal" */data-target="#login">
              Login
            </button>
        </div>
      </nav>
      {props.alertUponRegistration}
      {props.alertUponLogin}
    </>
  )
}

export default Navbar;
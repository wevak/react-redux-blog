import React from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand">Activello</Link>
      <div className="form-inline">
        <button type="button" className="btn btn-success" onClick={() => $("#signup").modal('show')}>
          Sign Up
          </button>
        <button type="button" className="btn btn-success ml-2" onClick={() => $("#login").modal('show')}>
          Login
          </button>
      </div>
    </nav>
  )
}

export default Navbar;
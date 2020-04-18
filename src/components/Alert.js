import React from 'react';

const Alert = (props) => {
  return (
    <div className="alert alert-success alert-dismissible fade show" role="alert">
      <strong>Congratulations {props.username}!</strong> You have been successfully {props.action}.
      <button type="button" className="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
  )
}

export default Alert;
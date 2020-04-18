import React from 'react';

const Toast = (props) => {
  return (
    <div aria-live="polite" aria-atomic="true" className="d-flex justify-content-center align-items-center">
      <div id="customToast" role="alert" aria-live="assertive" aria-atomic="true" className="toast" data-autohide="false">
        <div className="toast-header">
          <strong className="mr-auto">{props.message}</strong>
          <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Toast;
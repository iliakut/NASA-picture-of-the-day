import React from "react";

const Alert = ({message}) => {
  return (
    <div className="alert alert-danger text-center m-5" role="alert">
      {message || 'Error loading'}
    </div>
  );
};

export default Alert;

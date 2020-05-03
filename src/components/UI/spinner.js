import React from "react";

const Spinner = () => {
  const spinnerStyle = {
    height: '100px',
    width: '100px',
  };

  return (
    <div className="text-center">
      <div
        className="spinner-grow"
        role="status"
        style={spinnerStyle}
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Spinner;

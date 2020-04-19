import React from 'react';
import './header.css'

const Header = () => {
  return (
    <div>
      <h4 className="header-text">Astronomy Picture of the Day</h4>
      <div className="header-wrap">
        <div className="header-item">
          ???
        </div>
        <div className="form-group header-item">
          <input
            type="date"
            className="form-control"
            id="pictureDateInput"
          />
          <label className="col-form-label"
                 htmlFor="pictureDateInput">
            Default input
          </label>
        </div>
        <div className="header-item">
          Enter API key
        </div>
      </div>
    </div>
  );
};

export default Header;

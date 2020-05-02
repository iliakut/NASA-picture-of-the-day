import React from 'react';
import './header.css'
import HeaderLogin from "./headerLogin/headerLogin";
import HeaderDateInput from "./headerDateInput/headerDateInput";

const Header = ({date, onDateChange, onAcceptKey}) => {
  return (
    <div>
      <h4 className="header-text">Astronomy Picture of the Day</h4>
      <div className="header-wrap">
        <div className="header-item">
          <button className="btn btn-outline-primary">All</button>
        </div>
        <div className="header-item">
          <HeaderDateInput
            date={date}
            onDateChange={onDateChange}
          />
        </div>
        <div className="header-item">
          <HeaderLogin
            onAcceptKey={onAcceptKey}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

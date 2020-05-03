import React from "react";
import "./footer.css"

const Footer = ({text, copyright}) => {
  return (
     <div className="footer-container">
       {text}
       {
         copyright
         ? <div>© {copyright}</div>
         : null
       }
     </div>
  );
};

export default Footer;

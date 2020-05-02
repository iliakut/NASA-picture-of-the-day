import React from "react";
import "./footer.css"

const Footer = ({text, copyright}) => {
  return (
     <div className="footer-container">
       {text}
       <div>©{copyright}</div>
     </div>
  );
};

export default Footer;

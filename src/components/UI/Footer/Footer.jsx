import { Mail } from "@material-ui/icons";
import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__email">
        <Mail className="footer__icon" />
        <a>support@experienceconcerts.co</a>
      </div>
      <div className="footer__bottom">
        <h1>EXP|CON</h1>
        <div className="footer__copyRight">
          <span>
            2019 @ All Right Reserved | Speer Technologies Incorporated
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer;

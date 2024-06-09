import React from "react";
import "./Footer.scss";
import { LinkedIn, Copyright} from '@mui/icons-material';


const Footer = () => {
  return (
    <div className="footer">
      {/* list of links lefthand side */}
      <div className="footer-links-container">
        <ul className="footer-links">
          <a href="/about"><li><LinkedIn/>BrightPath Strategies</li></a>
          <a href="/about"><li><LinkedIn/>Claire LaBrunerie</li></a>
        </ul>
      </div>
      {/* copyright info */}
      <div className="footer-copyright-container">
        <span className="footer-copyright"><Copyright fontSize="small"/>2024 BrightPath Strategies. All Rights Reserved.</span>
      </div>
    </div>
  )
};

export default Footer;

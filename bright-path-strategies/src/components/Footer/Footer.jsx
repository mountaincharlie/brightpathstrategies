import React from "react";
import "./Footer.scss";
import { LinkedIn, Copyright} from '@mui/icons-material';


const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      {/* list of links lefthand side */}
      <div className="footer-links-container">
        <ul className="footer-links">
          <a href="https://www.linkedin.com/in/clairelabrunerie/" target="_blank"><li><LinkedIn/>Claire LaBrunerie</li></a>
          <a href="https://www.linkedin.com/company/brightpath-strategies-llc/" target="_blank"><li><LinkedIn/>BrightPath Strategies</li></a>
        </ul>
      </div>
      {/* copyright info */}
      <div className="footer-copyright-container">
        <span className="footer-copyright"><Copyright fontSize="small"/>{currentYear} BrightPath Strategies. All Rights Reserved.</span>
      </div>
    </div>
  )
};

export default Footer;

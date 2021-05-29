import React from 'react';
import companyLogo from '../company-logo.png';

const Footer: React.FC= (props) => {
	return (
      <footer className=''>
          {/* <div className="footer-copyright">
            <div className="container"> */}
            © 2021 Copyright <img src={companyLogo} alt="" className="px1 align-center" width="150"/>
            {/* </div>
          </div> */}
        </footer>
	)
}

export default Footer;
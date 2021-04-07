import React from 'react';
import './Footer.css';
import {SocialIcon} from 'react-social-icons';

const Footer = () => {
    
    return(
        <div className="Footer">

            &copy; 2021 All rights reserved by <a href="https://devsajib.com"> Samiul Islam </a> "Build with React" .

            <SocialIcon className="Icons" url="https://twitter.com/twitt_sajib" />
            <SocialIcon className="Icons" url="https://facebook.com/fb.sajib" />
            <SocialIcon className="Icons" url="https://instagram.com/instaa_sajib" />
            <SocialIcon className="Icons" url="https://github.com/git-sajib" />
            
        </div>
    );
    
}
export default Footer;
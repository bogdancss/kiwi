import React, {Component} from 'react';
import {Link} from 'react-router';
import {FaFacebook, FaTwitter} from 'react-icons/lib/fa';
import './Footer.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <ul className="footer__nav">
          <li className="footer__nav-item">
            <Link title="Other Media" to={`/`}>Home</Link>
          </li>
          <li className="footer__nav-item">
            <Link title="About us" to={`/about`}>About</Link>
          </li>
          <li className="footer__nav-item">
            <Link title="Our work" to={`/work`}>Work</Link>
          </li>
          <li className="footer__nav-item">
            <Link title="Contact us" to={`/contact`}>Contact</Link>
          </li>
        </ul>
        <div className="footer__social-wrapper">
          <span>Copyright</span>
          <Link title="Facebook" to={`#`}><FaFacebook/></Link>
          <Link title="Twitter" to={`#`}><FaTwitter/></Link>
        </div>
      </div>
    );
  }
}
export default Footer;

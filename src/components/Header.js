import React, {Component} from 'react';
import {Link} from 'react-router';
import './Header.scss';

class Header extends Component {

  constructor(props) {
    super(props);
    this.state = {menuOpen: false};
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({menuOpen: !this.state.menuOpen});
  }

  render() {
    return (
      <div className="header">
        <header className="header__header">
          <Link title="Kiwi" to={`/`} className="header__home-link">
            <div className="header__logo"></div>
            <h1 className="header__title">Kiwi</h1>
          </Link>
          <div className={`header__nav-button ${this.state.menuOpen ? 'open' : ''}`} onClick={this.toggleMenu}>
            <span></span><span></span><span></span>
          </div>
          <ul className={`header__nav ${this.state.menuOpen ? 'expanded' : ''}`}>
            <li className="header__nav-item">
              <Link title="Other Media" to={`/`}>Home</Link>
            </li>
            <li className="header__nav-item">
              <Link title="About us" to={`/about`}>About</Link>
            </li>
            <li className="header__nav-item">
              <Link title="Our work" to={`/work`}>Work</Link>
            </li>
            <li className="header__nav-item">
              <Link title="Contact us" to={`/contact`}>Contact</Link>
            </li>
          </ul>
        </header>
      </div>
    );
  }
}
export default Header;

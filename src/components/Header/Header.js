import './Header.scss';
import logo from '../../assets/icons/logo.svg';
import nav from '../../assets/icons/nav.svg';
import code from '../../assets/icons/code.svg';
import user from '../../assets/icons/user.svg';
import { NavLink } from 'react-router-dom';

const Header = ({ toggleSideBar, sidebar }) => {
  return (
    <>
      {/* show a backdrop when nav bar is open or not */}
      <div
        className={sidebar ? 'backdrop--open' : 'backdrop'}
        onClick={toggleSideBar}
      ></div>
      <header className="header">
        <NavLink to="/">
          <img src={logo} alt="website logo" className="header__logo" />
        </NavLink>
        <nav className="header__links">
          <div className="header__link">
            <button className="header__resume">Resume</button>
          </div>

          <div className="header__link">
            <img src={code} alt="work icon" className="header__icon" />
            <a
              //update link when later
              href="/"
              className="header__anchor"
            >
              Work
            </a>
          </div>

          <div className="header__link">
            <img src={user} alt="user icon" className="header__icon" />
            <NavLink to="/about" className="header__anchor">
              About Me
            </NavLink>
          </div>

          <img
            src={nav}
            alt="website logo"
            className="header__sidebar"
            onClick={toggleSideBar}
          />
          
        </nav>
      </header>
    </>
  );
};

export default Header;
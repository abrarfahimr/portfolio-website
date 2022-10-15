import './Header.scss';
import logo from '../../assets/icons/logo.svg';
import nav from '../../assets/icons/nav.svg';
import { NavLink } from 'react-router-dom';

const Header = ({ toggleSideBar, sidebar }) => {
  return (
    <>
      {/* show a backdrop when nav bar is open or not */}
      <div
        className={sidebar ? 'backdrop--open' : 'backdrop'}
        onClick={toggleSideBar}
      ></div>
      <div className="header">
        <NavLink to="/">
          <img src={logo} alt="website logo" className="header__logo" />
        </NavLink>
        <img
          src={nav}
          alt="website logo"
          className="header__nav"
          onClick={toggleSideBar}
        />
      </div>
    </>
  );
};

export default Header;
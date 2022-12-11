import './NavBar.scss';
import briefcase from '../../assets/icons/briefcase.svg';
import code from '../../assets/icons/code.svg';
import user from '../../assets/icons/user.svg';
import xcircle from '../../assets/icons/x-circle.svg';
import { NavLink } from 'react-router-dom';

const NavBar = ({ toggleSideBar, sidebar }) => {
  return (
    <div className={sidebar ? 'nav--open' : 'nav'}>
      <div className="nav__closecontainer">
        <img
          src={xcircle}
          alt="cancel icon"
          className="nav__close"
          onClick={toggleSideBar}
        />
      </div>
      <div className="nav__links">
        <div className="nav__link">
          <img src={briefcase} alt="resume icon" className="nav__icon" />
          <a
            href="https://drive.google.com/file/d/1SbDMS7dVhIPRq7-RqqCR2AUiFmaSLohU/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav__anchor"
          >
            Resume
          </a>
        </div>
        <div className="nav__link">
          <img src={code} alt="work icon" className="nav__icon" />
          <a
            href="/#project__start"
            className="nav__anchor"
          >
            Work
          </a>
        </div>
        <div className="nav__link">
          <img src={user} alt="user icon" className="nav__icon" />
          <NavLink to="/about" className="nav__anchor">
            About Me
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
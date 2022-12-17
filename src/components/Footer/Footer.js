import './Footer.scss';
import linkedin from '../../assets/icons/linkedin.svg';
import github from '../../assets/icons/github.svg';
import ux from '../../assets/icons/ux.svg';

const Footer = () => {
  return (
    <footer className="footer">
      <p className="footer__paragraph">Thanks for visiting! 😁</p>
      <p className="footer__paragraph--bold">
        Let’s Have a chat over coffee sometime ☕️
      </p>
      <p className="footer__paragraph">
        I would love to connect with you and talk to you about full stack
        development, current trends in the industry, or anime for that matter.
      </p>
      <p className="footer__paragraph">
        Currently looking for full stack, frontend, and backend software
        development jobs.
      </p>
      <div className="footer__linkcontainer">
        <a className="footer__link" href="mailto:abrarfahimr@gmail.com">
          <button className="footer__button">Happy to connect!</button>
        </a>
      </div>
      <div className="footer__socials">
        <a
          className="footer__links"
          href="https://www.linkedin.com/in/abrarfahimr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="footer__icon"
            src={linkedin}
            alt="linkedin icon"
          ></img>
        </a>
        <a
          className="footer__links"
          href="https://github.com/abrarfahimr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__icon" src={github} alt="github icon"></img>
        </a>
        <a
          className="footer__links"
          href="https://abrarfahimr.notion.site/abrarfahimr/Hi-This-is-Abrar-5369d91b9a1243a38fe0bcab4050338d"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img className="footer__icon" src={ux} alt="ux icon"></img>
        </a>
      </div>
      <p className="footer__copyright">
        Designed and Developed by Abrar Rahman
      </p>
    </footer>
  );
}

export default Footer;
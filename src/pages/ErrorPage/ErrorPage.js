import './ErrorPage.scss';
import { useNavigate } from 'react-router-dom';

const ErrorPage = () => {
  //use navigates redirects to home page
  const navigate = useNavigate();
  const returnHome = () => {
    navigate('/');
  };
  return (
    <div className="error">
      <h1 className="error__heading">
        You've landed in the middle of nowhere.
      </h1>
      <p className="error__description">Head back to the homepage here ⬇️</p>
      <button className="error__button" onClick={returnHome}>
        Homepage
      </button>
    </div>
  );
};

export default ErrorPage;

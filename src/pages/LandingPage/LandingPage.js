import './LandingPage.scss';
import memoji from "../../assets/images/memoji.png";

const LandingPage = () => {
  return (
    <div className="landing">
      <main className="landing__container">
        <div className='landing__headercontainer'>
          <h1 className="landing__header">
            Hi! <span className="landing__animate">👋</span> This is Abrar,
          </h1>
        </div>
        <h2 className="landing__subheader">
          A Toronto-based Full Stack Developer bringing interactive,
          user-friendly, and scalable digital experiences to you.
        </h2>
        <p className="landing__focus">
          Focus: Web Development, Frontend, Backend, UX/UI
        </p>
      </main>
      <div className="landing__imagecontainer">
        <img src={memoji} alt="memoji" className="landing__image" />
      </div>
    </div>
  );
}

export default LandingPage;
import './LandingPage.scss';
import memoji from "../../assets/images/memoji.png";
import { projectData } from '../../data/projectData';
import { Link } from 'react-router-dom';
import { v4 as uuidv4} from 'uuid';



const LandingPage = () => {
  return (
    <div className="landing">
      <main className="landing__container">
        <div className="landing__headercontainer">
          <h1 className="landing__header">
            Hi! <span className="landing__animate">👋</span> This is Abrar,
          </h1>
          <h2 className="landing__subheader">
            A Toronto-based Full Stack Developer bringing interactive,
            user-friendly, and scalable digital experiences to you.
          </h2>
          <p className="landing__focus">
            Focus: Web Development, Frontend, Backend, UX/UI
          </p>
        </div>
        <div className="landing__imagecontainer">
          <img src={memoji} alt="memoji" className="landing__image" />
        </div>
      </main>
      <section className="landing__projects">
        <h2 className="landing__sectionheader" id='project__start'>My Projects</h2>
        <div className="landing__projectcontainer">
          {projectData.map((project) => {
            return (
              <div className="landing__project" key={uuidv4()}>
                <Link className="landing__overlay" to={`/${project.id}`}></Link>
                <img
                  className="landing__projectimage"
                  src={project.image}
                  alt="project thumbnail"
                ></img>
                <h3 className="landing__title">{project.projectname}</h3>
                <p className="landing__description">
                  {project.shortdescription}
                </p>
                <p className="landing__stack">{project.techstackbrief}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
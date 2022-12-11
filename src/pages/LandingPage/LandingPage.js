import './LandingPage.scss';
import memoji from '../../assets/images/memoji.png';
import { projectData } from '../../data/projectData';
import { Link } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { useInView } from 'react-intersection-observer';


const LandingPage = () => {
  
  //Add useInview refs to container to track visibility on screen
  const { ref: landingRef, inView: elementVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: projectRef, inView: projectVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <div className="landing">
      <main
        className={`${
          elementVisible ? 'landing__container--animate' : 'landing__container'
        }`}
        ref={landingRef}
      >
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
      <section className="landing__projects" id="project__start">
        <h2 className="landing__sectionheader">My Projects</h2>
        <div
          className={`${
            projectVisible
              ? 'landing__projectcontainer--animate'
              : 'landing__projectcontainer'
          }`}
          ref={projectRef}
        >
          {projectData.map((project, index) => {
            return (
              <div className="landing__project" key={uuidv4()}>
                <Link
                  className="landing__overlay"
                  to={`/work/${project.id}`}
                ></Link>
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
};

export default LandingPage;

import { useParams } from 'react-router-dom';
import './WorkPage.scss';
import { projectData } from '../../data/projectData';
import site from '../../assets/icons/globe.svg';
import githubIcon from '../../assets/icons/github.svg';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

const WorkPage = () => {

  //Set up states
  const [project, setProject] = useState([]);
  const [backend, setBackend] = useState('');
  const [other, setOther] = useState('');
  const [description, setDescription] = useState('');
  const [github, setGithub] = useState('');

  let { id } = useParams();

  //Add useInview refs to container to track visibility on screen
  const { ref:imageRef, inView:imageVisible } = useInView({
    triggerOnce: true,
  });

   const { ref:stackRef, inView:stackVisible } = useInView({
     triggerOnce: true,
   });
  
  const { ref:describeRef, inView:describeVisible } = useInView({
    triggerOnce: true,
  });

  const { ref:linkRef, inView: linkVisible } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    let currentId = id;
    setProject(projectData.find((project) => project.id === currentId));
    setBackend(projectData.find((project) => project.id === currentId).backend);
    setOther(projectData.find((project) => project.id === currentId).other);
    setDescription(
      projectData.find((project) => project.id === currentId).description[0]
    );
    setGithub(projectData.find((project) => project.id === currentId).github);
  }, []);

  return (
    <section className="work">
      <h1 className="work__title">{project.projectname}</h1>
      <div
        className={`${
          imageVisible
            ? 'work__imagecontainer--animate'
            : 'work__imagecontainer'
        }`}
        ref={imageRef}
      >
        <a
          href={project.website}
          className="work__imagelink"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={project.image}
            alt="project thumbnail"
            className="work__image"
          />
        </a>
      </div>
      <h2 className="work__subtitle">Tech Stack</h2>
      <div
        className={`${stackVisible ? 'work__stack--animate' : 'work__stack'}`}
        ref={stackRef}
      >
        <p className="work__paragraph">
          <span className="work__paragraph--frontend">Frontend: </span>
          {project.frontend}
        </p>
        <p className={backend ? 'work__paragraph' : 'work__paragraph--none'}>
          <span className="work__paragraph--backend">Backend: </span>
          {project.backend}
        </p>
        <p className={other ? 'work__paragraph' : 'work__paragraph--none'}>
          <span className="work__paragraph--others">Others: </span>
          {project.other}
        </p>
      </div>
      <h2 className="work__subtitle">Description</h2>
      <div
        className={`${
          describeVisible ? 'work__paragraphs--animate' : 'work__paragraphs'
        }`}
        ref={describeRef}
      >
        <p className="work__paragraph">{description.paragraph1}</p>
        <p className="work__paragraph">{description.paragraph2}</p>
        <p className="work__paragraph">{description.paragraph3}</p>
      </div>
      <div
        className={`${linkVisible ? 'work__links--animate' : 'work__links'}`}
        ref={linkRef}
      >
        <a
          className="work__linktag"
          href={project.website}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={site} alt="website icon" className="work__link" />
        </a>
        <a
          className={github ? 'work__linktag' : 'work__linktag--none'}
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={githubIcon} alt="website icon" className="work__link" />
        </a>
      </div>
    </section>
  );
};

export default WorkPage;

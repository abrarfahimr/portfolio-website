import './AboutPage.scss';
import profile from '../../assets/images/profile.png';
import purple from '../../assets/icons/hexagon-purple.svg';
import blue from '../../assets/icons/hexagon-blue.svg';

const AboutPage = () => {
  return (
    <div className="about">
      <h1 className="about__heading">About Me 👀</h1>
      <div className="about__imagecontainer">
        <img src={profile} alt="profile" className="about__image" />
      </div>
      <div className="about__description">
        <p className="about__paragraph">
          I am a web development graduate from BrainStation (September 2022). I
          have a background in architecture and am self-taught as a product
          designer. My skills focus on developing interactive, user-friendly,
          and scalable digital experiences by working on cross-functional teams
          ensuring high-quality output and efficient performance.
        </p>
        <p className="about__paragraph">
          I have gained relevant experience as a web developer project-based
          learning at BrainStation participating in hackathons and capstone
          projects where I have demonstrated strong technical skills in
          client-side development using REACT and data management using NODE.
          During my internship for an architecture firm back in Bangladesh I
          attended cross-functional workshops with project managers and
          engineers to resolve technical issues in one of our hi-rise office
          projects for a reputable company. The workshops helped get
          everyone&#39;s feedback and improve awareness among the team which
          helped reduce waste by an astounding 10%. My part-time job required
          monitoring and organizing data from inventory to ensure as minimal
          waste as possible. I helped create a new data management system that
          improved inventory quality. Although if I had to go back I would make
          it more scalable to account for future growth.
        </p>
      </div>
      <div className="about__current">
        <p className="about__label">
          Currently looking for full stack, frontend, and backend software
          development jobs.
        </p>
      </div>
      {/* frontend list */}
      <div className="about__frontend">
        <h2 className="about__title">Frontend</h2>
        <div className="about__listcontainer">
          <div className="about__list1">
            <ul className="about__ulist">
              <li className="about__list">
                <img
                  src={purple}
                  alt="purple hexagon icon"
                  className="about__bulletpoint"
                />
                Javascript (ES6+)
              </li>
              <li className="about__list">
                <img
                  src={purple}
                  alt="purple hexagon icon"
                  className="about__bulletpoint"
                />
                React
              </li>
              <li className="about__list">
                <img
                  src={purple}
                  alt="purple hexagon icon"
                  className="about__bulletpoint"
                />
                HTML
              </li>
            </ul>
          </div>
          <div className="about__list2">
            <ul className="about__ulist">
              <li className="about__list">
                <img
                  src={purple}
                  alt="purple hexagon icon"
                  className="about__bulletpoint"
                />
                CSS
              </li>
              <li className="about__list">
                <img
                  src={purple}
                  alt="purple hexagon icon"
                  className="about__bulletpoint"
                />
                SASS
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* backend list */}
      <div className="about__frontend">
        <h2 className="about__title">Backend</h2>
        <div className="about__listcontainer">
          <div className="about__list1">
            <ul className="about__ulist">
              <li className="about__list">
                <img
                  src={blue}
                  alt="blue hexagon icon"
                  className="about__bulletpoint"
                />
                Node.js
              </li>
              <li className="about__list">
                <img
                  src={blue}
                  alt="blue hexagon icon"
                  className="about__bulletpoint"
                />
                Express.js
              </li>
            </ul>
          </div>
          <div className="about__list2">
            <ul className="about__ulist">
              <li className="about__list">
                <img
                  src={blue}
                  alt="blue hexagon icon"
                  className="about__bulletpoint"
                />
                Knex.js
              </li>
              <li className="about__list">
                <img
                  src={blue}
                  alt="blue hexagon icon"
                  className="about__bulletpoint"
                />
                MySQL
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* others */}
      
    </div>
  );
}

export default AboutPage;
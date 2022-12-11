import './AboutPage.scss';
import profile from '../../assets/images/profile.png';
import purple from '../../assets/icons/hexagon-purple.svg';
import blue from '../../assets/icons/hexagon-blue.svg';
import yellow from '../../assets/icons/hexagon-yellow.svg';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';

const AboutPage = () => {

  //setup states
  const [animate, setAnimate] = useState(false)
  
  //handle state when clicking on icon
  const handleAnimation = () => {
    setAnimate((prevState => !prevState));
  }

  //Add useInview refs to container to track visibility on screen
  const { ref: pictureRef, inView: pictureVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: textRef, inView: textVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: currentRef, inView: currentVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: skillRef, inView: skillVisible } = useInView({
    triggerOnce: true,
  });
  const { ref: descriptionRef, inView: descriptionVisible } = useInView({
    triggerOnce: true,
  });

  return (
    <section className="about">
      <h1 className="about__heading">
        About Me
        <span className={`${animate ? 'about__icon--animate' : 'about__icon'}`} onClick={handleAnimation}>
          🚀
        </span>
      </h1>
      <div className="about__imagecontainer" ref={pictureRef}>
        <img
          src={profile}
          alt="profile"
          className={`${
            pictureVisible ? 'about__image--animate' : 'about__image'
          }`}
        />
      </div>
      <div className="about__description" ref={textRef}>
        <p
          className={`${
            textVisible ? 'about__paragraph--animate' : 'about__paragraph'
          }`}
        >
          I am a web development graduate from BrainStation (September 2022). I
          have a background in architecture and am self-taught as a product
          designer. My skills focus on developing interactive, user-friendly,
          and scalable digital experiences by working on cross-functional teams
          ensuring high-quality output and efficient performance.
        </p>
        <p
          className={`${
            textVisible ? 'about__paragraph--animate' : 'about__paragraph'
          }`}
        >
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
      <div className="about__current" ref={currentRef}>
        <p
          className={`${
            currentVisible ? 'about__label--animate' : 'about__label'
          }`}
        >
          Currently looking for full stack, frontend, and backend software
          development jobs.
        </p>
      </div>

      <div
        className={`${
          skillVisible ? 'about__skills--animate' : 'about__skills'
        }`}
        ref={skillRef}
      >
        {/* frontend list */}
        <div className="about__stack">
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
        <div className="about__stack">
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
        <div className="about__stack">
          <h2 className="about__title">Backend</h2>
          <div className="about__listcontainer">
            <div className="about__list1">
              <ul className="about__ulist">
                <li className="about__list">
                  <img
                    src={yellow}
                    alt="yellow hexagon icon"
                    className="about__bulletpoint"
                  />
                  Auth0
                </li>
                <li className="about__list">
                  <img
                    src={yellow}
                    alt="yellow hexagon icon"
                    className="about__bulletpoint"
                  />
                  Heroku
                </li>
              </ul>
            </div>
            <div className="about__list2">
              <ul className="about__ulist">
                <li className="about__list">
                  <img
                    src={yellow}
                    alt="yellow hexagon icon"
                    className="about__bulletpoint"
                  />
                  Postman
                </li>
                <li className="about__list">
                  <img
                    src={yellow}
                    alt="yellow hexagon icon"
                    className="about__bulletpoint"
                  />
                  Figma
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          descriptionVisible
            ? 'about__hobbiescontainer--animate'
            : 'about__hobbiescontainer'
        }`}
        ref={descriptionRef}
      >
        <h2 className="about__title">Hobbies and Interests</h2>
        <div className="about__hobbies">
          <h3 className="about__subtitle">Nerd for technology and design 🧑‍💻</h3>
          <p className="about__description">
            I love to watch daily youtube videos about the newest technology and
            designs. Some areas of interest are in software development, tech,
            PC builds, UI design.
          </p>
        </div>
        <div className="about__hobbies">
          <h3 className="about__subtitle">Drawing and Painting 🧑‍🎨</h3>
          <p className="about__description">
            I started painting at a young age, oil painting scenic environments
            and people in the rural areas of Bangladesh. Moved to designing
            architectural structures and now looking to get into digital
            designing in photoshop.
          </p>
        </div>
        <div className="about__hobbies">
          <h3 className="about__subtitle">Anime and Video Games 🎮</h3>
          <p className="about__description">
            I was born in a generation in love with video gaming so this is a
            no-brainer. But some of my favourite games are Dota 2, Monster
            Hunter World, and the Dark Souls series. Anime is my only source of
            entertainment besides youtube. I rarely see any shows on Netflix
            unless it's about mythological fiction like The Witcher and Lord of
            The Rings. I am a sucker for romance-comedy series.
          </p>
        </div>
        <div className="about__hobbies">
          <h3 className="about__subtitle">
            “I’m going on an adventure!”~Bilbo Baggins ✈️
          </h3>
          <p className="about__description">
            I am grateful to my parents to have let me travel to so many
            countries from the early age of 5. However, traveling alone gives me
            a sense of peace, and would highly recommend anyone to do try it
            once in their lifetime. My favourite cities to visit so far are
            London, Singapore, and Thailand. My dream destination is to visit
            Japan for 2 weeks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;

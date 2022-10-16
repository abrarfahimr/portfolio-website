import dashboard from '../assets/images/coffee-corner.png';
import instock from '../assets/images/instock.png';
import wnba from '../assets/images/wnba.png';
import pokemon from '../assets/images/pokemon.png';

export const projectData = [
  {
    image: dashboard ,
    projectname: 'Coffee Corner Dashboard',
    shortdescription:
      'Coffee Corner is a dashboard created for a startup business that specializes in selling coffee products from different roasters around the world.',
    techstackbrief: 'React, Node.js, Express, MySQL, Knex.js, Auth0, Recharts',
    frontend: 'HTML, CSS, Javascript, React',
    backend: 'Node.js, Express, Knex.js, MySQL, MySQL Workbench',
    other: 'Auth0, Recharts, Heroku, Postman',
    description: [
      {
        paragraph1:
          'Coffee Corner is my fullstack capstone project at BrainStation called Coffee Corner. It is a dashboard for a startup company focused on selling different brands of coffee.The goal to help make better business decisions through dynamic data visualization and manage and maintain data on products and customers.',
        paragraph2:
          'The project was built with two key areas of focus. Data management and Data visualization. Data management using CRUD operation And data visualization with graphs and charts to know how well the business is doing and find areas of high and low potential.',
        paragraph3:
          'While working I came into some problems and areas of opportunity that I want to highlight from future sprints. First is an opportunity to dynamically update statistics as new transactions happen. Building for real time statistics such as that of salesforce is an important opportunity area to consider so users can immediately see major issues as soon as they happen. One functionality issue I found while creating the product page was the images being imported into a fake directory instead of a public library in the backend server.',
      },
    ],
    website: 'https://coffee-corner-dashboard.herokuapp.com/',
    github: 'https://github.com/abrarfahimr/coffee-corner-frontend',
  },
  {
    image: instock ,
    projectname: 'Instock',
    shortdescription:
      'An Agile Development project at BrainStation. We were split into groups of 4-5 web dev students breaking work into SCRUM and KANBAN boards',
    techstackbrief: 'React, Node.js, Express, JIRA',
    frontend: 'HTML, CSS, Javascript, React',
    backend: 'Node.js, Express',
    other: 'JIRA, Heroku, Postman',
    description: [
      {
        paragraph1:
          'An Agile Development project at BrainStation. We were split into groups of 4-5 web dev students breaking work into SCRUM and KANBAN boards in JIRA to create a responsive single-page application focused on CRUD operations. This was done in a single sprint that lasted one week and we were able to finish and test for bugs one day before the deadline.',
        paragraph2:
          'The site is a fully responsive web application that uses CRUD operation to manage data of warehouses and inventory. Every day we alternate between scrum master where we talked about what we are going to be working on for that day and any problems that came up. I was the scrum master for the first day so my responsibility was to allocate equal amount and  story points of frontend and backend work to my team.',
        paragraph3:
          'In future sprints we would like to implement a database for our backend. We ran into issues where the data would not load at all so further testing is needed to improve the efficiency and performance of the site.',
      },
    ],
    website: 'https://instock-bs.herokuapp.com/warehouse',
  },
  {
    image: wnba,
    projectname: 'WNBA Player Page',
    shortdescription:
      "This was a 24-hour industry project at BrainStation where we took up a challenge faced by one of the industry partners. This was a cross-functional collaborative project where I teamed up with fellow web developers, data analysts, UX designers, and digital marketers to find a solution to the company's problem.",
    techstackbrief: 'Javascript, React, SASS',
    frontend: 'HTML, CSS, Javascript, React, SASS',
    description: [
      {
        paragraph1:
          "This project was a 24 hour industry project at BrainStation where we took up a challenge faced by one of the industry partners. Our industry partner was The Women's National Basketball Association and the challenge was 'How might the WNBA better leverage its ecosystem to make engagement with the League more accessible than ever before?'. This was a cross-functional collaborative project where I teamed up with fellow web developers, data analysts, UX designers, and digital marketers to find a solution to the problem the company was facing.",
        paragraph2:
          'Through thorough research we came up with the solution of redesigning the players page to allow for current and prospective fans to effortlessly find players and create connections using data to drive player recognition. Our strategy was to increase visibility and brand recognition with the WNBA to increase viewership and engagement. Lean into creatively showcasing the players of the WNBA on not only a professional level, but a personal level as well and create an emotional bond between the viewer and the WNBA player(s).',
      },
    ],
    website: 'https://wnba-bucket-list.herokuapp.com/',
  },
  {
    image: pokemon,
    projectname: 'Pokemon Card Dealership',
    shortdescription:
      'Pokemon card dealership is an e-commerce platform that sells rare pokemon cards to customers. This project was part of the 24 hour pair programming hackathon at BrainStation. I paired up with my colleague Irene Xing to design a fun and interactive interface.',
    techstackbrief: 'Javascript, Node.js, Express, React, SASS',
    frontend: 'HTML, CSS, Javascript, React, SASS',
    backend: 'Node.js, Express',
    description: [
      {
        paragraph1:
          'Pokemon card dealership is an e-commerce platform that sells rare pokemon cards to customers. This project was part of the 24 hour pair programming hackathon at BrainStation. I paired up with my colleague Irene Xing to design a fun and interactive interface.',
        paragraph2:
          'The project was done from scratch and mimics a database using node.js and express. The data has three json files. One for the list of pokemon cards, another for more details on each card, and the last was for order history. Using the GET and POST methods, we changed the states of components. The front end was build on react using components and routing. The goal of the site was to create an experience similar to how users would shop online and receive feedback on changes to their order history.',
        paragraph3:
          'Overall we enjoyed spending countless of hours figuring out what we wanted to do and this proved to be a big learning experience for us. Although this is far from becoming a finished project, it has room to grow. One area of oppurtunity would be using the DELETE method to remove the quantity of cards left in the database. I would love to come back and add more features to it whenever I can.',
      },
    ],
    website: 'https://youtu.be/YM1i9z2bAu0',
  },
];


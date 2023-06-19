import jobtrackr from './assets/images/jobtrackr.png'
import ghfindr from './assets/images/githubfind.png'
import context from './assets/images/context.png'
export const projects = [
  {
      title: 'Job tracker',
      tech: 'JavaScript, Node.js, MongoDB, Mongoose, Express, React, Tailwind, Daisy UI',
      description: 'A full stack application where a user can create account and add different jobs they are applying to and update them.',
      link: 'https://job-tracker-r56d.onrender.com/',
      github: 'https://github.com/ronnie-rios/app-tracker',
      image: jobtrackr
  },
  {
    title: 'Github Finder',
    tech: 'React, JavaScript, Tailwind CSS, Daisy UI, Github API',
    description: `This is a React application that allows a user to search for profiles via the Github API. The user can click on a profile to view the selected github profile.`,
    link: 'https://github-finder-lyart-xi.vercel.app/',
    github: 'https://github.com/ronnie-rios/github-finder',
    image: ghfindr
  },
  {
    title: 'Context Demo',
    tech: 'React, Context API, Vite',
    description: `This is a React application that shows how to implement the Context API in React for new developers. Clearly outlines the steps and processes to take`,
    link: 'https://context-demo.onrender.com/',
    github: 'https://github.com/ronnie-rios/context-demo',
    image: context
  }

];

export const skills = [
  "JavaScript",
  "Node",
  "Python",
  "Java / Spring Boot",
  "React",
  "Next.js",
  "Redux",
  "MongoDB and Mongoose",
  "MySQL and PostgreSQL",
  "Express",
  "Jest, Mocha, Chai, ViTest, Cypress",
  "Git Workflow"
];

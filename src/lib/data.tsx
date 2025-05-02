import LogoJavascript from '../../public/images/logos/icon-javascript.svg';
import LogoTypescript from '../../public/images/logos/icon-typescript.svg';
import LogoReact from '../../public/images/logos/icon-react.svg';
import LogoNextjs from '../../public/images/logos/icon-nextjs.svg';
import LogoNodejs from '../../public/images/logos/icon-nodejs.svg';
import LogoExpress from '../../public/images/logos/icon-express.svg';
import LogoMongoDB from '../../public/images/logos/icon-mongodb.svg';
import LogoSass from '../../public/images/logos/icon-sass.svg';
import LogoTailwindcss from '../../public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '../../public/images/logos/icon-figma.svg';
import LogoMUI from '../../public/images/logos/icon-mui.jpg'
import LogoGit from '../../public/images/logos/icon-git.svg';
import LogoHtml from '../../public/images/logos/icon-html.webp';
import LogoCSS from '../../public/images/logos/icon-css.png';
import LogoRedux from '../../public/images/logos/icon-redux.png';
import LogoESLint from '../../public/images/logos/icon-eslint.webp';
import LogoJio from '../../public/images/logos/logo-jio.png';
import LogoCognizant from '../../public/images/logos/logo-cognizant.png';
import ProjectNotes from '../../public/images/project-notes.png'
import ProjectRestaurant from '../../public/images/project-restaurant.png'
import ProjectNetflix from '../../public/images/project-netflix.png'
import LogoTwitter from '../../public/images/logos/logo-twitter.avif'
import LogoGithub from '../../public/images/logos/logo-github.png'
import LogoDev from '../../public/images/logos/logo-dev.webp'
import LogoInstagram from '../../public/images/logos/logo-insta.webp'
import LogoLinkedin from '../../public/images/logos/logo-linkedin.webp'

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetailsTypes,
} from '@/lib/types';

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Skills',
    href: '#skills'
  },
  {
    label: 'Experience',
    href: '#experience'
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    img: LogoTwitter,
    url: 'https://www.x.com/im_ashish30',
  },
  {
    img: LogoLinkedin,
    url: 'https://www.linkedin.com/in/ashish3010/',
  },
  {
    img: LogoGithub,
    url: 'https://github.com/ashish3010',
  },
  {
    img: LogoInstagram,
    url: 'https://www.instagram.com/im_ashish30/#',
  },
  {
    img: LogoDev,
    url: 'https://dev.to/im_ashish30',
  },
];

export const TECHNOLOGIES: TechDetailsTypes[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'HTML',
    logo: LogoHtml,
    url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  {
    label: 'CSS',
    logo: LogoCSS,
    url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  {
    label: 'Redux',
    logo: LogoRedux,
    url: 'https://redux.js.org/',
  },
  {
    label: 'Material UI',
    logo: LogoMUI,
    url: 'https://mui.com/',
  },
  {
    label: 'Figma',
    logo: LogoFigma,
    url: 'https://www.figma.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  {
    label: 'ESLint',
    logo: LogoESLint,
    url: 'https://eslint.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    url: 'https://expressjs.com/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoJio,
    logoAlt: 'Jio logo',
    position: 'Software Development Engineer',
    startDate: new Date(2022, 10),
    currentlyWorkHere: true,
    summary: [
      'Contributed to end-to-end development of JioOnePay and its admin portal, supporting one-time and Autopay transactions across MyJio and partner platforms like JioMart, Netmeds, JioSaavn, etc',
      'Built and maintained many pages for MyJio app using React Native, ensuring scalability, responsiveness, and seamless user experience.',
      'Collaborated with UX/UI, backend, and product teams to deliver intuitive designs, optimize key MyJio app flows (bill payments, recharge, payment states), and uphold deployment quality through rigorous code reviews.',
      'Developed tailored interfaces for JioFiber set-top box users, simplifying postpaid and recharge workflows for TV-based platforms.'
    ],
  },
  {
    logo: LogoCognizant,
    logoAlt: 'Cognizant logo',
    position: 'Programmer Analyst',
    startDate: new Date(2021, 7),
    endDate: new Date(2022, 10),
    summary: [
      'Assisted in building sophisticated, user-friendly interfaces using React JS, with a strong focus on aesthetics and functionality.',
      'Collaborated closely with senior developers on team projects, showing adaptability, problem-solving skills, and eagerness to learn.',
      'Built a solid foundation in React through continuous learning, demonstrating commitment to growth and professional development.'
    ],
  }
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: 'AI-Powered Notes App (In Progress)',
    description:
      'Currently building a smart note-taking app with Firebase for user authentication and real-time storage. Integrating Gemini AI to rephrase and summarize notes and auto-generate tags, aiming to improve content clarity and searchability. This project highlights my skills in full-stack development and applied AI.',
    previewImage: ProjectNotes,
    technologies: [
      'Next JS',
      'React JS',
      'Typescript',
      'Material UI',
      'Firebase',
      'SCSS',
      'Zustand',
    ],
  },
  {
    name: 'Food Restaurant App Template',
    description: 'A modern restaurant web application built with React.js and Tailwind CSS. Includes user authentication and real-time database integration using Firebase, allowing users to browse food items and manage their profiles. The app is fully deployed and hosted on Netlify.',
    url: 'https://fastidious-baklava-575b95.netlify.app/',
    previewImage: ProjectRestaurant,
    technologies: [
      'React',
      'JavaScript',
      'Tailwindcss',
      'Redux Toolkit',
      'Firebase',
    ],
  },
  {
    name: 'Netflix Clone Website UI',
    description:
      'Developed a Netflix-inspired streaming UI using React.js, featuring movie and TV show listings fetched from the TMDB API. Users can play trailers directly by clicking on thumbnails, powered by the React YouTube module. This project replicates the core functionality and look of Netflix, showcasing my skills in API integration and interactive UI development.',
    url: 'https://ashish3010.github.io/NetflixClone',
    previewImage: ProjectNetflix,
    technologies: [
      'React',
      'JavaScript',
      'Redux',
      'TMDB API',
      'React Youtube Module'
    ],
  },
];

import pharmaCarePreview from '../assets/pharma-care.png'
import webTutorPreview from '../assets/web-tutor.png'

export const projects = [
  {
    number: '01',
    name: 'Pharma Care',
    type: 'Full-stack healthcare platform',
    tags: ['React', 'Node', 'Redis'],
    link: 'https://pharma-care-tan.vercel.app/',
    image: pharmaCarePreview,
    color: 'berry',
    description:
      'PharmaCare is a full-stack healthcare platform built to make medicine discovery and ordering feel simple and reliable. It brings patients through a clear flow for finding medicines, comparing nearby pharmacy options, managing authentication, and completing orders with a responsive experience across devices.',
  },
  {
    number: '02',
    name: 'Web-Tut',
    type: 'AI-powered EdTech platform',
    tags: ['AI', 'React', 'EdTech'],
    link: 'https://web-tut-sandy.vercel.app/',
    image: webTutorPreview,
    color: 'mint',
    description:
      'Web-Tut is an AI-powered learning platform that helps students turn video lessons into a more useful study space. It supports focused learning through organised summaries, quiz-oriented flows, and personalised study tools, with a polished React interface designed for everyday use.',
  },
  {
    number: '03',
    name: 'Next mission',
    type: 'Something good is loading',
    tags: ['Coming', 'Soon'],
    color: 'lime',
    description:
      'The next digital experience is already taking shape. Let’s build it together.',
  },
]

export const skillGroups = [
  ['Frontend', 'React.js · Next.js · HTML · CSS · Tailwind CSS'],
  ['Backend', 'Node.js · Express.js · REST APIs · Authentication'],
  ['Data', 'MongoDB · PostgreSQL · Redis'],
  ['Foundation', 'DSA · OOP · DBMS · OS · Computer Networks'],
]

import CSSIcon from '../assets/icons/techIcons/CSSIcon';
import GitIcon from '../assets/icons/GitIcon';
import HTMLIcon from '../assets/icons/techIcons/HTMLIcon';
import JSIcon from '../assets/icons/techIcons/JSIcon';
import NetlifyIcon from '../assets/icons/techIcons/NetlifyIcon';
import ReactIcon from '../assets/icons/ReactIcon';
import TailwindIcon from '../assets/icons/techIcons/TailwindIcon';
import VercelIcon from '../assets/icons/techIcons/Vercel';
import FramerIcon from '../assets/icons/techIcons/FramerIcon';

export const capabilitiesData = [
  {
    title: 'Core Technologies',
    indicatorColor: '#58ee07c8',
    pillContents: [
      { title: 'HTML5', icon: <HTMLIcon size={17} /> },
      { title: 'CSS3', icon: <CSSIcon size={18} /> },
      { title: 'JavaScript', icon: <JSIcon size={18} /> },
    ],
  },
  {
    title: 'Frameworks',
    indicatorColor: '#1b9fd8ee',
    pillContents: [
      { title: 'React', icon: <ReactIcon size={21} /> },
      { title: 'Tailwind', icon: <TailwindIcon size={18} /> },
    ],
  },
  {
    title: 'Tools',
    indicatorColor: '#895ad4e5',
    pillContents: [
      { title: 'Git', icon: <GitIcon size={17} /> },
      { title: 'Vercel', icon: <VercelIcon size={15} /> },
      { title: 'Netlify', icon: <NetlifyIcon size={16} /> },
      { title: 'Framer', icon: <FramerIcon size={18} /> },
    ],
  },
];

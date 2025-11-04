import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
,
] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://www.instagram.com/abderrahmanlamari/",
  },
  {
    name: "Facebook",
    icon: FaFacebook,
    link: "https://facebook.com/abderrahamane.webdev",
  },
  {
    name: "GitHub",
    icon: RxGithubLogo,
    link: "https://github.com/AbderrahmaneLamari",
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: "HTML",
    image: "html.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "CSS",
    image: "css.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "JavaScript",
    image: "js.png",
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind CSS",
    image: "tailwind.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    image: "react.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "TypeScript",
    image: "ts.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next.js 14",
    image: "next.png",
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: "Node.js",
    image: "node.png",
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express.js",
    image: "express.png",
    width: 80,
    height: 80,
  },


  {
    skill_name: "PostgreSQL",
    image: "postgresql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "MySQL",
    image: "mysql.png",
    width: 70,
    height: 70,
  },
  {
    skill_name: "Prisma",
    image: "prisma.png",
    width: 70,
    height: 70,
  },

] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: "Docker",
    image: "docker.png",
    width: 70,
    height: 70,
  },

  {
    skill_name: "Figma",
    image: "figma.png",
    width: 50,
    height: 50,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "My Start up Website",
    description:
      'A cloud platform built by students, for developers. We make it easy for students, startups, and researchers to build, deploy, and scale applications locally — with the simplicity of global PaaS providers, but tailored to our community',
    image: "/projects/hawiyat-screenshot.png",
    link: "https://hawiyat.org",
  },
  {
    title: "My Protfolio",
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: "/projects/portfolio-website.png",
    link: "https://lamari.estin.pro",
  },
  {
    title: "Restaurant Website - Alger",
    description:
      'Welcome to our exquisite restaurant located in the heart of Algiers, where culinary artistry meets a warm and inviting ambiance. Our website is designed to provide you with a seamless experience as you explore our diverse menu, make reservations, and discover the unique flavors that define our establishment. Whether you\'re a local food enthusiast or a visitor seeking an authentic taste of Algerian cuisine, our website is your gateway to an unforgettable dining experience.',
    image: "/projects/qg-restaurant-v2.png",
    link: "https://qg-restaurant-v2.vercel.app/",
  },
  {
    title: "Restaurant le ciloc - Constantine",
    description:
      'Welcome to our exquisite restaurant located in the heart of Constantine, where culinary artistry meets a warm and inviting ambiance. Our website is designed to provide you with a seamless experience as you explore our diverse menu, make reservations, and discover the unique flavors that define our establishment. Whether you\'re a local food enthusiast or a visitor seeking an authentic taste of Constantine cuisine, our website is your gateway to an unforgettable dining experience.',
    image: "/projects/restaurant-le-ciloc.png",
    link: "https://traditional-restaurant.onrender.com/",
  },
  {
    title: "Real Estate Website",
    description: "Explore our stunning real estate listings and find your dream home today in Bejaia! Discover a wide range of properties, from cozy apartments to luxurious villas, all showcased with high-quality images and detailed descriptions. Our user-friendly website allows you to easily browse through listings, filter by your preferences, and connect with our experienced agents for personalized assistance. Whether you're buying, selling, or renting, our platform is designed to make your real estate journey seamless and enjoyable. Start your search now and take the first step towards finding the perfect property in Bejaia!",
    image: "/projects/bejaia-immo.png",
    link: "https://pillar-landing-page-psi.vercel.app/",
  },


] as const;

export const FOOTER_DATA = [
  {
    title: "Community",
    data: [

      {
        name: "GitHub",
        icon: RxGithubLogo,
        link: "https://github.com/AbderrahmaneLamari",
      },
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://discord.com",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/abderrahmanlamari/",
      },
      {
        name: "Facebook",
        icon: FaFacebook,
        link: "https://www.facebook.com/abderrahamane.webdev"
      },
      {
        name: "Linkedin",
        icon: RxLinkedinLogo,
        link: "https://dz.linkedin.com/in/abderrahmane-lamari-268ba1283",
      },
    ],
  },
  // {
  //   title: "About",
  //   data: [
  //     {
  //       name: "Become Sponsor",
  //       icon: null,
  //       link: "https://youtube.com",
  //     },
  //     {
  //       name: "Learning about me",
  //       icon: null,
  //       link: "https://example.com",
  //     },
  //     {
  //       name: "Contact Me",
  //       icon: null,
  //       link: "mailto:a_lamari@estin.dz",
  //     },
  //   ],
  // },
] as const;

export const NAV_LINKS = [
  {
    title: "About me",
    link: "#about-me",
  },
  {
    title: "Skills",
    link: "#skills",
  },
  {
    title: "Projects",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/AbderrahmaneLamari/space-portfolio",
};

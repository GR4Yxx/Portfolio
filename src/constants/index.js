import {
  mobile,
  backend,
  web,
  angular,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  vctBg,
  meetAutomationnBg,
  nlpBg,
  python,
  fs,
  itsa,
  futurewave,
  vue,
  flutter,
  laravel,
  unreal,
  unity,
  blender,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Mobile Developer",
    icon: backend,
  },
  {
    title: "Game Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "Angular",
    icon: angular,
  },
  {
    name: "Vue",
    icon: vue,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Flutter",
    icon: flutter,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Laravel",
    icon: laravel,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Unreal",
    icon: unreal,
  },
  {
    name: "Unity3d",
    icon: unity,
  },
  {
    name: "Blender",
    icon: blender,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "President",
    company_name: "Information Technology Students' Association",
    icon: itsa,
    iconBg: "#f99191",
    date: "Jul 2021 - Jul 2022",
    points: [
      "Managed a team of 22, and organized 9 events, in the span of 1 year.",
      "Organized workshops outside the curriculum, such as 3d modelling, UI/UX, 2d graphics, averaging around 140 registrations and 90 participants per event..",
    ],
  },
  {
    title: "Mobile App Developer",
    company_name: "FutureWave",
    icon: futurewave,
    iconBg: "#ffff",
    date: "Oct 2021 - Mar 2022",
    points: [
      "Managed a team of 22, and organized 9 events, in the span of 1 year.",
      "Organized workshops outside the curriculum, such as 3d modelling, UI/UX, 2d graphics, averaging around 140 registrations and 90 participants per event..",
    ],
  },
  {
    title: "Cloud Web Developer",
    company_name: "Fourth Signal",
    icon: fs,
    iconBg: "#E6DEDD",
    date: "November 2022 - July 2024",
    points: [
      "Led migration from Angular to Angular 2 and PHP to Laravel, improving code efficiency by 30%.",
      "Transformed monolithic architecture into microservices, boosting scalability by 70%.",
      "Adopted Docker for parallel development, reducing deployment time by 25%.",
      "Designed Azure CI/CD pipelines, achieving 100% automated releases.",
      "Developed FS Databridge mobile app, increasing user engagement by 35%.",
      "Built financial algorithms to improve strategic decision-making for MNCs.",
      "Introduced JIRA, boosting productivity by 30% and improving deadlines by 20%.",
      "Mentored new hires, improving onboarding efficiency by 12%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Virtual College Tour",
    description:
      "Created a 3D virtual campus tour of SFIT in Blender, then enhanced it with interactive elements, movement, and VR in Unreal Engine 5. My work was published in an IEEE paper titled 'A Framework for Development of a Virtual Campus Tour,' showcasing the innovative techniques and development process.",
    tags: [
      {
        name: "unreal",
        color: "blue-text-gradient",
      },
      {
        name: "blender",
        color: "green-text-gradient",
      },
      {
        name: "vr",
        color: "pink-text-gradient",
      },
    ],
    image: vctBg,
    source_code_link: null,
  },
  {
    name: "Google Meet Automation",
    description:
      "Developed a fully automated Python script using Selenium for scheduled logins. It can also read chat messages and, if programmed, respond to them. The script automates routine tasks efficiently, making it a powerful tool for time-based interactions and communication management.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "selenium",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: meetAutomationnBg,
    source_code_link: null,
  },
  {
    name: "Hinglish Convertor",
    description:
      "Developed a website akin to Google Translate that converts Hindi text into Hinglish for pronunciation aid. Utilizing the Flask framework and basic NLP algorithms, he replaced Hindi characters with a corresponding dataset to generate accurate Hinglish transliterations.",
    tags: [
      {
        name: "python",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "blue-text-gradient",
      },

      {
        name: "html/css",
        color: "pink-text-gradient",
      },
    ],
    image: nlpBg,
    source_code_link: null,
  },
];

export { services, technologies, experiences, testimonials, projects };

import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiGit,
  DiGithubBadge,
} from "react-icons/di";
import { SiTailwindcss, SiAdobephotoshop, SiSass, SiPug } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { TbLetterB } from "react-icons/tb";

const allSkills = [
  {
    skillName: "HTML",
    logo: <DiHtml5 />,
    bgColor: "#0ea5e9",
  },
  {
    skillName: "HTML PUG",
    logo: <SiPug />,
    bgColor: "#ff9800",
  },
  {
    skillName: "CSS",
    logo: <DiCss3 />,
    bgColor: "#EF4583",
  },
  {
    skillName: "SASS",
    logo: <SiSass />,
    bgColor: "#4f46e5",
  },
  {
    skillName: "BEM Metodolgy",
    logo: <TbLetterB />,
    bgColor: "#10b981",
  },
  {
    skillName: "Tailwind",
    logo: <SiTailwindcss />,
    bgColor: "#ff5724",
  },
  {
    skillName: "Bootstrap",
    logo: <FaBootstrap />,
    bgColor: "#0ea5e9",
  },
  {
    skillName: "Java Script",
    logo: <DiJavascript />,
    bgColor: "#FBBF24",
  },
  {
    skillName: "React",
    logo: <DiReact />,
    bgColor: "#FF9800",
  },
  {
    skillName: "Git",
    logo: <DiGit />,
    bgColor: "#EF4583",
  },
  {
    skillName: "Git Hub",
    logo: <DiGithubBadge />,
    bgColor: "#4f46e5",
  },
  {
    skillName: "Photo Shop",
    logo: <SiAdobephotoshop />,
    bgColor: "#ff5724",
  },
];

export default allSkills;

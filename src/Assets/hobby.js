import {
  FcReading,
  FcServices,
  FcIdea,
  FcSportsMode,
  FcLandscape,
} from "react-icons/fc";

let hobby = [
  {
    icon: <FcReading className="hobby-icon" />,
    title: "Reading books",
    description: "Every day",
  },
  {
    icon: <FcServices className="hobby-icon" />,
    title: "Solving problems",
    description: "Logical, mathematical, geometrical",
  },
  {
    icon: <FcIdea className="hobby-icon" />,
    title: "Start-ups",
    description: "Creating and doing new start-ups",
  },
  {
    icon: <FcSportsMode className="hobby-icon" />,
    title: "Archery",
    description: "Horseback (mounted) archery",
  },
  {
    icon: <FcLandscape className="hobby-icon" />,
    title: "Traveling",
    description: "With family",
  },
];

export default hobby;

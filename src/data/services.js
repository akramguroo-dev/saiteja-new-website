import {
  Users,
  Code2,
  BrainCircuit,
  Megaphone,
  GraduationCap,
  BriefcaseBusiness,
} from "lucide-react";

import hrStaffingImage from "../assets/services/hr-staffing.png";
import itSolutionsImage from "../assets/services/it-solutions.png";
import aiDataImage from "../assets/services/ai-data-solutions.png";
import brandingDigitalImage from "../assets/services/branding-digital.png";
import trainingDevelopmentImage from "../assets/services/training-development.png";
import recruitmentImage from "../assets/services/recruitment.png";

const services = [
  {
    icon: Users,
    image: hrStaffingImage,
    number: "01",
    title: "HR & Staffing",
    description:
      "Flexible workforce solutions that connect organizations with the right people and capabilities.",
  },

  {
    icon: Code2,
    image: itSolutionsImage,
    number: "02",
    title: "IT Solutions",
    description:
      "Technology solutions designed to help businesses improve processes, productivity and digital capabilities.",
  },

  {
    icon: BrainCircuit,
    image: aiDataImage,
    number: "03",
    title: "AI & Data Solutions",
    description:
      "Practical approaches to data and intelligent technology that turn information into business value.",
  },

  {
    icon: Megaphone,
    image: brandingDigitalImage,
    number: "04",
    title: "Branding & Digital",
    description:
      "Creative and digital solutions that help organizations communicate their identity and reach their audience.",
  },

  {
    icon: GraduationCap,
    image: trainingDevelopmentImage,
    number: "05",
    title: "Training & Development",
    description:
      "Learning and development opportunities designed to strengthen skills and prepare people for what comes next.",
  },

  {
    icon: BriefcaseBusiness,
    image: recruitmentImage,
    number: "06",
    title: "Recruitment",
    description:
      "Talent acquisition support focused on finding professionals aligned with organizational needs.",
  },
];

export default services;
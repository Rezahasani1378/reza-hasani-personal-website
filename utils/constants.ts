import { faBriefcase } from "@fortawesome/free-solid-svg-icons/faBriefcase";
import { faMap } from "@fortawesome/free-solid-svg-icons/faMap";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEnvelopeOpen } from "@fortawesome/free-solid-svg-icons/faEnvelopeOpen";
import { faPhoneSquare } from "@fortawesome/free-solid-svg-icons/faPhoneSquare";

export const cardsData = [
  {
    //Todo: Must be Dynamic
    number: 4,
    text: {
      firstLine: "Years of",
      secondLine: "Experience",
    },
  },
  {
    number: 18,
    text: {
      firstLine: "Completed",
      secondLine: "Projects",
    },
  },
  {
    number: 7,
    text: {
      firstLine: "Colleague's",
      secondLine: "Recommendations",
    },
  },
  {
    number: 12,
    text: {
      firstLine: "Certificates for",
      secondLine: "Front-End",
    },
  },
];

export const listData = {
  "First Name": "Reza",
  "Last Name": "Hasani",
  //Todo: Must be Dynamic
  Age: "22 Years",
  Nationality: "Iranian",
  "Open to Work": "Yes",
  Location: "Iran, Tehran",
  Phone: "+989382679409",
  Email: "Reza.hasani7899@gmail.com",
  Skype: "live:752f39cba13058dd",
  Languages: "English, Persian",
};

export const experiences = {
  technical: [
    {
      icon: faBriefcase,
      period: { start: "2018", end: "2019" },
      title: "Web Developer",
      company: "Digikala",
      description: "WOW",
    },
    {
      icon: faBriefcase,
      period: { start: "2018", end: "2019" },
      title: "Web Developer",
      company: "Digikala",
      description: "WOW",
    },
    {
      icon: faBriefcase,
      period: { start: "2018", end: "2019" },
      title: "Web Developer",
      company: "Digikala",
      description: "WOW",
    },
    {
      icon: faBriefcase,
      period: { start: "2018", end: "2019" },
      title: "Web Developer",
      company: "Digikala",
      description: "WOW",
    },
  ],
  academic: [
    {
      icon: faBriefcase,
      period: { start: "2018", end: "2019" },
      title: "Web Developer",
      university: "Digikala",
      description: "WOW",
    },
    {
      icon: faBriefcase,
      period: { start: "2018", end: "2019" },
      title: "Web Developer",
      university: "Digikala",
      description: "WOW",
    },
  ],
};

export const contactDetails = [
  {
    icon: faMap,
    title: "ADDRESS POINT",
    value: "Tehran",
  },
  {
    icon: faEnvelopeOpen,
    title: "MAIL ME",
    value: "Reza.hasani7899@gmail.com",
  },
  {
    icon: faPhoneSquare,
    title: "CALL ME",
    value: "+989382679409",
  },
];

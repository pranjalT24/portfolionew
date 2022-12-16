import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoMdMail,
} from "react-icons/io";
export const socialData = [
  {
    logo: () => {
      return <IoLogoGithub />;
    },
    title: "Github",
    url: "https://github.com/pranjalT24",
  },
  {
    logo: () => {
      return <IoLogoLinkedin />;
    },
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/pranjal-tiwari-08346919a/",
  },
  {
    logo: () => {
      return <IoLogoTwitter />;
    },
    title: "Twitter",
    url: "https://twitter.com/impranjaljs",
  },
  {
    logo: () => {
      return <IoMdMail />;
    },
    title: "Mail",
    url: "pranjaltiwari515@gmail.com",
  },
];

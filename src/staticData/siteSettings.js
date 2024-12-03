import logo from "@/public/assets/img/site-logo.svg";
import {IoHomeOutline} from "react-icons/io5";
import {SlGraduation} from "react-icons/sl";
import {FaFacebook, FaLinkedin, FaRegFileAlt,} from "react-icons/fa";
import {FaRegUser} from "react-icons/fa6";
import {MdFormatListBulleted} from "react-icons/md";

export const siteSettings = {
  logo: {
    image: logo?.src,
    alt: "Stephen",
    url: "/",
    text: "Stephen",
  },
  headersMenu: [
    {
      id: 1,
      title: "Home",
      selector: "#home",
      url: "/",
      Icon: <IoHomeOutline />,
      notVisibleRoutes: [],
    },
    {
      id: 2,
      title: "About",
      selector: "#about",
      url: "/",
      Icon: <FaRegUser />,
      notVisibleRoutes: [],
    },
    // {
    //   id: 3,
    //   title: "Service",
    //   selector: "#service",
    //   url: "/",
    //   Icon: <IoBriefcaseOutline />,
    //   notVisibleRoutes: [],
    // },
    {
      id: 3,
      title: "Skills",
      selector: "#skill",
      url: "/",
      Icon: <SlGraduation />,
      notVisibleRoutes: [],
    },
    {
      id: 4,
      title: "Resume",
      selector: "#resume",
      url: "/",
      Icon: <FaRegFileAlt />,
      notVisibleRoutes: [],
    },
    {
      id: 5,
      title: "Portfolio",
      selector: "#portfolio",
      url: "/",
      Icon: <MdFormatListBulleted />,
      notVisibleRoutes: [],
    },
    // {
    //   id: 7,
    //   title: "Blog",
    //   selector: "#blog",
    //   url: "/",
    //   Icon: <LiaBlogSolid />,
    //   notVisibleRoutes: [],
    // },
    // {
    //   id: 8,
    //   title: "Testimonial",
    //   selector: "#testimonial",
    //   url: "/",
    //   Icon: <BiCommentDetail />,
    //   notVisibleRoutes: [],
    // },
    // {
    //   id: 9,
    //   title: "Contact",
    //   selector: "#contact",
    //   url: "/",
    //   Icon: <FaRegEnvelope />,
    //   notVisibleRoutes: [],
    // },
  ],
  socialMedias: [
    {
      id: 1,
      name: "Facebook",
      tooltip: "Share with Facebook",
      Icon: <FaFacebook />,
      url: "https://www.facebook.com/thangg.ho99/",
    },
    {
      id: 2,
      name: "Linkedin",
      tooltip: "Share with Linkedin",
      Icon: <FaLinkedin />,
      url: "https://linkedin.com/in/thang99/",
    },
    // {
    //   id: 3,
    //   name: "X",
    //   tooltip: "Share with X",
    //   Icon: <FaTwitter />,
    //   url: "#",
    // },
    // {
    //   id: 3,
    //   name: "Instagram",
    //   tooltip: "Share with Instagram",
    //   Icon: <FaInstagram />,
    //   url: "#",
    // },
  ],
  preloader: {
    image: logo?.src,
  },
};

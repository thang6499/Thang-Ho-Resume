import BrandingIcon from "@/src/components/icons/home/BrandingIcon";
import EmailIcon from "@/src/components/icons/home/EmailIcon";
import LocationIcon from "@/src/components/icons/home/LocationIcon";
import PhoneIcon from "@/src/components/icons/home/PhoneIcon";
import SeoIcon from "@/src/components/icons/home/SeoIcon";
import UiUxIcon from "@/src/components/icons/home/UiUxIcon";
import WebDevIcon from "@/src/components/icons/home/WebDevIcon";
import {FaBriefcase, FaFolderOpen, FaGraduationCap, FaRegEnvelopeOpen,} from "react-icons/fa";
import {GrTasks} from "react-icons/gr";
import {BiCheckDouble} from "react-icons/bi";

import figmaImage from "@/public/assets/img/skill/figma.svg";
import criticalThinkingImage from "@/public/assets/img/skill/criticalthinking.svg";
import dataAnalysisImage from "@/public/assets/img/skill/dataanalysis.svg";
import languageImage from "@/public/assets/img/skill/language.svg";
import logicalThinkingImage from "@/public/assets/img/skill/logicalthinking.svg";
import problemSolvingImage from "@/public/assets/img/skill/problemsolving.svg";
import requirementElicitationImage from "@/public/assets/img/skill/requirementelicitation.svg";
import projectTrackingImage from "@/public/assets/img/skill/projecttracking.svg";
import srsdocImage from "@/public/assets/img/skill/srsdoc.svg";

import partner1Image from "@/public/assets/img/partners/logo1.svg";
import partner2Image from "@/public/assets/img/partners/logo2.svg";
import partner3Image from "@/public/assets/img/partners/logo3.svg";
import partner4Image from "@/public/assets/img/partners/logo4.svg";

import userImage from "@/public/assets/img/user-sidebar-thumb.png";
import userImageLight from "@/public/assets/img/user-sidebar-thumb-light.png";

import portfolioImage1Thumb from "@/public/assets/img/portfolio/portfolio-img1.png";
import portfolioImage1 from "@/public/assets/img/portfolio/portfolio-img1.png";

import portfolioImage2Thumb from "@/public/assets/img/portfolio/portfolio-img2.png";
import portfolioImage2 from "@/public/assets/img/portfolio/portfolio-img2.png";

import portfolioImage3Thumb from "@/public/assets/img/portfolio/portfolio-img3.png";
import portfolioImage3 from "@/public/assets/img/portfolio/portfolio-img3.png";

import portfolioImage4Thumb from "@/public/assets/img/portfolio/portfolio-img4.png";
import portfolioImage4 from "@/public/assets/img/portfolio/portfolio-img4.png";

import projectInner1Image from "@/public/assets/img/blog/article-inner1.png";
import projectInner2Image from "@/public/assets/img/blog/article-inner2.png";
import projectInner3Image from "@/public/assets/img/blog/article-inner3.png";
import projectInner4Image from "@/public/assets/img/blog/article-inner4.png";
import projectInner5Image from "@/public/assets/img/blog/article-inner5.png";
import projectInner6Image from "@/public/assets/img/blog/article-inner6.png";
import projectInner7Image from "@/public/assets/img/blog/article-inner7.png";
import projectInner8Image from "@/public/assets/img/blog/article-inner8.png";
import {IoHomeOutline} from "react-icons/io5";

export const introduce = {
  iconBox: {
    Icon: <IoHomeOutline className="text-theme" size={14} />,
    title: "INTRODUCE",
  },
  heading: {
    heading1: "Streamlining Processes",
    heading2: "with ERP Systems",
  },
  desc: (
    <p>
      I am a{" "}
      <span className="font-medium text-black dark:text-white/90">
        Business Analyst
      </span>{" "}
      specializing in ERP systems, delivering effective solutions that align technology with business needs. I use my understanding of operational challenges to support growth and improve efficiency.    </p>
  ),
  jobs: [
    {
      id: 1,
      title: "Available for work",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
    {
      id: 2,
      title: "Full Time Job",
      icon: <BiCheckDouble size={25} className="text-theme mr-1" />,
    },
  ],
};

export const partners = [
  {
    imgUrl: partner1Image,
    altText: "Partner Name 1",
    link: "#",
  },
  {
    imgUrl: partner2Image,
    altText: "Partner Name 2",
    link: "#",
  },
  {
    imgUrl: partner3Image,
    altText: "Partner Name 3",
    link: "#",
  },
  {
    imgUrl: partner4Image,
    altText: "Partner Name 4",
    link: "#",
  },
  {
    imgUrl: partner2Image,
    altText: "Partner Name 5",
    link: "#",
  },
  {
    imgUrl: partner4Image,
    altText: "Partner Name 6",
    link: "#",
  },
  {
    imgUrl: partner2Image,
    altText: "Partner Name 7",
    link: "#",
  },
  {
    imgUrl: partner4Image,
    altText: "Partner Name 8",
    link: "#",
  },
  {
    imgUrl: partner2Image?.src,
    altText: "Partner Name 9",
    link: "#",
  },
];

export const technologies = [
  {
    id: 1,
    title: "HTML5 & CSS3",
    skill: "94",
    url: "#",
  },
  {
    id: 2,
    title: "Bootstrap",
    skill: "98",
    url: "#",
  },
  {
    id: 3,
    title: "TailwindCSS",
    skill: "90",
    url: "#",
  },
];

export const userDetails = [
  {
    field: "Phone",
    value: "+(84) 775 550 467",
  },
  {
    field: "Skype",
    value: "live:.cid.a02844ab9ae6ef48",
  },
  {
    field: "Language",
    value: "English, Vietnamese",
  },
  {
    field: "Email",
    value: "hthangdng@gmail.com",
  },
  {
    field: "GitHub",
    value: "github.com/HoThang6499",
  },
  {
    field: "LinkedIn",
    value: "linkedin.com/in/thang99",
  },
];

export const userDetailsSidebar = {
  userImage: userImage,
  userImageLight: userImageLight,
  userName: "Ho Thang",
  designations: ["Business Analyst"],
  basicInfo: [
    {
      id: 1,
      field: "Residence",
      value: "Viet Nam",
    },
    {
      id: 2,
      field: "City",
      value: "HCM City",
    },
    {
      id: 3,
      field: "Experience",
      value: "3 years",
    },
  ],
  /*skillsInfo: [
    {
      id: 1,
      name: "Hard",
      value: 90,
    },
    {
      id: 2,
      name: "Soft",
      value: 85,
    },
    {
      id: 3,
      name: "Mindset",
      value: 90,
    },
    {
      id: 4,
      name: "Eng",
      value: 85,
    },
  ],*/
};

export const projectExperiences = [
  {
    title: "Years Of Experience",
    count: 3,
    postFix: true,
  },
  {
    title: "Handled Projects",
    count: 4,
    postFix: true,
  },
  {
    title: "Certificates",
    count: 5,
    postFix: true,
  },
  {
    title: "Awards Won",
    count: 18,
    postFix: false,
  },
];

export const services = {
  servicesHeading: {
    icon: <FaBriefcase className="text-theme" />,
    title: "SERVICES",
    heading: "My",
    coloredHeading: "Services",
    description:
      "I design products that are more than pretty. I make them shippable and usable, tempor non mollit dolor et do aute.",
  },
  servicesData: [
    {
      id: 1,
      number: "01",
      title: "UI/UX Design",
      desc: "I design products that are more than pretty. I make them shippable.",
      icon: <UiUxIcon />,
    },
    {
      id: 2,
      number: "02",
      title: "Web Development",
      desc: "I design products that are more than pretty. I make them shippable.",
      icon: <WebDevIcon />,
    },
    {
      id: 3,
      number: "03",
      title: "SEO / Marketing",
      desc: "I design products that are more than pretty. I make them shippable.",
      icon: <SeoIcon />,
    },
    {
      id: 4,
      number: "04",
      title: "Branding & Strategy",
      desc: "I design products that are more than pretty. I make them shippable.",
      icon: <BrandingIcon />,
    },
  ],
};

export const skills = {
  skillsHeading: {
    icon: <FaGraduationCap className="text-theme" />,
    title: "SKILLS",
    heading: "My",
    coloredHeading: "Advantages",
    // description:
    //   "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  skillsData: [
    {
      image: requirementElicitationImage?.src,
      percent: 90,
      name: "Requirement Elicitation",
    },
    {
      image: srsdocImage?.src,
      percent: 90,
      name: "Documentation (SRS, BRD)",
    },
    {
      image: projectTrackingImage?.src,
      percent: 80,
      name: "Project Tracking (Scrum)",
    },
    {
      image: dataAnalysisImage?.src,
      percent: 80,
      name: "Data Analysis (SQL, Excel)",
    },
    {
      image: figmaImage?.src,
      percent: 85,
      name: "Tools (Jira, Figma, Drawio)",
    },
    {
      image: logicalThinkingImage?.src,
      percent: 90,
      name: "Logical & System Thinking",
    },
    {
      image: criticalThinkingImage?.src,
      percent: 85,
      name: "Critical Thinking",
    },
    {
      image: problemSolvingImage?.src,
      percent: 90,
      name: "Problem Solving",
    },
    {
      image: languageImage?.src,
      percent: 80,
      name: "Language (English)",
    },
  ],
};

export const resume = {
  resumeHeading: {
    icon: <FaFolderOpen className="text-theme" />,
    title: "RESUME",
    heading: "Work",
    coloredHeading: "Experience",
    /*description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",*/
  },
  resumeData: [
    {
      platform: "Motives Viet Nam",
      duration: "June, 2023 - Current",
      position: "Business Analyst",
      description:
        "- Designed and implemented a full-scale ERP system for a garment company, integrating modules for product development, sales order, production, inventory management, and reporting.\n- Collected and analyzed business requirements, modeled workflows, and mapped business processes into the ERP system. \n- Defined features, created UI designs, prepared SRS documentation, and managed project tasks using Jira.\n- Worked closely with QA to support testing and ensure system functionality met business needs.\n- Delivered training to over 20 end-users. Reducing processing time by 20%, resulting in improved operational efficiency.",
    },
    {
      platform: "Rete",
      duration: "March,2022 - May,2023",
      position: "Business Analyst",
      description:
        "- Enhanced an ERP system with Quality Management and Sales Management modules.\n- Gathered requirements, modeled workflows, and created wireframes for user approval.\n- Documented functional requirements with 100% alignment to stakeholder expectations.\n- Supported testing, presented features, and refined based on user feedback.\n- Conducted UAT sessions with key clients, ensuring seamless implementation of ERP features.",
    },
    /*{
      platform: "Apple",
      duration: "2014-2018",
      position: "Human Interface Designer",
      description:
        "Owing to advancements in product other designer technologies aute voluptate.",
    },*/
  ],
};

export const educations = {
  educationsHeading: {
    icon: "",
    title: "",
    heading: "My",
    coloredHeading: "Education",
/*    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",*/
  },
  educationsData: [
    /*{
      institution: "Oxford University",
      duration: "2016-2018",
      degree: "Diploma in Computer",
      description:
        "Owing to advancements in product other designer technologies aute voluptate.",
    },
    {
      institution: "Google",
      duration: "2018 - 2022",
      degree: "BSc in Engineering",
      description:
        "Owing to advancements in product other designer technologies aute voluptate.",
    },*/
    {
      institution: "The University of Danang - University of Economics",
      duration: "2017-2021",
      degree: "Business Administration",
      description: "Bachelor degree.",
    },
  ],
};

export const portfolio = {
  portfolioHeading: {
    icon: <GrTasks className="text-theme" />,
    title: "PORTFOLIO",
    heading: "Featured ",
    coloredHeading: "Projects",
    description:
      "These are two ERP projects I have participated in, each involving key modules such as Sales Order, Manufacturing, Inventory, and Quality Control Management. For detailed information on the modules, technologies, teams, and my role in each project, click on the images below.",
  },
  projectsData: [
    {
      id: 1,
      image: {
        thumbnail: portfolioImage1Thumb?.src,
        image: portfolioImage1?.src,
        thumbnailText1: "MM",
        thumbnailText2: "ERP System",
      },
      type: "ERP System",
      title: "MM ERP System",
      slug: "mm-erp-system",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Minh Minh Fashion",
        },
        {
          field: "SERVICES:",
          value: "Fashion design, manufacturing",
        },
        {
          field: "DURATION",
          value: "1.5+ years",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
          "A comprehensive ERP system with five core modules (Sample Development, Order Management, Production Management, Warehouse Management, and Comprehensive Reporting) that reduced 50% of manual workload and improved efficiency by 20%.",
        descriptionLists: [
          "Sample Development: Design production, material calculation, production tracking, and cost estimation.",
          "Order Management: Full order lifecycle tracking from Order Placement → Delivery.",
          "Production Management: Planning, material balancing, cost calculation, and delivery management using Material Resource Planning (MRP) methodology.",
          "Warehouse Management: Inventory tracking and integration with other modules using First In, First Out (FIFO) methodology.",
          "Comprehensive Reporting: End-to-end data insights.",
          "Team: Collaborated in a cross-functional team of 12 (1 Business Analyst, 7 Developers, 2 testers, 1 Technical Leader, and 1 Product Owner).",
          "Main tasks: Led all BA tasks, including requirements elicitation, documentation, and coordination with teams. Managed backlogs, testing, and post-launch feedback to optimize features.)",
          "Technologies: MVC (.Net Core), task management (Jira), user interface (DevExtreme), database development (Microsoft SQL Server)",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src,projectInner3Image?.src, projectInner4Image?.src],
      },
      projectTechnology: [
        {
          title: ".Net",
          image: "/assets/img/skill/dotnetcore.svg",
          value: 95,
        },
        {
          title: "DevExtreme",
          image: "/assets/img/skill/devextreme.svg",
          value: 95,
        },
        {
          title: "Jira",
          image: "/assets/img/skill/jira.svg",
          value: 100,
        },
        {
          title: "SQL Server",
          image: "/assets/img/skill/sqlserver.svg",
          value: 100,
        },
      ]
    },
    {
      id: 2,
      image: {
        thumbnail: portfolioImage2Thumb?.src,
        image: portfolioImage2?.src,
        thumbnailText1: "MM",
        thumbnailText2: "ERP System",
      },
      type: "ERP System",
      title: "MM ERP System",
      slug: "mm-erp-system",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "Minh Minh Fashion",
        },
        {
          field: "SERVICES:",
          value: "Fashion design, manufacturing",
        },
        {
          field: "DURATION",
          value: "1.5 years",
        },
      ],
      projectDescription: {
        descriptionTitle: "Project Description",
        description:
            "A comprehensive ERP system with five core modules (Sample Development, Order Management, Production Management, Warehouse Management, and Comprehensive Reporting) that reduced 50% of manual workload and improved efficiency by 20%.",
        descriptionLists: [
          "Sample Development: Design production, material calculation, production tracking, and cost estimation.",
          "Order Management: Full order lifecycle tracking from Order Placement → Delivery.",
          "Production Management: Planning, material balancing, cost calculation, and delivery management.",
          "Warehouse Management: Inventory tracking and integration with other modules.",
          "Comprehensive Reporting: End-to-end data insights.",
          "Team: Collaborated in a cross-functional team of 12 (1 Business Analyst, 7 Developers, 2 testers, 1 Technical Leader, and 1 Product Owner).",
          "Technologies: MVC (.Net Core), task management (Jira), user interface (DevExtreme), database development (Microsoft SQL Server)",
        ],
        projectImage: [projectInner1Image?.src, projectInner2Image?.src,projectInner3Image?.src, projectInner4Image?.src],
      },
    },
    {
      id: 3,
      image: {
        thumbnail: portfolioImage3Thumb?.src,
        image: portfolioImage3?.src,
        thumbnailText1: "Retex",
        thumbnailText2: "ERP System",
      },
      type: "ERP System",
      title: "Retex ERP System",
      slug: "retex-erp-system",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "IFTHIENANPHUCGATEX",
        },
        {
          field: "SERVICES",
          value: "Manufacturing, export",
        },
        {
          field: "DURATION",
          value: "9 months",
        },
      ],
      projectDescription: {
        descriptionTitle: "Quality Control & Sales Management",
        description:
        "Enhanced an ERP system by developing Quality Management and Sales Management modules. Gathered requirements, modeled workflows, created wireframes for user approval, wrote the SRS document, supported testers, and prepared the user manual directly at the factory:",
        descriptionLists: [
          "QC Management: Supported the Quality Inspection Department with mobile and web platforms. The mobile app enabled detailed product inspections, while the web app provided tools for managers to view statistics, generate reports, and monitor employee performance using Total Quality Management (TQM) methodology.",
          "Sales Management: Serves the Market Planning Department, allowing efficient order and client management. It includes a dashboard displaying revenue indexes and production progress to aid decision-making.",
          "Team: Collaborated in a cross-functional team of 11 (1 Business Analyst, 4 Developers, 2 testers, 2 UX-UI Designers, 1 Technical Leader and 1 Product Owner).",
          " Main tasks: Led most BA tasks, including requirements elicitation, documentation, and coordination with teams. Implemented the solution directly at the factory for end-users.",
          "Technologies: MVC (Rails), task management (Clickup), user interface (Figma), database development (MongoDB)",
        ],
        projectImage: [projectInner5Image?.src, projectInner6Image?.src, projectInner7Image?.src, projectInner8Image?.src,],
      },
      projectTechnology: [
        {
          title: "Rails",
          image: "/assets/img/skill/rails.svg",
          value: 95,
        },
        {
          title: "Figma",
          image: "/assets/img/skill/figma.svg",
          value: 100,
        },
        {
          title: "ClickUp",
          image: "/assets/img/skill/clickup.svg",
          value: 100,
        },
        {
          title: "MongoDB",
          image: "/assets/img/skill/mongodb.svg",
          value: 100,
        },
      ]

    },
    {
      id: 4,
      image: {
        thumbnail: portfolioImage4Thumb?.src,
        image: portfolioImage4?.src,
        thumbnailText1: "Retex",
        thumbnailText2: "ERP System",
      },
      type: "ERP System",
      title: "Retex ERP System",
      slug: "retex-erp-system",
      projectHeading: {
        icon: <GrTasks className="text-theme" />,
        title: "Project Details",
      },
      projectInfo: [
        {
          field: "CLIENT",
          value: "IFTHIENANPHUCGATEX",
        },
        {
          field: "SERVICES",
          value: "Textile",
        },
        {
          field: "DURATION",
          value: "9 months",
        },
      ],
      projectDescription: {
        descriptionTitle: "Quality Control & Sales Management",
        description:
            "Enhanced an ERP system by developing Quality Management and Sales Management modules. Gathered requirements, modeled workflows, created wireframes for user approval, wrote the SRS document, supported testers, and prepared the user manual directly at the factory:",
        descriptionLists: [
          "QC Management: Supports the Quality Inspection Department with mobile and web platforms. The mobile app enables detailed product inspections, while the web app offers tools for managers to view statistics, generate reports, and monitor employee performance.",
          "Sales Management: Serves the Market Planning Department, allowing efficient order and client management. It includes a dashboard displaying revenue indexes and production progress to aid decision-making.",
          "Team: Collaborated in a cross-functional team of 11 (1 Business Analyst, 5 Developers, 2 testers, 2 UX-UI Designers, and 1 Product Owner).",
          "Technologies: MVC (Rails), task management (Clickup), user interface (Figma), database development (MongoDB)",
        ],
        projectImage: [projectInner5Image?.src, projectInner6Image?.src, projectInner7Image?.src, projectInner8Image?.src,],
      },
    },
  ],
};

/*
export const blogs = {
  blogsHeading: {
    icon: <FaBlog className="text-theme" />,
    title: "BLOG",
    heading: "`Latest",
    coloredHeading: "Insights",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  blogsData: [
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog3Thumbnail?.src,
        image: blog3Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Homeward bound: Crafting a productive home office",
      slug: "homeward-bound-crafting-a-productive-home-office",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog1Thumbnail?.src,
        image: blog1Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Elevate your mornings with perfectly brewed coffee",
      slug: "elevate-your-mornings-with-perfectly-brewed-coffee",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
    {
      image: {
        thumbnail: blog2Thumbnail?.src,
        image: blog2Image?.src,
      },
      category: "UI Design",
      date: "03 May 2023",
      title: "Mastering the clock: A guide to time management",
      slug: "mastering-the-clock-a-guide-to-time-management",
      blogInfo: {
        projectHeading: {
          icon: <FaBlog className="text-theme" />,
          title: "Blog Details",
        },
        projectInfo: [
          {
            field: "POSTED BY",
            value: "Adrinao Smith",
          },
          {
            field: "CATEGORY:",
            value: "Tips & Tricks, Design",
          },
          {
            field: "POSTED ON:",
            value: "Noveber 01, 2023",
          },
        ],
        projectDescription: {
          descriptionTitle: "Cappuccino Bliss",
          description:
            "Patent authorities globally are grappling with the challenge of redefining their approach to handling inventions generated not by human ingenuity but by AI. It has sparked considerable debate within the intellectual property community.",
          descriptionListsTitle: "Benifits of coffee",
          descriptionLists: [
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do",
            "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
            "Excepteur sint occaecat cupidatat non proident, sunt in culpa",
          ],
          projectImage: [projectInner2Image?.src, projectInner1Image?.src],
        },
      },
    },
  ],
};
*/

/*
export const testimonials = {
  testimonialsHeading: {
    icon: <BiCommentCheck className="text-theme" />,
    title: "TESTIMONIAL",
    heading: "What",
    coloredHeading: "People Say",
    description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",
  },
  testimonialsData: [
    {
      id: 1,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      position: "Developer",
    },
    {
      id: 2,
      image: author2?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          <span className="font-semibold text-theme">Reddick</span> exceeds
          expectations with top-tier coding skills. Reliable, collaborative, and
          a true asset to any project. Highly recommended
        </div>
      ),
      name: "Mily Martin",
      position: "CEO @IT Theme",
    },
    {
      id: 3,
      image: author1?.src,
      desc: (
        <div className="text-sm md:text-[15px] leading-loose content">
          Working with <span className="font-semibold text-theme">Reddick</span>{" "}
          is a game-changer. Their coding expertise and commitment to quality
          make every project a success.
        </div>
      ),
      name: "Alex Johnson",
      position: "Developer",
    },
  ],
};
*/

export const contactInfo = {
  contactInfoHeading: {
    icon: <FaRegEnvelopeOpen className="text-theme" />,
    title: "CONTACT",
    heading: "Contact",
    coloredHeading: "Me.",
    /*description:
      "I design products that are more than pretty. I make them shippable and usable, ttempor non mollit dolor et do aute",*/
  },
  contactInfoData: [
    {
      id: 1,
      field: "Location",
      data: "Ho Chi Minh City",
      Icon: <LocationIcon />,
    },
    {
      id: 2,
      field: "E-mail",
      data: "hthangdng@gmail.com",
      Icon: <EmailIcon />,
    },
    {
      id: 3,
      field: "Phone",
      data: "(+84) 775 550 467",
      Icon: <PhoneIcon />,
    },
  ],
};

import {userDetails, userDetailsSidebar,} from "@/src/staticData/home/home";
import {CiUser} from "react-icons/ci";
import UserDetail from "./UserDetail";

const AboutMe = () => {
  return (
    <div
      data-scroll-index="1"
      id="about"
      className="py-3.5  max-w-content xl:max-2xl:max-w-50rem max-xl:mx-auto xl:ml-auto"
    >
      <div className="px-5 py-8 md:p-8 bg-white dark:bg-nightBlack rounded-2xl about-section lg:p-10 2xl:p-13">
        <div className="inline-flex items-center gap-2 px-4 py-2 text-xs tracking-wide text-black dark:text-white border lg:px-5 section-name border-platinum dark:border-greyBlack200 rounded-4xl">
          <CiUser className="text-theme" size={14} />
          ABOUT ME
        </div>
        <div className="mt-7 md:mt-10 section-title">
          <h2 className="title text-[32px] md:text-4xl lg:text-5xl font-extralight text-black dark:text-white leading-1.27">
            About <span className="font-semibold text-theme">Me</span>
          </h2>
          <p className="text-justify mt-4 md:mt-6 subtitle">
            Hi, my name is{" Thang. "}
            {/*<span className="text-black dark:text-white">*/}
            {/*  {userDetailsSidebar?.userName}*/}
            {/*</span>{" "}*/}
            With nearly 3 years of experience in ERP solutions for Manufacturing and Retail, I have independently
            managed full project lifecycles as the sole Business Analyst. My responsibilities included eliciting
            requirements, aligning solutions with stakeholder expectations, authoring SRS documentation, designing
            UI/UX wireframes, and leading UAT to ensure quality deliverables. Additionally, I managed backlogs,
            coordinated cross-functional teams, and ensured the timely delivery of sprints. Committed to continuous
            learning and collaboration, I focus on delivering impactful results that drive business success.            {/*<span className="text-black dark:text-white"> WordPress</span> sites
            go beyond with exclusive designer.*/}
          </p>
        </div>
        <div className="mt-6 section-content">
  {/*        <div className="inline-flex flex-wrap items-center gap-2 mb-5 text-sm md:gap-4">
            {technologies?.map((tech) => (
              <AboutTechnologies key={tech?.id} {...tech} />
            ))}
          </div>*/}

          <ul className="grid mt-4 mb-10 text-sm lg:mt-6 md:grid-cols-2 gap-x-8 gap-y-3">
            {userDetails?.map((singlInfo, i) => (
              <UserDetail key={i} {...singlInfo} />
            ))}
          </ul>

{/*
          <ul className="grid grid-cols-2 gap-6 counters md:grid-cols-4 xl:gap-8">
            {projectExperiences?.map((exp, i) => (
              <ProjectExperience key={i} {...exp} />
            ))}
          </ul>
*/}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

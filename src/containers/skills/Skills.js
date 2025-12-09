import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

// Define the three core skills you want to show
const coreSkills = [
  { skillName: "AI / ML", fontAwesomeClassname: "fas fa-brain" },
  { skillName: "Cloud Computation", fontAwesomeClassname: "fas fa-cloud" },
  { skillName: "Data Engineering", fontAwesomeClassname: "fas fa-database" }
];

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) return null;

  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade bottom duration={1000}>
          <div className="skills-text-div">
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              {skillsSection.title}
            </h1>

            {/* Horizontal 3-icon layout */}
            <div className="skills-grid-horizontal">
              {coreSkills.map((skill, i) => (
                <div key={i} className="skill-item-horizontal">
                  <SoftwareSkill skills={[skill]} singleSkill={true} />
                </div>
              ))}
            </div>

          </div>
        </Fade>
      </div>
    </div>
  );
}

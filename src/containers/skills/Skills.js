import React, { useContext } from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import codingPerson from "../../assets/lottie/codingPerson.json";

export default function Skills() {
  const { isDark } = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade bottom duration={1000}>
          <div className="skills-text-div">
            <h1
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
            <div className="skills-content-wrapper">
              <div className="skills-left-column">
                <div className="skills-lottie-wrapper">
                  <DisplayLottie animationData={codingPerson} />
                </div>
                <div className="skills-description-column">
                  {skillsSection.skills.map((skills, i) => {
                    return (
                      <p
                        key={i}
                        className={
                          isDark
                            ? "dark-mode subTitle skills-text"
                            : "subTitle skills-text"
                        }
                      >
                        {skills}
                      </p>
                    );
                  })}
                </div>
              </div>
              <div className="skills-tags-column">
                <SoftwareSkill />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

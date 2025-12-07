import React from "react";
import "./SoftwareSkill.scss";

export default function SoftwareSkill({skills}) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {skills.map((skill, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skill.skillName}
              >
                <i className={skill.fontAwesomeClassname}></i>
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

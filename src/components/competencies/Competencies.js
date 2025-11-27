import React, { useContext } from "react";
import "./Competencies.scss";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Competencies({ competenciesData }) {
  const { isDark } = useContext(StyleContext);

  if (!competenciesData || !competenciesData.display) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="competencies-container">
        <div className="competencies-header">
          <h1 className={isDark ? "dark-mode" : ""}>{competenciesData.title}</h1>
          <p className={isDark ? "dark-mode" : ""}>{competenciesData.subtitle}</p>
        </div>
        <div className="competencies-grid">
          {competenciesData.competencyList.map((competency, index) => (
            <div
              key={index}
              className={`competency-chip ${isDark ? "dark-mode" : ""}`}
            >
              {competency}
            </div>
          ))}
        </div>
      </div>
    </Fade>
  );
}

import React, { useContext } from "react";
import "./MentorshipAndTalks.scss";
import StyleContext from "../../contexts/StyleContext";
import { talkSection, impactMetrics } from "../../portfolio";

export default function MentorshipAndTalks() {
  const { isDark } = useContext(StyleContext);

  if (!talkSection.display || !talkSection.categories) {
    return null;
  }

  function renderInstitutionCard(institution, index) {
    return (
      <div className="institution-card" key={index}>
        <div className="institution-name">{institution}</div>
      </div>
    );
  }

  return (
    <section className={isDark ? "mentorship-section dark-mode" : "mentorship-section"}>
      <div className="mentorship-bg-grid"></div>
      <div className="mentorship-content-wrapper">
        <div className="mentorship-hero">
          <h2 className="mentorship-title">{talkSection.title}</h2>
          <p className="mentorship-subtitle">
            {talkSection.subtitle}
          </p>
        </div>

        <div className="brand-wall-container">
          {talkSection.categories.map((category, catIndex) => (
            <div className="academic-category" key={catIndex}>
              <div className="category-header">
                <h3 className="category-label">{category.name}</h3>
                <p className="category-description">{category.description}</p>
              </div>
              <div className="institutions-grid">
                {category.institutions.map((institution, instIndex) =>
                  renderInstitutionCard(institution, instIndex)
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

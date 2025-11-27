import React, { useContext } from "react";
import "./MentorshipAndTalks.scss";
import StyleContext from "../../contexts/StyleContext";

export default function MentorshipAndTalks() {
  const { isDark } = useContext(StyleContext);

  const universities = [
    { name: "VIT University" },
    { name: "University of Massachusetts" },
    { name: "PVP Siddhartha" },
    { name: "JECRC University" }
  ];

  const platforms = [
    { name: "DeepLearning.ai" },
    { name: "Berlin School of Business & Innovation" },
    { name: "Cloud Computing Conference (Boussias)" }
  ];

  const training = [
    { name: "Great Learning" },
    { name: "Wiley" },
    { name: "Verzeo" },
    { name: "Analytics Vidhya" },
    { name: "Kaggle" }
  ];

  const timeline = [
    { year: "2017", org: "VIT", topic: "Databases" },
    { year: "2019", org: "VIT", topic: "Computer Vision" },
    { year: "2020", org: "DeepLearning.ai", topic: "Panel" },
    { year: "2021", org: "Berlin / Wiley", topic: "AI & Big Data" },
    { year: "2022", org: "Analytics Vidhya", topic: "Feature Eng" },
    { year: "2023", org: "Kaggle", topic: "Machine Learning" },
    { year: "2024", org: "Kaggle", topic: "Generative AI" }
  ];

  const stats = [
    { value: "18+", label: "Talks Delivered" },
    { value: "7+", label: "Universities" },
    { value: "5+", label: "Global AI Platforms" },
    { value: "2", label: "Continents" },
    { value: "1000+", label: "Learners Impacted" }
  ];

  function renderLogo(item) {
    // Placeholder design: uppercase text block. If you later provide assets, you can
    // replace the text with <img src={...} /> and a `.logo-img` rule in the SCSS.
    return (
      <div className="logo-item" key={item.name} title={item.name} aria-label={item.name}>
        <div className="logo-placeholder">{item.name.toUpperCase()}</div>
      </div>
    );
  }

  return (
    <section className={isDark ? "mentorship-section dark-mode" : "mentorship-section"}>
      <div className="mentorship-hero">
        <h2 className="mentorship-title">Academic Influence & Global AI Leadership</h2>
        <p className="mentorship-subtitle">
          Recognized by universities, AI organizations, and global platforms for advancing education,
          innovation, and workforce intelligence.
        </p>
      </div>

      <div className="brand-wall" aria-hidden={false}>
        <div className="brand-row" aria-label="Universities">
          {universities.map((u) => renderLogo(u))}
        </div>

        <div className="brand-row" aria-label="Global platforms">
          {platforms.map((p) => renderLogo(p))}
        </div>

        <div className="brand-row" aria-label="Training and mentorship">
          {training.map((t) => renderLogo(t))}
        </div>
      </div>

      <div className="timeline" role="list" aria-label="Mentorship timeline">
        <div className="timeline-scroll">
          {timeline.map((pt) => (
            <div className="timeline-point" key={pt.year} role="listitem">
              <div className="timeline-year">{pt.year}</div>
              <div className="timeline-org">{pt.org}</div>
              <div className="timeline-topic">{pt.topic}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="stats-bar" role="region" aria-label="Impact statistics">
        {stats.map((s) => (
          <div className="stat-box" key={s.label}>
            <div className="stat-value">{s.value}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

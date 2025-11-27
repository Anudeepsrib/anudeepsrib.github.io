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
    return (
      <div className="logo-card" key={item.name} title={item.name} aria-label={item.name}>
        <div className="logo-content">
          <span className="logo-text">{item.name}</span>
        </div>
      </div>
    );
  }

  return (
    <section className={isDark ? "mentorship-section dark-mode" : "mentorship-section"}>
      <div className="mentorship-bg-grid"></div>
      <div className="mentorship-content-wrapper">
        <div className="mentorship-hero">
          <h2 className="mentorship-title">Academic Influence & Global AI Leadership</h2>
          <p className="mentorship-subtitle">
            Recognized by universities, AI organizations, and global platforms for advancing education,
            innovation, and workforce intelligence.
          </p>
        </div>

        <div className="brand-wall-container">
          <div className="brand-section">
            <h3 className="brand-section-title">Universities</h3>
            <div className="brand-grid">
              {universities.map((u) => renderLogo(u))}
            </div>
          </div>

          <div className="brand-section">
            <h3 className="brand-section-title">Global AI Platforms</h3>
            <div className="brand-grid">
              {platforms.map((p) => renderLogo(p))}
            </div>
          </div>

          <div className="brand-section">
            <h3 className="brand-section-title">Training Partners</h3>
            <div className="brand-grid">
              {training.map((t) => renderLogo(t))}
            </div>
          </div>
        </div>

        <div className="stats-container">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <div className="stat-value">{s.value}</div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

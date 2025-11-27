import React, {useContext} from "react";
import "./CombinedTimeline.scss";
import Timeline from "../../components/timeline/Timeline";
import {educationInfo, workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function CombinedTimeline() {
  const {isDark} = useContext(StyleContext);

  // Combine education and work experience into a single timeline
  const timelineEvents = [];

  // Add education events
  if (educationInfo.display && educationInfo.schools) {
    educationInfo.schools.forEach((school) => {
      const [startYear] = school.duration.split(" - ");
      timelineEvents.push({
        date: school.duration,
        title: school.schoolName,
        subtitle: school.subHeader,
        description: school.desc,
        type: "education",
        sortKey: parseInt(startYear)
      });
    });
  }

  // Add work experience events
  if (workExperiences.display && workExperiences.experience) {
    workExperiences.experience.forEach((exp) => {
      const dateStr = exp.date.replace("Present", "2024");
      const [startYear] = dateStr.split(" - ");
      timelineEvents.push({
        date: exp.date,
        title: exp.role,
        subtitle: exp.company,
        description: exp.desc,
        type: "work",
        sortKey: parseInt(startYear) || 9999
      });
    });
  }

  // Sort by year
  timelineEvents.sort((a, b) => a.sortKey - b.sortKey);

  if (timelineEvents.length === 0) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div id="experience" className="combined-timeline-section">
        <div className="timeline-header">
          <h1
            className={
              isDark
                ? "dark-mode timeline-heading"
                : "timeline-heading"
            }
          >
            Education & Experience Timeline
          </h1>
          <p
            className={
              isDark
                ? "dark-mode timeline-subtitle"
                : "timeline-subtitle"
            }
          >
            My professional journey from 2009 onwards
          </p>
        </div>
        <Timeline events={timelineEvents} />
      </div>
    </Fade>
  );
}

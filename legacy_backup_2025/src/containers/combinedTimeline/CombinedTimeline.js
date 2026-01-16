import React, {useContext} from "react";
import "./CombinedTimeline.scss";
import Timeline from "../../components/timeline/Timeline";
import {timelineSection} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function CombinedTimeline() {
  const {isDark} = useContext(StyleContext);

  if (!timelineSection.display || !timelineSection.events) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="20px">
      <div id="experience" className="combined-timeline-section">
        <div className="timeline-header">
          <h1
            className={
              isDark ? "dark-mode timeline-heading" : "timeline-heading"
            }
          >
            {timelineSection.title}
          </h1>
          <p
            className={
              isDark ? "dark-mode timeline-subtitle" : "timeline-subtitle"
            }
          >
            {timelineSection.subtitle}
          </p>
        </div>
        <Timeline events={timelineSection.events} />
      </div>
    </Fade>
  );
}

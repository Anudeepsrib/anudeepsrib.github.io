import React, {useContext} from "react";
import "./Timeline.scss";
import {Fade} from "react-reveal";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import codingPerson from "../../assets/lottie/codingPerson.json";
import StyleContext from "../../contexts/StyleContext";

export default function Timeline({events}) {
  const {isDark} = useContext(StyleContext);

  if (!events || events.length === 0) {
    return null;
  }

  return (
    <div className={isDark ? "dark-mode timeline-container" : "timeline-container"}>
      <div className="timeline-wrapper">
        <div className="timeline-left">
          <DisplayLottie animationData={codingPerson} />
        </div>
        <div className="timeline-right">
          <div className="timeline">
            {events.map((event, index) => (
              <div
                key={index}
                className="timeline-item"
                style={{ animationDelay: `${index * 120}ms` }}
              >
                <div className="timeline-marker">
                  <div className="timeline-dot" />
                </div>
                <div className="timeline-content">
                  <div className="timeline-date">{event.date}</div>
                  <div className="timeline-title">{event.title}</div>
                  {event.subtitle && (
                    <div className="timeline-subtitle">{event.subtitle}</div>
                  )}
                  {event.description && (
                    <div className="timeline-description">{event.description}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

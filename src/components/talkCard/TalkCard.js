import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  const hasLinks = talkDetails.slides_url || talkDetails.event_url;
  return (
    <div
      className={talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"}
    >
      <div className="diagonal-fill"></div>
      <div className="talk-card-title">{talkDetails.title}</div>
      <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

      {hasLinks && (
        <div className="card-footer-button-div">
          {talkDetails.slides_url && (
            <a href={talkDetails.slides_url} target="_" className="talk-button">
              Slides
            </a>
          )}
          {talkDetails.event_url && (
            <a href={talkDetails.event_url} target="_" className="talk-button">
              Event
            </a>
          )}
        </div>
      )}
    </div>
  );
}

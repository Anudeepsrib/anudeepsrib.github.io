import React from "react";
import "./SocialMedia.scss";
import {socialMediaLinks} from "../../portfolio";

export default function socialMedia() {
  if (!socialMediaLinks.display) {
    return null;
  }
  return (
    <div className="social-media-div">
      {socialMediaLinks.github && (
        <a
          href={socialMediaLinks.github}
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.linkedin && (
        <a
          href={socialMediaLinks.linkedin}
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-linkedin-in"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.gmail && (
        <a
          href={`mailto:${socialMediaLinks.gmail}`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-envelope"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.kaggle && (
        <a
          href={socialMediaLinks.kaggle}
          className="icon-button kaggle"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-kaggle"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.topmate && (
        <a
          href={socialMediaLinks.topmate}
          className="icon-button topmate"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-user-plus"></i>
          <span></span>
        </a>
      )}

      {socialMediaLinks.adplist && (
        <a
          href={socialMediaLinks.adplist}
          className="icon-button adplist"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fas fa-calendar-check"></i>
          <span></span>
        </a>
      )}
    </div>
  );
}

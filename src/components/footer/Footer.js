import React, { useContext } from "react";
import "./Footer.scss";
import { Fade } from "react-reveal";
import { contactInfo } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import SocialMedia from "../socialMedia/SocialMedia";
import Button from "../button/Button";

export default function Footer() {
  const { isDark } = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div" id="contact">
        <div className={isDark ? "dark-mode-tint" : ""}>
          <div className="footer-content">
            <h1 className={isDark ? "dark-mode-heading" : "heading"}>
              {contactInfo.title}
            </h1>
            <p className={isDark ? "dark-mode-subtitle" : "subtitle"}>
              {contactInfo.subtitle}
            </p>
            <a
              className="email-link"
              href={`mailto:${contactInfo.email_address}`}
            >
              {contactInfo.email_address}
            </a>
            <div className="social-media-div">
              <SocialMedia />
            </div>
            <div className="button-greeting-div">
              <Button text="Let’s Connect" href="#contact" />
            </div>
          </div>
        </div>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Theme by{" "}
          <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a>
        </p>
      </div>
    </Fade>
  );
}

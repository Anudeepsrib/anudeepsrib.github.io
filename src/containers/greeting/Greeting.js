import React, { useContext } from "react";
import { Fade } from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import landingPerson from "../../assets/lottie/landingPerson";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              {greeting.subText && (
                <p
                  className={
                    isDark
                      ? "dark-mode greeting-text-p subText"
                      : "greeting-text-p subTitle subText"
                  }
                >
                  {greeting.subText}
                </p>
              )}
              <div className="social-media-div">
                <SocialMedia />
              </div>
              <div className="button-greeting-div">
                <Button text="Work With Me" href="#contact" />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <DisplayLottie animationData={landingPerson} />
          </div>
        </div>
      </div>
    </Fade>
  );
}

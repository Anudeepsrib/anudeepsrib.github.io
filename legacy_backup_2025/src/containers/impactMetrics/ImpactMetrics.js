import React, {useContext} from "react";
import "./ImpactMetrics.scss";
import {impactMetrics} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";
import CountUp from "react-countup";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import codingPerson from "../../assets/lottie/codingPerson";

export default function ImpactMetrics() {
  const {isDark} = useContext(StyleContext);
  if (!impactMetrics.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="metrics">
      <div className="metrics-main-div">
        <Fade bottom duration={1000}>
          <div className="metrics-text-div">
            <h1
              className={
                isDark ? "dark-mode metrics-heading" : "metrics-heading"
              }
            >
              Impact Metrics
            </h1>
            <div className="metrics-content">
              <div className="metrics-grid">
                {impactMetrics.stats.map((stat, i) => (
                  <div key={i} className="metric-item">
                    <div className="metric-value">
                      <CountUp
                        start={0}
                        end={parseInt(stat.value)}
                        duration={2.5}
                        separator=","
                        suffix={stat.value.includes("+") ? "+" : ""}
                      />
                    </div>
                    <SoftwareSkill skills={[stat]} singleSkill={true} />
                    <div className="metric-label">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="metrics-animation">
                <DisplayLottie animationData={codingPerson} />
              </div>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}

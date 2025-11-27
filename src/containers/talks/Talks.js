import React, {useContext} from "react";
import "./Talks.scss";
import {talkSection} from "../../portfolio";
import {Fade} from "react-reveal";
import MentorshipAndTalks from "../mentorshipAndTalks/MentorshipAndTalks";
import StyleContext from "../../contexts/StyleContext";

export default function Talks() {
  const {isDark} = useContext(StyleContext);
  if (!talkSection.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="talks">
        <MentorshipAndTalks />
      </div>
    </Fade>
  );
}

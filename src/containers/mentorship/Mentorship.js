import React, { useContext } from "react";
import "./Mentorship.scss";
import { mentorshipSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Mentorship() {
    const { isDark } = useContext(StyleContext);

    if (!mentorshipSection.display) {
        return null;
    }

    return (
        <Fade bottom duration={1000} distance="20px">
            <div className="main" id="mentorship">
                <div className="mentorship-header">
                    <h1 className={isDark ? "dark-mode heading" : "heading"}>
                        {mentorshipSection.title}
                    </h1>
                    <p
                        className={
                            isDark ? "dark-mode subtitle" : "subtitle"
                        }
                    >
                        {mentorshipSection.subtitle}
                    </p>
                </div>
                <div className="mentorship-body">
                    <div className="testimonials-grid">
                        {mentorshipSection.testimonials.map((card, i) => (
                            <div
                                key={i}
                                className={isDark ? "dark-mode testimonial-card" : "testimonial-card"}
                            >
                                <div className="testimonial-quote">"{card.quote}"</div>
                                <div className="testimonial-footer">
                                    <span className="testimonial-name">{card.name}</span>
                                    <span className="testimonial-platform">— via {card.platform}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Fade>
    );
}

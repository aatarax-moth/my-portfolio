import React, { useState } from "react";
import experienceData from "../data/experience.json";
import "./Experience.css";
import "../index.css";
import Container from "./Container";

/**
 * Renders a single experience card.
 *
 * Expected shape of each entry in experience.json:
 * {
 *   "status": "Full-time",
 *   "company": "Acme Corp",
 *   "role": "Senior Product Designer",
 *   "shortSummary": "One-line summary shown by default.",
 *   "summary": "Longer, extended summary shown when expanded.",
 *   "skills": ["Figma", "React", "Design Systems"],
 *   "timeline": "2 yrs 3 mos",
 *   "timeframe": "Jan 2022 - Present",
 *   "currentlyActive": true   // presence/truthy value = currently active role
 * }
 */
function ExperienceCard({ experience }) {
  const [expanded, setExpanded] = useState(false);

  const isActive = Boolean(experience.currentlyActive);

  const cardClassName = `experience-card ${
    isActive ? "experience-card--active" : "experience-card--past"
  }`;

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div className={cardClassName}>
      <div className="experience-row experience-row--top">
        <span className="experience-status">{experience.status}</span>
        <span className="experience-company">{experience.company}</span>
      </div>

      <h3 className="experience-role">{experience.role}</h3>

      <p className="experience-summary">
        {expanded ? experience.summary : experience.shortSummary}
      </p>

      {expanded && Array.isArray(experience.skills) && (
        <div className="experience-skills">
          {experience.skills.map((skill) => (
            <span className="experience-skill-pill" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      )}

      <div className="experience-row experience-row--bottom">
        <div className="experience-row experience-row--meta">
          <span className="experience-timeline">{experience.timeline}</span>
          <span className="experience-timeframe">{experience.timeframe}</span>
        </div>

        <button
          type="button"
          className="experience-dropdown-btn"
          onClick={toggleExpanded}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse role details" : "Expand role details"}
        >
          <svg
            className={`experience-dropdown-icon ${
              expanded ? "experience-dropdown-icon--open" : ""
            }`}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2 4.5L7 9.5L12 4.5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default function Experience({ data = experienceData }) {
  return (
    <Container>
    <div className="margin-top-4">
                    <h1>My Experience</h1>
                </div>
      <div className="experience-list">
        {data.map((experience) => (
          <ExperienceCard
            key={`${experience.company}-${experience.role}`}
            experience={experience}
          />
        ))}
      </div>
    </Container>
  );
}
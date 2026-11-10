import React, { useState } from "react";
import experienceData from "../data/experience.json";
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
 *   "startDate": "2022-01",
 *   "endDate": "2024-03",
 *   "timeframe": "Jan 2022 - Present",
 *   "currentlyActive": true   // presence/truthy value = currently active role
 * }
 */
function getExperienceDuration(experience) {
  const [startYear, startMonth] = experience.startDate.split("-").map(Number);
  const endDate = experience.currentlyActive
    ? new Date()
    : new Date(`${experience.endDate}-01T00:00:00`);

  const totalMonths = Math.max(
    1,
    (endDate.getFullYear() - startYear) * 12 +
      (endDate.getMonth() + 1 - startMonth) +
      1
  );
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];

  if (years > 0) parts.push(`${years} yr${years === 1 ? "" : "s"}`);
  if (months > 0) parts.push(`${months} mo${months === 1 ? "" : "s"}`);

  return parts.join(" ") || "1 mo";
}

function ExperienceCard({ experience, revealDelayMs }) {
  const [expanded, setExpanded] = useState(false);

  const isActive = Boolean(experience.currentlyActive);
  const duration = getExperienceDuration(experience);

  const cardClassName = `rounded-2xl border p-4 transition duration-220 ease-portfolio hover:-translate-y-0.5 hover:shadow-[0_18px_44px_rgba(254,119,67,0.26)] ${
    isActive
      ? "border-orange bg-orange"
      : "border-orange bg-orange/[0.08]"
  }`;

  const toggleExpanded = () => setExpanded((prev) => !prev);

  return (
    <div
      className={cardClassName}
      data-reveal
      style={
        revealDelayMs != null ? { "--reveal-delay": `${revealDelayMs}ms` } : null
      }
    >
      <div className="mb-2 flex items-center justify-between">
        <span className="text-[0.85rem] font-medium opacity-80">{experience.status}</span>
        <span className="text-[0.85rem] font-semibold">{experience.company}</span>
      </div>

      <h3 className="mb-1.5 text-[1.15rem] font-bold">{experience.role}</h3>

      <p className="mb-3 text-[0.95rem] leading-[1.5]">
        {expanded ? experience.summary : experience.shortSummary}
      </p>

      {expanded && Array.isArray(experience.skills) && (
        <div className="mb-3 flex flex-wrap gap-1.5 animate-fade-up">
          {experience.skills.map((skill) => (
            <span className="rounded-full border border-current px-2.5 py-1 text-xs opacity-85" key={skill}>
              {skill}
            </span>
          ))}
        </div>
      )}

      <div className="flex items-end justify-between">
        <div className="flex items-center justify-start gap-4">
          <span className="text-[0.8rem] opacity-80">{duration}</span>
          <span className="text-[0.8rem] opacity-80">{experience.timeframe}</span>
        </div>

        <button
          type="button"
          className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent p-0 text-inherit hover:bg-black/8"
          onClick={toggleExpanded}
          aria-expanded={expanded}
          aria-label={expanded ? "Collapse role details" : "Expand role details"}
        >
          <svg
            className={`transition duration-220 ease-portfolio ${expanded ? "rotate-180" : ""}`}
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
      <div className="mt-16" data-reveal style={{ "--reveal-delay": "140ms" }}>
        <h1 className="m-0 text-orange">My Experience</h1>
      </div>
      <div className="mt-8 flex flex-col gap-4">
        {data.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.role}`}
            experience={experience}
            revealDelayMs={180 + index * 70}
          />
        ))}
      </div>
    </Container>
  );
}

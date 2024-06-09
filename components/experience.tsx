import React from "react";
import { DescriptionRow } from "./description-row";

interface ExperienceProps {
  title: string;
  company: string;
  description: string;
}

const Experience: React.FC<ExperienceProps> = ({
  title,
  company,
  description,
}) => {
  return (
    <DescriptionRow
      title={title}
      descriptionPrimary={company}
      descriptionSecondary={description}
    />
  );
};

const experiences = [
  {
    title: "Principal Designer, VS Code",
    company: "Microsoft",
    description: "2024 — Present",
  },
  {
    title: "Senior Designer, VS Code",
    company: "Microsoft",
    description: "2021 — 2024",
  },
  {
    title: "Senior Designer, Product Insights",
    company: "Microsoft",
    description: "2019 — 2021",
  },
  {
    title: "Designer 2, Aria",
    company: "Microsoft",
    description: "2018 — 2019",
  },
  {
    title: "Designer, Aria",
    company: "Microsoft",
    description: "2016 — 2018",
  },
  {
    title: "Intern, HoloLens",
    company: "8ninths",
    description: "2015",
  },
];

export const ExperienceList: React.FC = () => {
  return (
    <div className="flex-col">
      <h2 className="mt-0 font-base font-semibold text-blue-600 dark:text-blue-400">
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        {experiences.map((experience, index) => (
          <Experience
            key={index}
            title={experience.title}
            company={experience.company}
            description={experience.description}
          />
        ))}
      </div>
    </div>
  );
};

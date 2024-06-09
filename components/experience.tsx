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

export const ExperienceList: React.FC = () => {
  return (
    <div className="flex-col">
      <h2 className="mt-0 font-base font-semibold text-blue-600 dark:text-blue-400">
        Experience
      </h2>
      <div className="flex flex-col gap-6">
        <Experience
          title="Principal Designer, VS Code"
          company="Microsoft"
          description="2024 — Present"
        />
        <Experience
          title="Senior Designer, VS Code"
          company="Microsoft"
          description="2021 — 2024"
        />
        <Experience
          title="Senior Designer, Product Insights"
          company="Microsoft"
          description="2019 — 2021"
        />
        <Experience
          title="Designer 2, Aria"
          company="Microsoft"
          description="2018 — 2019"
        />
        <Experience
          title="Designer, Aria"
          company="Microsoft"
          description="2016 — 2018"
        />
        <Experience
          title="Intern, HoloLens"
          company="8ninths"
          description="2015"
        />
      </div>
    </div>
  );
};

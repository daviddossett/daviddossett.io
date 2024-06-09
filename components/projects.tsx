import { DescriptionRow } from "./DescriptionRow";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const Project: React.FC<ProjectProps> = ({ title, description, image }) => {
  return (
    <div>
      <DescriptionRow title={title} descriptionPrimary={description} />
      <div className="flex justify-center items-center mt-4 py-32 bg-gray-100 dark:bg-gray-700 rounded-md">
        <span className="text-slate-400">{image}</span>
      </div>
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <div className="flex-col flex-grow">
      <h2 className="mt-0 font-base font-semibold text-blue-600 dark:text-blue-400">
        Projects
      </h2>
      <div className="flex flex-col gap-12">
        <Project
          title="GitHub Copilot"
          description="Your AI pair programmer"
          image="copilot.png"
        />
        <Project
          title="VS Code Merge Editor"
          description="Resolving merge conflicts with ease"
          image="merge-editor.png"
        />
        <Project
          title="VS Code Command Center"
          description="Bringing keyboard efficiency to the masses"
          image="command-center.png"
        />
      </div>
    </div>
  );
};

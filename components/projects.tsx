import Image from "next/image";
import { DescriptionRow } from "./description-row";

interface ProjectProps {
  title: string;
  description: string;
  image: string;
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  image,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <DescriptionRow title={title} descriptionPrimary={description} />
      <Image
        src={image}
        alt={title}
        width="1600"
        height="800"
        className="rounded-md"
      />
    </div>
  );
};

export const Projects: React.FC = () => {
  return (
    <div className="flex-col">
      <h2 className="mt-0 font-base font-semibold text-blue-600 dark:text-blue-400">
        Recent Projects
      </h2>
      <div className="flex flex-col gap-12">
        <Project
          title="GitHub Copilot Chat"
          description="Copilot Chat, Inline Chat, and Extensibility integration in VS Code"
          image="/images/copilot-chat.png"
        />
        <Project
          title="Merge Editor"
          description="Reducing anxiety when resolving complex conflicts"
          image="/images/vscode-merge-editor.png"
        />
        <Project
          title="Command Center"
          description="Bringing keyboard efficiency to the masses"
          image="/images/vscode-command-center.png"
        />
        <Project
          title="Profiles"
          description="Configure VS Code for different workloads"
          image="/images/vscode-profiles.png"
        />
        <Project
          title="VS Code Website"
          description="Modernized VS Code website and docs"
          image="/images/vscode-website.png"
        />
        <Project
          title="Default Themes"
          description="Modernized, accessibile, opt-out default dark/light themes"
          image="/images/vscode-themes.png"
        />
        <Project
          title="Product Insights"
          description="Real-time cross-platform analytics SaaS app"
          image="/images/product-insights.png"
        />
        <Project
          title="Grid Playground"
          description="Side project to quickly generate CSS grid layouts"
          image="/images/grid-playground.png"
        />
      </div>
    </div>
  );
};

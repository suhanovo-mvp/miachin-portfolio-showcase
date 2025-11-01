import { SpotlightCard } from "./SpotlightCard";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
  comingSoon?: boolean;
}

export const ProjectCard = ({ title, icon, onClick, comingSoon }: ProjectCardProps) => {
  return (
    <button onClick={onClick} className="w-full text-left" disabled={comingSoon}>
      <SpotlightCard className={comingSoon ? "opacity-60 cursor-not-allowed" : "cursor-pointer"}>
        <div className="flex items-center justify-between group">
          <div className="flex items-center gap-4">
            <div className="text-accent text-2xl">{icon}</div>
            <div>
              <h3 className="text-xl font-semibold text-foreground group-hover:text-accent transition-colors">
                {title}
              </h3>
              {comingSoon && (
                <p className="text-muted-foreground text-sm">Скоро</p>
              )}
            </div>
          </div>
          <ArrowRight className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
        </div>
      </SpotlightCard>
    </button>
  );
};

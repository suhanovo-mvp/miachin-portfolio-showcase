import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SpotlightCard } from "./SpotlightCard";
import { ExternalLink } from "lucide-react";

export interface ProjectLink {
  title: string;
  url: string;
  description?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  links: ProjectLink[];
  icon: React.ReactNode;
}

interface ProjectModalProps {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProjectModal = ({ project, open, onOpenChange }: ProjectModalProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-card/95 backdrop-blur-xl border-border">
        <DialogHeader>
          <div className="flex items-center gap-3 mb-2">
            <div className="text-accent">{project.icon}</div>
            <DialogTitle className="text-3xl font-bold text-foreground">
              {project.title}
            </DialogTitle>
          </div>
          <DialogDescription className="text-muted-foreground text-lg">
            {project.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="grid gap-4 mt-6">
          {project.links.map((link, index) => (
            <SpotlightCard key={index}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between group"
              >
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1 group-hover:text-accent transition-colors">
                    {link.title}
                  </h3>
                  {link.description && (
                    <p className="text-muted-foreground">{link.description}</p>
                  )}
                </div>
                <ExternalLink className="w-5 h-5 text-accent opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </SpotlightCard>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
};

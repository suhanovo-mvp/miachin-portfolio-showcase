import { useState } from "react";
import { ProjectCard } from "@/components/ProjectCard";
import { ProjectModal, Project } from "@/components/ProjectModal";
import { MatrixRain } from "@/components/MatrixRain";
import { BookOpen, Music, Rocket, GraduationCap, BookMarked, Award } from "lucide-react";
import profilePhoto from "@/assets/dmitry-photo.jpeg";
const projects: Project[] = [{
  id: "education",
  title: "Обучение",
  description: "Образовательные программы и курсы по проектному управлению и новым технологиям",
  icon: <GraduationCap className="w-8 h-8" />,
  links: [{
    title: "ProAgile - Проектное управление",
    url: "https://stepik.org/course/216930/syllabus",
    description: "Курс на Stepik по гибкому проектному управлению"
  }, {
    title: "Видеолекции ProAgile",
    url: "https://rutube.ru/channel/31733767/",
    description: "Видеоматериалы и лекции на RuTube"
  }]
}, {
  id: "music",
  title: "Музыка",
  description: "Творческие проекты и музыкальные релизы",
  icon: <Music className="w-8 h-8" />,
  links: [{
    title: "Leadlace",
    url: "https://band.link/hrrJ7",
    description: "Музыкальный проект - слушайте на всех площадках"
  }]
}];
const Index = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
    setModalOpen(true);
  };
  return <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      {/* Matrix Rain Effect */}
      <MatrixRain />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="w-full max-w-2xl relative z-[2]">
        <div className="bg-card/40 backdrop-blur-xl rounded-3xl p-8 md:p-12 border border-border shadow-2xl">
          {/* Profile Photo */}
          <div className="flex justify-center mb-8 animate-float">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-accent/20 blur-xl animate-glow" />
              <img src={profilePhoto} alt="Дмитрий Мячин" className="relative w-40 h-40 rounded-full object-cover border-4 border-white shadow-glow" />
            </div>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground">
            Дмитрий Мячин
          </h1>

          {/* Bio */}
          <p className="text-center text-muted-foreground text-lg mb-8 leading-relaxed">MBA CIO, ИИ-евангелист, эксперт по проектному управлению, преподаватель, музыкант. Создаю образовательные программы и делюсь знаниями в области управления проектами и цифровой трансформации.</p>

          {/* Projects */}
          <div className="space-y-4">
            {projects.map(project => <ProjectCard key={project.id} title={project.title} icon={project.icon} onClick={() => handleProjectClick(project)} />)}
            
            <ProjectCard title="Книга про ИИ" icon={<BookMarked className="w-8 h-8" />} onClick={() => {}} comingSoon />
            <ProjectCard title="MBA CIO" icon={<Award className="w-8 h-8" />} onClick={() => {}} comingSoon />
            <ProjectCard title="R-Sups" icon={<Rocket className="w-8 h-8" />} onClick={() => {}} comingSoon />
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              <a href="https://miachin.pro" className="text-accent hover:underline transition-colors" target="_blank" rel="noopener noreferrer">
                miachin.pro
              </a>
            </p>
          </div>
        </div>
      </div>

      <ProjectModal project={selectedProject} open={modalOpen} onOpenChange={setModalOpen} />
    </div>;
};
export default Index;
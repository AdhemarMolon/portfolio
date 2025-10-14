import React, { useState } from "react";
import { Github, ExternalLink, Star, GitFork, Calendar } from "lucide-react";

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
  category?: string;
  stars?: number;
  forks?: number;
  lastUpdated?: string;
  featured?: boolean;
};

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  imageUrl,
  category,
  stars,
  forks,
  lastUpdated,
  featured = false
}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const MAX_DESC_LENGTH = 120;
  const isDescriptionLong = description.length > MAX_DESC_LENGTH;

  const getCategoryColor = (cat?: string) => {
    const colors: { [key: string]: string } = {
      web: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 border border-blue-400/40 shadow-sm shadow-blue-500/20",
      mobile: "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 border border-purple-400/40 shadow-sm shadow-purple-500/20",
      backend: "bg-gradient-to-r from-green-500/20 to-emerald-500/20 text-green-300 border border-green-400/40 shadow-sm shadow-green-500/20",
      ai: "bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 border border-orange-400/40 shadow-sm shadow-orange-500/20",
      fullstack: "bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-400/40 shadow-sm shadow-cyan-500/20",
      bot: "bg-gradient-to-r from-indigo-500/20 to-violet-500/20 text-indigo-300 border border-indigo-400/40 shadow-sm shadow-indigo-500/20",
      low_level: "bg-gradient-to-r from-slate-500/20 to-gray-600/20 text-slate-300 border border-slate-400/40 shadow-sm shadow-slate-500/20",
      "open-source": "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-300 border border-amber-400/40 shadow-sm shadow-amber-500/20",
      "Sistemas de Baixo Nível": "bg-gradient-to-r from-red-500/20 to-rose-500/20 text-red-300 border border-red-400/40 shadow-sm shadow-red-500/20"
    };
    return colors[cat || ''] || "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-300 border border-gray-400/40";
  };

  const getCategoryLabel = (cat?: string) => {
    const labels: { [key: string]: string } = {
      web: "WEB",
      mobile: "MOBILE", 
      backend: "BACKEND",
      ai: "IA/ML",
      fullstack: "FULLSTACK",
      bot: "BOT",
      low_level: "SISTEMAS",
      "open-source": "OPEN SOURCE",
      "Sistemas de Baixo Nível": "SISTEMAS"
    };
    return labels[cat || ''] || cat?.toUpperCase() || '';
  };

  const getTechColor = (tech: string) => {
    const techColors: { [key: string]: string } = {
      React: "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-200 border-cyan-400/40",
      TypeScript: "bg-gradient-to-r from-blue-600/20 to-blue-700/20 text-blue-200 border-blue-400/40",
      JavaScript: "bg-gradient-to-r from-yellow-500/20 to-amber-500/20 text-yellow-200 border-yellow-400/40",
      "Node.js": "bg-gradient-to-r from-green-600/20 to-green-700/20 text-green-200 border-green-400/40",
      Python: "bg-gradient-to-r from-blue-500/20 to-yellow-500/20 text-blue-200 border-blue-400/40",
      MongoDB: "bg-gradient-to-r from-green-500/20 to-emerald-600/20 text-green-200 border-green-400/40",
      "Tailwind CSS": "bg-gradient-to-r from-cyan-400/20 to-blue-500/20 text-cyan-200 border-cyan-400/40",
      Vite: "bg-gradient-to-r from-purple-500/20 to-yellow-500/20 text-purple-200 border-purple-400/40",
      HTML: "bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-200 border-orange-400/40",
      CSS: "bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-200 border-blue-400/40",
      C: "bg-gradient-to-r from-slate-600/20 to-gray-700/20 text-slate-200 border-slate-400/40",
      "Discord.js": "bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-200 border-indigo-400/40",
      "Gemini API": "bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-200 border-purple-400/40",
      "Framer Motion": "bg-gradient-to-r from-pink-500/20 to-rose-500/20 text-pink-200 border-pink-400/40",
      "OpenAI API": "bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-200 border-emerald-400/40",
      "GitHub Pages": "bg-gradient-to-r from-gray-600/20 to-slate-700/20 text-gray-200 border-gray-400/40",
      "Estruturas de Dados": "bg-gradient-to-r from-red-500/20 to-orange-500/20 text-red-200 border-red-400/40",
      "Manipulação de Arquivos": "bg-gradient-to-r from-amber-500/20 to-yellow-500/20 text-amber-200 border-amber-400/40",
      Algoritmos: "bg-gradient-to-r from-indigo-500/20 to-blue-500/20 text-indigo-200 border-indigo-400/40",
      "Extensão de Navegador": "bg-gradient-to-r from-violet-500/20 to-purple-500/20 text-violet-200 border-violet-400/40",
      "Next.js": "bg-gradient-to-r from-black/30 to-gray-800/30 text-white border-gray-600/40",
      tRPC: "bg-gradient-to-r from-blue-600/20 to-cyan-600/20 text-blue-200 border-blue-400/40",
      Prisma: "bg-gradient-to-r from-slate-700/20 to-indigo-700/20 text-slate-200 border-slate-400/40",
      PostgreSQL: "bg-gradient-to-r from-blue-700/20 to-blue-800/20 text-blue-200 border-blue-500/40",
      NextAuth: "bg-gradient-to-r from-purple-600/20 to-pink-600/20 text-purple-200 border-purple-400/40",
      Zod: "bg-gradient-to-r from-blue-500/20 to-indigo-600/20 text-blue-200 border-blue-400/40",
    };
    return techColors[tech] || "bg-gradient-to-r from-gray-500/20 to-slate-500/20 text-gray-200 border-gray-400/40";
  };

  const formatDate = (dateString?: string) => {
    if (!dateString) return null;
    return new Date(dateString).toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
  };

  const handleGithubClick = () => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  const handleDemoClick = () => {
    if (liveUrl) {
      window.open(liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className={`
      relative bg-card/50 backdrop-blur-sm rounded-xl border border-border/50 
      shadow-sm hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 overflow-hidden group hover:scale-[1.02]
      ${featured ? 'ring-2 ring-primary/20 bg-gradient-to-br from-primary/5 to-accent/5' : ''}
    `}>
      {/* Featured Badge */}
      {featured && (
        <div className="absolute top-3 right-3 z-10">
          <div className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full flex items-center gap-1 shadow-lg">
            <Star size={10} />
            Destaque
          </div>
        </div>
      )}

      {/* Image */}
      {imageUrl && (
        <div className="h-40 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}

      <div className="p-6">
        {/* Category */}
        {category && (
          <div className="mb-3">
            <span className={`inline-block text-xs font-medium px-2 py-1 rounded-full ${getCategoryColor(category)}`}>
              {getCategoryLabel(category)}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description */}
        <div className="mb-4">
          <p className={`text-muted-foreground text-sm leading-relaxed ${!showFullDescription && isDescriptionLong ? 'line-clamp-3' : ''}`}>
            {description}
          </p>
          {isDescriptionLong && (
            <button
              onClick={() => setShowFullDescription(!showFullDescription)}
              className="text-xs text-primary hover:text-primary/80 transition-colors mt-2 font-medium"
            >
              {showFullDescription ? "Ver menos" : "Ver mais"}
            </button>
          )}
        </div>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className={`text-xs px-3 py-1.5 rounded-md border font-medium transition-all duration-300 hover:scale-105 hover:shadow-md ${getTechColor(tech)}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Stats */}
        {(stars || forks || lastUpdated) && (
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pb-4 border-b border-border/30">
            {stars && (
              <div className="flex items-center gap-1">
                <Star size={12} />
                <span>{stars}</span>
              </div>
            )}
            {forks && (
              <div className="flex items-center gap-1">
                <GitFork size={12} />
                <span>{forks}</span>
              </div>
            )}
            {lastUpdated && (
              <div className="flex items-center gap-1">
                <Calendar size={12} />
                <span>{formatDate(lastUpdated)}</span>
              </div>
            )}
          </div>
        )}

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button
            type="button"
            onClick={handleGithubClick}
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-secondary/50 hover:bg-secondary text-secondary-foreground rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105"
          >
            <Github size={16} />
            Código
          </button>
          
          {liveUrl && (
            <button
              type="button"
              onClick={handleDemoClick}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary/10 hover:bg-primary/20 text-primary rounded-lg transition-all duration-300 text-sm font-medium hover:scale-105"
            >
              <ExternalLink size={16} />
              Demo
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
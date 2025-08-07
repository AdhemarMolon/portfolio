import React from "react";
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
  const getCategoryColor = (cat?: string) => {
    const colors: { [key: string]: string } = {
      web: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
      mobile: "bg-purple-500/10 text-purple-400 border border-purple-500/20",
      backend: "bg-green-500/10 text-green-400 border border-green-500/20",
      ai: "bg-orange-500/10 text-orange-400 border border-orange-500/20",
      fullstack: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
      "Sistemas de Baixo Nível": "bg-red-500/10 text-red-400 border border-red-500/20"
    };
    return colors[cat || ''] || "bg-muted/50 text-muted-foreground border border-border";
  };

  const getCategoryLabel = (cat?: string) => {
    const labels: { [key: string]: string } = {
      web: "WEB",
      mobile: "MOBILE", 
      backend: "BACKEND",
      ai: "IA/ML",
      fullstack: "FULLSTACK",
      "Sistemas de Baixo Nível": "SISTEMAS"
    };
    return labels[cat || ''] || cat?.toUpperCase() || '';
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
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">
          {description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="bg-secondary/50 text-secondary-foreground text-xs px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-muted-foreground text-xs px-2 py-1 border border-dashed border-border rounded">
              +{technologies.length - 4} mais
            </span>
          )}
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
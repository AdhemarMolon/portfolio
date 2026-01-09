// src/pages/Projects.tsx (MODIFICADO)

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, Github, Code2 } from 'lucide-react'; 
import ProjectCard from '@/components/ProjectCard';

// 1. Importar o hook de tradução
import { useTranslation } from 'react-i18next';

const Projects = () => {
  // 2. Inicializar o hook
  const { t } = useTranslation();
  
  const [searchTerm, setSearchTerm] = useState('');

  // 3. Os dados dos projetos agora usam chaves de tradução
  const projectsData = [
    {
      id: 1,
      titleKey: "meuVestibulinho.title",
      descriptionKey: "meuVestibulinho.description",
      technologies: ["Next.js", "TypeScript", "tRPC", "Prisma", "PostgreSQL", "Tailwind CSS", "NextAuth", "Zod"],
      githubUrl: "https://www.meuvestibulinho.com.br/",
      liveUrl: "https://www.meuvestibulinho.com.br/",
      category: "fullstack",
      lastUpdated: "2025-10",
      featured: true
    },
    {
      id: 2,
      titleKey: "dataMiningSocialStudy.title",
      descriptionKey: "dataMiningSocialStudy.description",
      technologies: ["Python", "Pandas", "Scikit-learn", "K-Means", "Decision Tree", "Matplotlib", "Seaborn"],
      githubUrl: "https://colab.research.google.com/drive/1O4FR0ELAICmz6zZul-MoZijEVyhlBvbD?usp=sharing",
      liveUrl: "https://colab.research.google.com/drive/1O4FR0ELAICmz6zZul-MoZijEVyhlBvbD?usp=sharing",
      category: "datascience",
      lastUpdated: "2025-09",
      featured: true
    },
    {
      id: 3,
      titleKey: "portfolio.title",
      descriptionKey: "portfolio.description",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Framer Motion"],
      githubUrl: "https://github.com/AdhemarMolon/portfolio",
      category: "web",
      lastUpdated: "2025-09"
    },
    {
      id: 4,
      titleKey: "databaseC.title",
      descriptionKey: "databaseC.description",
      technologies: ["C", "Estruturas de Dados", "Manipulação de Arquivos", "Algoritmos"],
      githubUrl: "https://github.com/AdhemarMolon/Banco-de-Dados-em-C",
      category: "low_level",
      lastUpdated: "2024-08"
    },
    {
      id: 5,
      titleKey: "discordBot.title",
      descriptionKey: "discordBot.description",
      technologies: ["Node.js", "Discord.js", "Gemini API"],
      githubUrl: "https://github.com/CorvusAI-ICMC/discord-bot-lesson/tree/Branch_with_API",
      liveUrl: "https://www.linkedin.com/feed/update/urn:li:activity:7255928128705884161/",
      category: "bot",
      lastUpdated: "2024-10"
    },
    {
      id: 6,
      titleKey: "biblioLinks.title",
      descriptionKey: "biblioLinks.description",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/AdhemarMolon/linktr.ee-vers-o-eu",
      liveUrl: "https://bibliotecapusp-sc.github.io/linktr.ee-vers-o-eu/",
      category: "web",
      lastUpdated: "2024-06"
    },
    {
      id: 7,
      titleKey: "carStore.title",
      descriptionKey: "carStore.description",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/AdhemarMolon/Loja-de-Carros",
      liveUrl: null,
      category: "fullstack",
      lastUpdated: "2025-08"
    },
    {
      id: 8,
      titleKey: "beaba.title",
      descriptionKey: "beaba.description",
      technologies: ["GitHub Pages"],
      githubUrl: "https://github.com/AdhemarMolon/be-a-ba?tab=readme-ov-file",
      liveUrl: "https://de-abreu.github.io/be-a-ba/docs/logica-combinacional/circuitos-para-operacoes-aritmeticas",
      category: "open-source",
      lastUpdated: "2024-07"
    },
    {
      id: 9,
      titleKey: "FakeChecker.title",
      descriptionKey: "FakeChecker.description",
      technologies: ["JavaScript", "OpenAI API", "Extensão de Navegador"],
      githubUrl: "https://github.com/AdhemarMolon/VerificadorDeFakeNews",
      liveUrl: null,
      category: "open-source",
      lastUpdated: "2024-10"
    }
  ];

  const filteredProjects = projectsData.filter(project => {
    const title = t(`projectsPage.projects.${project.titleKey}`);
    const description = t(`projectsPage.projects.${project.descriptionKey}`);
    
    const matchesSearch = title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesSearch;
  });

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-bold mb-4">
            {t('projectsPage.header.titlePart1')}{' '}
            <span className="text-primary">{t('projectsPage.header.titlePart2')}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            {t('projectsPage.header.subtitle')}
          </p>
        </div>

        {/* Search */}
        <div className="mb-8 slide-up">
          <div className="max-w-md mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                type="text"
                placeholder={t('projectsPage.search.placeholder')}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-3 bg-card/50 backdrop-blur-sm border-border/50 focus:border-primary transition-all duration-300"
              />
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 slide-up">
          {filteredProjects.map((project, index) => (
            <div key={project.id} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ProjectCard
                title={t(`projectsPage.projects.${project.titleKey}`)}
                description={t(`projectsPage.projects.${project.descriptionKey}`)}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl || undefined}
                category={project.category}
                lastUpdated={project.lastUpdated}
              />
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16 slide-up">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted/50 flex items-center justify-center">
              <Search className="text-muted-foreground" size={28} />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-foreground">{t('projectsPage.noResults.title')}</h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">{t('projectsPage.noResults.description')}</p>
            <Button 
              variant="outline" 
              onClick={() => { setSearchTerm(''); }}
              className="transition-all duration-300 hover:scale-105"
            >
              <Search size={16} className="mr-2" />
              {t('projectsPage.noResults.clearButton')}
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16 slide-up">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 border border-border/50">
            <Code2 className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h3 className="text-2xl font-bold mb-4">{t('projectsPage.cta.title')}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">{t('projectsPage.cta.description')}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="transition-all duration-300 hover:scale-105">
                <a href="https://github.com/AdhemarMolon" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={18} />
                  {t('projectsPage.cta.githubButton')}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
// src/pages/Resume.tsx (MODIFICADO)

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Download, GraduationCap, Briefcase, Code, Database, GitBranch, Palette, Wrench } from 'lucide-react';
import curriculoPDF from '@/assets/CurriculoAdhemar.pdf';

// 1. Importar o hook de tradução
import { useTranslation } from 'react-i18next';

const Resume = () => {
  // 2. Inicializar o hook
  const { t } = useTranslation();

  const personalInfo = {
    name: "Adhemar",
    age: 22,
    location: "São Carlos, SP",
    email: "adhemarmolon@usp.br",
    github: "github.com/AdhemarMolon",
    linkedin: "linkedin.com/in/adhemar-molon-neto-6b5647268/"
  };

  // 3. Os arrays agora usam chaves para buscar as traduções
  const educationKeys = ["csDegree", "logisticsDegree"];
  const experienceKeys = ["uspIntern"];
  const projectKeys = ["meuVestibulinho", "discordBot", "databaseC"];

  const skills = {
    frontend: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"],
    backend: ["Node.js", "Python", "Java", "C/C++", "Express.js", "PostgreSQL", "MongoDB", "tRPC", "Prisma"],
    concepts: ["POO", "Estruturas de Dados", "Arquitetura de Software", "Kanban", "Metodologias Ágeis", "Análise de Complexidade"],
    tools: ["Git", "GitHub", "Docker", "Vercel", "VS Code", "Figma", "Linux"]
  };

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-bold mb-4">
            {t('resumePage.header.titlePart1')}{' '}
            <span className="text-primary">{t('resumePage.header.titlePart2')}</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            {t('resumePage.header.subtitle')}
          </p>
          <Button size="lg" asChild className="hero-gradient glow-effect animate-pulse-glow">
            <a href={curriculoPDF} download="Adhemar-Molon-CV.pdf">
              <Download className="mr-2" size={20} />
              {t('resumePage.header.downloadButton')}
            </a>
          </Button>
        </div>

        {/* Personal Info */}
        <Card className="card-elegant mb-8 slide-up">
          <CardHeader>
            <CardTitle>
              {t('resumePage.personalInfo.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <p><strong>{t('resumePage.personalInfo.name')}:</strong> {personalInfo.name}</p>
              <p><strong>{t('resumePage.personalInfo.age')}:</strong> {personalInfo.age} {t('resumePage.personalInfo.years')}</p>
              <p><strong>{t('resumePage.personalInfo.location')}:</strong> {personalInfo.location}</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <strong>{t('resumePage.personalInfo.email')}:</strong>
                <Button variant="outline" size="sm" asChild className="h-7 transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <a href={`mailto:${personalInfo.email}`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                    Email
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <strong>{t('resumePage.personalInfo.github')}:</strong>
                <Button variant="outline" size="sm" asChild className="h-7 transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                    GitHub
                  </a>
                </Button>
              </div>
              <div className="flex items-center gap-2">
                <strong>{t('resumePage.personalInfo.linkedin')}:</strong>
                <Button variant="outline" size="sm" asChild className="h-7 transition-all duration-300 hover:scale-105 hover:shadow-md">
                  <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="card-elegant mb-8 slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="text-primary" size={24} />
              {t('resumePage.experience.title')}
            </CardTitle>
          </CardHeader>
          <CardContent>
            {experienceKeys.map((key, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold">{t(`resumePage.experience.${key}.role`)}</h3>
                <p className="text-primary font-medium">{t(`resumePage.experience.${key}.company`)}</p>
                <p className="text-sm text-muted-foreground">{t(`resumePage.experience.${key}.period`)}</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                  {/* Assumindo que temos 3 tarefas, podemos criar chaves para elas */}
                  <li>{t(`resumePage.experience.${key}.task1`)}</li>
                  <li>{t(`resumePage.experience.${key}.task2`)}</li>
                  <li>{t(`resumePage.experience.${key}.task3`)}</li>
                </ul>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Technical Projects */}
        <Card className="card-elegant mb-8 slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="text-primary" size={24} />
              {t('resumePage.projects.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {projectKeys.map((key, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold">{t(`resumePage.projects.${key}.title`)}</h3>
                <p className="text-muted-foreground">{t(`resumePage.projects.${key}.description`)}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {(
                    Array.isArray(t(`resumePage.projects.${key}.tags`, { returnObjects: true }))
                      ? (t(`resumePage.projects.${key}.tags`, { returnObjects: true }) as string[]).map((tag: string) => (
                          <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))
                      : null
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
        
        {/* Education */}
        <Card className="card-elegant mb-8 slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="text-primary" size={24} />
              {t('resumePage.education.title')}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {educationKeys.map((key, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">{t(`resumePage.education.${key}.degree`)}</h3>
                <p className="text-primary font-medium">{t(`resumePage.education.${key}.institution`)}</p>
                <p className="text-sm text-muted-foreground">{t(`resumePage.education.${key}.period`)}</p>
                <p className="text-muted-foreground">{t(`resumePage.education.${key}.description`)}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <div className="space-y-6 slide-up">
          <h2 className="text-2xl font-bold text-center">
            {t('resumePage.skills.titlePart1')}{' '}
            <span className="text-primary">{t('resumePage.skills.titlePart2')}</span>
          </h2>

          <Card className="card-elegant">
            <CardHeader><CardTitle className="flex items-center gap-2"><Palette className="text-blue-500" size={20} />{t('resumePage.skills.frontend')}</CardTitle></CardHeader>
            <CardContent><div className="flex flex-wrap gap-2">{skills.frontend.map(skill => <Badge key={skill} variant="secondary" className="bg-blue-500/10 text-blue-300 border-blue-500/20">{skill}</Badge>)}</div></CardContent>
          </Card>
          <Card className="card-elegant">
            <CardHeader><CardTitle className="flex items-center gap-2"><Database className="text-green-500" size={20} />{t('resumePage.skills.backend')}</CardTitle></CardHeader>
            <CardContent><div className="flex flex-wrap gap-2">{skills.backend.map(skill => <Badge key={skill} variant="secondary" className="bg-green-500/10 text-green-300 border-green-500/20">{skill}</Badge>)}</div></CardContent>
          </Card>
          <Card className="card-elegant">
            <CardHeader><CardTitle className="flex items-center gap-2"><Wrench className="text-yellow-500" size={20} />{t('resumePage.skills.concepts')}</CardTitle></CardHeader>
            <CardContent><div className="flex flex-wrap gap-2">{skills.concepts.map(skill => <Badge key={skill} variant="secondary" className="bg-yellow-500/10 text-yellow-300 border-yellow-500/20">{skill}</Badge>)}</div></CardContent>
          </Card>
          <Card className="card-elegant">
            <CardHeader><CardTitle className="flex items-center gap-2"><GitBranch className="text-orange-500" size={20} />{t('resumePage.skills.tools')}</CardTitle></CardHeader>
            <CardContent><div className="flex flex-wrap gap-2">{skills.tools.map(skill => <Badge key={skill} variant="secondary" className="bg-orange-500/10 text-orange-300 border-orange-500/20">{skill}</Badge>)}</div></CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 slide-up">
          <Separator className="mb-8" />
          <p className="text-muted-foreground mb-6">{t('resumePage.footer.cta')}</p>
          <Button size="lg" asChild className="hero-gradient">
            <a href={curriculoPDF} download="Adhemar-Molon-CV.pdf">
              <Download className="mr-2" size={20} />
              {t('resumePage.footer.downloadButton')}
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
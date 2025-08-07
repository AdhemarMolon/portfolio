// src/pages/Resume.tsx

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Download, 
  GraduationCap, 
  Briefcase, 
  Code, 
  Database, 
  GitBranch,
  Palette,
  Wrench
} from 'lucide-react';

// PASSO 1: Importe o seu CV como uma variável
import curriculoPDF from '@/assets/CurriculoAdhemar.pdf';

const Resume = () => {
  const personalInfo = {
    name: "Adhemar",
    age: 22,
    location: "São Carlos, SP",
    email: "adhemarmolon@usp.br",
    github: "github.com/AdhemarMolon", // Corrigido para ser um link completo
    linkedin: "linkedin.com/in/adhemar-molon-neto-6b5647268/" // Corrigido
  };

  //... (o restante dos seus dados continua igual)
  const education = [
    {
      degree: "Bacharelado em Ciências da Computação",
      institution: "Universidade de São Paulo (USP) - São Carlos",
      period: "2023 - Presente",
      description: "Foco em desenvolvimento web, machine learning, visão computacional e engenharia de software."
    },
    {
      degree: "Técnico em Logística",
      institution: "Instituto Federal de São Paulo (IFSP)",
      period: "2020 - 2022",
      description: "Curso técnico completo."
    }
  ];

  const experiences = [
    {
      role: "Estagiário de Desenvolvimento",
      company: "Biblioteca do IAU - USP São Carlos",
      period: "2024 - Presente",
      tasks: [
        "Manutenção e atualização do site institucional em WordPress, com foco em usabilidade e arquitetura da informação.",
        "Desenvolvimento de aplicações web internas com React, TypeScript e Tailwind CSS para melhorar a experiência do usuário.",
        "Análise quantitativa de métricas de desempenho digital para extrair padrões e apoiar a tomada de decisão."
      ]
    }
  ];

  const projects = [
     {
      title: "Loja de Carros Clássicos - Projeto Full Stack",
      description: "Aplicação web completa simulando uma loja de veículos, com cadastro, exibição e venda. O front-end foi feito em React com Vite e Tailwind CSS, e o back-end com Node.js e MongoDB para gerenciar estoque e autenticação.",
      tags: ["React", "Node.js", "MongoDB", "Tailwind CSS", "Full Stack"]
    },
    {
      title: "Bot com IA para Discord (Hackathon)",
      description: "Bot para Discord que interage com usuários usando a API do Gemini. A equipe ficou no pódio da competição da SEMCOMP/USP.",
      tags: ["Python", "Gemini API", "WebSockets", "Inteligência Artificial"]
    },
    {
      title: "Projeto ORCID - Engenharia de Software",
      description: "Aplicação web para organização e visualização de dados acadêmicos, baseada em requisitos de docentes da USP e utilizando a API pública do ORCID.",
      tags: ["Engenharia de Software", "API REST", "React", "Prototipação"]
    }
  ];

  const skills = {
    frontend: [
      "React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js"
    ],
    backend: [
      "Node.js", "Python", "Java", "C/C++", "Express.js", "PostgreSQL", "MongoDB", "NoSQL"
    ],
    concepts: [
       "POO", "Estruturas de Dados", "Arquitetura de Software", "Testes de Software", "Metodologias Ágeis", "Análise de Complexidade"
    ],
    tools: [
      "Git", "GitHub", "VS Code", "Figma", "Linux", "LaTeX"
    ]
  };
  
  // PASSO 2: A função handleDownloadCV não é mais necessária, podemos removê-la.

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-bold mb-4">
            Meu <span className="text-primary">Currículo</span>
          </h1>
          <p className="text-muted-foreground text-lg mb-8">
            Minha trajetória, projetos e competências no mundo do desenvolvimento.
          </p>
          {/* PASSO 3: Transformamos o botão em um link de download */}
          <Button 
            size="lg" 
            asChild // Importante: permite que o botão se comporte como seu filho (o link 'a')
            className="hero-gradient glow-effect animate-pulse-glow"
          >
            <a href={curriculoPDF} download="Adhemar-Molon-CV.pdf">
              <Download className="mr-2" size={20} />
              Download CV (PDF)
            </a>
          </Button>
        </div>

        {/* ... (o restante do seu JSX continua exatamente igual, não precisa mudar nada) ... */}
        {/* Personal Info */}
        <Card className="card-elegant mb-8 slide-up">
          <CardHeader>
             <CardTitle className="flex items-center gap-2">
              <div className="w-8 h-8 hero-gradient rounded-lg flex items-center justify-center">
                <span className="text-sm font-bold text-primary-foreground">A</span>
              </div>
              Informações Pessoais
            </CardTitle>
          </CardHeader>
          <CardContent className="grid md:grid-cols-2 gap-4">
            <div>
              <p><strong>Nome:</strong> {personalInfo.name}</p>
              <p><strong>Idade:</strong> {personalInfo.age} anos</p>
              <p><strong>Localização:</strong> {personalInfo.location}</p>
            </div>
            <div>
              <p><strong>Email:</strong> {personalInfo.email}</p>
              <p><strong>GitHub:</strong> <a href={`https://${personalInfo.github}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{personalInfo.github}</a></p>
              <p><strong>LinkedIn:</strong> <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{personalInfo.linkedin}</a></p>
            </div>
          </CardContent>
        </Card>

        {/* Experience */}
        <Card className="card-elegant mb-8 slide-up">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Briefcase className="text-primary" size={24} />
              Experiência Profissional
            </CardTitle>
          </CardHeader>
          <CardContent>
            {experiences.map((exp, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold">{exp.role}</h3>
                <p className="text-primary font-medium">{exp.company}</p>
                <p className="text-sm text-muted-foreground">{exp.period}</p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                  {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
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
              Projetos Técnicos
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {projects.map((proj, index) => (
              <div key={index} className="space-y-2">
                <h3 className="text-lg font-semibold">{proj.title}</h3>
                <p className="text-muted-foreground">{proj.description}</p>
                <div className="flex flex-wrap gap-2 pt-1">
                  {proj.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
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
              Formação Acadêmica
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {education.map((edu, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold">{edu.degree}</h3>
                <p className="text-primary font-medium">{edu.institution}</p>
                <p className="text-sm text-muted-foreground">{edu.period}</p>
                <p className="text-muted-foreground">{edu.description}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Skills */}
        <div className="space-y-6 slide-up">
          <h2 className="text-2xl font-bold text-center">
            Habilidades <span className="text-primary">Técnicas</span>
          </h2>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Palette className="text-blue-500" size={20} />Frontend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map(skill => <Badge key={skill} variant="secondary" className="bg-blue-500/10 text-blue-300 border-blue-500/20">{skill}</Badge>)}
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Database className="text-green-500" size={20} />Backend</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map(skill => <Badge key={skill} variant="secondary" className="bg-green-500/10 text-green-300 border-green-500/20">{skill}</Badge>)}
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><Wrench className="text-yellow-500" size={20} />Conceitos e Metodologias</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.concepts.map(skill => <Badge key={skill} variant="secondary" className="bg-yellow-500/10 text-yellow-300 border-yellow-500/20">{skill}</Badge>)}
              </div>
            </CardContent>
          </Card>

          <Card className="card-elegant">
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><GitBranch className="text-orange-500" size={20} />Ferramentas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map(skill => <Badge key={skill} variant="secondary" className="bg-orange-500/10 text-orange-300 border-orange-500/20">{skill}</Badge>)}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12 slide-up">
          <Separator className="mb-8" />
          <p className="text-muted-foreground mb-6">
            Curtiu o que viu? Vamos criar algo incrível juntos!
          </p>
          <Button 
            size="lg" 
            asChild
            className="hero-gradient"
          >
            <a href={curriculoPDF} download="Adhemar-Molon-CV.pdf">
              <Download className="mr-2" size={20} />
              Baixar CV (PDF)
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Resume;
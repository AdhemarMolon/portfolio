import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
// Ícones atualizados para refletir as novas especialidades
import { HardHat, Cpu, Code2, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [typewriterText, setTypewriterText] = useState('');
  // Texto do typewriter atualizado para "Cientista da Computação"
  const fullText = "Cientista da Computação";

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setTypewriterText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  // Seção de especialidades completamente reformulada
  const skills = [
    {
      icon: HardHat,
      title: "Engenharia de Software",
      description: "Design, arquitetura, testes e metodologias ( com foco nas ágeis ) para construir soluções robustas e escaláveis.",
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Code2,
      title: "Desenvolvimento e Algoritmos",
      description: "Foco em estruturas de dados, complexidade e na constante resolução de problemas relacionados a programação competitiva.",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Cpu,
      title: "Desenvolvimento Web",
      description: "Interesse em tecnologias web, frameworks modernos, desenvolvimento full-stack e implementação de APIs.",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          {/* TODO: Área para foto de perfil */}
            <div className="relative w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl glow-effect border-4 border-white/30">
            <img
              src="/imagens/AdhemarFoto.jpeg"
              alt="Adhemar"
              className="w-full h-full rounded-full object-cover transition-transform duration-300 hover:scale-105"
            />
            </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            Olá, eu sou{' '}
            <span className="hero-gradient bg-clip-text text-transparent">
              Adhemar
            </span>
          </h1>

          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              <span className="typewriter inline-block">{typewriterText}</span>
            </h2>
          </div>

          {/* Descrição principal atualizada */}
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 slide-up">
            Estudante na Universidade de São Paulo (USP), movido por desafios técnicos e pela paixão de transformar ideias em software,
            sempre buscando aprender e inovar. Aqui está um pouco do meu portfólio e habilidades.
          </p>

          

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 slide-up">
            <Button size="lg" className="hero-gradient glow-effect" asChild>
              <Link to="/projects">
                Ver Projetos
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-secondary" asChild>
              <Link to="/resume">
                Baixar CV
              </Link>
            </Button>
          </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 slide-up">
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary"
              asChild
            >
              <a
              href="https://github.com/AdhemarMolon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              >
              <Github size={20} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary"
              asChild
            >
              <a
              href="https://www.linkedin.com/in/adhemar-molon-neto-6b5647268/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              >
              <Linkedin size={20} />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="hover:text-primary"
              asChild
            >
              <a
              href="mailto:adhemarmolon@usp.br"
              aria-label="Email"
              >
              <Mail size={20} />
              </a>
            </Button>
            </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 fade-in">
            Minhas <span className="text-primary">Áreas de Foco</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card 
                  key={skill.title} 
                  className={`card-elegant interactive-card fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                      <IconComponent size={32} className="text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3">{skill.title}</h4>
                    <p className="text-muted-foreground">{skill.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 fade-in">
            Sobre <span className="text-primary">Mim</span>
          </h3>
          {/* Texto "Sobre Mim" atualizado */}
          <p className="text-lg text-muted-foreground mb-8 slide-up">
            Curioso por natureza, com um espírito inquieto para criar, testar e melhorar. Minha jornada na 
            computação na USP é complementada pela disciplina da academia, sempre buscando o próximo desafio.
          </p>
          <Button variant="outline" size="lg" asChild className="slide-up">
            <Link to="/extras">
              Saiba Mais
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
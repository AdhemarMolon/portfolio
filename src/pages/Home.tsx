// src/pages/Home.tsx

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HardHat, Cpu, Code2, ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import fotoPerfil from '@/assets/AdhemarFoto.jpeg';

// 1. Importe o hook de tradução
import { useTranslation } from 'react-i18next';

const Home = () => {
  // 2. Inicialize o hook para ter acesso à função 't'
  const { t } = useTranslation();
  
  const [typewriterText, setTypewriterText] = useState('');
  
  // O texto do typewriter agora vem do arquivo de tradução
  const fullText = t('home.jobTitle');

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
  }, [fullText]); // Adicionado fullText como dependência do useEffect

  // 3. O array de skills agora contém apenas as chaves para a tradução
  const skills = [
    {
      icon: HardHat,
      key: "softwareEngineering", // Chave para buscar o título e a descrição
      color: "from-blue-500/20 to-cyan-500/20"
    },
    {
      icon: Code2,
      key: "algorithms",
      color: "from-green-500/20 to-emerald-500/20"
    },
    {
      icon: Cpu,
      key: "webDev",
      color: "from-purple-500/20 to-pink-500/20"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-6xl mx-auto text-center">
            <div className="relative w-36 h-36 mx-auto mb-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-xl glow-effect border-4 border-white/30">
            <img
              src={fotoPerfil}
              alt={t('home.profileAlt')} // Alt text traduzido
              className="w-full h-full rounded-full object-cover transition-transform duration-300 hover:scale-105"
            />
            </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 fade-in">
            {t('home.greetingPart1')}{' '}
            <span className="hero-gradient bg-clip-text text-transparent">
              Adhemar
            </span>
          </h1>

          <div className="h-16 mb-8 flex items-center justify-center">
            <h2 className="text-2xl md:text-3xl text-muted-foreground">
              <span className="typewriter inline-block">{typewriterText}</span>
            </h2>
          </div>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12 slide-up">
            {t('home.introParagraph')}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 slide-up">
            <Button size="lg" className="hero-gradient glow-effect" asChild>
              <Link to="/projects">
                {t('home.viewProjectsButton')}
                <ArrowRight className="ml-2" size={20} />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="hover:bg-secondary" asChild>
              <Link to="/resume">
                {t('home.downloadCVButton')}
              </Link>
            </Button>
          </div>

            <div className="flex justify-center gap-6 slide-up">
            <Button variant="ghost" size="sm" className="hover:text-primary" asChild>
              <a href="https://github.com/AdhemarMolon" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary" asChild>
              <a href="https://www.linkedin.com/in/adhemar-molon-neto-6b5647268/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </Button>
            <Button variant="ghost" size="sm" className="hover:text-primary" asChild>
              <a href="mailto:adhemarmolon@usp.br" aria-label="Email">
                <Mail size={20} />
              </a>
            </Button>
            </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12 fade-in">
            {t('home.focusAreasTitlePart1')}{' '}
            <span className="text-primary">{t('home.focusAreasTitlePart2')}</span>
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <Card 
                  key={skill.key} 
                  className={`card-elegant interactive-card fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8 text-center">
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center`}>
                      <IconComponent size={32} className="text-primary" />
                    </div>
                    {/* 4. Buscando título e descrição com base na chave */}
                    <h4 className="text-xl font-bold mb-3">{t(`home.skills.${skill.key}.title`)}</h4>
                    <p className="text-muted-foreground">{t(`home.skills.${skill.key}.description`)}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8 fade-in">
            {t('home.aboutMeTitlePart1')}{' '}
            <span className="text-primary">{t('home.aboutMeTitlePart2')}</span>
          </h3>
          <p className="text-lg text-muted-foreground mb-8 slide-up">
            {t('home.aboutMeParagraph')}
          </p>
          <Button variant="outline" size="lg" asChild className="slide-up">
            <Link to="/extras">
              {t('home.learnMoreButton')}
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
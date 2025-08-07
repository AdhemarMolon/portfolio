import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Dumbbell,  
  Trophy,
  CheckCircle,
  Clock,
  Tv
} from 'lucide-react';

const Extras = () => {

  const hobbies = [
    {
      icon: Dumbbell,
      title: "Academia",
      description: "Pratico musculação regularmente, focando em força e bem-estar físico.",
      color: "from-red-500/20 to-orange-500/20"
    },
    {
      icon: Trophy,
      title: "LeetCode",
      description: "Resolvo exercícios do LeetCode para aprimorar minhas habilidades em algoritmos e lógica de programação.",
      color: "from-yellow-500/20 to-amber-500/20"
    },
    {
      icon: Tv, 
      title: "Futebol",
      description: "Gosto de jogar e assistir futebol, acompanhando campeonatos e partidas sempre que possível.",
      color: "from-blue-500/20 to-cyan-500/20"
    }
  ];
  const certifications = [
    {
      title: "Bacharelado em Ciência da Computação",
      provider: "Universidade de São Paulo (USP)",
      date: "2024 - atual",
      status: "in-progress"
    },
    {
      title: "Técnico em Logística",
      provider: "Instituto Federal de São Paulo (IFSP)",
      date: "2022",
      status: "completed"
    }
  ];


  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-bold mb-4">
            Um Pouco <span className="text-primary">Mais</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Além do código: meus interesses, certificações e como entrar em contato comigo.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Hobbies & Certifications */}
          <div className="space-y-8">
            {/* Hobbies Section */}
            <div className="slide-up">
              <h2 className="text-2xl font-bold mb-6">
                Meus <span className="text-primary">Interesses</span>
              </h2>
              
              <div className="space-y-6">
                {hobbies.map((hobby, index) => {
                  const IconComponent = hobby.icon;
                  return (
                    <Card 
                      key={hobby.title} 
                      className="card-elegant"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${hobby.color} flex items-center justify-center flex-shrink-0`}>
                            <IconComponent size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold mb-2">{hobby.title}</h3>
                            <p className="text-muted-foreground">{hobby.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="slide-up">
              <h2 className="text-2xl font-bold mb-6">
                <span className="text-primary">Certificações</span> & Cursos
              </h2>
              
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                        <div className="flex-1">
                          <h4 className="font-semibold">{cert.title}</h4>
                          <p className="text-sm text-muted-foreground">{cert.provider}</p>
                          <p className="text-xs text-muted-foreground mt-1">{cert.date}</p>
                        </div>
                        <div className="flex items-center">
                          {cert.status === 'completed' ? (
                            <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                              <CheckCircle size={14} className="mr-1" />
                              Concluído
                            </Badge>
                          ) : (
                            <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20">
                              <Clock size={14} className="mr-1" />
                              Em Progresso
                            </Badge>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="slide-up">
            <h2 className="text-2xl font-bold mb-6">
              Entre em <span className="text-primary">Contato</span>
            </h2>

            {/* Contact Info */}
            <Card className="card-elegant mb-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-primary" size={20} />
                    <span>adhemarmolon@usp.br</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-primary" size={20} />
                    <span>+55 (11) 91023-2912</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-primary" size={20} />
                    <span>São Carlos, SP - Brasil</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hackathon Showcase */}
            <Card className="card-elegant">
              <CardHeader>
              <CardTitle>Hackathons em Destaque</CardTitle>
              </CardHeader>
              <CardContent>
              <div className="space-y-6">
                {/* Hackathon Riot Games & b1ld */}
                <div className="p-4 rounded-lg bg-muted/30 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex-shrink-0">
                  <Badge className="bg-orange-500/10 text-orange-500 border-orange-500/20 mb-2 md:mb-0">
                  3º Lugar
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">Hackathon Riot Games & b1ld</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                  Conquistei o <b>3º lugar</b> desenvolvendo, junto à minha equipe, um <b>bot de Discord com IA</b> para engajar comunidades de gaming. A solução utilizou <b>Gemini</b> para processamento de linguagem natural e integração com <b>APIs ChallengerMode</b> para gerenciamento de torneios. 
                  </p>
                </div>
                </div>
                {/* 1º Hackathon da Receita Federal */}
                <div className="p-4 rounded-lg bg-muted/30 flex flex-col md:flex-row items-start md:items-center gap-4">
                <div className="flex-shrink-0">
                  <Badge className="bg-green-500/10 text-green-500 border-green-500/20 mb-2 md:mb-0">
                  Premiado
                  </Badge>
                </div>
                <div>
                  <h4 className="font-semibold text-lg">1º Hackathon da Receita Federal</h4>
                  <p className="text-muted-foreground text-sm mt-1">
                  Premiação recebida em um evento de grande porte, com <b>+2.000 participantes</b> e cerca de <b>400 projetos</b> inscritos, distribuídos em <b>6 polos pelo Brasil</b>. Nosso projeto focou em <b>sustentabilidade</b> e <b>impacto social</b>, propondo soluções inovadoras para desafios reais da Receita Federal.
                  </p>
                </div>
                </div>
              </div>
              </CardContent>
            </Card>


          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 pt-8 border-t border-border text-center slide-up">
          <Separator className="mb-8" />
          <h3 className="text-xl font-bold mb-4">
            Vamos Construir Algo <span className="text-primary">Incrível</span> Juntos!
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Estou sempre aberto a novos desafios e oportunidades de colaboração. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extras;
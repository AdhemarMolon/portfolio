// src/pages/Extras.tsx (MODIFICADO)

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Dumbbell,  
  Trophy,
  CheckCircle,
  Clock,
  Tv,
  ExternalLink
} from 'lucide-react';

// 1. Importar o hook de tradução
import { useTranslation } from 'react-i18next';

const Extras = () => {
  // 2. Inicializar o hook
  const { t } = useTranslation();

  // 3. Os arrays agora contêm chaves para buscar as traduções
  const hobbies = [
    {
      icon: Dumbbell,
      key: "gym",
      color: "from-red-500/20 to-orange-500/20",
      link: null
    },
    {
      icon: Trophy,
      key: "leetcode",
      color: "from-yellow-500/20 to-amber-500/20",
      link: "https://drive.google.com/drive/folders/18ssN9WFkBgK51ES9hN8DnNVOhZ4lLw3n?usp=sharing"
    },
    {
      icon: Tv, 
      key: "soccer",
      color: "from-blue-500/20 to-cyan-500/20",
      link: null
    }
  ];

  const certifications = [
    {
      key: "csDegree",
      status: "in-progress"
    },
    {
      key: "logisticsDegree",
      status: "completed"
    }
  ];

  const hackathons = [
    {
      key: "riot",
      badgeKey: "thirdPlace"
    },
    {
      key: "receitaFederal",
      badgeKey: "awarded"
    },
    {
      key: "Raia",
      badgeKey: "participant"
    }

  ];

  return (
    <div className="min-h-screen bg-background pt-24 pb-12 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 fade-in">
          <h1 className="text-4xl font-bold mb-4">
            {t('extrasPage.header.titlePart1')}{' '}
            <span className="text-primary">{t('extrasPage.header.titlePart2')}</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            {t('extrasPage.header.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Hobbies & Certifications */}
          <div className="space-y-8">
            {/* Hobbies Section */}
            <div className="slide-up">
              <h2 className="text-2xl font-bold mb-6">
                {t('extrasPage.hobbies.titlePart1')}{' '}
                <span className="text-primary">{t('extrasPage.hobbies.titlePart2')}</span>
              </h2>
              <div className="space-y-6">
                {hobbies.map((hobby, index) => {
                  const IconComponent = hobby.icon;
                  return (
                    <Card key={hobby.key} className="card-elegant" style={{ animationDelay: `${index * 0.1}s` }}>
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${hobby.color} flex items-center justify-center flex-shrink-0`}>
                            <IconComponent size={24} className="text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{t(`extrasPage.hobbies.${hobby.key}.title`)}</h3>
                            <p className="text-muted-foreground">{t(`extrasPage.hobbies.${hobby.key}.description`)}</p>
                            {hobby.link && (
                              <Button variant="outline" size="sm" asChild className="mt-3 transition-all duration-300 hover:scale-105">
                                <a href={hobby.link} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink size={14} className="mr-2" />
                                  {t(`extrasPage.hobbies.${hobby.key}.linkText`) || 'Ver vídeos'}
                                </a>
                              </Button>
                            )}
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
                <span className="text-primary">{t('extrasPage.certifications.titlePart1')}</span>
                {t('extrasPage.certifications.titlePart2')}
              </h2>
              <Card className="card-elegant">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    {certifications.map((cert, index) => (
                      <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                        <div className="flex-1">
                          <h4 className="font-semibold">{t(`extrasPage.certifications.${cert.key}.title`)}</h4>
                          <p className="text-sm text-muted-foreground">{t(`extrasPage.certifications.${cert.key}.provider`)}</p>
                          <p className="text-xs text-muted-foreground mt-1">{t(`extrasPage.certifications.${cert.key}.date`)}</p>
                        </div>
                        <div className="flex items-center">
                          {cert.status === 'completed' ? (
                            <Badge className="bg-green-500/10 text-green-400 border-green-500/20">
                              <CheckCircle size={14} className="mr-1" />
                              {t('extrasPage.certifications.completed')}
                            </Badge>
                          ) : (
                            <Badge className="bg-yellow-500/10 text-yellow-400 border-yellow-500/20">
                              <Clock size={14} className="mr-1" />
                              {t('extrasPage.certifications.inProgress')}
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
              {t('extrasPage.contact.titlePart1')}{' '}
              <span className="text-primary">{t('extrasPage.contact.titlePart2')}</span>
            </h2>

            {/* Contact Info */}
            <Card className="card-elegant mb-8">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3"><Mail className="text-primary" size={20} /><span>adhemarmolon@usp.br</span></div>
                  <div className="flex items-center space-x-3"><Phone className="text-primary" size={20} /><span>+55 (11) 91023-2912</span></div>
                  <div className="flex items-center space-x-3"><MapPin className="text-primary" size={20} /><span>{t('extrasPage.contact.location')}</span></div>
                </div>
              </CardContent>
            </Card>

            {/* Hackathon Showcase */}
            <Card className="card-elegant">
              <CardHeader><CardTitle>{t('extrasPage.hackathons.title')}</CardTitle></CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {hackathons.map((hackathon) => (
                    <div key={hackathon.key} className="p-4 rounded-lg bg-muted/30 flex flex-col md:flex-row items-start md:items-center gap-4">
                      <div className="flex-shrink-0">
                        <Badge className={`${hackathon.key === 'riot' ? 'bg-orange-500/10 text-orange-500 border-orange-500/20' : 'bg-green-500/10 text-green-500 border-green-500/20'} mb-2 md:mb-0`}>
                          {t(`extrasPage.hackathons.${hackathon.key}.badge`)}
                        </Badge>
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">{t(`extrasPage.hackathons.${hackathon.key}.title`)}</h4>
                        <p className="text-muted-foreground text-sm mt-1" dangerouslySetInnerHTML={{ __html: t(`extrasPage.hackathons.${hackathon.key}.description`) }} />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Section */}
        <div className="mt-16 pt-8 border-t border-border text-center slide-up">
          <Separator className="mb-8" />
          <h3 className="text-xl font-bold mb-4">
            {t('extrasPage.footer.titlePart1')}{' '}
            <span className="text-primary">{t('extrasPage.footer.titlePart2')}</span>
            {t('extrasPage.footer.titlePart3')}
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t('extrasPage.footer.subtitle')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Extras;
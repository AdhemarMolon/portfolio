// src/components/LanguageSwitcher.tsx

import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button'; // Reutilizando seu componente de botão

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  // Função para mudar o idioma, chamada pelo onClick dos botões
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center space-x-1">
      <Button 
        variant={i18n.language === 'pt' ? 'secondary' : 'ghost'} 
        size="sm"
        onClick={() => changeLanguage('pt')}
      >
        PT
      </Button>
      <Button 
        variant={i18n.language === 'en' ? 'secondary' : 'ghost'} 
        size="sm"
        onClick={() => changeLanguage('en')}
      >
        EN
      </Button>
      <Button 
        variant={i18n.language === 'es' ? 'secondary' : 'ghost'} 
        size="sm"
        onClick={() => changeLanguage('es')}
      >
        ES
      </Button>
    </div>
  );
};

export default LanguageSwitcher;
// src/i18n.ts

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importe seus arquivos de tradução que você acabou de criar
import ptTranslation from '../src/locales/pt/translation.json';
import enTranslation from '../src/locales/en/translation.json';
import esTranslation from '../src/locales/es/translation.json';

// A configuração em si
i18n
  .use(initReactI18next) // Passa a instância do i18n para o react-i18next
  .init({
    // Seus recursos (traduções)
    resources: {
      pt: { translation: ptTranslation },
      en: { translation: enTranslation },
      es: { translation: esTranslation }
    },
    lng: 'pt', // Define o idioma padrão
    fallbackLng: 'pt', // Usa 'pt' se o idioma detectado não tiver uma tradução
    interpolation: {
      escapeValue: false // O React já faz a proteção contra XSS
    }
  });

export default i18n;
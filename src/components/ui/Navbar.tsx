// src/components/Navbar.tsx (MODIFICADO)

import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, Home, User, FolderOpen, Star } from 'lucide-react';

// 1. Importe o hook de tradução e o novo componente
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '@/components/LanguageSwitcher'; // Certifique-se que o caminho está correto

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  // 2. Inicialize o hook
  const { t } = useTranslation();

  // 3. Altere o array de navegação para usar chaves de tradução
  const navigation = [
    { key: 'nav.home', href: '/', icon: Home },
    { key: 'nav.resume', href: '/resume', icon: User },
    { key: 'nav.projects', href: '/projects', icon: FolderOpen },
    { key: 'nav.extras', href: '/extras', icon: Star },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
              <span className="text-lg font-bold text-primary-foreground">A</span>
            </div>
            <span className="text-xl font-bold text-foreground">Adhemar</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navigation.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link
                  key={item.key}
                  to={item.href}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 hover:bg-secondary/50 ${
                    isActive(item.href)
                      ? 'text-primary bg-secondary'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  <IconComponent size={18} />
                  {/* 4. Use a função t() para traduzir o nome do link */}
                  <span className="font-medium">{t(item.key)}</span>
                </Link>
              );
            })}
            {/* 5. Adicione o seletor de idioma na versão desktop */}
            <div className="pl-4">
              <LanguageSwitcher />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-card/95 backdrop-blur-md rounded-lg mt-2 mb-4 border border-border">
              {navigation.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.key}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive(item.href)
                        ? 'text-primary bg-secondary'
                        : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                    }`}
                  >
                    <IconComponent size={20} />
                    <span className="font-medium">{t(item.key)}</span>
                  </Link>
                );
              })}
               {/* 6. Adicione o seletor de idioma na versão mobile */}
              <div className="flex justify-center pt-4 pb-2">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
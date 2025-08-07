// src/components/Layout.tsx

import { Outlet } from 'react-router-dom';
// Se você ainda não criou o Navbar.tsx, pode comentar a linha abaixo por enquanto
// import Navbar from './Navbar'; 
import { Toaster as Sonner } from '@/components/ui/sonner';

const Layout = () => {
  return (
    <>
      {/* <Navbar /> */}
      <main>
        {/* O conteúdo das suas páginas (Home, Resume, etc.) será renderizado aqui */}
        <Outlet />
      </main>
      <Sonner /> {/* O Layout é um ótimo lugar para colocar o Sonner */}
      {/* <Footer /> Você pode adicionar um rodapé aqui no futuro */}
    </>
  );
};

export default Layout;
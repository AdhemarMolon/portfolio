// src/components/ui/Layout.tsx

import { Outlet } from 'react-router-dom';
// A linha abaixo agora está ATIVADA
import Navbar from './Navbar'; 
import { Toaster as Sonner } from '@/components/ui/sonner';

const Layout = () => {
  return (
    <>
      {/* O componente agora está ATIVADO */}
      <Navbar /> 
      <main>
        <Outlet />
      </main>
      <Sonner />
    </>
  );
};

export default Layout;
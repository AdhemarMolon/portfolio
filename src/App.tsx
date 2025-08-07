// src/App.tsx

import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 1. IMPORTAR O LAYOUT (estava faltando)
import Layout from "./components/Layout"; // Certifique-se que você criou este arquivo e o caminho está correto

import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Projects from "./pages/Projects";
import Extras from "./pages/Extras";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <BrowserRouter>
        <Routes>
          {/* 2. ROTA PAI COM O ELEMENTO LAYOUT (estava faltando) */}
          <Route path="/" element={<Layout />}>
            {/* Rotas filhas que serão renderizadas dentro do <Outlet /> */}
            <Route index element={<Home />} />
            <Route path="resume" element={<Resume />} />
            <Route path="projects" element={<Projects />} />
            <Route path="extras" element={<Extras />} />
          </Route> {/* <- Este fechamento agora tem uma abertura correspondente */}

          {/* Rota de "Não encontrado" continua separada */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
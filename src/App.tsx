import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Login from "./pages/Login.tsx";
import Cadastro from "./pages/Cadastro.tsx";
import Assessment from "./pages/Assessment.tsx";
import Result from "./pages/Result.tsx";
import UserDashboard from "./pages/UserDashboard.tsx";
import EnterpriseDashboard from "./pages/EnterpriseDashboard.tsx";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import AboutAdemir from "./pages/AboutAdemir.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/avaliacao" element={<Assessment />} />
          <Route path="/resultado" element={<Result />} />
          <Route path="/usuario" element={<UserDashboard />} />
          <Route path="/empresa" element={<EnterpriseDashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/sobre" element={<AboutAdemir />} />
          <Route path="/ademir-soares" element={<AboutAdemir />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

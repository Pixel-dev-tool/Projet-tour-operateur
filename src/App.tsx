import { BrowserRouter, Routes, Route } from "react-router-dom";
import type { ReactNode } from "react";  // ← Import pour typer children
import Header from "@/components/Header";
import Home from "@/pages/Home";

// Interface pour typer les props du Layout
interface LayoutProps {
  children: ReactNode;
}

// Layout avec Header typé correctement
function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-dvh flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
    </div>
  );
}

// AuthLayout aussi typé (décommenté et typé)
interface AuthLayoutProps {
  children: ReactNode;
}

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="min-h-dvh">
      <main>{children}</main>
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Routes avec Layout complet */}
        <Route path="/" element={<Layout><Home /></Layout>} />
        
        {/* Routes d'authentification SANS Header */}
        <Route path="/login" element={
          <AuthLayout>
            <div>Page de login à créer</div>
          </AuthLayout>
        } />
        <Route path="/signup" element={
          <AuthLayout>
            <div>Page d'inscription à créer</div>
          </AuthLayout>
        } />
      </Routes>
    </BrowserRouter>
  );
}
import { lazy, Suspense, useEffect } from "react";
import { Route, Switch } from "wouter";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";
import Home from "./pages/Home";

const Projects = lazy(() => import("./pages/Projects"));
const ProjectDetail = lazy(() => import("./pages/ProjectDetail"));
const QuienesSomos = lazy(() => import("./pages/QuienesSomos"));
const Atelier = lazy(() => import("./pages/Atelier"));

export default function App() {
  useEffect(() => {
    document.documentElement.dataset.surface = "minimal";
  }, []);

  return (
    <div className="min-h-screen relative transition-colors duration-300">
      {/* Vertical container lines */}
      <div className="fixed inset-0 pointer-events-none z-0 flex justify-center w-full hidden md:flex">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full border-x border-border/40 dark:border-dark-border/40" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Header />
        <Suspense>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/proyectos" component={Projects} />
            <Route path="/proyectos/:slug" component={ProjectDetail} />
            <Route path="/quienes-somos" component={QuienesSomos} />
            <Route path="/atelier" component={Atelier} />
          </Switch>
        </Suspense>
      </div>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

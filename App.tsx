// Importamos las librerías y componentes necesarios para el enrutamiento
import { Switch, Route } from "wouter"; // Sistema de rutas para SPA
import { queryClient } from "./lib/queryClient"; // Cliente de React Query
import { QueryClientProvider } from "@tanstack/react-query"; // Proveedor de React Query
import { Toaster } from "@/components/ui/toaster"; // Componente para notificaciones toast
import { TooltipProvider } from "@/components/ui/tooltip"; // Proveedor de tooltips
import Home from "@/pages/home"; // Página principal
import NotFound from "@/pages/not-found"; // Página 404

// Componente que maneja las rutas de la aplicación
function Router() {
  return (
    <Switch>
      {/* Ruta principal que renderiza la página Home */}
      <Route path="/" component={Home} />
      {/* Ruta por defecto para páginas no encontradas (404) */}
      <Route component={NotFound} />
    </Switch>
  );
}

// Componente principal de la aplicación
function App() {
  return (
    // Proveedor de React Query para el manejo de estado y cache de datos
    <QueryClientProvider client={queryClient}>
      {/* Proveedor de tooltips para toda la aplicación */}
      <TooltipProvider>
        {/* Componente que muestra notificaciones tipo toast */}
        <Toaster />
        {/* Renderiza las rutas de la aplicación */}
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

// Exporta el componente principal
export default App;

// Importamos todos los componentes de la página principal
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Objectives from "@/components/Objectives";
import Activities from "@/components/Activities";
import Blog from "@/components/Blog";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Componente principal de la página de inicio
export default function Home() {
  return (
    // Contenedor principal con altura mínima de pantalla completa
    <div className="min-h-screen">
      {/* Barra de navegación fija en la parte superior */}
      <Navbar />
      
      {/* Contenido principal de la página */}
      <main>
        {/* Sección Hero (primera pantalla) */}
        <Hero />
        
        {/* Sección Quiénes Somos */}
        <About />
        
        {/* Sección Objetivos */}
        <Objectives />
        
        {/* Sección Actividades */}
        <Activities />
        
        {/* Sección Blog/Noticias */}
        <Blog />
        
        {/* Sección Galería de Imágenes */}
        <Gallery />
        
        {/* Sección Contacto */}
        <Contact />
      </main>
      
      {/* Footer (pie de página) */}
      <Footer />
    </div>
  );
}

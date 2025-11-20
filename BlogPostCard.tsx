import BlogPostCard from "../BlogPostCard";
import blogImage from "@assets/generated_images/educational_games_moment_05bbf346.png";

export default function BlogPostCardExample() {
  return (
    <BlogPostCard
      image={blogImage}
      title="Preparándonos para la Gran Feria"
      excerpt="Conoce cómo nuestros estudiantes están trabajando en equipo para crear proyectos innovadores que presentarán en la feria."
      author="María González"
      date="15 de Enero, 2025"
      index={0}
    />
  );
}

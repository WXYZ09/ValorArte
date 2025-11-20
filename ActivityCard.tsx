import ActivityCard from "../ActivityCard";
import activityImage from "@assets/generated_images/science_project_activity_b2e7afe8.png";

export default function ActivityCardExample() {
  return (
    <ActivityCard
      image={activityImage}
      title="Feria de Ciencias"
      description="Proyectos innovadores de física, química y biología presentados por estudiantes apasionados."
      category="Ciencia"
      index={0}
    />
  );
}

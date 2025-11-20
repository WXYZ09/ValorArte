import ObjectiveCard from "../ObjectiveCard";
import { Lightbulb } from "lucide-react";

export default function ObjectiveCardExample() {
  return (
    <ObjectiveCard
      icon={Lightbulb}
      title="Fomentar la Creatividad"
      description="Crear espacios donde los estudiantes puedan expresar sus ideas y talentos de manera libre y creativa."
      index={0}
    />
  );
}

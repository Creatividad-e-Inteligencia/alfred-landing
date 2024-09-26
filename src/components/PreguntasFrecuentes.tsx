import Accordion from "@/components/AccordionPreguntasFrecuentes";
import contenido from "@/content/preguntas-frecuentes.tsx";

export default function Contenido() {
  return (
    <div className="prose sm:text-base max-w-5xl mx-auto py-8 px-4">
      <Accordion contenido={contenido} />
    </div>
  );
}

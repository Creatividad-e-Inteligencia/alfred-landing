import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import HolaSoyAlfred from "./HolaSoyAlfred";
import ComoInvitar from "./ComoInvitar";
import PoliticasPrivacidad from "./PoliticasPrivacidad";
import PreguntasFrecuentes from "./PreguntasFrecuentes";
import Conocimiento from "./Conocimiento";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="mb-6 pb-2">
        <AccordionTrigger className="relative">
          Hola, soy Alfred!
        </AccordionTrigger>
        <AccordionContent>
          <HolaSoyAlfred />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="mb-6 pb-2">
        <AccordionTrigger className="relative">
          Cómo invitar a Alfred a mis reuniones
        </AccordionTrigger>
        <AccordionContent>
          <ComoInvitar />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3" className="mb-6 pb-2">
        <AccordionTrigger className="relative">
          Preguntas frecuentes
        </AccordionTrigger>
        <AccordionContent>
          <PreguntasFrecuentes />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="mb-6 pb-2">
        <AccordionTrigger className="relative">Conocimiento</AccordionTrigger>
        <AccordionContent>
          <Conocimiento />
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="mb-6 pb-2">
        <AccordionTrigger className="relative">
          Políticas de privacidad
        </AccordionTrigger>
        <AccordionContent>
          <PoliticasPrivacidad />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

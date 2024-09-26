import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordionDefault";

interface PropsArray {
  name: string;
  contenido: any;
}

export default function main({ contenido }: { contenido: Array<PropsArray> }) {
  return (
    <Accordion type="single" collapsible className="w-full accordion-default">
      {contenido.map((item: PropsArray) => {
        return (
          <AccordionItem value={item.name} className="mb-6 pb-2">
            <AccordionTrigger className="relative">
              {item.name}
            </AccordionTrigger>
            <AccordionContent>{item.contenido}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

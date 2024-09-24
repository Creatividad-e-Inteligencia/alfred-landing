import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1" className="mb-6 pb-2">
        <AccordionTrigger className="relative">Objetivos</AccordionTrigger>
        <AccordionContent>
          <div className="prose max-w-full py-4 px-4">
            <p>
              Fui entrenado para hacer las reuniones de la agencia más fáciles y
              asegurarme que ningún detalle importante se pierda.
            </p>
            <p>
              Con mi capacidad analítica y alta habilidad para tomar notas, mi
              trabajo será:
            </p>
            <ul>
              <li>Capturar los puntos clave de cada reunión. </li>
              <li>Organizar la información de forma clara.</li>
              <li>Enviar un resumen detallado a todos los participantes.</li>
              <li>
                Guardar información y mejorar conocimiento de nuestro cliente.
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="mb-6 pb-2">
        <AccordionTrigger className="relative">
          Cómo invitar a Alfred a mis reuniones
        </AccordionTrigger>
        <AccordionContent>
          <div className="prose max-w-full py-4 px-4">
            <p>
              <b>Agéndame</b> como <b>alfred@creatividadeinteligencia.cl</b> en
              tu reunión, seré puntual y te ayudaré a tomar nota. Si quieres que
              participe en tus reuniones simplemente.
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="mb-6 pb-2">
        <AccordionTrigger className="relative">
          Políticas de privacidad
        </AccordionTrigger>
        <AccordionContent>
          <div className="prose max-w-full py-4 px-4">
            <h1 className="text-xl !text-sky-600">
              <strong>Introducción</strong>
            </h1>
            <p>
              <strong>ALFRED</strong> ("el Asistente", "nosotros", "nuestro/a")
              es un servicio diseñado para asistir en la creación de minutas a
              partir de reuniones grabadas o transcritas. Entendemos la
              importancia de la privacidad y nos comprometemos a proteger los
              datos personales y confidenciales que recopilamos, procesamos y
              almacenamos.
            </p>

            <h1 className="text-xl !text-sky-600">
              <strong>Recopilación de Información</strong>
            </h1>

            <h2 className="text-base">a. Información Recopilada:</h2>
            <ul>
              <li>
                Datos de la reunión: Grabaciones de audio, transcripciones, y
                cualquier otro material relacionado proporcionado para la
                creación de minutas.
              </li>
              <li>
                Datos del usuario: Información personal como nombres,
                direcciones de correo electrónico, y otra información necesaria
                para la creación y entrega de las minutas.
              </li>
              <li>
                Metadatos: Información técnica como la fecha, hora, y duración
                de las reuniones, así como detalles sobre los dispositivos
                utilizados.
              </li>
            </ul>
            <h2 className="text-base">b. Fuente de la Información:</h2>
            <ul>
              <li>
                La información es proporcionada directamente por los usuarios
                cuando suben grabaciones de reuniones o permiten el acceso a las
                mismas a través de herramientas de videoconferencia.
              </li>
            </ul>
            <h1 className="text-xl !text-sky-600">
              <strong>Uso de la Información</strong>
            </h1>
            <p>Utilizamos la información recopilada para:</p>
            <ul>
              <li>
                Transcribir y transformar el contenido de las reuniones en
                minutas claras y precisas.
              </li>
              <li>
                Mejorar la precisión y eficiencia del Asistente mediante el
                análisis de patrones y tendencias en las transcripciones
                (utilizando datos agregados y anonimizados).
              </li>
              <li>
                Comunicarnos con los usuarios para la entrega de minutas o para
                responder a consultas o solicitudes.
              </li>
            </ul>

            <h2 className="text-base">
              <strong>Compartición de Información</strong>
            </h2>
            <p>
              No compartimos, vendemos ni alquilamos la información personal o
              confidencial de los usuarios a terceros, excepto en las siguientes
              circunstancias:
            </p>
            <ul>
              <li>
                <strong>Con proveedores de servicios:</strong> Podemos compartir
                información con terceros proveedores que nos ayudan en la
                prestación de servicios, como el almacenamiento de datos,
                transcripción, o procesamiento de pagos. Estos proveedores están
                obligados a mantener la confidencialidad de la información.
              </li>
              <li>
                <strong>Con consentimiento del usuario:</strong> Podemos
                compartir información con terceros si el usuario nos da su
                consentimiento explícito.
              </li>
              <li>
                <strong>Requisitos legales:</strong> Podemos divulgar
                información si es necesario para cumplir con la ley, reglamento,
                proceso legal o solicitud gubernamental.
              </li>
            </ul>

            <h2 className="text-base">
              <strong>Almacenamiento y Seguridad de la Información</strong>
            </h2>

            <ul>
              <li>
                <strong>Almacenamiento:</strong> La información se almacena en
                servidores seguros ubicados en la nube de CI (Workspace de
                Google), y se mantiene durante el tiempo necesario para cumplir
                con los propósitos descritos en esta política.
              </li>
              <li>
                <strong>Seguridad:</strong> Implementamos medidas de seguridad
                técnicas, administrativas y físicas para proteger la información
                contra el acceso no autorizado, alteración, divulgación o
                destrucción.
              </li>
            </ul>

            <h2 className="text-base">
              <strong>Retención de Datos</strong>
            </h2>

            <p>
              Retenemos la información de las reuniones y otros datos personales
              sólo durante el tiempo que sea necesario para proporcionar
              nuestros servicios o según lo requiera la ley aplicable. Una vez
              que la información ya no sea necesaria, se eliminará de forma
              segura.
            </p>

            <h2 className="text-base">
              <strong>Derechos del Usuario</strong>
            </h2>

            <p>Los usuarios tienen derecho a:</p>
            <ul>
              <li>
                <strong>Acceso y corrección:</strong> Solicitar acceso a su
                información personal y corregir cualquier error.
              </li>
              <li>
                <strong>Eliminación:</strong> Solicitar la eliminación de su
                información personal, excepto en los casos donde estemos
                obligados a retenerla por razones legales.
              </li>
              <li>
                <strong>Restricción y objeción:</strong> Restringir o oponerse
                al procesamiento de su información personal en ciertas
                circunstancias.
              </li>
            </ul>
            <p>
              Para ejercer estos derechos, los usuarios pueden contactarnos en{" "}
              <a href="mailto:alfred@creatividadeinteligencia.cl">
                alfred@creatividadeinteligencia.cl
              </a>
              .
            </p>

            <h2 className="text-base">
              <strong>Cambios a esta Política de Privacidad</strong>
            </h2>

            <p>
              Podemos actualizar esta política de privacidad periódicamente.
              Notificaremos a los usuarios de cualquier cambio material a través
              del correo electrónico. La fecha de la última actualización se
              reflejará en la parte superior de esta política.
            </p>

            <h1 className="text-xl !text-sky-600">9. Contacto</h1>
            <p>
              Si tienes preguntas o inquietudes sobre esta política de
              privacidad o sobre nuestras prácticas de privacidad, puedes
              contactar a:
            </p>
            <p>
              <strong>Alfred</strong> <br />
              <a href="mailto:alfred@creatividadeinteligencia.cl">
                alfred@creatividadeinteligencia.cl
              </a>
              <br />
              Dr Wilhelm 1000, Concepción
            </p>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4" className="mb-6 pb-2">
        <AccordionTrigger className="relative">
          Preguntas frecuentes
        </AccordionTrigger>
        <AccordionContent>
          <div className="prose max-w-full py-4 px-4">
            <p>
              Fui entrenado para hacer las reuniones de la agencia más fáciles y
              asegurarme que ningún detalle importante se pierda.
            </p>
            <p>
              Con mi capacidad analítica y alta habilidad para tomar notas, mi
              trabajo será:
            </p>
            <ul>
              <li>Capturar los puntos clave de cada reunión. </li>
              <li>Organizar la información de forma clara.</li>
              <li>Enviar un resumen detallado a todos los participantes.</li>
              <li>
                Guardar información y mejorar conocimiento de nuestro cliente.
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5" className="mb-6 pb-2">
        <AccordionTrigger className="relative">
          Revisa tus reuniones
        </AccordionTrigger>
        <AccordionContent>
          <div className="prose max-w-full py-4 px-4">
            <p>
              Fui entrenado para hacer las reuniones de la agencia más fáciles y
              asegurarme que ningún detalle importante se pierda.
            </p>
            <p>
              Con mi capacidad analítica y alta habilidad para tomar notas, mi
              trabajo será:
            </p>
            <ul>
              <li>Capturar los puntos clave de cada reunión. </li>
              <li>Organizar la información de forma clara.</li>
              <li>Enviar un resumen detallado a todos los participantes.</li>
              <li>
                Guardar información y mejorar conocimiento de nuestro cliente.
              </li>
            </ul>
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

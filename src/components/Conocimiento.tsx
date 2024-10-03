// @ts-ignore
import ModalImage from "react-modal-image";

export default function Contenido() {
  return (
    <div className="prose sm:text-xl max-w-5xl mx-auto py-8 px-4">
      <p>
        Toda la información recopilada y registrada durante las reuniones se
        almacenan de forma segura en un repositorio centralizado llamado{" "}
        <strong>Conocimiento</strong>, el que se irá{" "}
        <strong>alimentando y entrenando en el tiempo</strong> para una mejor
        gestión entre CI y nuestros clientes.
      </p>
      <p>
        Este repositorio es accesible{" "}
        <strong>exclusivamente para usuarios habilitados</strong>, quienes
        pueden realizar consultas mediante lenguaje{" "}
        <strong>natural a través de WhatsApp</strong>, lo que facilita el acceso
        y la gestión de la información en cualquier momento.
      </p>
      <div className="w-10/12 mx-auto">
        <ModalImage
          small="/como-invitar/conocimiento.v3.jpg?v=001"
          large="/como-invitar/conocimiento.v3.jpg?v=001"
          alt="Conocimiento"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

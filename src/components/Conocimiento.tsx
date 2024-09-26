// @ts-ignore
import ModalImage from "react-modal-image";

export default function Contenido() {
  return (
    <div className="prose sm:text-xl max-w-5xl mx-auto py-8 px-4">
      <p>
        Finalmente, toda la información recopilada y registrada durante la
        reunión{" "}
        <strong>
          se almacena de manera segura en un repositorio centralizado denominado
          "Conocimiento"
        </strong>
        . Este repositorio es accesible únicamente por miembros de la
        organización,{" "}
        <strong>
          quienes pueden realizar consultas utilizando lenguaje natural a través
          de correo electrónico o WhatsApp
        </strong>
        , permitiendo así un fácil acceso y gestión de la información en
        cualquier momento.
      </p>
      <div className="w-10/12 mx-auto">
        <ModalImage
          small="/como-invitar/conocimiento.jpg?v=001"
          large="/como-invitar/conocimiento.jpg?v=001"
          alt="Conocimiento"
          className="mx-auto"
        />
      </div>
    </div>
  );
}

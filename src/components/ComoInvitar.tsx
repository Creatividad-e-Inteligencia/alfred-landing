import TextGradient from "./TextGradient";
// @ts-ignore
import ModalImage from "react-modal-image";

export default function Contenido() {
  return (
    <div className="prose sm:text-xl max-w-5xl mx-auto py-8 px-4">
      <p>
        <TextGradient>
          <span className="font-bold text-2xl">1.</span>{" "}
        </TextGradient>
        Comienza con el agendamiento a la reunión, donde el organizador{" "}
        <strong>
          invita a Alfred a través del correo alfred@creatividadeinteligencia.cl{" "}
        </strong>
      </p>
      <div className="w-10/12 mx-auto">
        <ModalImage
          small="/como-invitar/paso-1.jpg"
          large="/como-invitar/paso-1.jpg"
          alt="Paso 1"
        />
      </div>

      <p>
        <TextGradient>
          <span className="font-bold text-2xl">2.</span>{" "}
        </TextGradient>
        Al iniciar la reunión en la fecha y hora establecidas,{" "}
        <strong> Alfred se suma a la reunión como un participante más </strong>,
        el administrador de la reunión acepta su ingreso y comienza la
        grabación.
      </p>

      <div className="w-10/12 mx-auto ">
        <div className="flex gap-4 items-center mb-10">
          <TextGradient>
            <span className="font-bold text-2xl">a.</span>{" "}
          </TextGradient>
          <div>
            <img
              src="/como-invitar/paso-2-a.jpg"
              alt="Paso 2.a"
              width="342"
              height="72"
              className="my-0"
            />
          </div>
        </div>

        <div className="flex gap-4 items-start">
          <TextGradient>
            <span className="font-bold text-2xl">b.</span>{" "}
          </TextGradient>
          <div>
            <ModalImage
              small="/como-invitar/paso-2-b.jpg"
              large="/como-invitar/paso-2-b.jpg"
              alt="Paso 2.b"
              className="block mt-0"
            />
          </div>
        </div>
      </div>

      <p>
        <TextGradient>
          <span className="font-bold text-2xl">3.</span>{" "}
        </TextGradient>
        Inmediatamente finalizada la reunión,{" "}
        <strong>
          Alfred genera de forma automática una pre-minuta detallada que es
          enviada por correo electrónico
        </strong>{" "}
        al organizador del evento.
      </p>
      <div className="w-10/12 mx-auto">
        <ModalImage
          small="/como-invitar/paso-3.jpg"
          large="/como-invitar/paso-3.jpg"
          alt="Paso 3"
        />
      </div>

      <p>
        <TextGradient>
          <span className="font-bold text-2xl">4.</span>{" "}
        </TextGradient>
        Una vez que el organizador recibe la pre-minuta, tiene la opción de{" "}
        <strong>validarla o hacer correcciones si es necesario. </strong>
      </p>
      <div className="w-10/12 mx-auto">
        <ModalImage
          small="/como-invitar/paso-4.jpg"
          large="/como-invitar/paso-4.jpg"
          alt="Paso 4"
        />
      </div>

      <p>
        <TextGradient>
          <span className="font-bold text-2xl">5.</span>{" "}
        </TextGradient>
        Después de la validación,{" "}
        <strong>
          se envía una copia de la minuta corregida a todos los participantes de
          la reunión para asegurar que todos tengan acceso
        </strong>{" "}
        a la información discutida y los acuerdos tomados.
      </p>
      <div className="w-10/12 mx-auto text-center">
        <ModalImage
          small="/como-invitar/paso-5.jpg"
          large="/como-invitar/paso-5.jpg"
          alt="Paso 5"
          className="inline-block"
        />
      </div>
    </div>
  );
}

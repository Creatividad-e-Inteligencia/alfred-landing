import { useState } from "react";
import { Typewriter } from "react-simple-typewriter";

export default function Contenido(props: { texto: string[]; delay: number }) {
  const show = false;
  const [IsShow, setIsShow] = useState(false);
  setTimeout(() => {
    setIsShow(true);
  }, props.delay);
  return (
    <>
      {IsShow && (
        <Typewriter
          words={props.texto}
          cursor
          typeSpeed={120}
          deleteSpeed={150}
          delaySpeed={3000}
        />
      )}
    </>
  );
}

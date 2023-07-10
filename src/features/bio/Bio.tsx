import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import { ContenedorBio } from "./styled";

/**
 * @returns {JSX.Element} - 
 */

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <button
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
        className={
          bioActiva.id === nombre
            ? "botonBioActivo"
            : "botonBioInactivo"
        }
      >
        {nombre}
      </button>
    ));
  };

  return (
    <ContenedorBio>
      <div className="bioContainer">
      <div className="contenedorBotones">{crearBotones()}</div>
      <div>
        <div>
          <img
            src={bioActiva.image}
            alt={bioActiva.nombre}
            className="bioImagen"
          />
        </div>
        <div>
          <h3 className="bioNombre">{bioActiva.nombre}</h3>
          <p className="bioDescripcion">{bioActiva.descripcion}</p>
        </div>
      </div>
    </div>
    </ContenedorBio>
    
  );
};

export default Bio;

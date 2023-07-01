import { useEffect, useState } from "react";
import { obtenerNoticias } from "./fakeRest";
import Noticia from "./Noticia";
import ModalSuscripcion from "./ModalSuscripcion";
import ModalNoticia from "./ModalNoticia";
import {
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
} from "./styled";
import { capitalizeString } from "./utils";

export interface INoticiasNormalizadas {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: number | string;
    esPremium: boolean;
    imagen: string;
    descripcionCorta?: string;
  }

const Noticias = () => {
  const [noticias, setNoticias] = useState<INoticiasNormalizadas[]>([]);
  const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);

  useEffect(() => {
    const obtenerInformacion = async () => {
      const respuesta = await obtenerNoticias();

      const data = respuesta.map((n) => ({
        id: n.id,
        titulo: capitalizeString(n.titulo),
        descripcion: n.descripcion,
        fecha: `Hace ${Math.floor((Date.now() - n.fecha.getTime()) / 60000)} minutos`,
        esPremium: n.esPremium,
        imagen: n.imagen,
        descripcionCorta: n.descripcion.substring(0, 100),
      }));

      setNoticias(data);
    };

    obtenerInformacion();
  }, []);

  const handleVerMasClick = (noticia: INoticiasNormalizadas) => {
    setModal(noticia);
  };

  const handleSuscribirClick = () => {
    setTimeout(() => {
      alert("Suscripto!");
      setModal(null); // Cerrar modal de suscripción
    }, 1000);
  };

  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        {noticias.map((noticia) => (
          <Noticia
            key={noticia.id}
            noticia={noticia}
            onVerMasClick={handleVerMasClick}
          />
        ))}
      </ListaNoticias>
      {modal && modal.esPremium ? (
        <ModalSuscripcion onSuscribirClick={handleSuscribirClick} closeNoticia={setModal}/>
      ) : modal ? (
        <ModalNoticia noticia={modal} closeNoticia={setModal}/>
      ) : null}
    </ContenedorNoticias>
  );
};

export default Noticias;

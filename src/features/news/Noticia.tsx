import { capitalizeString } from "./utils";
import {
  TarjetaNoticia,
  FechaTarjetaNoticia,
  DescripcionTarjetaNoticia,
  ImagenTarjetaNoticia,
  TituloTarjetaNoticia,
  BotonLectura,
} from "./styled";
import { INoticiasNormalizadas } from "./Noticias";

interface Props {
  noticia: INoticiasNormalizadas;
  onVerMasClick: (noticia: INoticiasNormalizadas) => void;
}

const Noticia = ({ noticia, onVerMasClick }: Props) => {
  return (
    <TarjetaNoticia>
      <ImagenTarjetaNoticia src={noticia.imagen} />
      <TituloTarjetaNoticia>{noticia.titulo}</TituloTarjetaNoticia>
      <FechaTarjetaNoticia>{noticia.fecha}</FechaTarjetaNoticia>
      <DescripcionTarjetaNoticia>{noticia.descripcionCorta}</DescripcionTarjetaNoticia>
      <BotonLectura onClick={() => onVerMasClick(noticia)}>Ver más</BotonLectura>
    </TarjetaNoticia>
  );
};

export default Noticia;

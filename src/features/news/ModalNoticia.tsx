import {
    CloseButton,
    TarjetaModal,
    ContenedorModal,
    DescripcionModal,
    ImagenModal,
    TituloModal,
    CotenedorTexto,
  } from "./styled";
import { INoticiasNormalizadas } from "./Noticias";
import { CloseButton as Close } from "../../assets";


interface Props {
  noticia: INoticiasNormalizadas;
  closeNoticia: (arg: null) => void;
}

const ModalNoticia = ({ noticia, closeNoticia }: Props) => {
  return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={() => closeNoticia(null)}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={noticia.imagen} alt="news-image" />
        <CotenedorTexto>
          <TituloModal>{noticia.titulo}</TituloModal>
          <DescripcionModal>{noticia.descripcion}</DescripcionModal>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default ModalNoticia;

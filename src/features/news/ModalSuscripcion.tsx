import {
    CloseButton,
    TarjetaModal,
    ContenedorModal,
    DescripcionModal,
    ImagenModal,
    TituloModal,
    BotonSuscribir,
    CotenedorTexto,
  } from "./styled";
import { SuscribeImage, CloseButton as Close } from "../../assets";

interface Props {
  onSuscribirClick: () => void;
  closeNoticia: (arg: null) => void;
}

/**
 * @param {Object} props
 * @param {funtion} props.onClose 
 * @param {funtion} props.onSubscription 
 * @returns {JSX.Element} 
 */

const ModalSuscripcion = ({ onSuscribirClick, closeNoticia }: Props) => {
  
    return (
    <ContenedorModal>
      <TarjetaModal>
        <CloseButton onClick={() => closeNoticia(null)}>
          <img src={Close} alt="close-button" />
        </CloseButton>
        <ImagenModal src={SuscribeImage} alt="mr-burns-excelent" />
        <CotenedorTexto>
          <TituloModal>Suscríbete a nuestro Newsletter</TituloModal>
          <DescripcionModal>
            Suscríbete a nuestro newsletter y recibe noticias de 
            nuestros personajes favoritos.
          </DescripcionModal>
          <BotonSuscribir onClick={onSuscribirClick}>Suscríbete</BotonSuscribir>
        </CotenedorTexto>
      </TarjetaModal>
    </ContenedorModal>
  );
};

export default ModalSuscripcion;

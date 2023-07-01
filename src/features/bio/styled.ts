import styled from "styled-components";

export const ContenedorBio = styled.div`

.bioContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
  }
  
  .bioImagen {
    max-width: 200px;
    max-height: 300px;
    margin-bottom: 1rem;
  }
  
  .bioNombre {
    font-size: 2em;
    margin-bottom: 1rem;
  }
  
  .bioDescripcion {
    font-size: 1.3em;
    width: 70%;
    margin: 1rem auto;
  }
  
  .contenedorBotones {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin-bottom: 1rem;
  }
  
  .botonBioActivo {
    border-radius: 5px;
    border: 1px solid darkgray;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    padding: 1rem;
    margin: 1rem;
    font-family: "Homer Simpson Revised", sans-serif;
    font-size: 1.4rem;
    background-color: #fdd835;
    color: whitesmoke;
    text-shadow: 2px 2px 0 #000000, 2px -2px 0 #000000, -2px 2px 0 #000000,
      -2px -2px 0 #000000, 2px 0px 0 #000000, 0px 2px 0 #000000,
      -2px 0px 0 #000000, 0px -2px 0 #000000;
  }
  
  .botonBioInactivo {
    border-radius: 5px;
    border: 1px solid darkgray;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
    padding: 1rem;
    margin: 1rem;
    font-family: "Homer Simpson Revised", sans-serif;
    font-size: 1.4rem;
  }
  
  .botonBioActivo:hover,
  .botonBioInactivo:hover {
    cursor: pointer;
  }
`
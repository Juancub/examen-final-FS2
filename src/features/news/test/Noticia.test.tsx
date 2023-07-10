import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Noticia from "../Noticia";
import { INoticiasNormalizadas } from "../Noticias";


describe("CardNoticias", () => {
  it("se hace clic en el botón 'Ver más'", async () => {
    const mockNoticias: INoticiasNormalizadas = 
      {
        id: 1,
        imagen: "imagen1.jpg",
        titulo: "Noticia 1",
        fecha: "2023-06-26",
        descripcionCorta: "Descripción corta de la noticia 1",
        esPremium: true,
        descripcion:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, sit nostrum culpa sunt eum quidem illo animi, numquam natus tenetur libero sint iusto. Harum molestias minima repellat in porro tenetur!",
      };
    const handleClickMock = jest.fn();

    render(
      <Noticia noticia={mockNoticias} onVerMasClick={handleClickMock} />
    );

    const botonVerMas = await screen.findAllByText("Ver más");
    userEvent.click(botonVerMas[0]);

    await waitFor(() => {
      expect(handleClickMock).toHaveBeenCalledTimes(1);
    });
    expect(handleClickMock).toHaveBeenCalledWith(mockNoticias);
  });
});

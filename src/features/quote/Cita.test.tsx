// src/features/quotes/Quote.test.tsx
import { render, screen, fireEvent } from "../../test-utils";
import { rest } from "msw";
import { setupServer } from "msw/node";
import Quote from "./Cita";

// Configurar el servidor MSW
const server = setupServer(
  rest.get("/api/quote", (req, res, ctx) => {
    const character = req.url.searchParams.get("character");

    if (character && parseInt(character)) {
      return res(ctx.status(400), ctx.json({ message: "El nombre debe ser un texto" }));
    }

    return res(
      ctx.json({
        quote: "Una cita",
        character: "Un personaje",
        image: "imagen.png",
        characterDirection: "left",
      })
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe("Cita", () => {
  test("renderiza correctamente el componente", () => {
    render(<Quote />);
    
    expect(screen.getByLabelText("Author Cita")).toBeInTheDocument();
    expect(screen.getByLabelText("Obtener cita aleatoria")).toBeInTheDocument();
    expect(screen.getByLabelText("Borrar")).toBeInTheDocument();
  });

  test("muestra una cita obtenida de la API al hacer clic en 'Obtener Cita'", async () => {
    render(<Quote />);

    fireEvent.click(screen.getByLabelText("Obtener cita aleatoria"));

    expect(await screen.findByText("Una cita")).toBeInTheDocument();
    expect(screen.getByText("Un personaje")).toBeInTheDocument();
  });

  test("muestra un error si se ingresa un nombre inválido", async () => {
    render(<Quote />);

    fireEvent.change(screen.getByLabelText("Author Cita"), { target: { value: "123" } });
    fireEvent.click(screen.getByLabelText("Obtener cita aleatoria"));

    expect(await screen.findByText("El nombre debe ser un texto")).toBeInTheDocument();
  });

  test("borra la cita y limpia el campo de input al hacer clic en 'Borrar'", async () => {
    render(<Quote />);

    fireEvent.click(screen.getByLabelText("Obtener cita aleatoria"));
    fireEvent.click(screen.getByLabelText("Borrar"));

    expect(screen.queryByText("Una cita")).not.toBeInTheDocument();
    expect(screen.queryByText("Un personaje")).not.toBeInTheDocument();
    expect(screen.getByLabelText("Author Cita")).toHaveValue("");
  });
});


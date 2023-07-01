
import React from "react";
import { render as rtlRender, RenderOptions } from "@testing-library/react";
import { configureStore, EnhancedStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import quoteReducer, { EstadoCita } from "./features/quote/citaSlice";

type CustomRenderOptions = {
  preloadedState?: { quote: EstadoCita };
  store?: EnhancedStore<{ quote: EstadoCita }>;
} & Omit<RenderOptions, "queries">;

function render(
  ui: React.ReactElement,
  { preloadedState, store = configureStore({ reducer: { quote: quoteReducer }, preloadedState }) , ...renderOptions }: CustomRenderOptions = {}
) {
  function Wrapper({ children }: { children?: React.ReactNode }) {
    return <Provider store={store}>{children}</Provider>;
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

export * from "@testing-library/react";
export { render };

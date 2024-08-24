import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { render, RenderResult } from "@testing-library/react";
import { Provider } from "react-redux";
import AppWrapper from "./appWrapper";
import reducer from "../redux/slices";
import { CustomRenderOptions } from "../types/tests";
import { middlewareOptions } from "../redux/store";

const customRender = (
  ui: React.ReactElement,
  {
    preloadedState,
    store = configureStore({
      reducer,
      preloadedState,
      middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware(middlewareOptions).prepend(),
    }),
    ...renderOptions
  }: CustomRenderOptions
): RenderResult => {
  const Wrapper: React.FC<{ children: React.ReactElement }> = ({
    children,
  }) => {
    return (
      <Provider store={store}>
        <AppWrapper>{children}</AppWrapper>
      </Provider>
    );
  };

  return render(ui, {
    wrapper: Wrapper,
    ...renderOptions,
  });
};

// re-export everything
export * from "@testing-library/react";

// override render method
export { customRender as render };

import React from "react";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HomePage from "../pages/Home/HomePage";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "../redux/root-reducer";

test("renderizado sin errores", () => {
  const store = configureStore({
    reducer: rootReducer,
    // Puedes proporcionar el estado inicial si es necesario
    preloadedState: {
      /* estado inicial */
    },
  });

  render(
    <Provider store={store}>
      <BrowserRouter>
        <HomePage />
      </BrowserRouter>
    </Provider>
  );
});

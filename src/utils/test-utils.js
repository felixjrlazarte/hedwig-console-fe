import React from "react";
import {render} from "@testing-library/react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { ChakraProvider, Container } from "@chakra-ui/react";

import { store } from "../slices/store";
import { theme } from "../styles/theme";
import routes from "../components/routes";

const AllTheProviders = ({children}) => {
  return (
    <Provider store={store}>
      <ChakraProvider theme={theme}>
        <Container h="100vh" maxWidth="100%" p="0">
          <RouterProvider router={routes}>
            {children}
          </RouterProvider>
        </Container>
      </ChakraProvider>
    </Provider>
  );
};

const customRender = (ui, options) => render(ui, {wrapper: AllTheProviders, ...options});

export * from "@testing-library/react";

export { customRender as render };
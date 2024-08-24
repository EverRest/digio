import React from "react";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
import { create } from "jss";
import { ThemeProvider } from "styled-components/macro";
import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { ThemeProvider as ThemeContextProvider } from "../contexts/ThemeContext";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import StylesProvider from "@mui/styles/StylesProvider";
import jssPreset from "@mui/styles/jssPreset";
import "../i18n";
import { AuthProvider } from "../contexts/JWTContext";
import createTheme from "../theme";
import { THEMES } from "../constants";

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point")!,
});

type Props = {
  children: React.ReactElement;
};
function App(props: Props): React.ReactElement {
  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <HelmetProvider>
          <Helmet
            titleTemplate="%s | Material App"
            defaultTitle="Material App - React Admin & Dashboard Template"
          />
          <StylesProvider jss={jss}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StyledEngineProvider injectFirst>
                <MuiThemeProvider theme={createTheme(THEMES.DEFAULT)}>
                  <ThemeProvider theme={createTheme(THEMES.DEFAULT)}>
                    <AuthProvider>{props.children}</AuthProvider>
                  </ThemeProvider>
                </MuiThemeProvider>
              </StyledEngineProvider>
            </LocalizationProvider>
          </StylesProvider>
        </HelmetProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  );
}

export default App;

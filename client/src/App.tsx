import React, { useEffect } from "react";
import i18n from "i18next";
import { useRoutes } from "react-router-dom";
import { Provider as ReduxProvider } from "react-redux";
import { HelmetProvider, Helmet } from "react-helmet-async";
import { create } from "jss";
import { ThemeProvider } from "styled-components/macro";
import { StyledEngineProvider } from "@mui/styled-engine-sc";
import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers";
import StylesProvider from "@mui/styles/StylesProvider";
import jssPreset from "@mui/styles/jssPreset";
import "./i18n";
import createTheme from "./theme";
import routes from "./routes";
import useTheme from "./hooks/useTheme";
import { persistor, store } from "./redux/store";
import { AuthProvider } from "./contexts/JWTContext";
import { PersistGate } from "redux-persist/integration/react";
import { COMPANY_NAME } from "./constants";
import "./style.css";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById("jss-insertion-point")!,
});

function App(): React.ReactElement {
  const content = useRoutes(routes);
  const { theme } = useTheme();

  const language = window.localStorage.getItem("lang");
  useEffect(() => {
    i18n.changeLanguage(language || "de");
  }, [language]);

  return (
    <HelmetProvider>
      <Helmet
        titleTemplate={`%s | ${COMPANY_NAME}`}
        defaultTitle={COMPANY_NAME}
      />
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <StylesProvider jss={jss}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <StyledEngineProvider injectFirst>
                <MuiThemeProvider theme={createTheme(theme)}>
                  <ThemeProvider theme={createTheme(theme)}>
                    <AuthProvider>{content!}</AuthProvider>
                  </ThemeProvider>
                </MuiThemeProvider>
              </StyledEngineProvider>
            </LocalizationProvider>
          </StylesProvider>
        </PersistGate>
      </ReduxProvider>
    </HelmetProvider>
  );
}

export default App;

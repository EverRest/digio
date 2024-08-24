import React from "react";
import { Outlet } from "react-router-dom";
import { CssBaseline } from "@mui/material";
import GlobalStyle from "../../components/GlobalStyle";
import { Root } from "./styled";

const Auth: React.FC = ({ children }) => {
  return (
    <Root>
      <CssBaseline />
      <GlobalStyle />
      {children}
      <Outlet />
    </Root>
  );
};

export default Auth;

/* istanbul ignore file */

import styled from "styled-components/macro";
import { Paper as MuiPaper } from "@mui/material";
import { spacing } from "@mui/system";

export const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Drawer = styled.div<{ width: string }>`
  ${(props): string => props.theme.breakpoints.up("md")} {
    width: ${(props): string => props.width};
    min-height: 100vh;
    background-color: ${(props) => props.theme.sidebar.background};
    flex-shrink: 0;
  }
`;

export const LoggedInUser = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  height: ${(props) => props.theme.spacing(16)};
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.theme.spacing(4)};
  background-color: ${(props): string => props.theme.sidebar.footer.background};

  div {
    width: 60%;
  }
`;

export const SkeletonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${(props): string => props.theme.spacing(2)};
  padding-top: ${(props): string => props.theme.spacing(3)};
  padding-right: ${(props): string => props.theme.spacing(7)};
  padding-bottom: ${(props): string => props.theme.spacing(3)};
  padding-left: ${(props): string => props.theme.spacing(8)};
`;

export const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  padding-left: ${(props) => props.theme.spacing(1)};
  padding-right: ${(props) => props.theme.spacing(1)};

  .logo-container {
    display: flex;
    height: 70%;
    justify-content: center;
    align-items: center;

    img {
      width: ${(props) => props.theme.spacing(100)};
    }
  }
`;

export const HeaderContainer = styled.div`
  background: ${(props): string => props.theme.header.background};
  height: ${(props) => props.theme.spacing(16)};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: ${(props) => props.theme.spacing(3)};
  padding-right: ${(props) => props.theme.spacing(3)};

  div {
    display: flex;
    gap: ${(props) => props.theme.spacing(5)};
  }
`;

export const Paper = styled(MuiPaper)(spacing);

export const MainContent = styled(Paper)`
  flex: 1;
  padding-top: 0;
  background: ${(props): string => props.theme.palette.background.default};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    flex: none;
  }

  .MuiPaper-root .MuiPaper-root {
    box-shadow: none;
  }

  ${(props): string => props.theme.breakpoints.up("md")} {
    max-width: calc(100vw - ${(props): string => props.theme.sidebar.width});
  }
`;

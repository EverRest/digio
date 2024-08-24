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
    flex-shrink: 0;
  }
`;

export const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 100%;
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

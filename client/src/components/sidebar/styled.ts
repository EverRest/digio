import styled from "styled-components/macro";
import { spacing } from "@mui/system";

import {
  Box as MuiBox,
  Drawer as MuiDrawer,
  Grid,
} from "@mui/material";

export const Box = styled(MuiBox)(spacing);

export const Drawer = styled(MuiDrawer)`
  border-right: 0;

  > div {
    border-right: 0;
  }
`;

export const LoggedUser = styled(Grid)`
  color: ${(props): string => props.theme.sidebar.header.color};
`;

export const Footer = styled.div`
  background-color: ${(props): string =>
    props.theme.sidebar.footer.background} !important;
  padding: ${(props): string => props.theme.spacing(2.75)}
    ${(props): string => props.theme.spacing(4)};
  border-right: 1px solid rgba(0, 0, 0, 0.12);
  height: 70px;
`;

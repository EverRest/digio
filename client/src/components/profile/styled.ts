import { Grid } from "@mui/material";
import styled from "styled-components/macro";
/* istanbul ignore next */
export const StyledTabContent = styled.div`
  background: transparent;
  width: 100%;
  ${(props): string => props.theme.breakpoints.up("md")} {
    padding: ${(props): string => props.theme.spacing(0)};
    padding-top: ${(props): string => props.theme.spacing(0)};
  }
`;
/* istanbul ignore next */
export const StyledGridTabsContent = styled(Grid)``;
/* istanbul ignore next */
export const StyledGridTabs = styled(Grid)`
  margin-top: ${(props): string => props.theme.spacing(0)};
`;

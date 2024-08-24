import styled from "styled-components/macro";
import { Paper } from "@mui/material";
/* istanbul ignore next */
export const FormWrapper = styled(Paper)<{ $fullwidth?: boolean }>`
  padding: ${(props): string => props.theme.spacing(6)};
  width: 100%;
  text-align: left;
  ${(props): string => props.theme.breakpoints.up("lg")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: ${(props): string => (props.$fullwidth ? "100%" : "95%")};
  }
  ${(props): string => props.theme.breakpoints.up("xl")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: ${(props): string => (props.$fullwidth ? "100%" : "85%")};
  }
  ${(props): string => props.theme.breakpoints.down("xs")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 100%;
  }
`;

import { Paper } from "@mui/material";
import styled from "styled-components";

export const FormWrapper = styled(Paper)`
  padding: ${(props): string => props.theme.spacing(6)};
  margin-top: ${(props): string => props.theme.spacing(7)}
    ${(props): string => props.theme.breakpoints.up("lg")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 80%;
  }
  ${(props): string => props.theme.breakpoints.up("xl")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 60%;
  }
  ${(props): string => props.theme.breakpoints.down("xs")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 100%;
  }
`;

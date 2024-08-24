import styled from "styled-components/macro";
import { Button as MuiButton } from "@mui/material";
import { spacing } from "@mui/system";
import { ButtonProps } from "./types";

export const Button = styled(MuiButton)<ButtonProps>(spacing);
/* istanbul ignore next */
export const Wrapper = styled.div`
  padding: ${(props): string => props.theme.spacing(6)};
  text-align: center;
  background: transparent;

  ${(props): string => props.theme.breakpoints.up("md")} {
    padding: ${(props): string => props.theme.spacing(10)};
  }
`;

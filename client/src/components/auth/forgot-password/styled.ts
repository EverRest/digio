import styled from "styled-components/macro";
import { ReactComponent as Logo } from "../../../vendor/logo.svg";
import {
  Alert as MuiAlert,
  Paper,
  Box,
  TextField as MuiTextField,
} from "@mui/material";
import { spacing } from "@mui/system";

export const Brand = styled(Logo)`
  fill: ${(props): string => props.theme.palette.primary.main};
  width: 64px;
  height: 64px;
`;

export const FormMessageWrapper = styled(Box)`
  min-height: 50px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled(Paper)`
  padding: ${(props): string => props.theme.spacing(6)};

  ${(props): string => props.theme.breakpoints.up("md")} {
    padding: ${(props): string => props.theme.spacing(10)};
  }
`;

export const Alert = styled(styled(MuiAlert)`
  width: 100%;
`)(spacing);
export const TextField = styled(MuiTextField)<{ my?: number }>(spacing);

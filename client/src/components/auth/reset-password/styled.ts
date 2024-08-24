import styled from "styled-components/macro";
import {
  Alert as MuiAlert,
  Box,
  Paper,
  TextField as MuiTextField,
} from "@mui/material";
import { spacing } from "@mui/system";

export const Wrapper = styled(Paper)`
  padding: ${(props): string => props.theme.spacing(6)};

  ${(props): string => props.theme.breakpoints.up("md")} {
    padding: ${(props): string => props.theme.spacing(10)};
  }
`;

export const FormMessageWrapper = styled(Box)`
  min-height: 50px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Alert = styled(MuiAlert)(spacing);
export const TextField = styled(MuiTextField)<{ mb?: number }>(spacing);

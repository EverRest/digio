import { Alert as MuiAlert, TextField as MuiTextField } from "@mui/material";
import styled from "styled-components";
import { spacing } from "@mui/system";

export const Alert = styled(MuiAlert)(spacing);
export const TextField = styled(MuiTextField)<{ my?: number }>(spacing);

export const BrandLogo = styled.img`
  margin-bottom: 10px;
`;

export const ErrorContainer = styled.div`
  margin: ${(props): string =>
    `${props.theme.spacing(2.5)} ${props.theme.spacing(0)}`};
`;

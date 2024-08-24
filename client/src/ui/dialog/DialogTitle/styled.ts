import styled from "styled-components/macro";
import { DialogTitle } from "@mui/material";
/* istanbul ignore next */
export const StyledDialogTitle = styled(DialogTitle)`
  padding: ${(props): string =>
    `${props.theme.spacing(4)} ${props.theme.spacing(3)} ${props.theme.spacing(
      4
    )} ${props.theme.spacing(6)}`};
  margin: ${(props): string => props.theme.spacing(0)};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

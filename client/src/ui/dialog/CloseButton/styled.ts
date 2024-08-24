import styled from "styled-components/macro";

import { IconButton as MuiIconButton } from "@mui/material";
/* istanbul ignore next */
export const IconButton = styled(MuiIconButton)`
  color: ${(props): string => props.theme.palette.grey[500]};
`;

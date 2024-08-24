import { Box } from "@mui/material";
import styled from "styled-components/macro";
import { ContextMenuContainerProps } from "./types";
/* istanbul ignore next */
export const ContextMenuContainer = styled(Box)<ContextMenuContainerProps>`
  position: absolute;
  z-index: 1;
  ${(props) => `
    top: ${props.top || 0}px;
    left: ${props.left || 0}px;
  `}
`;

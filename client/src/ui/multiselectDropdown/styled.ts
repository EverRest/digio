import { Box } from "@mui/system";
import { Chip as MuiChip } from "@mui/material";
import styled from "styled-components";

export const SelectBox = styled(Box)`
  gap: ${(props): string => props.theme.spacing(0.5)};
  display: flex;
  overflow-x: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Chip = styled(MuiChip)`
  height: ${(props): string => props.theme.spacing(5)};
`;

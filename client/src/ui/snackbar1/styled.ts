import { Paper as MUIPaper, Typography } from "@mui/material";
import styled from "styled-components/macro";
import { blue, grey } from "@mui/material/colors";

export const Paper = styled(MUIPaper)`
  min-width: 350px;
  min-height: 48px;
  background: white;
  padding: 10px;
`;

export const TypographyTitle = styled(Typography)`
  font-weight: 500;
  color: ${grey[800]};
`;

export const TypographyActions = styled(Typography)`
  color: ${blue[500]};
  cursor: pointer;
  display: inline-block;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
`;

export const TypographyCopied = styled(Typography)`
  border: 1px solid ${grey[300]};
  border-radius: 5px;
  display: inline-block;
  text-align: center;
  font-size: 11px;
  padding: 0 3px;
  color: ${grey[500]};
`;

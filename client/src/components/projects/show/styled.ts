import { Grid, Typography, Paper } from "@mui/material";
import styled from "styled-components";

export const SmallLightText = styled(Typography)`
  font-size: ${(props): string => `${props.theme.spacing(3.5)}`};
  color: ${(props): string => props.theme.palette.grey[500]};
  font-weight: 500;
  font-style: normal;
  text-align: center;
`;

export const InfoContainer = styled(Grid)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props): string => `${props.theme.spacing(1)}`};
  flex-direction: column;
  padding: ${(props): string => `${props.theme.spacing(4)}`};
  &.row-start {
    justify-content: flex-start;
    flex-direction: row;
  }
  &.border-bottom {
    border-bottom: ${(props): string => `${props.theme.spacing(0.5)}`} solid
      ${(props): string => props.theme.border.color};
  }
  &.align-start {
    align-items: flex-start;
  }
`;

export const LogoContainer = styled.img`
  width: ${(props) => props.theme.spacing(30)};
  height: auto;
  object-fit: contain;
`;

export const Wrapper = styled(Paper)<{ $fullwidth?: boolean }>`
  padding: ${(props): string => props.theme.spacing(6)};
  width: 100%;
  text-align: left;
  ${(props): string => props.theme.breakpoints.up("lg")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 95%;
  }
  ${(props): string => props.theme.breakpoints.up("xl")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 85%;
  }
  ${(props): string => props.theme.breakpoints.down("xs")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 100%;
  }
`;

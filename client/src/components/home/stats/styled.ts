/* istanbul ignore next */
import styled, { css } from "styled-components/macro";
import {
  Card as MuiCard,
  CardContent as MuiCardContent,
  Chip as MuiChip,
  Typography as MuiTypography,
} from "@mui/material";
import { rgba } from "polished";
import { spacing } from "@mui/system";
/* istanbul ignore next */
export const Card = styled(MuiCard)<{ illustration?: string }>`
  position: relative;

  .MuiCardHeader-title {
    font-size: 0.85rem !important;
  }

  .MuiTypography-h3 {
    span {
      font-size: 1.35rem !important;
    }
    margin-bottom: 0 !important;
  }

  ${(props) =>
    props.illustration &&
    props.theme.palette.mode !== "dark" &&
    css`
      background: ${(props) => rgba(props.theme.palette.primary.main, 0.125)};
      color: ${(props) => props.theme.palette.primary.main};
    `}
`;

export const Typography = styled(MuiTypography)<{ component?: string }>(
  spacing
);

export const CardContent = styled(MuiCardContent)`
  position: relative;
  cursor: ${(props) =>
    props.onClick ? "pointer" : /* istanbul ignore next */ "default"};

  &:last-child {
    padding-bottom: ${(props) => props.theme.spacing(4)};
  }
`;

export const Chip = styled(MuiChip)`
  flex-shrink: 0;
  margin-left: auto;
  margin-top: ${(props) => props.theme.spacing(1)};
  height: 20px;
  padding: 4px 0;
  font-size: 85%;
  color: ${(props) => props.theme.palette.common.white};
  margin-bottom: ${(props) => props.theme.spacing(4)};

  span {
    padding-left: ${(props) => props.theme.spacing(2)};
    padding-right: ${(props) => props.theme.spacing(2)};
  }
`;

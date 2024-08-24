/* istanbul ignore file */

import styled from "styled-components/macro";
import { Grid } from "@mui/material";

export const CommentWrapper = styled(Grid)`
  padding: ${(props): string => props.theme.spacing(1)};
  margin-bottom: ${(props): string => props.theme.spacing(3)};
`;

export const CommentBodyWrapper = styled(Grid)`
  padding-left: ${(props): string => props.theme.spacing(2)};
  * {
    margin-top: 0;
    margin-bottom: 0;
    word-break: break-all;
  }
  a {
    color: ${(props): string => props.theme.palette.primary.main};
  }
`;

export const CommentLeftBy = styled.span.attrs(() => ({}))`
  font-weight: 700;
  color: ${(props): string => props.theme.comments.textColor};
  cursor: pointer;
`;

export const CommentLeftAt = styled.span.attrs(() => ({}))`
  font-weight: 500;
  font-size: 10px;
  color: ${(props): string => props.theme.comments.textColor};
  margin-left: 10px;
`;

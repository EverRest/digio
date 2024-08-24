import styled from "styled-components/macro";
import { Paper, TableCell as MUITableCell } from "@mui/material";

export interface TableCell {
  mw?: string;
}

export interface TextEllipsis {
  w?: string;
}

/* istanbul ignore next */
export const TableCell = styled(MUITableCell).attrs((props: TableCell) => ({
  mw: props.mw || "100px",
}))`
  min-width: ${(props): string => {
    return props.mw;
  }};
`;
/* istanbul ignore next */
export const TextEllipsis = styled.div.attrs((props: TextEllipsis) => ({
  w: props.w || "100px",
}))<{ textAlign?: string, float?: string }>`
  width: ${(props): string => {
    return props.w;
  }};
  float: ${(props): string => props.float ?? "right"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props): string => props.theme.palette.textColor.default};
  text-align: ${(props): string => props.textAlign ?? "inherit"};
`;
/* istanbul ignore next */
export const IsActiveIcon = styled.div.attrs((props: any) => ({
  type: props.type || "success",
}))`
  width: 10px;
  height: 10px;
  background: ${(props): string => {
    switch (props.type) {
      case "error":
        return props.theme.palette.red[500];
      default:
        return props.theme.palette.green[500];
    }
  }};
  border-radius: 50%;
`;
/* istanbul ignore next */
export const InlineBlock = styled.div.attrs(
  (props: { mt?: string; w?: string; position?: string; top?: string }) => ({
    mt: props.mt || "0",
    w: props.w || "auto",
    position: props.position || "unset",
    top: props.top || "0",
  })
)`
  position: ${(props): string => {
    return props.position;
  }};
  top: ${(props): string => {
    return props.top;
  }};
  display: inline-block;
  margin-top: ${(props): string => {
    return props.mt;
  }};
  width: ${(props): string => {
    return props.w;
  }};
`;
/* istanbul ignore next */
export const FormWrapper = styled(Paper)`
  padding: ${(props): string => props.theme.spacing(6)};
  margin-top: 30px;
  ${(props): string => props.theme.breakpoints.up("lg")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 80%;
  }
  ${(props): string => props.theme.breakpoints.up("xl")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 60%;
  }
  ${(props): string => props.theme.breakpoints.down("xs")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 100%;
  }
`;

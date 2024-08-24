import styled from "styled-components/macro";
import { StyledTagProps } from "./types";
import { Close as MUICloseIcon } from "@mui/icons-material";
/* istanbul ignore next */
export const Tag = styled.span.attrs((props: StyledTagProps) => ({
  type: props.type || "success",
}))`
  border: 1.5px solid
    ${(props) => {
      const { type } = props;
      switch (type) {
        case "success":
          return props.theme.palette.green[500];
        case "error":
          return props.theme.palette.red[400];
        case "default":
          return props.theme.palette.grey[400];
      }
    }};
  border-radius: 10px;
  margin-right: 3px;
  margin-bottom: 4px;
  font-weight: 400;
  color: ${(props) => props.theme.palette.grey[900]};
  font-size: 12px;
  position: relative;
  cursor: default;
  padding: 0 2px;
  background-color: ${(props) => {
    const { type } = props;
    switch (type) {
      case "success":
        return props.theme.palette.green[800];
      case "error":
        return props.theme.palette.red[800];
      case "default":
        return props.theme.palette.grey[400];
    }
  }};
`;
/* istanbul ignore next */
export const CloseIcon = styled(MUICloseIcon).attrs(
  (props: StyledTagProps) => ({
    type: props.type || "success",
  })
)`
  position: absolute;
  height: 15px;
  width: 15px;
  right: 1px;
  top: 1px;
  cursor: pointer;
  border-radius: 50%;
  background-color: ${(props) => {
    const { type } = props;
    switch (type) {
      case "success":
        return props.theme.palette.green[900];
      case "error":
        return props.theme.palette.red[800];
      case "default":
        return props.theme.palette.grey[800];
    }
  }};
  color: ${(props) => {
    const { type } = props;
    switch (type) {
      case "success":
        return props.theme.palette.green[100];
      case "error":
        return props.theme.palette.red[100];
      case "default":
        return props.theme.palette.grey[400];
    }
  }};
  border: 1px solid
    ${(props) => {
      const { type } = props;
      switch (type) {
        case "success":
          return props.theme.palette.green[200];
        case "error":
          return props.theme.palette.red[200];
        case "default":
          return props.theme.palette.grey[600];
      }
    }};
`;

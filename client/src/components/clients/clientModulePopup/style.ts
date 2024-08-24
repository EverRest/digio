import styled from "styled-components";
import {
  Dialog as MuiDialog,
  DialogContent as MuiDialogContent,
} from "@mui/material";

export const Dialog = styled(MuiDialog)<{ $loading?: boolean }>`
  .MuiPaper-root {
    visibility: ${(props): string => (props.$loading ? "hidden" : "unset")};
    opacity: ${(props): number => (props.$loading ? 0 : 1000)};
    overflow-x: hidden;
  }
`;

export const ClientModuleDialogContent = styled(MuiDialogContent)`
  .MuiTableContainer-root {
    max-height: auto;
  }
`;

export const CheckboxContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;

  li {
    label {
      cursor: pointer;
    }
  }
`;

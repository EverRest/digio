import styled from "styled-components/macro";

import {
  Select as MuiSelect,
  FormControl as MuiFormControl,
  FormHelperText as MuiFormHelperText,
} from "@mui/material";
/* istanbul ignore next */
export const Select = styled(MuiSelect)<{ renderValue?: any }>`
  > div:first-child {
    padding: ${(props): string => props.theme.spacing(0)};
    padding-left: ${(props): string => props.theme.spacing(1.25)};
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;
/* istanbul ignore next */
export const FormControl = styled(MuiFormControl)`
  width: 100%;
`;
/* istanbul ignore next */
export const FormHelperText = styled(MuiFormHelperText)`
  color: ${(props): string => props.theme.palette.error.main};
`;

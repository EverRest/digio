import styled from "styled-components/macro";
import { Paper, Typography } from "@mui/material";
/* istanbul ignore next */
export const Dropdown = styled(Paper)`
  box-shadow: ${(props) => props.theme.popover.boxShadow};
`;

export const AutocompleteListItem = styled.li`
  font-size: 11px;
  font-weight: 500;
`;

export const AutocompletePropertyName = styled(Typography)`
  font-size: 12px;
  color: #b0bec5;
  display: block;
`;

export const AutocompletePropertyAddress = styled(Typography)`
  font-size: 12px;
  color: #b0bec5;
  display: block;
`;

export const StyledPaper = styled(Paper)`
  box-shadow: 1px 2px 6px 1px rgb(0 0 0 / 25%);
`;

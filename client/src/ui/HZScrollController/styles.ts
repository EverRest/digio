/*istanbul ignore file*/

import styled from "styled-components";
import { Button as MuiButton } from "@mui/material";

export const StyledButton = styled(MuiButton) <{
    component?: React.ReactNode;
    to?: string;
}>`
    line-height: 22px;
    font-size: 15px;
    padding: 5px 8px;
`;

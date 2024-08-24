import styled from "styled-components/macro";
import { spacing } from "@mui/system";
import {
  Button,
  Divider as MuiDivider,
  FormGroup,
  Paper,
  Typography as MuiTypography,
} from "@mui/material";
import MUIDialogContent from "@mui/material/DialogContent";
import FormAlert from "../../ui/formAlert/FormAlert";

export const Divider = styled(MuiDivider)(spacing);
export const Typography = styled(MuiTypography)(spacing);

export const ErrorBox = styled(FormAlert)(spacing);

export const DialogTitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
/* istanbul ignore next */
export const DialogContent = styled(MUIDialogContent)`
  & > div {
    max-height: 80vh;
    width: 100%;
    margin-top: ${(props) => props.theme.spacing(1.5)};
  }
`;
/* istanbul ignore next */
export const WidgetsList = styled(Paper).attrs(
  ({ $isHidden }: { $isHidden: boolean }) => ({
    $isHidden: $isHidden || false,
  })
)`
  width: 200px;
  z-index: 99;
  position: fixed;
  right: ${({ $isHidden }): string => {
    return $isHidden ? "-200px" : "-5px";
  }};
  top: 75px;
  transition: right 0.2s ease-in-out;
`;
/* istanbul ignore next */
export const WidgetsSideBarButton = styled(Button).attrs(
  ({ $isHidden }: { $isHidden: boolean }) => ({
    $isHidden: $isHidden || false,
  })
)`
  position: relative;
  justify-content: ${({ $isHidden }): string => {
    return $isHidden ? "center" : "start";
  }};
  right: ${({ $isHidden }): string => {
    return $isHidden ? "35px" : "0";
  }};
  width: ${({ $isHidden }): string => {
    return $isHidden ? "120%" : "100%";
  }};
  top: 0;
  z-index: 99;
  > .MuiButton-startIcon {
    position: relative !important;
    right: ${({ $isHidden }): string => {
      return $isHidden ? "70px" : "0";
    }};
  }
`;

export const DashboardLockSection = styled(FormGroup)`
  border-bottom: 1px solid ${(props) => props.theme.palette.background.hover};
  padding: 0 ${(props) => props.theme.spacing(2)};
`;

export const DescriptionContainer = styled.div`
  width: 80px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

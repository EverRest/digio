import styled from "styled-components/macro";
import {
  CloudUpload as MuiCloudUpload,
  ClearOutlined as MuiClear,
} from "@mui/icons-material";
import {
  Alert as MuiAlert,
  Box,
  Paper,
  Avatar,
  TextField as MuiTextField,
  Grid,
  Button as MuiButton,
} from "@mui/material";
import { spacing } from "@mui/system";

export const FormWrapper = styled(Paper)`
  margin-top: 30px;
  padding: ${(props): string => props.theme.spacing(6)};
  ${(props): string => props.theme.breakpoints.up("lg")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 90%;
  }
  ${(props): string => props.theme.breakpoints.up("xl")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 90%;
  }
  ${(props): string => props.theme.breakpoints.down("xs")} {
    padding: ${(props): string => props.theme.spacing(10)};
    max-width: 100%;
  }
`;

export const FormSection = styled(Box)`
  padding-bottom: 20px;
`;

export const FormSectionTitle = styled(Box)`
  font-size: 18px;
  padding-bottom: 10px;
`;

export const FormMessageWrapper = styled(Box)`
  min-height: 50px;
  max-height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Alert = styled(MuiAlert)(spacing);
export const TextField = styled(MuiTextField)<{ mb?: number }>(spacing);

export const RemoveAvatarButton = styled(MuiButton)`
  position: absolute;
  top: -21px;
  right: 0;
  svg {
    font-size: 45px;
  }
`;

export const CloudUpload = styled(MuiCloudUpload)(spacing);

export const Remove = styled(MuiClear)(spacing);

export const CenteredContent = styled.div`
  ${(props): string => props.theme.breakpoints.up("xl")} {
    margin-top: ${(props) => props.theme.spacing(20)};
  }
  text-align: center;
  position: relative;
`;

export const BigAvatar = styled(Avatar)`
  font-size: 1.5rem;
  width: 200px;
  height: 200px;
  margin: ${(props) => props.theme.spacing(4)} auto;
`;

export const AvatarSidebar = styled(Grid)`
  ${(props): string => props.theme.breakpoints.up("xl")} {
    border-right: 1px solid ${(props) => props.theme.palette.divider};
  }
`;

export const PasswordSectionDevider = styled.div`
  ${(props): string => props.theme.breakpoints.up("xl")} {
    border-top: 1px solid ${(props) => props.theme.palette.divider};
  }
`;

export const AvatarInput = styled.input`
  display: none;
`;

export const Error = styled.div`
  margin-top: ${(props) => props.theme.spacing(3)};
  color: crimson;
`;

export const DatePickerGrid = styled(Grid)`
  ${(props): string => props.theme.breakpoints.up("lg")} {
    padding-top: 0px !important;
  }`
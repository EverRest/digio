/* istanbul ignore file */


import styled from "styled-components/macro";
import { Trash2, Download as DownloadIcon } from "react-feather";
import {
  UploadFile as UploadFileIcon,
  HomeWork as HomeWorkIcon,
  Sync as SyncIcon,
  Refresh as RefreshIcon,
} from "@mui/icons-material";
import DomainAddIcon from "@mui/icons-material/DomainAdd";

export const Delete = styled(Trash2)<{ ml?: string }>`
  color: ${(props): string => props.theme.palette.red[400]};
  margin-left: ${(props): string => props.ml ?? "10"}px;
  &:hover {
    color: ${(props): string => props.theme.palette.red[300]};
    cursor: pointer;
  }
  transition: color 150ms;

  &:active {
    color: ${(props): string => props.theme.palette.red[600]};
  }

  &.disabled {
    color: ${(props): string => props.theme.palette.red[600]};
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Download = styled(DownloadIcon)<{ ml?: string }>`
  color: ${(props): string => props.theme.palette.grey[500]};
  margin-left: ${(props): string => props.ml ?? "10"}px;
  &:hover {
    color: ${(props): string => props.theme.palette.grey[300]};
    cursor: pointer;
  }
  &:active {
    color: ${(props): string => props.theme.palette.grey[600]};
  }
  transition: color 150ms;
  &.disabled {
    color: ${(props): string => props.theme.palette.grey[400]};
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
export const UploadFile = styled(UploadFileIcon)<{ ml?: string }>`
  color: ${(props): string => props.theme.palette.grey[500]};
  margin-left: ${(props): string => props.ml ?? "10"}px;
  &:hover {
    color: ${(props): string => props.theme.palette.grey[300]};
    cursor: pointer;
  }
  &:active {
    color: ${(props): string => props.theme.palette.grey[600]};
  }
  transition: color 150ms;
  &.disabled {
    color: ${(props): string => props.theme.palette.grey[400]};
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const AreaAddIcon = styled(DomainAddIcon)<{ ml?: string }>`
  color: ${(props): string => props.theme.palette.grey[500]};
  margin-left: ${(props): string => props.ml ?? "10"}px;
  &:hover {
    color: ${(props): string => props.theme.palette.grey[300]};
    cursor: pointer;
  }
  &:active {
    color: ${(props): string => props.theme.palette.grey[600]};
  }
  transition: color 150ms;
  &.disabled {
    color: ${(props): string => props.theme.palette.grey[400]};
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const HomeWork = styled(HomeWorkIcon)<{ ml?: string }>`
  color: ${(props): string => props.theme.palette.grey[500]};
  margin-left: ${(props): string => props.ml ?? "10"}px;
  &:hover {
    color: ${(props): string => props.theme.palette.grey[300]};
    cursor: pointer;
  }
  &:active {
    color: ${(props): string => props.theme.palette.grey[600]};
  }
  transition: color 150ms;
  &.disabled {
    color: ${(props): string => props.theme.palette.grey[400]};
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Sync = styled(SyncIcon)<{ ml?: string }>`
  color: ${(props): string => props.theme.palette.grey[500]};
  margin-left: ${(props): string => props.ml ?? "10"}px;
  &:hover {
    color: ${(props): string => props.theme.palette.grey[300]};
    cursor: pointer;
  }
  &:active {
    color: ${(props): string => props.theme.palette.grey[600]};
  }
  transition: color 150ms;
  &.disabled {
    color: ${(props): string => props.theme.palette.grey[400]};
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const Refresh = styled(RefreshIcon)<{ ml?: string }>`
  color: ${(props): string => props.theme.palette.green[500]};
  margin-left: ${(props): string => props.ml ?? "10"}px;
  &:hover {
    color: ${(props): string => props.theme.palette.green[300]};
    cursor: pointer;
  }
  &:active {
    color: ${(props): string => props.theme.palette.green[600]};
  }
  transition: color 150ms;
  &.disabled {
    color: ${(props): string => props.theme.palette.green[400]};
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

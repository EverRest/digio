/* istanbul ignore file */
import styled from "styled-components/macro";
import {darken} from "polished";
import {InputBase, TableRow, TableCell as MUITableCell} from "@mui/material";
import {
    Edit,
    PlusCircle,
    Send,
    Eye,
    MessageCircle,
    Clock,
    Check,
    X,
    Mail,
    RefreshCcw,
    Download,
    Image,
    FilePlus,
    Tag,
    Share
} from "react-feather";
import {Delete} from "../button/icon/styled";
import History from "@mui/icons-material/History";

export const EditIcon = styled(Edit)`
  margin-left: 10px;

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
`;
export const ShareIcon = styled(Share)`
  margin-left: 10px;

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
`;
export const TagIcon = styled(Tag)`
  margin-left: 10px;
  color: ${(props): string => props.theme.palette.primary.main};

  &:hover {
    color: ${(props): string => props.theme.palette.primary.dark};
    cursor: pointer;
  }

  transition: color 150ms;
`;

export const AvatarIcon = styled(Image)`
  margin-left: 10px;

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
`;

export const UploadFileIcon = styled(FilePlus)`
  margin-left: 10px;

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
`;
export const HistoryIcon = styled(History)`
  margin-left: 10px;

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
`;

export const ShowIcon = styled(Eye)`
  margin-left: 10px;

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
`;

export const DownloadIcon = styled(Download)`
  margin-left: 10px;

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
`;
/* istanbul ignore next */
export const ResendIcon = styled(RefreshCcw)`
  margin-left: ${(props): string => props.theme.spacing(2)};

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
`;

/* istanbul ignore next */
export const MailIcon = styled(Mail)`
  margin-left: 10px;

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
`;

export const PlusIcon = styled(PlusCircle)`
  margin-left: 10px;
  width: 25px;
  height: 25px;
`;

export const SendIcon = styled(Send)`
  margin-left: 10px;

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
`;
/*istanbul ignore next*/
export const ProlongIcon = styled(Clock)`
  margin-left: 10px;

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
`;

export const DeleteIcon = Delete;

export const AcceptIcon = styled(Check)`
  margin-left: 10px;
  color: ${(props): string => props.theme.palette.success.main};

  &:hover {
    color: ${(props): string => props.theme.palette.success.dark};
    cursor: pointer;
  }

  transition: color 150ms;

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const RejectIcon = styled(X)`
  margin-left: 10px;
  color: ${(props): string => props.theme.palette.red.main};

  &:hover {
    color: ${(props): string => props.theme.palette.red.dark};
    cursor: pointer;
  }

  transition: color 150ms;

  &.disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;

export const MessageCircleIcon = styled(MessageCircle)<{
    $filled?: boolean;
}>`
  margin-left: ${(props) => props.theme.spacing(2.5)};

  &:hover {
    color: ${(props): string => props.theme.palette.grey[400]};
    cursor: pointer;
  }

  transition: color 150ms;
  fill: ${(props): string => (props.$filled ? "#000" : "transparent")};
  top: -15px;
`;

export const Search = styled.div`
  border-radius: 2px;
  background-color: ${(props): string => props.theme.header.background};
  display: none;
  position: relative;
  width: 100%;

  &:hover {
    background-color: ${(props): string =>
            darken(0.05, props.theme.header.background)};
  }

  ${(props): string => props.theme.breakpoints.up("md")} {
    display: block;
  }
`;

export const SearchIconWrapper = styled.div`
  width: 50px;
  height: 100%;
  position: absolute;
  pointer-events: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const Input = styled(InputBase)`
  color: inherit;
  width: 100%;

  > input {
    color: ${(props): string => props.theme.header.search.color};
    padding-top: ${(props): string => props.theme.spacing(2.5)};
    padding-right: ${(props): string => props.theme.spacing(2.5)};
    padding-bottom: ${(props): string => props.theme.spacing(2.5)};
    padding-left: ${(props): string => props.theme.spacing(12)};
    width: 120px;
  }
`;

export const TableRowUnderline = styled(TableRow)<{
    $stripe?: boolean;
}>`
  background-color: ${(props): string =>
          props?.$stripe
                  ? props.theme.table.defaultBGColor
                  : props.theme.table.lightBgColor} !important;

  border-bottom: 1px solid rgba(224, 224, 224, 1);

  .rowHover {
    opacity: 0;
  }

  &:hover .rowHover {
    opacity: 1;
  }
`;

export const LoadingBox = styled.div`
  position: absolute;
  top: 55%;
  left: 45%;
`;

export const TableCellBorderNone = styled(MUITableCell)`
  border: none;
`;

export const TableHeadCell = styled(MUITableCell)`
  background-color: ${(props): string =>
          props.theme.table.headerBGColor} !important;
`;

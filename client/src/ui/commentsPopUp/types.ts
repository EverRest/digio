import { COMMENTABLE } from "../../constants";

export interface Comment {
  handleCloseDialog: () => void;
  id: string;
  relation: COMMENTABLE;
}

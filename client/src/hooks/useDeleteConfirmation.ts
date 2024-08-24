import deleteConfirmation, {
  ACTIONS as CONFIRM_DELETE_ACTIONS,
  confirmDeleteInitialState,
  State,
} from "../reducers/deleteCofirmation";
import React, { useReducer } from "react";

/* istanbul ignore next */
export const useDeleteConfirmation = (): UseDeleteConfirmationReturnType => {
  const [confirmDeleteState, confirmDeleteDispatch] = useReducer(
    deleteConfirmation,
    confirmDeleteInitialState
  );
  const showConfirmationPopover = (
    event: React.MouseEvent<SVGElement>,
    isDeleting?: boolean
  ): void => {
    event.stopPropagation();
    if (isDeleting) return;
    confirmDeleteDispatch({
      type: CONFIRM_DELETE_ACTIONS.CLICK,
      payload: { anchorEl: event.currentTarget },
    });
  };
  const handleClose = (): void => {
    confirmDeleteDispatch({
      type: CONFIRM_DELETE_ACTIONS.CLOSE,
      payload: { anchorEl: null },
    });
  };

  return {
    confirmDeleteState,
    showConfirmationPopover,
    handleClose,
  };
};

interface UseDeleteConfirmationReturnType {
  confirmDeleteState: State;
  showConfirmationPopover: (
    event: React.MouseEvent<any>,
    isDeleting?: boolean
  ) => void;
  handleClose: () => void;
}

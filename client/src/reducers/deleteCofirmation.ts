interface Action {
  type: string;
  payload: {
    anchorEl?: SVGElement | null;
    id?: string | undefined;
  };
}

export interface State {
  id?: string;
  anchorEl: SVGElement | null;
}

export enum ACTIONS {
  CLICK = "CLICK",
  CLOSE = "CLOSE",
  SET_ID = "SET_ID",
}
/* istanbul ignore next */
export const confirmDeleteInitialState = {
  anchorEl: null,
  id: undefined,
};
/* istanbul ignore next */
const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTIONS.CLICK:
      return { ...state, anchorEl: action.payload.anchorEl! };
    case ACTIONS.CLOSE:
      return { ...state, anchorEl: action.payload.anchorEl! };
    case ACTIONS.SET_ID:
      return { ...state, id: action.payload.id };
    default:
      throw new Error("Unknown action");
  }
};

export default reducer;

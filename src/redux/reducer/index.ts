/**
 * Redux reducer
 * 
 */

import { ActionType } from "../action/type";
import { INITIAL_STATE } from "../initialState";

const reducer = (state = INITIAL_STATE, action: { type: ActionType, payload: any}) => {
  const newState = { ...state };

  switch (action.type) {
    case ActionType.SET_FILTER:
      newState.filter = action.payload
      return newState;

    default: return state;
  }
};

export default reducer;

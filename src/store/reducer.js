import * as actionTypes from "./actions";

const initialState = { userstat: false };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_SPOTIFY:
      return { userstat: true };
    case actionTypes.LOGOUT_SPOTIFY:
      return { userstat: false };
    default:
      return state;
  }
};

export default reducer;

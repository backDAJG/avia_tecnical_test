import { SET_HOTELS } from "./actions";

const initialState = {
  hotels: [],
};

const hotelsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_HOTELS:
      return state;
    default:
      return state;
  }
};

export default hotelsReducer;

import { combineReducers } from "redux";
import hotelsReducer from "./hotelsReducer";

const reducer = combineReducers({
  hotels: hotelsReducer,
});

export default reducer;

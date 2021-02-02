import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import stockReducer from "./stockReducer";

export default combineReducers({
  search: searchReducer,
  stock: stockReducer,
});

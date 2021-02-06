import { combineReducers } from "redux";
import newsReducer from "./newsReducer";
import searchReducer from "./searchReducer";
import stockReducer from "./stockReducer";

export default combineReducers({
  search: searchReducer,
  stock: stockReducer,
  news: newsReducer,
});

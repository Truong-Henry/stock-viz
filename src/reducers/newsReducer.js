import { GET_HOME_NEWS } from "../actions/types";

const initialState = { articles: [] };

const newsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_HOME_NEWS:
      return { ...state, articles: action.payload };
    default:
      return state;
  }
};

export default newsReducer;

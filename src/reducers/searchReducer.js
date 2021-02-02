import {
  SEARCH,
  SET_QUERY,
  SET_DEBOUNCED_QUERY,
  SET_SELECTED_QUERY,
} from "../actions/types";

const initialState = {
  query: "",
  debouncedQuery: "",
  selectedQuery: "",
  isLoading: false,
  searchResults: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_QUERY: {
      return { ...state, query: action.payload, isLoading: true };
    }
    case SET_DEBOUNCED_QUERY: {
      return { ...state, debouncedQuery: action.payload, isLoading: true };
    }
    case SEARCH:
      return { ...state, searchResults: action.payload, isLoading: false };
    case SET_SELECTED_QUERY:
      return { ...state, selectedQuery: action.payload };
    default:
      return state;
  }
};

export default searchReducer;

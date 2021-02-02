import {
  SEARCH,
  SET_QUERY,
  SET_DEBOUNCED_QUERY,
  SET_SELECTED_QUERY,
  SET_STOCK,
  GET_ADVANCED_FUNDAMENTALS,
  GET_CEO_COMPENSATION,
  SET_ACTIVE_TAB,
  // SET_FORM_VALUE,
  SET_CHECKED_VALUE,
} from "./types";
import iex from "../config/iex";

export const search = (query) => {
  if (query === "") {
    return {
      type: SEARCH,
      payload: [],
    };
  } else {
    return async (dispatch) => {
      const url = `${iex.base_url}/search/${query}?${iex.api_token}`;

      const response = await fetch(url);
      const data = await response.json();
      const filteredData = data.filter((data) => data.region === "US"); // Filter for US stocks
      dispatch({ type: SEARCH, payload: filteredData });
    };
  }
};

export const setQuery = (query) => {
  return {
    type: SET_QUERY,
    payload: query,
  };
};

export const setDebouncedQuery = (query) => {
  return {
    type: SET_DEBOUNCED_QUERY,
    payload: query,
  };
};

export const setSelectedQuery = (query) => {
  return {
    type: SET_SELECTED_QUERY,
    payload: query,
  };
};

export const setStock = (stock) => {
  return {
    type: SET_STOCK,
    payload: stock,
  };
};

export const getAdvancedFundamentals = () => {
  return async (dispatch, getState) => {
    const symbolOfSelectedData = getState().stock["advancedFundamentals"]; // get advancedFundamentals state from redux
    const currentSymbol = getState().stock.symbol;

    if (currentSymbol === symbolOfSelectedData.symbol.value) {
      // Don't retrieve data if symbol === current data symbol
      return;
    }
    const url = `${iex.base_url}/time-series/fundamentals/${currentSymbol}/annual?last=1&${iex.api_token}`;
    const response = await fetch(url);
    const data = await response.json();
    const updatedObj = JSON.parse(JSON.stringify(symbolOfSelectedData)); // Deep clone to avoid copy reference
    Object.keys(updatedObj).forEach((key) => {
      // Each key in updatedObj will look for key in response data
      updatedObj[key]["value"] = data[0][key]; // Mutate new data
    });
    console.log(updatedObj);
    dispatch({
      type: GET_ADVANCED_FUNDAMENTALS,
      payload: updatedObj,
    });
  };
};

export const getCeoCompensation = () => {
  return async (dispatch, getState) => {
    const symbolOfSelectedData = getState().stock["ceoCompensation"]; // get the symbol from the obj data
    const currentSymbol = getState().stock.symbol;

    if (currentSymbol === symbolOfSelectedData.symbol.value) {
      // Don't retrieve data if symbol === current data symbol
      return;
    }
    const url = `${iex.base_url}/stock/${currentSymbol}/ceo-compensation?${iex.api_token}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    const updatedObj = JSON.parse(JSON.stringify(symbolOfSelectedData)); // Deep clone to avoid copy reference
    Object.keys(updatedObj).forEach((key) => {
      // Each key in updatedObj will look for key in response data
      updatedObj[key]["value"] = data[key]; // Mutate new data
    });
    console.log(updatedObj);
    dispatch({
      type: GET_CEO_COMPENSATION,
      payload: updatedObj,
    });
  };
};

export const setActiveTab = (index, id, name) => {
  return {
    type: SET_ACTIVE_TAB,
    index: index,
    id: id,
    name: name,
  };
};

export const setCheckedValue = (key) => {
  return (dispatch, getState) => {
    const activeTab = getState().stock.activeTab.id;
    dispatch({
      type: SET_CHECKED_VALUE,
      id: activeTab,
      key: key,
    });
  };
};

// Used for SideDrawerForm, Depreciated
// export const setFormValue = (event, key) => {
//   return (dispatch, getState) => {
//     const activeTab = getState().stock.activeTab.id;
//     dispatch({
//       type: SET_FORM_VALUE,
//       id: activeTab,
//       event: event,
//       key: key,
//     });
//   };
// };

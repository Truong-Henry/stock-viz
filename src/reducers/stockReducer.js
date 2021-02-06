import {
  SET_STOCK,
  SET_ACTIVE_TAB,
  SET_FORM_VALUE,
  GET_CEO_COMPENSATION,
  GET_ADVANCED_FUNDAMENTALS,
  GET_MOST_ACTIVE,
  SET_CHECKED_VALUE,
} from "../actions/types";

import advancedFundamentalsState from "./initialStates/advancedFundamentalsState";
import ceoCompensationState from "./initialStates/ceoCompensationState";
import tabsState from "./initialStates/tabsState";

const initialState = {
  symbol: "",
  advancedFundamentals: advancedFundamentalsState,
  ceoCompensation: ceoCompensationState,
  tabs: tabsState,
  activeTab: {
    index: 0,
    id: "ceoCompensation",
    name: "CEO Compensation",
  },
  mostActive: [],
  topGainers: [],
  topLosers: [],
};

const stockReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_STOCK:
      return { ...state, symbol: action.payload };
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: {
          index: action.index,
          id: action.id,
          name: action.name,
        },
      };
    case GET_ADVANCED_FUNDAMENTALS:
      return { ...state, advancedFundamentals: action.payload };
    case GET_CEO_COMPENSATION:
      return { ...state, ceoCompensation: action.payload };
    case GET_MOST_ACTIVE:
      return { ...state, [action.id]: action.payload };
    case SET_FORM_VALUE: {
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          [action.key]: {
            ...state[action.id][action.key],
            checked: action.event,
          },
        },
      };
    }
    case SET_CHECKED_VALUE: {
      return {
        // Keep rest of state
        ...state,
        // e.g ceoCompensation:
        [action.id]: {
          // e.g ...state["ceoCompensation"],
          ...state[action.id],
          // e.g salary:
          [action.key]: {
            // e.g ...state["ceoCompensation"]["salary"]
            ...state[action.id][action.key],
            // Opposite state of current checked value
            checked: !state[action.id][action.key].checked,
          },
        },
      };
    }
    default:
      return state;
  }
};

export default stockReducer;

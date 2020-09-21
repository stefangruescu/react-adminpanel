import {
  CHANGE_BACKGROUND,
  CHANGE_COLOR,
  CHANGE_CONTENT,
} from "../constants/constants";

const buttonsInitialState = {
  background: "linear-gradient(315deg, #90d5ec 0%, #fc575e 74%)",
  color: "black",
  switcheroo: "users",
};

export function colorButtonsReducer(state = buttonsInitialState, action) {
  switch (action.type) {
    case CHANGE_BACKGROUND:
      return {
        ...state,
        background: action.payload,
      };
    case CHANGE_COLOR:
      return {
        ...state,
        color: action.payload,
      };

    default:
      return state;
  }
}

export function switchContentReducer(state = buttonsInitialState, action) {
  switch (action.type) {
    case CHANGE_CONTENT:
      return {
        ...state,
        switcheroo: action.payload,
      };
    default:
      return state;
  }
}

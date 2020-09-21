import { ADD_USER, INVALID_DATA } from "../constants/constants";

function dataValidationMiddleWare({ dispatch }) {
  return function (next) {
    return function (action) {
      if (action.type === ADD_USER) {
        if (
          action.payload.name.length < 3 ||
          !(
            action.payload.email.includes("@") &&
            action.payload.email.includes(".")
          )
        ) {
          return dispatch({ type: INVALID_DATA });
        }
      }
      return next(action);
    };
  };
}

export default dataValidationMiddleWare;

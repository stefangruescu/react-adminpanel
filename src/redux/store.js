import { createStore, applyMiddleware, combineReducers } from "redux";
import userReducer from "./reducers/userReducer";
import requestPostsReducer from "./reducers/postReducer";
import {
  colorButtonsReducer,
  switchContentReducer,
} from "./reducers/buttonsReducer";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import dataValidationMiddleWare from "./middleware/middleware";

const rootReducer = combineReducers({
  userReducer,
  requestPostsReducer,
  colorButtonsReducer,
  switchContentReducer,
});
const logger = createLogger();
const store = createStore(
  rootReducer,
  applyMiddleware(dataValidationMiddleWare, thunkMiddleware, logger)
);

export default store;

import {
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCES,
  REQUEST_USERS_FAILED,
  DELETE_USER,
  ADD_USER,
} from "../constants/constants";
import reduceReducers from "reduce-reducers";

const userInitialState = {
  users: [],
  isPendingUsers: false,
};
function requestUsersReducer(state = userInitialState, action) {
  switch (action.type) {
    case REQUEST_USERS_SUCCES:
      return {
        ...state,
        users: [...state.users, ...action.payload],
        isPendingUsers: false,
      };
    case REQUEST_USERS_PENDING:
      return {
        ...state,
        isPendingUsers: true,
      };
    case REQUEST_USERS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPendingUsers: false,
      };
    default:
      return state;
  }
}

function deleteUserReducer(state = userInitialState, action) {
  switch (action.type) {
    case DELETE_USER:
      return {
        ...state,
        users: [...state.users.filter((user) => user.id !== action.payload)],
      };
    default:
      return state;
  }
}

function addUserReducer(state = userInitialState, action) {
  switch (action.type) {
    case ADD_USER:
      return {
        ...state,
        users: [...state.users, action.payload],
      };
    default:
      return state;
  }
}

const userReducer = reduceReducers(
  userInitialState,
  requestUsersReducer,
  addUserReducer,
  deleteUserReducer
);

export default userReducer;

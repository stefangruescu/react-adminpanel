import {
  CHANGE_BACKGROUND,
  CHANGE_COLOR,
  REQUEST_USERS_PENDING,
  REQUEST_USERS_SUCCES,
  REQUEST_USERS_FAILED,
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCES,
  REQUEST_POSTS_FAILED,
  DELETE_USER,
  ADD_USER,
  CHANGE_CONTENT,
} from "../constants/constants";
import reduceReducers from "reduce-reducers";

const initialState = {
  background: "white",
  color: "black",
  users: [],
  posts: [],
  isPendingUsers: false,
  isPendingPosts: false,
  error: "",
  switcheroo: "users",
};

function colorButtonsReducer(state = initialState, action) {
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

function requestUsersReducer(state = initialState, action) {
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

function requestPostsReducer(state = initialState, action) {
  switch (action.type) {
    case REQUEST_POSTS_SUCCES:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
        isPendingPosts: false,
      };
    case REQUEST_POSTS_PENDING:
      return {
        ...state,
        isPendingPosts: true,
      };
    case REQUEST_POSTS_FAILED:
      return {
        ...state,
        error: action.payload,
        isPendingPosts: false,
      };
    default:
      return state;
  }
}

function deleteUserReducer(state = initialState, action) {
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

function addUserReducer(state = initialState, action) {
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

function switchContentReducer(state = initialState, action) {
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

const reducer = reduceReducers(
  initialState,
  colorButtonsReducer,
  requestPostsReducer,
  requestUsersReducer,
  deleteUserReducer,
  addUserReducer,
  switchContentReducer
);
export { reducer };

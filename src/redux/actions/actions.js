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

export function changeBackground(payload) {
  return {
    type: CHANGE_BACKGROUND,
    payload,
  };
}

export function changeColor(payload) {
  return {
    type: CHANGE_COLOR,
    payload,
  };
}

export const requestUsers = () => (dispatch) => {
  dispatch({ type: REQUEST_USERS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) =>
      dispatch({
        type: REQUEST_USERS_SUCCES,
        payload: users.filter((user) => user.id < 10),
      })
    )
    .catch((error) => dispatch({ type: REQUEST_USERS_FAILED, payload: error }));
};

export const requestPosts = () => (dispatch) => {
  dispatch({ type: REQUEST_POSTS_PENDING });
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) =>
      dispatch({
        type: REQUEST_POSTS_SUCCES,
        payload: posts.filter((post) => post.id < 10),
      })
    )
    .catch((error) => dispatch({ type: REQUEST_POSTS_FAILED, payload: error }));
};

export function deleteUser(payload) {
  return {
    type: DELETE_USER,
    payload,
  };
}

export function addUser(payload) {
  return {
    type: ADD_USER,
    payload,
  };
}

export function changeContent(payload) {
  return {
    type: CHANGE_CONTENT,
    payload,
  };
}

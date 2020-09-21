import {
  REQUEST_POSTS_FAILED,
  REQUEST_POSTS_PENDING,
  REQUEST_POSTS_SUCCES,
} from "../constants/constants";

const postInitialState = {
  posts: [],
  isPendingPosts: false,
};

function requestPostsReducer(state = postInitialState, action) {
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

export default requestPostsReducer;

import React from "react";
import PostItem from "./PostItem";
import { connect } from "react-redux";

function mapStateToProps(state) {
  return {
    posts: state.requestPostsReducer.posts,
  };
}

function PostList(props) {
  const { posts } = props;

  return (
    <div className='post-list'>
      {posts.map((post) => {
        return <PostItem title={post.title} body={post.body} key={post.id} />;
      })}
    </div>
  );
}

export default connect(mapStateToProps)(PostList);

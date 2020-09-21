import React from "react";
import UserList from "./components/UserList";
import UserAddForm from "./components/UserAddForm";
import "./App.scss";
import PostList from "./components/PostList";
import Layout from "./components/Layout/Layout";
import { connect } from "react-redux";
import {
  changeBackground,
  changeColor,
  requestPosts,
  requestUsers,
  changeContent,
} from "./redux/actions/actions";

function mapStateToProps(state) {
  return {
    background: state.colorButtonsReducer.background,
    color: state.colorButtonsReducer.color,
    switcheroo: state.switchContentReducer.switcheroo,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changeBackgroundWithDispatch: (background) => {
      dispatch(changeBackground(background));
    },
    changeColorWithDispatch: (color) => {
      dispatch(changeColor(color));
    },
    requestPostsWithDispatch: () => {
      dispatch(requestPosts());
    },
    requestUsersWithDispatch: () => {
      dispatch(requestUsers());
    },
    changeContentWithDispatch: (switcheroo) => {
      dispatch(changeContent(switcheroo));
    },
  };
}

class App extends React.Component {
  componentDidMount() {
    this.props.requestPostsWithDispatch();
    this.props.requestUsersWithDispatch();
  }

  render() {
    const {
      background,
      color,
      switcheroo,
      changeBackgroundWithDispatch,
      changeColorWithDispatch,
      changeContentWithDispatch,
    } = this.props;

    return (
      <Layout>
        <div
          className='container'
          style={{
            background: background,
            color: color,
          }}
        >
          <div className='app'>
            <UserAddForm />
            {switcheroo === "users" ? <UserList /> : <PostList />}
          </div>

          <div className='buttons'>
            <div className='color-buttons'>
              <div className='button-layout'>
                <label htmlFor='background'>Schimba culoarea paginii</label>
                <input
                  type='color'
                  id='background'
                  onChange={(event) =>
                    changeBackgroundWithDispatch(event.target.value)
                  }
                />
              </div>
              <div className='button-layout'>
                <label htmlFor='color'>Schimba culoarea textului</label>
                <input
                  type='color'
                  id='color'
                  onChange={(event) =>
                    changeColorWithDispatch(event.target.value)
                  }
                />
              </div>
            </div>

            <div className='data-buttons'>
              <button
                onClick={(event) =>
                  changeContentWithDispatch(event.target.value)
                }
                value='posts'
              >
                Posts
              </button>
              <button
                onClick={(event) =>
                  changeContentWithDispatch(event.target.value)
                }
                value='users'
              >
                Users
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

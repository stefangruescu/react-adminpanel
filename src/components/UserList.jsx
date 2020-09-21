import React from "react";
import UserItem from "./UserItem";
import { connect } from "react-redux";
import { deleteUser } from "../redux/actions/actions";

function mapStateToProps(state) {
  return {
    users: state.userReducer.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    deleteUserWithDispatch: (id) => {
      dispatch(deleteUser(id));
    },
  };
}

function Salary(index, asciiName) {
  let asciiSum = 0;
  asciiName.split("").forEach((letter) => {
    asciiSum += letter.charCodeAt(0);
  });
  return asciiSum - index;
}

function UserList(props) {
  const { users, deleteUserWithDispatch } = props;
  return (
    <div className='user-container'>
      <div className='user-list'>
        {users.map((user, index) => {
          return (
            <UserItem
              id={user.id}
              name={user.name}
              salary={Salary(index + 1, user.name)}
              email={user.email}
              isGoldClient={user.isGoldClient}
              deleteUser={deleteUserWithDispatch}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserList);

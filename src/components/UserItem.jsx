import React from "react";
import "./UserItem.scss";

function UserItem(props) {
  const { name, email, isGoldClient, id, salary, deleteUser } = props;
  return (
    <div className='user-item'>
      <h3>{name}</h3>
      {id < 10 ? (
        <img
          src={require(`../assets/img/photo-${id}.jpg`)}
          alt='person'
          className='user-photo'
        />
      ) : (
        <img
          src={require(`../assets/img/photo-${1}.jpg`)}
          alt='person'
          className='user-photo'
        />
      )}
      <div className='user-content'>
        <p>{salary} euro</p>
        <p>{email}</p>
        {isGoldClient ? <h3>Client GOLD</h3> : null}
      </div>
      <button
        className='btn-delete'
        onClick={() => {
          deleteUser(id);
        }}
      >
        Sterge utilizator
      </button>
    </div>
  );
}

export default UserItem;

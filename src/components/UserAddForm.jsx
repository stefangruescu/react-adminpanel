import React from "react";
import "./UserAddForm.scss";
import { connect } from "react-redux";
import { addUser } from "../redux/actions/actions";

function mapStateToProps(state) {
  return {
    users: state.userReducer.users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addUserWithDispatch: (user) => {
      dispatch(addUser(user));
    },
  };
}

class UserAddForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      nameError: "",
      email: "",
      emailError: "",
      isGoldClient: false,
    };
  }

  updateName(event) {
    this.setState({ name: event.target.value });
  }

  updateEmail(event) {
    this.setState({ email: event.target.value });
  }

  updateIsGoldClient(event) {
    this.setState({ isGoldClient: event.target.checked });
  }

  render() {
    const { name, email, isGoldClient } = this.state;
    const { addUserWithDispatch, users } = this.props;

    return (
      <form
        className='user-add-form'
        onSubmit={(event) => {
          event.preventDefault();
          addUserWithDispatch({
            id: users.length + 1,
            name,
            email,
            isGoldClient,
          });
        }}
      >
        {name.length < 3 && name.length > 0 ? (
          <span className='error'>Username must have at least 3 letters</span>
        ) : null}
        <label htmlFor='name'>Nume:</label>
        <input
          type='text'
          name='name'
          placeholder='Name...'
          onChange={(event) => this.updateName(event)}
        />
        {(!(email.includes("@") && email.includes(".")) && email.length) > 0 ? (
          <span className='error'>Email must include "@" and "."</span>
        ) : null}
        <label htmlFor='email'>Email:</label>
        <input
          type='text'
          name='email'
          placeholder='Email Adress...'
          onChange={(event) => this.updateEmail(event)}
        />
        <div className='checkbox-align'>
          <label htmlFor='is-gold-client'>Client GOLD</label>
          <input
            type='checkbox'
            name='is-gold-client'
            value='true'
            onChange={(event) => this.updateIsGoldClient(event)}
            className='option-input'
          />
        </div>

        <button type='submit' value='Introdu utilizatorul' className='submit'>
          Submit
        </button>
      </form>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserAddForm);

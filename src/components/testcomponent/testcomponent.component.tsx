import React, { ChangeEvent, useState } from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectCurrentUser } from '../../redux/user/user.selectors';
import { User, setCurrentUser } from '../../redux/user/user.actions';
import { AppState } from '../../redux/rootReducer';

interface Props {
  currentUser?: User;
  setCurrentUser(user: User): void;
}

const Test = ({ currentUser, setCurrentUser }: Props) => {
  const [username, setUsername] = useState('');

  const changeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    console.log(currentUser?.username);
  };

  const changeState = () => {
    setCurrentUser({ username: username });
  };

  return (
    <div>
      <h2>{currentUser?.username}</h2>
      <input type="text" value={username} onChange={changeInput} placeholder="Type User Here" />
      <button onClick={changeState}>Some button here</button>
    </div>
  );
};

const mapStateToProp = createStructuredSelector<AppState, { currentUser: { username: string } }>({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  setCurrentUser: bindActionCreators(setCurrentUser, dispatch),
});

export default connect(mapStateToProp, mapDispatchToProps)(Test);

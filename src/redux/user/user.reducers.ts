import { Action, User } from './user.actions';
import { UserActionTypes } from './user.types';

export interface UserState {
  currentUser: User;
}

const initialState = {
  currentUser: { username: 'DEFAULT_USER' },
};

const userReducer = (state: UserState = initialState, action: Action) => {
  switch (action.type) {
    case UserActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
};

export default userReducer;

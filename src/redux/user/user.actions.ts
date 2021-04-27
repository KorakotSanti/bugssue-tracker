import { UserActionTypes } from './user.types';

export type Action = { type: 'DEFAULT'; payload: { username: string } };

export interface User {
  username: string;
}

export const setCurrentUser = (user: User) => ({
  type: UserActionTypes.SET_CURRENT_USER,
  payload: user,
});

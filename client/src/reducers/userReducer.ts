import { ACTION } from '../actions/types';

export interface UserStore {
  userName: string;
}

const initialState = {
  userName: 'nop'
}

export const userReducer = (state: UserStore = initialState, action: any) => {
  switch (action.type) {
    // case ACTION.SIGN_IN:
      // return { ...state, userName: action.payload.userName};
    default:
      return state;
  }
};
import { ACTION } from '../actions/types';

export interface ChatStore {
}

export const chatReducer = (state: ChatStore = {}, action: any) => {
  switch (action.type) {
    case ACTION.RECIEVE_SOCKET_MESSAGE:
      console.log('chatReducer: RECIEVE_SOCKET_MESSAGE');
      return state;
    default:
      return state;
  }
};

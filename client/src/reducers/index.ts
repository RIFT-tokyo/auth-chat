import { chatReducer, ChatStore } from './chatReducer';
import { combineReducers } from 'redux';
import { userReducer, UserStore } from './userReducer';

export interface StoreState {
  chat: ChatStore;
  user: UserStore;
}

export default combineReducers<StoreState>({
  chat: chatReducer,
  user: userReducer
});

import { chatReducer, ChatStore } from './chatReducer';
import { combineReducers } from 'redux';

export interface StoreState {
  chat: ChatStore;
}

export default combineReducers<StoreState>({
  chat: chatReducer,
});

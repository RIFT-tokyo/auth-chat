import { ACTION } from '../actions/types';

export interface Message {
	from: string;
	msg: string;
	date: Date;
};

export interface ChatStore {
  channels: {
    [channelID: string]: Message[];
  }
}

const initialSteate = {
  channels: {
    '1': [],
  }
};

export const chatReducer = (state: ChatStore = initialSteate, action: any) => {
  switch (action.type) {
    case ACTION.RECIEVE_SOCKET_MESSAGE:
      let { channel, from, msg, date } = action.payload;
      return {
        ...state,
        channels: {
          ...state.channels,
          [channel]: [...state.channels[channel], {from: from, msg: msg, date: date}]
        }
      }
    case ACTION.GET_INITIAL_DATA:
      return {
        ...state,
        channels: action.payload
      };
    default:
      return state;
  }
};

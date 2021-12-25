export enum ACTION {
  RECIEVE_SOCKET_MESSAGE,
  SEND_SOCKET_MESSAGE,
  INITIALIZE_SOCKET,
}

export type ChatActionTypes =
  | RecieveMessageAction

export type SocketActions =
 | SendMessageAction
 | InitializeSocketAction

export type InitializeSocketAction = {
  type: ACTION.INITIALIZE_SOCKET;
  payload: undefined;
};

export type SendMessageAction = {
  type: ACTION.SEND_SOCKET_MESSAGE;
  payload: SendMessageData;
};

export type RecieveMessageAction = {
  type: ACTION.RECIEVE_SOCKET_MESSAGE;
  payload: RecieveMessageData;
}

export interface SendMessageData {
  type: 'channelMessage';
//   server: string;
  channel: string;
  from: string;
  msg: string;
}

export interface RecieveMessageData {
  // server: string;
  channel: string;
  from: string;
  msg: string;
  date: Date;
}
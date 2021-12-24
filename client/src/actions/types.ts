export enum ACTION {
  SEND_SOCKET_MESSAGE,
}

export type SocketActions =
 | SendMessageAction

export type SendMessageAction = {
  type: ACTION.SEND_SOCKET_MESSAGE;
  payload: SendMessageData;
};

export interface SendMessageData {
  type: 'channelMessage';
//   server: string;
  channel: string;
  from: string;
  msg: string;
}

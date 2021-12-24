import { ACTION, SendMessageAction, SendMessageData } from "./types";

export const sendMessage = (message: SendMessageData): SendMessageAction => ({
	type: ACTION.SEND_SOCKET_MESSAGE,
	payload: message
});

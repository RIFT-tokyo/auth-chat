import { ACTION, RecieveMessageAction, RecieveMessageData, SendMessageAction, SendMessageData } from "./types";

export const sendMessage = (message: SendMessageData): SendMessageAction => ({
	type: ACTION.SEND_SOCKET_MESSAGE,
	payload: message
});

export const recieveMessage = (message: RecieveMessageData): RecieveMessageAction => ({
	type: ACTION.RECIEVE_SOCKET_MESSAGE,
	payload: message
});

export const loadUserData = (userID: string):  => ({

	/*
axios(/user/data?userName=tkomatsu)

{
	"tkomatsu": {
	"channels": {
		"general": Messages[],
		"random": Messages[],
	}
}
}

*/
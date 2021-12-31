import axios from '../components/Api/api';
import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

import { ACTION, RecieveMessageAction, RecieveMessageData, SendMessageAction, SendMessageData } from "./types";

export const sendMessage = (message: SendMessageData): SendMessageAction => ({
	type: ACTION.SEND_SOCKET_MESSAGE,
	payload: message
});

export const recieveMessage = (message: RecieveMessageData): RecieveMessageAction => ({
	type: ACTION.RECIEVE_SOCKET_MESSAGE,
	payload: message
});

export const loadUserData = (userName: string) => {
	return async (dispatch: ThunkDispatch<{}, {}, AnyAction>) => {
		const res = await axios.get('/users/' + userName + '/data');

		dispatch({type: ACTION.GET_INITIAL_DATA, payload: res.data});
	};
};

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
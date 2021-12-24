import { io } from "socket.io-client";
import { Dispatch } from "react";
import { AnyAction, MiddlewareAPI } from 'redux';
import { ACTION, SocketActions } from "../actions/types";

export const socketMiddleware = (baseUrl: string) => {
	return (storeAPI: MiddlewareAPI) => {
		let socket = io(baseUrl);

		return (next: Dispatch<AnyAction>) => (action: SocketActions) => {
			if (action.type === ACTION.SEND_SOCKET_MESSAGE) {
				console.log('きてる')
				socket.emit('simple-chat-message', action.payload);
				return;
			}

			return next(action);
		}

	}
}
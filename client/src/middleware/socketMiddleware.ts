import { io, Socket } from "socket.io-client";
import { Dispatch } from "react";
import { AnyAction, MiddlewareAPI } from 'redux';
import { ACTION, SocketActions } from "../actions/types";

export const socketMiddleware = (baseUrl: string) => {
	return (storeAPI: MiddlewareAPI) => {
		let socket = io(baseUrl);
		// let listener: SocketIOClient.Emitter;

		return (next: Dispatch<AnyAction>) => (action: SocketActions) => {
			// if (action.type === ACTION.SIGN_IN) {
				// listner = setupSocketListner(socket, storeAPI)
			if (action.type === ACTION.INITIALIZE_SOCKET) {
				setupSocketListner(socket, storeAPI);
			}
			// }

			if (action.type === ACTION.SEND_SOCKET_MESSAGE) {
				socket.emit('simple-chat-message', action.payload);
				return;
			}

			return next(action);
		}

	}
}

const setupSocketListner = (socket: Socket, storeAPI: MiddlewareAPI) => {
	return socket.on('update', (action: any) => {
		if (action.type === 'message') {
			storeAPI.dispatch({
				type: ACTION.RECIEVE_SOCKET_MESSAGE,
				payload: action.payload
			});
		}
	})
}

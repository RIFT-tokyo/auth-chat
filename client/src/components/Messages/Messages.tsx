import { useSelector } from 'react-redux';
import { StoreState } from '../../reducers';
import { Message } from '../../reducers/chatReducer';


const Messages = () => {
	const chatStore = useSelector((state: StoreState) => state.chat);

	let messages: Message[] = chatStore.channels['1'];
	return (
		<>
			<div>{messages.length}</div>
			<div>
				{messages.map((message, index) => {
					return (
						<div key={index}>
							<span>{message.from}</span>
							<br />
							<span>{message.msg}</span>
							<br />
							<span>{message.date}</span>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Messages;
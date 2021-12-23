
interface Message {
	from: string;
	content: string;
	date: Date;
};

const Messages = () => {
	let messages: Message[] = [{from: 'John', content: 'Hello', date: new Date()}, {from: 'Bob', content: 'Hello John', date: new Date()}];
	return (
		<>
			<div>
				{messages.map((message, index) => {
					return (
						<div key={index}>
							<span>{message.from}</span>
							<br />
							<span>{message.content}</span>
							<br />
							<span>{message.date.toString()}</span>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Messages;
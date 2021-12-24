import { useState } from "react";
import { useDispatch } from "react-redux";
import { sendMessage } from "../../actions";
import { SendMessageData } from "../../actions/types";

const SendMessage = () => {
  const [chatMessage, setChatMessage] = useState('');
  const dispatch = useDispatch();

  const handleOnChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (e.target.value !== '\n') setChatMessage(e.target.value)
  };

  const handleSubmit = (message: SendMessageData) => {
    dispatch(sendMessage(message));
    setChatMessage('');
  }

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      handleSubmit({
        type: 'channelMessage',
        channel: '6',
        from: '10',
        msg: chatMessage
      })
    }
  };

  return (
    <>
      <textarea name="" id="" cols={30} rows={10} onChange={e => handleOnChange(e)} onKeyPress={e => handleKeyPress(e)}>text area test</textarea>
    </>
  );
};

export default SendMessage;
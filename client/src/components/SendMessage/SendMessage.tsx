import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { sendMessage } from "../../actions";
import { SendMessageData } from "../../actions/types";
import { StoreState } from '../../reducers';

const SendMessage = () => {
  const { userName } = useSelector((state: StoreState) => state.user);

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
        channel: '1',
        from: userName,
        msg: chatMessage
      })
    }
  };

  return (
    <>
      <textarea name="" id="" value={chatMessage} cols={30} rows={10} onChange={e => handleOnChange(e)} onKeyPress={e => handleKeyPress(e)} />
    </>
  );
};

export default SendMessage;
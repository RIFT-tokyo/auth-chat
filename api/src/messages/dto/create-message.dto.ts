export class CreateMessageDto {
  type: 'channelMessage';
//   server: string;
  channel: string;
  from: string;
  msg: string;
}

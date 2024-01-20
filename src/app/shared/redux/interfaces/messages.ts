export interface IMessage {
  message:string;
  status:StatusMessage;
  uuid?:string;
}

export type StatusMessage = 'Success' | 'Error' | ''

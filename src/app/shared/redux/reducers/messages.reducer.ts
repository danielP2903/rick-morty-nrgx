import { createReducer, on } from "@ngrx/store";
import { IMessage } from "../interfaces/messages";
import { messageStatus } from "../actions/common/messages.actions";
import { v4 as uuidv4 } from 'uuid';

export const messageState:IMessage = {
    message:'',
    status:'',
    uuid:''
}
export const messageReducer = createReducer(
  messageState,
  on(messageStatus,(state,{message}) => {
    return{
      ...state,
      message:message.message,
      status:message.status,
      uuid:message.uuid
    }
  })
)

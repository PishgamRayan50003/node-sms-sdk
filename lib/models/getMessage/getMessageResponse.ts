import { ApiStatusCode } from "enums";

export interface GetMessageResponse {
  statusCode: ApiStatusCode;
  messages?: MessageDto[];
}

interface MessageDto {
  privateNumber: string;
  senderMobile: string;
  smsText: string;
  dateTimeReceive: Date;
}

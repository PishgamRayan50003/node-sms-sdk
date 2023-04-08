import { ApiStatusCode } from "enums";

export interface GetMessageResponse {
  StatusCode: ApiStatusCode;
  Messages: MessageDto[];
}

interface MessageDto {
  PrivateNumber: string;
  SenderMobile: string;
  SmsText: string;
  DateTimeReceive: Date;
}

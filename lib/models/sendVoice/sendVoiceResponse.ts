import { ApiStatusCode } from "enums";

export interface SendVoiceResponse {
  /**
   * شناسه صف یا صندوق
   */
  MessageId: number;
  /**
   * وضعیت ارسال
   */
  StatusCode: ApiStatusCode;
}

import { ApiStatusCode } from "enums";

export interface SendVoiceResponse {
  /**
   * شناسه صف یا صندوق
   */
  messageId?: number;
  /**
   * وضعیت ارسال
   */
  statusCode: ApiStatusCode;
}

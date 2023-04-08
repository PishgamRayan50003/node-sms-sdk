import { ApiStatusCode } from "enums";

export interface SendSmsResponse {
  /**
   * شناسه صف یا صندوق
   */
  MessageId: number;
  /**
   * وضعیت ارسال
   */
  StatusCode: ApiStatusCode;
  /**
   * تعداد بلک لیست
   */
  BlackListCount: number;
}

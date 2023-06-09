import { ApiStatusCode } from "enums";

export interface SendSmsResponse {
  /**
   * شناسه صف یا صندوق
   */
  messageId?: number;
  /**
   * وضعیت ارسال
   */
  statusCode: ApiStatusCode;
  /**
   * تعداد بلک لیست
   */
  blackListCount?: number;
}

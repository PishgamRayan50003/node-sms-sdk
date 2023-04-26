export interface GetVoiceStatusRequest {
  /**
   * توکن تایید شده
   */
  token: string;
  /**
   * شماره فرستنده
   */
  senderNumber: string;
  /**
   * شناسه صوت
   */
  messageId: number;
}

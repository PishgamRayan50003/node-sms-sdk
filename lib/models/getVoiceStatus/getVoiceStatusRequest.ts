export interface GetVoiceStatusRequest {
  /**
   * توکن تایید شده
   */
  Token: string;
  /**
   * شماره فرستنده
   */
  SenderNumber: string;
  /**
   * شناسه صوت
   */
  MessageId: number;
}

export interface SendVoiceRequest {
  /**
   * توکن تایید شده
   */
  token: string;
  /**
   * شماره فرستنده
   */
  senderNumber: string;
  /**
   * لیست شماره ها
   */
  recipientNumbers: string[];
  /**
   * شناسه صوت
   */
  voiceMessageId: number;
  /**
   * چند بار پیام ارسال بشه در صورت موفق نبودن
   */
  maxTryCount: number;
  /**
   * چند دقیقه زنگ را بزنه
   */
  minuteBetweenTries: number;
}

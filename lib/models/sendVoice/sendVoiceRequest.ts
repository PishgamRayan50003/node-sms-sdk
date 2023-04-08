export interface SendVoiceRequest {
  /**
   * توکن تایید شده
   */
  Token: string;
  /**
   * شماره فرستنده
   */
  SenderNumber: string;
  /**
   * لیست شماره ها
   */
  RecipientNumbers: string[];
  /**
   * شناسه صوت
   */
  VoiceMessageId: number;
  /**
   * چند بار پیام ارسال بشه در صورت موفق نبودن
   */
  MaxTryCount: number;
  /**
   * چند دقیقه زنگ را بزنه
   */
  MinuteBetweenTries: number;
}

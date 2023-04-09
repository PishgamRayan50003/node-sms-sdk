export interface SendSmsRequest {
  /**
   * توکن تایید شده
   */
  token: string;
  /**
   * شماره فرستنده
   */
  senderNumber: string;
  /**
   * متن های پیامک، اگر یکی بود به همه شماره ها بده اگر مساوی بود نظیر به نظیر
   */
  messageBodies: string[];
  /**
   * لیست شماره ها
   */
  recipientNumbers: string[];
}

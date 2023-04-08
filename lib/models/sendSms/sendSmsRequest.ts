export interface SendSmsRequest {
  /**
   * توکن تایید شده
   */
  Token: string;
  /**
   * شماره فرستنده
   */
  SenderNumber: string;
  /**
   * متن های پیامک، اگر یکی بود به همه شماره ها بده اگر مساوی بود نظیر به نظیر
   */
  MessageBodies: string[];
  /**
   * لیست شماره ها
   */
  RecipientNumbers: string[];
}

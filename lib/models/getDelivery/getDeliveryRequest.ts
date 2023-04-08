export interface GetDeliveryRequest {
  /**
   * توکن تایید شده
   */
  Token: string;
  /**
   * شناسه صف یا صندوق
   */
  MessageId: number;
  /**
   * آرایه ای ازرشته های گیرندگان حداکثر 100 عدد
   */
  RecipientNumbers: string[];
}

export interface GetDeliveryRequest {
  /**
   * توکن تایید شده
   */
  token: string;
  /**
   * شناسه صف یا صندوق
   */
  messageId: number;
  /**
   * آرایه ای ازرشته های گیرندگان حداکثر 100 عدد
   */
  recipientNumbers: string[];
}

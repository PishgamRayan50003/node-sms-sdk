export interface GetMessageRequest {
  /**
   * توکن تایید شده
   */
  Token: string;
  /**
   * از تاریخ به صورت شمسی مثال
   * 1401/10/15
   */
  DateTimeFrom: string;
  /**
   * تا تاریخ به صورت شمسی مثال
   * 1401/10/15
   */
  DateTimeTo: string;
  PrivateNumber: string;
  /**
   * IsRead
   * به این مقدار به روز رسانی می شود
   * در صورت ترو شدن مجددا پیام بازخوانی نمی شود
   */
  MarkAsRead: boolean;
}

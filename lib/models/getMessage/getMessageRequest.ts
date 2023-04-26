export interface GetMessageRequest {
  /**
   * توکن تایید شده
   */
  token: string;
  /**
   * از تاریخ به صورت شمسی مثال
   * 1401/10/15
   */
  dateTimeFrom: string;
  /**
   * تا تاریخ به صورت شمسی مثال
   * 1401/10/15
   */
  dateTimeTo: string;
  privateNumber: string;
  /**
   * IsRead
   * به این مقدار به روز رسانی می شود
   * در صورت ترو شدن مجددا پیام بازخوانی نمی شود
   */
  markAsRead: boolean;
}

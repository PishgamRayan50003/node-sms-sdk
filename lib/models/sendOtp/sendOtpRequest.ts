export interface SendOtpRequest {
  /**
   * توکن تایید شده
   */
  Token: string;
  /**
   * شناسه قالب پیامک احرازهویت
   */
  OtpId: number;
  /**
   * پارامترهای قالب پیامک احرازهویت
   */
  Parameters: object[];
  /**
   * شماره فرستنده
   */
  SenderNumber: string;
  /**
   * لیست شماره ها
   */
  RecipientNumbers: string[];
}

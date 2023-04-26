export interface SendOtpRequest {
  /**
   * توکن تایید شده
   */
  token: string;
  /**
   * شناسه قالب پیامک احرازهویت
   */
  otpId: number;
  /**
   * پارامترهای قالب پیامک احرازهویت
   */
  parameters: object[];
  /**
   * شماره فرستنده
   */
  senderNumber: string;
  /**
   * لیست شماره ها
   */
  recipientNumbers: string[];
}

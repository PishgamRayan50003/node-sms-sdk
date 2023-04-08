export interface SendVoiceOtpRequest {
  /**
   * توکن تایید شده
   */
  Token: string;
  /**
   * شماره فرستنده
   */
  SenderNumber: string;
  /**
   * شماره همراه یا ثابت
   */
  Number: string;
  /**
   * کد دلخواه خود را وارد نمایید
   * حداقل 4 و حداکثر 8 رقم
   */
  OptionalCode?: number;
}

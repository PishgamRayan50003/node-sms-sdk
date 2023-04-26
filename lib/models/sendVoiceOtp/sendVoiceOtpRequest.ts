export interface SendVoiceOtpRequest {
  /**
   * توکن تایید شده
   */
  token: string;
  /**
   * شماره فرستنده
   */
  senderNumber: string;
  /**
   * شماره همراه یا ثابت
   */
  number: string;
  /**
   * کد دلخواه خود را وارد نمایید
   * حداقل 4 و حداکثر 8 رقم
   */
  optionalCode?: number;
}

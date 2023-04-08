import {
  ApiStatusCode,
  SendVoiceOtpErrors,
  VoiceAuthorizationErrors,
} from "enums";

export interface SendVoiceOtpResponse {
  /**
   * وضعیت ارسال
   */
  StatusCode: ApiStatusCode;
  /**
   * کد ارسال سریع میباشد
   */
  QuickSendId: number;
  /**
   * کد تولید شده میباشد
   */
  GeneratedCode: string;
  /**
   * کد خطاها
   */
  SendVoiceOtpErrors?: SendVoiceOtpErrors;
  /**
   * کد خطاهای احراز
   */
  SendVoiceOtpAuthorizationErrors?: VoiceAuthorizationErrors;
}

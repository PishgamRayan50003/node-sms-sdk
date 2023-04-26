import {
  ApiStatusCode,
  SendVoiceOtpErrors,
  VoiceAuthorizationErrors,
} from "enums";

export interface SendVoiceOtpResponse {
  /**
   * وضعیت ارسال
   */
  statusCode: ApiStatusCode;
  /**
   * کد ارسال سریع میباشد
   */
  quickSendId?: number;
  /**
   * کد تولید شده میباشد
   */
  generatedCode?: string;
  /**
   * کد خطاها
   */
  sendVoiceOtpErrors?: SendVoiceOtpErrors;
  /**
   * کد خطاهای احراز
   */
  sendVoiceOtpAuthorizationErrors?: VoiceAuthorizationErrors;
}

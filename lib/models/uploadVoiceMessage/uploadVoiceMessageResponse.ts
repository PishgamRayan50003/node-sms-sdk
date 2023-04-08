import { ApiStatusCode, VoiceUploadErrors } from "enums";

export interface UploadVoiceMessageResponse {
  /**
   * وضعیت ارسال
   */
  StatusCode: ApiStatusCode;
  /**
   * شناسه ارسال
   */
  MessageId: number;
  /**
   * کد خطاهای آپلود فایل صوتی جدید
   */
  UploadVoiceErrors?: VoiceUploadErrors;
}

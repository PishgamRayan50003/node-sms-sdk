import { ApiStatusCode, VoiceUploadErrors } from "enums";

export interface UploadVoiceMessageResponse {
  /**
   * وضعیت ارسال
   */
  statusCode: ApiStatusCode;
  /**
   * شناسه ارسال
   */
  messageId?: number;
  /**
   * کد خطاهای آپلود فایل صوتی جدید
   */
  uploadVoiceErrors?: VoiceUploadErrors;
}

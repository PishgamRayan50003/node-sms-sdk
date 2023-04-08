export interface UploadVoiceMessageRequest {
    /**
     * توکن تایید شده
     */
    Token: string;
    /**
     * شماره فرستنده
     */
    SenderNumber: string;
    /**
     * عنوان
     */
    Title: string;
    /**
     * فایل به صورت بایت
     */
    File: Uint8Array;
    /**
     * آیا ماندگار باشد؟
     */
    IsPersist: boolean;
    /**
     * شماره همراه که در انتهای صوت اضافه میشود (پیش فرض خالی باشد)
     */
    CallFromCellPhone: string;
}
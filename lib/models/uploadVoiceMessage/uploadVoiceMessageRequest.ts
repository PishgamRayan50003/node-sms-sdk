export interface UploadVoiceMessageRequest {
    /**
     * توکن تایید شده
     */
    token: string;
    /**
     * شماره فرستنده
     */
    senderNumber: string;
    /**
     * عنوان
     */
    title: string;
    /**
     * فایل به صورت بایت
     */
    file: Uint8Array;
    /**
     * آیا ماندگار باشد؟
     */
    isPersist: boolean;
    /**
     * شماره همراه که در انتهای صوت اضافه میشود (پیش فرض خالی باشد)
     */
    callFromCellPhone: string;
}
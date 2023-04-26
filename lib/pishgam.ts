import { ApiStatusCode } from "./enums";
import {
  SendSmsResponse,
  SendSmsRequest,
  GetCreditRequest,
  GetCreditResponse,
  GetDeliveryRequest,
  GetDeliveryResponse,
  GetMessageRequest,
  GetMessageResponse,
  SendVoiceOtpRequest,
  SendVoiceOtpResponse,
  UploadVoiceMessageRequest,
  UploadVoiceMessageResponse,
  GetVoiceStatusRequest,
  GetVoiceStatusResponse,
  SendVoiceRequest,
  SendVoiceResponse,
  SendOtpRequest,
} from "./models";

export class Pishgam {
  private static readonly apiAddress = "http://95.81.81.185:10680/";

  /** برای ارسال پیام استفاده می شود
   * @param {SendSmsRequest} SendSmsRequest - اطلاعات مورد نیاز جهت ارسال پیام
   * @param {AbortController} controller - برای لغو درخواست ارسال پیام استفاده می شود
   */
  public static async sendSmsAsync(
    { token, ...sendSmsRequest }: SendSmsRequest,
    controller?: AbortController
  ): Promise<SendSmsResponse> {
    const body = sendSmsRequest;
    const request = await fetch(`${this.apiAddress}Messages/Send`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
      signal: controller?.signal,
    });

    if ((await request.text()) != null) return await request.json();
    return { statusCode: ApiStatusCode.Failed };
  }

  /** میزان اعتبار کاربر را نمایش می دهد
   * @param {GetCreditRequest} GetCreditRequest - اطلاعات مورد نیاز جهت دریافت اعتبار
   * @param {AbortController} controller - برای لغو درخواست دریافت اعتبار استفاده می شود
   */
  public static async getCreditAsync(
    { token }: GetCreditRequest,
    controller?: AbortController
  ): Promise<GetCreditResponse> {
    const request = await fetch(`${this.apiAddress}Messages/Send`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      signal: controller?.signal,
    });

    if ((await request.text()) != null) return await request.json();
    return { statusCode: ApiStatusCode.Failed };
  }

  /**
   * این متد در پاسخ  آرایه ای از وضعیت دریافت ها را به ترتیب شماره ها در آرایه ی گیرندگان داده شده نمایش می دهد.
   * @param {GetDeliveryRequest} GetDeliveryRequest
   * @param {AbortController} controller
   */
  public static async getDeliveryAsync(
    { token, ...getDeliveryRequest }: GetDeliveryRequest,
    controller?: AbortController
  ): Promise<GetDeliveryResponse> {
    const body = getDeliveryRequest;
    const request = await fetch(`${this.apiAddress}Messages/GetDelivery`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
      signal: controller?.signal,
    });

    if ((await request.text()) != null) return await request.json();
    return { statusCode: ApiStatusCode.Failed };
  }

  /**
   * این متد مربوط به دریافت پیام می باشد و حداکثر 100 پیام بر می گردد و بازه شروع و پایان را باید به صورت شمسی وارد نمایید.
   * @param {GetMessageRequest} GetMessageRequest
   * @param {AbortController} controller
   */
  public static async getMessageAsync(
    { token, ...getMessageRequest }: GetMessageRequest,
    controller?: AbortController
  ): Promise<GetMessageResponse> {
    const body = getMessageRequest;
    const request = await fetch(`${this.apiAddress}Messages/GetMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
      signal: controller?.signal,
    });

    if ((await request.text()) != null) return await request.json();
    return { statusCode: ApiStatusCode.Failed };
  }

  /**
   * از طریق این متد می توانید پیام صوتی با رمز یکبار مصرف را به صورت فوری به شماره(های) انتخابی خود ارسال نمایید
   * و با شماره وارد شده تماس گرفته میشود و رمز یکبار مصرف را به شما اعلام میکند .
   * اگر کد دلخواه  وارد شود کد کد دلخواه  خوانده می شود.
   * ولی اگر کد دلخواه وارد نشود کد 5 رقمی تولید شده خوانده می شود .
   * @param {SendVoiceOtpRequest} SendVoiceOtpRequest
   * @param {AbortController} controller
   */
  public static async sendVoiceOtpAsync(
    { token, ...sendVoiceOtpRequest }: SendVoiceOtpRequest,
    controller?: AbortController
  ): Promise<SendVoiceOtpResponse> {
    const body = sendVoiceOtpRequest;
    const request = await fetch(`${this.apiAddress}Messages/SendVoiceOtp`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
      signal: controller?.signal,
    });

    if ((await request.text()) != null) return await request.json();
    return { statusCode: ApiStatusCode.Failed };
  }

  /**
   * میتوان به صورت byte صدای جدید آپلود کرد
   * @param {UploadVoiceMessageRequest} UploadVoiceMessageRequest
   * @param {AbortController} controller
   */
  public static async uploadVoiceMessageAsync(
    { token, ...uploadVoiceMessageRequest }: UploadVoiceMessageRequest,
    controller?: AbortController
  ): Promise<UploadVoiceMessageResponse> {
    const body = uploadVoiceMessageRequest;
    const request = await fetch(
      `${this.apiAddress}Messages/UploadVoiceMessage`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(body),
        signal: controller?.signal,
      }
    );

    if ((await request.text()) != null) return await request.json();
    return { statusCode: ApiStatusCode.Failed };
  }

  /**
   * بررسی وضعیت فایل آپلود شده
   * @param {GetUploadStatusRequest} GetUploadStatusRequest
   * @param {AbortController} controller
   */
  public static async getVoiceStatusAsync(
    { token, ...getVoiceStatusRequest }: GetVoiceStatusRequest,
    controller?: AbortController
  ): Promise<GetVoiceStatusResponse> {
    const body = getVoiceStatusRequest;
    const request = await fetch(`${this.apiAddress}Messages/GetVoiceStatus`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
      signal: controller?.signal,
    });

    if ((await request.text()) != null) return await request.json();
    return { statusCode: ApiStatusCode.Failed };
  }

  /**
   * ارسال پیامک صوتی
   * @param {SendVoiceRequest} SendVoiceRequest
   * @param {AbortController} controller
   */
  public static async sendVoiceAsync(
    { token, ...sendVoiceRequest }: SendVoiceRequest,
    controller?: AbortController
  ): Promise<SendVoiceResponse> {
    const body = sendVoiceRequest;
    const request = await fetch(`${this.apiAddress}Messages/SendVoice`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
      signal: controller?.signal,
    });

    if ((await request.text()) != null) return await request.json();
    return { statusCode: ApiStatusCode.Failed };
  }

  /**
   * ارسال پیامک احرازهویت
   * @param {SendOtpRequest} SendOtpRequest
   * @param {AbortController} controller
   */
  public static async sendOtpAsync(
    { token, ...sendOtpRequest }: SendOtpRequest,
    controller?: AbortController
  ): Promise<SendSmsResponse> {
    const body = sendOtpRequest;
    const request = await fetch(`${this.apiAddress}Messages/SendVoice`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify(body),
      signal: controller?.signal,
    });

    if ((await request.text()) != null) return await request.json();
    return { statusCode: ApiStatusCode.Failed };
  }
}

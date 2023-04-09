import { ApiStatusCode } from "./enums";
import {
  SendSmsResponse,
  SendSmsRequest,
  GetCreditRequest,
  GetCreditResponse,
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
}

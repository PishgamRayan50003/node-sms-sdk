import { ApiStatusCode } from "enums";

export interface GetCreditResponse {
  /**
   * کد وضعیت
   */
  StatusCode: ApiStatusCode;
  /**
   * اعتبار
   */
  Credit: number;
}

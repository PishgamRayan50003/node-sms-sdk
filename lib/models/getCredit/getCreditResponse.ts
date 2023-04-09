import { ApiStatusCode } from "enums";

export interface GetCreditResponse {
  /**
   * کد وضعیت
   */
  statusCode: ApiStatusCode;
  /**
   * اعتبار
   */
  credit?: number;
}

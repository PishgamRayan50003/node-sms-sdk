import { ApiStatusCode, DeliveryStatus } from "enums";

export interface GetDeliveryResponse {
  /**
   * کد وضعیت
   */
  StatusCode: ApiStatusCode;
  /**
   * آرایه ای از وضعیت دریافت
   */
  DeliveryStatus: DeliveryStatus[];
}

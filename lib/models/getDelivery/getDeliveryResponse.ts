import { ApiStatusCode, DeliveryStatus } from "enums";

export interface GetDeliveryResponse {
  /**
   * کد وضعیت
   */
  statusCode: ApiStatusCode;
  /**
   * آرایه ای از وضعیت دریافت
   */
  deliveryStatus?: DeliveryStatus[];
}

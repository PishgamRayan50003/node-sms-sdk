import { ApiStatusCode, VoiceStatus } from "enums";

export interface GetVoiceStatusResponse {
  StatusCode: ApiStatusCode;
  VoiceStatus: VoiceStatus;
}

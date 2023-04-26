import { ApiStatusCode, VoiceStatus } from "enums";

export interface GetVoiceStatusResponse {
  statusCode: ApiStatusCode;
  voiceStatus?: VoiceStatus;
}

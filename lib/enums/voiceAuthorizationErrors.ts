export const enum VoiceAuthorizationErrors {
  WithoutError = 0,
  InvalidUserNameOrPassword = -1,
  Forbidden = -10,
  Unknown = -20,
  NotAllowWebService = -100,
  MobileNotConfirm = -101,
  UserExpired = -102,
}

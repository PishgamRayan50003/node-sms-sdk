export enum SendVoiceOtpErrors {
  WithoutError = 0,
  InvalidCellPhone = -2,
  NotEnoughBalance = -3,
  InvalidCodeLength = -5,
  InvalidSendTime = -6,
  CannotConnectToServer = -20,
  InActiveOtp = -25,
  ServerError = -500,
}

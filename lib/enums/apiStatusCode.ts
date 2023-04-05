export enum ApiStatusCode {
  Successful,
  SingleSent,
  P2PSent,
  NotFailure,
  MessageBodiesNotEqualToRecipientNumbers,
  SmsTextIsFilter,
  LinkIsNotAllowed,
  RecipientsIsEmpty,
  OrganizationNotFound,
  OrganizationIsInactive,
  OrganizationIsExpired,
  OrganizationOrHierarchyIsInactive,
  OrganizationSendTimeNotValid,
  UserSendInactive,
  UserIsExpired,
  UserNotFound,
  ParentOrganizationIsExpired,
  PrivateNumberNotValid,
  PrivateNumberIsInactive,
  PrivateNumberIsExpired,
  SystemIsOutOfService,
  ErrorInScheduledMessagesInsert,
  ReceiverListBaseBlackListIsEmpty,
  RecipientCountNotValid,
  MessageBodiesIsEmpty,
  Failed,
  MaxRecipientsIs100,
  ErrorInAddToRabbit,
  BeginRequest,
  ParametersNotMatchMessage,
  ParametersIsNull,
  OtpNotFound,
  OtpSent,
  TokenIsNull,
  TokenNotFound,
  IpIsInvalid,
  RemoveBlackListError,
  DatesIsInvalid,
  CheckSendSmsExceptionError,
  GetTokenInfoError,
  PrivateNumberNotSendVoice,
  VoiceOtpSent,
  OptionalCodeLengthInvalid,
  NumberIsEmpty,
  SenderNumberIsEmpty,
  DecreaseSendPriceError,
  ErrorInsertOutBoxMessageDeleteScheduledMessage,
  TitleIsEmpty,
  FileIsEmpty,
  FileFormatNotValid,
  FileUploaded,
  VoiceNotAccepted,
}

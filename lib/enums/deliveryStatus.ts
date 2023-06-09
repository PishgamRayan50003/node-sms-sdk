export const enum DeliveryStatus {
  SentToItc = 3,
  ReceivedByItc = 4,
  BlackList = 14,
  BlackListTable = 30,
  InvalidSender = 26,
  NotSent = 10,
  SentAndReceivedbyPhone = 1,
  HaveNotReceivedToPhone = 2,
  DidNotReceiveToItc = 5,
  NotReceivebyServer = 6,
  SmsIsFilter = 15,
  Sent = 9,
  NotEnoughBalance = 18,
  InvalidUserOrPassword = 24,
  InvalidMobile = 27,
  Stored = 29,
  SmsTextContainLink = 37,
  NotSupportNumberFromOperator = 47,
  ErrorInSending = 7,
  WaitingForSend = 8,
  IsSending = 12,
  WaitingForConfirmation = 17,
  TextIsEmpty = 22,
  Rejected = 33,
  SmsIdNotFound = 34,
  InQueue = 35,
  InvalidSmsText = 36,
  PacketGreaterThan100 = 38,
  MessagesCountAndNumberCountNotMatch = 39,
  InvalidSendTime = 40,
  MessageCountAndCodingCountNotMatch = 41,
  OperatorNotSupport = 42,
  InvalidGroupPrice = 43,
  CodingNotSupport = 44,
  PrivateNumberInActive = 45,
  PrivateNumberExpired = 46,
  IllegalSendTime = 48,
  CanceledFromReceiver = 49,
  InvalidCoding = 50,
  CanceledFromOperator = 51,
  ExpiredFromOperator = 52,
  RejectFromOperator = 53,
  UserNameNotFound = 54,
  UserExpired = 55,
  InActiveUser = 56,
  UdhIsWrong = 57,
  OperatorSystemError = 58,
  NotAccess = 59,
  RejectByItc = 60,
  InvalidRequest = 61,
  PrivateNumberIsBlocked = 62,
  OperatorNotAvailable = 63,
  Unknown = 0,
}

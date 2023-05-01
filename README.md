# Pishgam Rayan Node API

## To use this API you need to have an account on <a href="https://pishgamrayan.com">Pishgam Rayan Sms Panel</a>

<p>
After that you just need to create an api token based on your IP address from <a href="#">create token section</a> .
</p>

## Installation

```bash
npm install --save @pishgamrayan/api
```

or using yarn:

```bash
yarn add @pishgamrayan/api
```

## Usage

```typescript
import { Pishgam } from "@pishgamrayan/api";

const action = Pishgam.sendSmsAsync({
  token: "your token",
  senderNumber: "your sender number",
  messageBodies: ["your first message", "your second message", ... ],
  recipientNumbers: [ "your first recipient number", "your second recipient number", ... ],
}).then((response) => {
  if (response.statusCode.Successful) {
    // Do something when the request was successful
  } else {
    // Do something when the request was not successful
  }
});
```

<p> Note: If count of "messageBodies" and "recipientNumbers" are eqaul the message will be sent as a peer to peer message and if not all of the messages will be sent to all of the numbers you entered.
</p>

All of the methods are async and you may also use them like this:

```typescript
const {statusCode, ...restOfData} = Pishgam.sendSmsAsync({
  token: "your token",
  senderNumber: "your sender number",
  messageBodies: ["your message", ... ],
  recipientNumbers: [ "your first recipient number", "your second recipient number", ... ],
});
```

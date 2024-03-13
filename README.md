# FCM Notification Sender

This project contains a TypeScript script that uses Firebase Admin to send push notifications to devices. It is designed to send a test notification message to a list of device tokens.

## Prerequisites

Before running this script, you will need:

- Node.js installed on your machine.
- A Firebase project set up in the Firebase console.
- The `credentials.json` file, which contains your Firebase project's service account key. You can generate this file in the Firebase console under Project Settings > Service Accounts > Generate New Private Key.
- The `device-tokens.json` file, which should be an array of device token strings to which you want to send notifications.

## Installation

To install the necessary dependencies, run the following command in the project directory:

```sh
$ npm install
```

## Usage

To send a test notification message, run the following command in the project directory:

```sh
$ npm run send
```

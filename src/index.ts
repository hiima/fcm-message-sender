import * as admin from "firebase-admin";

const serviceAccount = require("../credentials.json");
const deviceTokens = require("../device-tokens.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const message = {
  tokens: deviceTokens,
  data: {
    title: "新しいメッセージ",
    body: "これはテストプッシュ通知です。",
  },
};

admin
  .messaging()
  .sendEachForMulticast(message)
  .then((response) => {
    console.log("Successfully sent message:", response);
  })
  .catch((error) => {
    console.log("Error sending message:", error);
  });

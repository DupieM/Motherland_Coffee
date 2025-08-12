// const functions = require("firebase-functions");
// const nodemailer = require("nodemailer");

// // Access SendGrid API key from Firebase config (set with `firebase functions:config:set`)
// // const SENDGRID_API_KEY = functions.config().sendgrid.key;

// const transporter = nodemailer.createTransport({
//   service: "SendGrid",
//   auth: {
//     user: "apikey",
//     pass: SENDGRID_API_KEY,
//   },
// });

// // v1 style HTTPS Callable function
// exports.sendStickerEmail = functions.https.onCall(async (data, context) => {
//   const { email, htmlContent } = data;

//   if (!email || !htmlContent) {
//     // Use HttpsError to send errors to client in v1
//     throw new functions.https.HttpsError(
//       "invalid-argument",
//       "The function must be called with 'email' and 'htmlContent'."
//     );
//   }

//   const mailOptions = {
//     from: "????", // Your verified sender email
//     to: email,
//     subject: "Here's your Motherland Coffee sticker!",
//     html: htmlContent,
//   };

//   try {
//     await transporter.sendMail(mailOptions);
//     console.log("Sticker email sent successfully to:", email);
//     return { success: true, message: "Email sent successfully!" };
//   } catch (error) {
//     console.error("Error sending sticker email:", error);
//     throw new functions.https.HttpsError(
//       "internal",
//       "Failed to send email."
//     );
//   }
// });
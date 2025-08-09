const { onCall } = require("firebase-functions/v2/https"); // Use v2 import
const { setGlobalOptions } = require("firebase-functions/v2"); // For global options if needed
const nodemailer = require("nodemailer");
const { defineString } = require("firebase-functions/v2/params"); // To properly access config variables in v2

// Define the SendGrid API key as a secret parameter for Cloud Functions v2
// This ensures it's securely accessed at runtime.
const SENDGRID_API_KEY = defineString("SENDGRID_KEY");


// Configure the email service using Firebase environment configuration
// For v2 functions, we define global options, like region, if not specified in firebase.json
setGlobalOptions({ region: "us-central1" }); // Ensure this matches your project's region

const transporter = nodemailer.createTransport({
  service: "SendGrid",
  auth: {
    user: "apikey",
    pass: SENDGRID_API_KEY.value(), // Access the secret value
  },
});

// Define the callable function
exports.sendStickerEmail = onCall(async (request) => { // 'request' object for v2 callable functions
  // For callable functions, data and context are properties of the request object
  const { email, htmlContent } = request.data;

  if (!email || !htmlContent) {
    throw new Error(
      "The function must be called with 'email' and 'htmlContent'."
    );
  }

  const mailOptions = {
    from: "dupie.marine21@gmail.com", // Your verified sender email
    to: email,
    subject: "Here's your Motherland Coffee sticker!",
    html: htmlContent,
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log("Sticker email sent successfully to:", email);
    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending sticker email:", error);
    // Throwing HttpsError directly is more common in v1. For v2, throw a standard Error
    // and let the client-side Firebase SDK handle converting it to an HttpsError.
    throw new Error("Failed to send email.");
  }
});
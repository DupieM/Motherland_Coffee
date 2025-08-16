import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import sgMail from "@sendgrid/mail";

dotenv.config();
const app = express();

app.use(cors({
  origin: ["http://localhost:3000", "https://dupiem.github.io/Motherland_Coffee/"]
})); // Allow frontend to call backend
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/send-email", async (req, res) => {
  const { email, htmlContent } = req.body;

  if (!email || !htmlContent) {
    return res.status(400).json({ success: false, message: "Missing email or htmlContent" });
  }

  const msg = {
    to: email,
    from: { email: process.env.SENDER_EMAIL, name: "Motherland Coffee" },
    subject: "Here's your Motherland Coffee sticker!",
    html: htmlContent
  };

  try {
    await sgMail.send(msg);
    console.log(`Sticker email sent to ${email}`);
    res.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    // <-- Put enhanced logging here:
    console.error("Error sending email:", error.response?.body || error);
    res.status(500).json({ success: false, message: "Failed to send email", error: error.response?.body || error.toString() });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));
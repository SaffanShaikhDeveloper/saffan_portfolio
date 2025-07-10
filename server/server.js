import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "saffancollegework@gmail.com",
    pass: "vhcy acfg uctx svsl", // NOT your real Gmail password
  },
});

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: "shaikhsaffan088@gmail.com",
    subject: `Message from ${name}`,
    html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Failed to send email" });
  }
});

app.listen(port, () =>
  console.log("✅ Server running at http://localhost:${port}")
);

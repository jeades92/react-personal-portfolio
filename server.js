const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "jamesfsdesigns@gmail.com",
    pass: "xnjorxjhyhfbbref"
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

app.post("/contact", (req, res) => {
    const { firstName, lastName, email, message, phone } = req.body;
    const name = firstName + " " + lastName;
  
    const mail = {
      from: name,
      to: "jamesfsdesigns@gmail.com",
      subject: "Contact Form Submission - Portfolio",
      html: `<p>Name: ${name}</p>
             <p>Email: ${email}</p>
             <p>Phone: ${phone}</p>
             <p>Message: ${message}</p>`,
    };
  
    contactEmail.sendMail(mail, (error) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: "An error occurred while sending the email" });
      } else {
        res.setHeader("Content-Type", "application/json"); // Set JSON content type
        res.status(200).json({ code: 200, message: "Message Sent" });
      }
    });
  });

app.listen(5055, () => console.log("Server Running on http://localhost:5055"));

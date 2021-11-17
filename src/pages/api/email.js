import { SMTPClient } from 'emailjs';

export default function handler(req, res) {
  const info = req.body;

  const client = new SMTPClient({
    user: process.env.GMAIL_MAIL,
    password: process.env.GMAIL_PASSWORD,
    host: process.env.GMAIL_HOST,
    ssl: true,
  });

  try {
    client.send({
      from: process.env.GMAIL_MAIL,
      to: process.env.GMAIL_MAIL,
      subject: info.subject,
      text: `${info.name}: ${info.text}`,
    });
  } catch (error) {
    res.status(400).end(JSON.stringify({ message: 'Error' }));
    return;
  }

  res.status(200).end(JSON.stringify({ message: 'mail was sending' }));
}

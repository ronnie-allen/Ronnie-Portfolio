import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { Resend } from 'resend';
import 'dotenv/config';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || 'ronnieallen2005@gmail.com',
      replyTo: email,
      subject: `Portfolio Message from ${name}`,
      html: `
        <h2 style="color:#EF4444;">New Contact Form Message</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    res.json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    res.status(500).json({ error: 'Failed to send message. Please try again.' });
  }
});

app.use(express.static(path.join(__dirname, '..', 'dist')));

app.get('/{*path}', (_req, res) => {
  res.sendFile(path.join(__dirname, '..', 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

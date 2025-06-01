import { Resend } from 'resend';

const resend = new Resend('re_HdLLxYna_85vEWQvXtZscQZ2BhZk6cx1E');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, tier, message } = req.body;

  try {
    await resend.emails.send({
      from: 'onboarding@resend.dev', // You must verify this on Resend
      to: 'michael.sanaiha@gmail.com', // Change to your email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Tier:</strong> ${tier}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: 'Email failed to send.' });
  }
}
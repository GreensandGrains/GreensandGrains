
import { Resend } from 'resend';

class MailService {
  private resend: Resend | null = null;

  setApiKey(apiKey: string) {
    this.resend = new Resend(apiKey);
  }

  async sendMail(data: {
    from: string;
    to: string;
    subject: string;
    html: string;
    text: string;
  }) {
    if (!this.resend) {
      throw new Error('API key not set');
    }

    try {
      await this.resend.emails.send({
        from: data.from,
        to: data.to,
        subject: data.subject,
        html: data.html,
        text: data.text,
      });
      return true;
    } catch (error) {
      console.error('Failed to send email:', error);
      return false;
    }
  }
}

const mailService = new MailService();
if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is not set. Emails will not be sent.");
}
mailService.setApiKey(process.env.RESEND_API_KEY || '');

interface EmailData {
  to: string;
  subject: string;
  name: string;
  email: string;
  message: string;
  company?: string;
}

export async function sendEmail(data: EmailData): Promise<boolean> {
  const html = `
    <h2>New Contact Form Submission</h2>
    <p><strong>From:</strong> ${data.name} (${data.email})</p>
    ${data.company ? `<p><strong>Company:</strong> ${data.company}</p>` : ''}
    <p><strong>Subject:</strong> ${data.subject}</p>
    <h3>Message:</h3>
    <p>${data.message.replace(/\n/g, '<br>')}</p>
  `;

  const text = `
    New Contact Form Submission
    ---------------------------
    From: ${data.name} (${data.email})
    ${data.company ? `Company: ${data.company}` : ''}
    Subject: ${data.subject}
    
    Message:
    ${data.message}
  `;

  return mailService.sendMail({
    from: 'greensandgrains2025@gmail.com',
    to: data.to,
    subject: `Contact Form: ${data.subject}`,
    html,
    text,
  });
}

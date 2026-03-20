export async function sendEmailNotification(type: 'lead' | 'booking' | 'order', data: any) {
  try {
    const subject = `New ${type.toUpperCase()} from Meridian Coreline`;
    const html = `
      <h1>New ${type} received</h1>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `;

    console.log(`[Email Mock] Sending to onepercentloss@gmail.com: ${subject}`);
    console.log(`Email data:`, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Failed to send email:', error);
  }
}

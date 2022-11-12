import { Injectable } from '@nestjs/common';
import * as sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(
  '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',
);

@Injectable()
export class MailService {
  async sendMail(to: string, name: string, id: string) {
    await sendgrid.send({
      to: to,
      from: 'cokevitor@gmail.com',
      templateId: 'd-885bc78aa98f41a78f3ba23297f80303',
      dynamicTemplateData: {
        name,
        id,
      },
    });
  }
}

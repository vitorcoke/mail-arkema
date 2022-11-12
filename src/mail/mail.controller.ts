import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { MailService } from './mail.service';

@Controller('mail')
export class MailController {
  constructor(private readonly mailService: MailService) {}
  @MessagePattern('send-mail')
  async sendMail(@Payload() payload: any) {
    const { to, name, id } = payload;

    await this.mailService.sendMail(to, name, id);
  }
}

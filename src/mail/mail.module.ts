import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { MailController } from './mail.controller';
import { MailService } from './mail.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'MAIL_SERVICE',
        transport: Transport.KAFKA,
        options: {
          client: {
            clientId: 'mail',
            brokers: ['localhost:9092'],
          },
          consumer: {
            groupId: 'mail-consumer',
          },
        },
      },
    ]),
  ],
  controllers: [MailController],
  providers: [MailService],
})
export class MailModule {}

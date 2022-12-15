import { CancelNotification, CountRecipientNotifications, GetRecipientNotifications, ReadNotification, SendNotification, UnreadNotification } from '@app/use-cases'
import { Module } from '@nestjs/common'
import { DatabaseModule } from '../database/database.module'
import { NotificationsController } from './controllers/notifications.controller'

@Module({
  imports: [DatabaseModule],
  controllers: [NotificationsController],
  providers: [
    SendNotification,
    CancelNotification,
    GetRecipientNotifications,
    CountRecipientNotifications,
    ReadNotification,
    UnreadNotification
  ],
})
export class HttpModule { }
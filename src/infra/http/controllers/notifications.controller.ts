import { SendNotification, CancelNotification, ReadNotification, UnreadNotification, CountRecipientNotifications, GetRecipientNotifications } from '@app/use-cases'
import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common'
import { CreateNotificationBody } from '../dtos/create-notification-body'
import { NotificationViewModel } from '../view-models/notification-view-model'

@Controller('notifications')
export class NotificationsController {

  constructor(
    private sendNotification: SendNotification,
    private cancelNotification: CancelNotification,
    private readNotification: ReadNotification,
    private unreadNotification: UnreadNotification,
    private countRecipientNotifications: CountRecipientNotifications,
    private getRecipientNotifications: GetRecipientNotifications
  ) { }

  @Patch(':id/cancel')
  async cancel(@Param('id') id: string) {
    await this.cancelNotification.execute({
      notificationId: id
    })
  }

  @Get('count/from/:recipientId')
  async countFromRecipient(@Param('recipientId') recipientId: string) {
    const { count } = await this.countRecipientNotifications.execute({
      recipientId
    })

    return{
      count
    }
  }

  @Get('from/:recipientId')
  async getFromRecipient(@Param('recipientId') recipientId: string) {
    const { notifications } = await this.getRecipientNotifications.execute({
      recipientId
    })

    return {
      notifications: notifications.map(NotificationViewModel.toHTTP)
    }
  }

  @Patch(':id/read')
  async read(@Param('id') id: string) {
    await this.readNotification.execute({
      notificationId: id
    })
  }

  @Patch(':id/unread')
  async unread(@Param('id') id: string) {
    await this.unreadNotification.execute({
      notificationId: id
    })
  }

  @Post()
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId
    })

    return {
      notification: NotificationViewModel.toHTTP(notification)
    }
  }
}

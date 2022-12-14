import { Body, Controller, Post } from '@nestjs/common'
import { SendNotification } from 'src/app/use-cases/send-notification'
import { CreateNotificationBody } from '../dtos/create-notification-body'

@Controller('api')
export class NotificationsController {

  constructor(private sendNotification: SendNotification) {}

  @Post('notifications')
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body

    const { notification } = await this.sendNotification.execute({
      category,
      content,
      recipientId
    })

    return { notification}
  }
}

import { Injectable } from '@nestjs/common'
import { Notification } from '../../entities/notification'
import { Content } from '../../entities/notification-content'
import { NotificationsRepository } from '../../repositories/notifications-repository'

interface ISendNotificationRequest {
  recipientId: string
  content: string
  category: string
}

interface ISendNotificationResponse {
  notification: Notification
}

@Injectable()
export class SendNotification {

  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(request: ISendNotificationRequest): Promise<ISendNotificationResponse> {
    const { category, content, recipientId } = request

    const notification = new Notification({
      recipientId,
      content: new Content(content),
      category,
    })

    await this.notificationsRepository.create(notification)

    return {
      notification
    }
  }
}
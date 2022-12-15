import { Notification } from '@app/entities/notification'
import { Injectable } from '@nestjs/common'
import { NotificationsRepository } from '../../repositories/notifications-repository'

interface IGetRecipientNotificationsRequest {
  recipientId: string
}

interface TCountNotificationResponse {
  notifications: Notification[]
}

@Injectable()
export class GetRecipientNotifications {

  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(request: IGetRecipientNotificationsRequest): Promise<TCountNotificationResponse> {
    const { recipientId } = request

    const notifications = await this.notificationsRepository.findManyByRecipientId(recipientId)

    return {
      notifications
    }
  }
}
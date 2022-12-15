import { Injectable } from '@nestjs/common'
import { NotificationsRepository } from '../../repositories/notifications-repository'

interface ICountNotificationRequest {
  recipientId: string
}

interface TCountNotificationResponse {
  count: number
}

@Injectable()
export class CountRecipientNotifications {

  constructor(private notificationsRepository: NotificationsRepository) { }

  async execute(request: ICountNotificationRequest): Promise<TCountNotificationResponse> {
    const { recipientId } = request

    const count = await this.notificationsRepository.countManyByRecipientId(recipientId)

    return {
      count
    }
  }
}
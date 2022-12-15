import { INotificationProps, Notification } from '@app/entities/notification'
import { Content } from '@app/entities/notification-content'

type Override = Partial<INotificationProps>

export function makeNotification(override: Override = {}) {
  return new Notification({
    category: 'test',
    content: new Content('teste'),
    recipientId: 'recipient-1',
    ...override
  })
}
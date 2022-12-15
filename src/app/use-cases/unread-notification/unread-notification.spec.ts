import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository'
import { NotificationNotFound } from '../errors/notification-not-found'
import { makeNotification } from '@test/factories/notification-factory'
import { UnreadNotification } from './unread-notification'

describe('Cancel notification', () => {
  it('should be able to unread a notification', async () => {

    const notificationsRepository = new InMemoryNotificationsRepository()
    const unreadNotification = new UnreadNotification(notificationsRepository)

    const notification = makeNotification({
      readAt: new Date()
    })

    await notificationsRepository.create(notification)

    await unreadNotification.execute({
      notificationId: notification.id
    })

    expect(notificationsRepository.notifications[0].readAt).toBeNull
  })

  it('should not de able to unread a non existing notification', async () => {

    const notificationsRepository = new InMemoryNotificationsRepository()
    const unreadNotification = new UnreadNotification(notificationsRepository)

    expect(() => {
      return unreadNotification.execute({
        notificationId: 'testing'
      })
    }).rejects.toThrow(NotificationNotFound)
  })
})
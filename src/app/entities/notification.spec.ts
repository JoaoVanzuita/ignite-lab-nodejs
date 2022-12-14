import { Notification } from './notification'
import { Content } from './notification-content'

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('nova solicitação...'),
      category: 'social',
      recipientId: 'sample'
    })

    expect(notification).toBeTruthy()
  })
})

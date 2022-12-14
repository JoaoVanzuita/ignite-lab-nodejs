import { Content } from './notification-content'

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('conteúdo de teste')

    expect(content).toBeTruthy()
  })

  it('should not be able to create a notification content w less then 5 caracters', () => {

    expect(() => new  Content('abc')).toThrow()
  })

  it('should not be able to create a notification content with more then 240 caracters', () => {

    expect(() => new  Content('a'.repeat(241))).toThrow()
  })
})

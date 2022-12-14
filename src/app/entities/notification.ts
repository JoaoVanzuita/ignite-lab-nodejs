import { Replace } from 'src/helpers/Replace'
import { Content } from './notification-content'

interface INotificationProps {
  content: Content
  category: string
  createdAt: Date
  readAt?: Date | null
  recipientId: string
}

export class Notification {
  private props: INotificationProps

  constructor(props: Replace<INotificationProps, {createdAt?: Date}>) {
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date()
    }
  }

  public set content(content: Content) {
    this.props.content = content
  }
  public get content() {
    return this.props.content
  }
  public set category(category: string) {
    this.props.category = category
  }
  public get category() {
    return this.props.category
  }
  public get createdAt() {
    return this.props.createdAt
  }
  public set readAt(readAt: Date | null | undefined) {
    this.props.readAt = readAt
  }
  public get readAt(): Date | null | undefined {
    return this.props.readAt
  }
  public set recipientId(recipientId: string) {
    this.props.recipientId = recipientId
  }
  public get recipientId() {
    return this.props.recipientId
  }
}
export class Content {
  private readonly content: string

  constructor(content: string) {
    const isContentLengthValid = this.validateContentLength(content)

    if (!isContentLengthValid) {
      throw new Error('Content length invalid')
    }

    this.content = content
  }

  get value(): string {
    return this.content
  }

  private validateContentLength(content: string): boolean {
    return content.length <= 240 && content.length >= 5
  }
}
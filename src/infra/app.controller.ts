import { Body, Controller, Get, Post } from '@nestjs/common'
import { CreateNotificationBody } from './create-notification-body'
import { PrismaService } from './prisma.service'

@Controller('api')
export class AppController {
  constructor(private readonly prisma: PrismaService) { }

  @Get('notifications')
  list() {
    return this.prisma.notification.findMany()
  }

  @Post('notifications')
  async create(@Body() body: CreateNotificationBody) {
    const { content, category, recipientId } = body

    await this.prisma.notification.create({
      data: {
        content,
        category,
        recipientId: Number(recipientId)
      }
    })
  }
}

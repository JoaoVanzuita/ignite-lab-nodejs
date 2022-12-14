import { Module } from '@nestjs/common'
import { AppController } from 'src/infra/app.controller'
import { PrismaService } from 'src/infra/prisma.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [
    PrismaService
  ],
})
export class AppModule { }

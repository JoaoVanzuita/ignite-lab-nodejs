import { IsNotEmpty, IsNumber, Length } from 'class-validator'

export class CreateNotificationBody {

  @IsNotEmpty()
  @IsNumber()
    recipientId: number

  @IsNotEmpty()
    category: string

  @IsNotEmpty()
  @Length(5, 240)
    content: string
}
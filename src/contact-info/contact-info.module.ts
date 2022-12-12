import { Module } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { ContactInfoController } from './controllers/contact-info/contact-info.controller'
import { ContactInfoService } from './services/contact-info/contact-info.service'

@Module({
  providers: [ContactInfoService, PrismaService],
  controllers: [ContactInfoController],
})
export class ContactInfoModule {}

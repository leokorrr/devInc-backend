import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { SocialLinksController } from './controllers/social-links/social-links.controller'
import { SocialLinksService } from './services/social-links/social-links.service'

@Module({
  controllers: [SocialLinksController],
  providers: [SocialLinksService, PrismaService],
})
export class SocialLinksModule {}

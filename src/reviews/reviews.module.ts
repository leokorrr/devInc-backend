import { Module } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { ReviewsController } from './controllers/reviews/reviews.controller'
import { ReviewsService } from './services/reviews/reviews.service'

@Module({
  controllers: [ReviewsController],
  providers: [ReviewsService, PrismaService],
})
export class ReviewsModule {}

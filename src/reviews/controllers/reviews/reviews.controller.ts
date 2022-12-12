import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common'
import { CreateReviewDto } from '../../dto/CreateReviewDto'
import { UpdateReviewDto } from '../../dto/UpdateReviewDto'
import { ReviewsService } from '../../services/reviews/reviews.service'
import { Review as ReviewModel } from '@prisma/client'

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Get('')
  getReviews(): Promise<ReviewModel[]> {
    return this.reviewsService.getReviews()
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createReview(@Body() createReviewDto: CreateReviewDto): Promise<ReviewModel> {
    return this.reviewsService.createReview(createReviewDto)
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  updateReview(
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ): Promise<ReviewModel> {
    return this.reviewsService.updateReview({
      where: { ulid: id },
      data: updateReviewDto,
    })
  }

  @Delete(':id')
  deleteReview(@Param('id') id: string): Promise<ReviewModel> {
    return this.reviewsService.deleteReview({ ulid: id })
  }
}

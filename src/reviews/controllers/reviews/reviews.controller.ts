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
import { CreateReviewDto } from 'src/reviews/dto/CreateReviewDto'
import { UpdateReviewDto } from 'src/reviews/dto/UpdateReviewDto'
import { ReviewsService } from 'src/reviews/services/reviews/reviews.service'

@Controller('reviews')
export class ReviewsController {
  constructor(private reviewsService: ReviewsService) {}

  @Get('')
  getReviews() {
    return this.reviewsService.getReviews()
  }

  @Post('')
  @UsePipes(ValidationPipe)
  createReview(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.createReview(createReviewDto)
  }

  // TODO: check if Put right decorator
  @Put('')
  @UsePipes(ValidationPipe)
  updateReview(
    @Param('reviews_id') reviewId: string,
    @Body() updateSocialLinkDto: UpdateReviewDto,
  ) {
    return this.reviewsService.updateReview(reviewId, updateSocialLinkDto)
  }

  @Delete(':review_id')
  deleteReview(@Param('reviews_id') reviewId: string) {
    return this.reviewsService.deleteReview(reviewId)
  }
}

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

  @Put(':id')
  @UsePipes(ValidationPipe)
  updateReview(
    @Param('id') id: string,
    @Body() updateReviewDto: UpdateReviewDto,
  ) {
    return this.reviewsService.updateReview({
      where: { ulid: id },
      data: updateReviewDto,
    })
  }

  @Delete(':id')
  deleteReview(@Param('id') id: string) {
    return this.reviewsService.deleteReview({ ulid: id })
  }
}

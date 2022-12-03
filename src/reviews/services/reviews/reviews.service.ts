import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma.service'
import { CreateReviewDto } from 'src/reviews/dto/CreateReviewDto'
import { UpdateReviewDto } from 'src/reviews/dto/UpdateReviewDto'

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async getReviews() {
    console.log('getReviews')
  }

  async createReview(createReviewDto: CreateReviewDto) {
    console.log('createReview')
  }

  async updateReview(reviewId: string, updateReviewDto: UpdateReviewDto) {
    console.log('updateReview')
  }

  async deleteReview(reviewId: string) {
    console.log('deleteReview')
  }
}

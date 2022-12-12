import { Injectable } from '@nestjs/common'
import { Prisma, Review } from '@prisma/client'
import { PrismaService } from '../../../prisma.service'

@Injectable()
export class ReviewsService {
  constructor(private prisma: PrismaService) {}

  async getReviews(): Promise<Review[]> {
    return this.prisma.review.findMany()
  }

  async createReview(data: Prisma.ReviewCreateInput): Promise<Review> {
    return this.prisma.review.create({ data })
  }

  async updateReview(params: {
    where: Prisma.ReviewWhereUniqueInput
    data: Prisma.ReviewUpdateInput
  }) {
    const { data, where } = params
    return this.prisma.review.update({
      data,
      where,
    })
  }

  async deleteReview(where: Prisma.ReviewWhereUniqueInput): Promise<Review> {
    return this.prisma.review.delete({ where })
  }
}
